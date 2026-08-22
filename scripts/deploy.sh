#!/usr/bin/env bash
# Skill Graphics — production deploy over SSH + rsync + PM2
#
# Usage:
#   1. cp deploy.env.example deploy.env
#   2. Edit deploy.env (host, user, path, port, SSH key)
#   3. ./scripts/deploy.sh
#      or: npm run deploy
#
# Override any value for a one-off deploy:
#   DEPLOY_HOST=203.76.149.101 ./scripts/deploy.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Load optional local config (never commit deploy.env — it can hold host details)
if [[ -f "$ROOT/deploy.env" ]]; then
  # shellcheck disable=SC1091
  set -a
  source "$ROOT/deploy.env"
  set +a
fi

DEPLOY_HOST="${DEPLOY_HOST:-}"
DEPLOY_USER="${DEPLOY_USER:-skill}"
DEPLOY_PATH="${DEPLOY_PATH:-~/skill-website}"
DEPLOY_PORT="${DEPLOY_PORT:-3001}"
DEPLOY_PM2_NAME="${DEPLOY_PM2_NAME:-skill-website}"
DEPLOY_SSH_KEY="${DEPLOY_SSH_KEY:-}"
DEPLOY_SSH_PORT="${DEPLOY_SSH_PORT:-22}"
DEPLOY_BUILD="${DEPLOY_BUILD:-1}"
DEPLOY_VERIFY="${DEPLOY_VERIFY:-1}"

die() {
  echo "error: $*" >&2
  exit 1
}

[[ -n "$DEPLOY_HOST" ]] || die "DEPLOY_HOST is required. Copy deploy.env.example → deploy.env and set it."

SSH_OPTS=(-o BatchMode=yes -o ConnectTimeout=20 -p "$DEPLOY_SSH_PORT")
if [[ -n "$DEPLOY_SSH_KEY" ]]; then
  SSH_OPTS+=(-i "$DEPLOY_SSH_KEY")
fi

REMOTE="${DEPLOY_USER}@${DEPLOY_HOST}"
RSYNC_SSH="ssh ${SSH_OPTS[*]}"

echo "==> Deploying to ${REMOTE}:${DEPLOY_PATH}"
echo "    app port: ${DEPLOY_PORT}  pm2: ${DEPLOY_PM2_NAME}"

# Expand leading ~/ on the remote via the remote shell
rsync -az --delete \
  --exclude node_modules \
  --exclude .next \
  --exclude .git \
  --exclude .env.local \
  --exclude '.env*.local' \
  --exclude deploy.env \
  --exclude .DS_Store \
  --exclude .claude \
  --exclude .tmp-assets \
  --exclude .cursor \
  -e "$RSYNC_SSH" \
  "$ROOT/" \
  "${REMOTE}:${DEPLOY_PATH}/"

echo "==> Synced. Building and restarting on server…"

# shellcheck disable=SC2029
ssh "${SSH_OPTS[@]}" "$REMOTE" bash -s <<EOF
set -euo pipefail
export NVM_DIR="\$HOME/.nvm"
if [[ -s "\$NVM_DIR/nvm.sh" ]]; then
  # shellcheck disable=SC1090
  . "\$NVM_DIR/nvm.sh"
fi

# Expand ~ on the remote (DEPLOY_PATH may be ~/skill-website)
cd \$(eval echo ${DEPLOY_PATH})

if [[ "${DEPLOY_BUILD}" == "1" ]]; then
  npm install
  npm run build
fi

if command -v pm2 >/dev/null 2>&1 && pm2 describe "${DEPLOY_PM2_NAME}" >/dev/null 2>&1; then
  pm2 restart "${DEPLOY_PM2_NAME}" --update-env
  sleep 3
else
  echo "PM2 process '${DEPLOY_PM2_NAME}' not found — starting with: npm run start -- -p ${DEPLOY_PORT}"
  # Stop anything already bound to the port (best-effort)
  if command -v fuser >/dev/null 2>&1; then
    fuser -k ${DEPLOY_PORT}/tcp 2>/dev/null || true
  fi
  nohup npm run start -- -p ${DEPLOY_PORT} > /tmp/${DEPLOY_PM2_NAME}.log 2>&1 &
  disown || true
  sleep 4
  echo "Tip: register with PM2 once:"
  echo "  pm2 start npm --name ${DEPLOY_PM2_NAME} -- start -- -p ${DEPLOY_PORT}"
  echo "  pm2 save"
fi

if [[ "${DEPLOY_VERIFY}" == "1" ]]; then
  curl -s -o /dev/null -w "home:%{http_code}\\n" "http://127.0.0.1:${DEPLOY_PORT}/" || true
  curl -s -o /dev/null -w "photo:%{http_code}\\n" "http://127.0.0.1:${DEPLOY_PORT}/photo" || true
  curl -s -o /dev/null -w "video:%{http_code}\\n" "http://127.0.0.1:${DEPLOY_PORT}/video" || true
fi

echo "DEPLOY_DONE"
EOF

echo "==> Deploy finished."
