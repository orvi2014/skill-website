# Production deploy (SSH)

This site is **not** on Vercel. It runs on a Linux VPS with Node (nvm), Next.js, and PM2.

## One-time setup (each developer)

1. Clone the repo and install:

```bash
git clone https://github.com/orvi2014/skill-website.git
cd skill-website
npm install
cp .env.local.example .env.local   # fill SMTP etc.
```

2. Get SSH access to the production user (currently `skill`). Your public key must be in `~/.ssh/authorized_keys` on the server.

3. Create local deploy config:

```bash
cp deploy.env.example deploy.env
```

Edit `deploy.env`:

| Variable | Meaning | Example |
|---|---|---|
| `DEPLOY_HOST` | Server IP or hostname | `203.76.149.101` |
| `DEPLOY_USER` | SSH user | `skill` |
| `DEPLOY_PATH` | App directory on server | `~/skill-website` |
| `DEPLOY_PORT` | Next.js port | `3001` |
| `DEPLOY_PM2_NAME` | PM2 process name | `skill-website` |
| `DEPLOY_SSH_KEY` | Optional private key path | `~/.ssh/id_ed25519` |

If the **IP changes**, only update `DEPLOY_HOST` in `deploy.env` — nothing else in the script.

4. On the server (first time only), install Node via nvm, clone/sync the app, then:

```bash
cd ~/skill-website
npm install
npm run build
pm2 start npm --name skill-website -- start -- -p 3001
pm2 save
pm2 startup   # follow the printed command
```

Put production secrets in `~/skill-website/.env.local` on the server (never commit them). The deploy script **does not** overwrite `.env.local`.

## Deploy

From your laptop:

```bash
npm run deploy
# or
./scripts/deploy.sh
```

What it does:

1. `rsync` the repo to the server (excludes `node_modules`, `.next`, `.git`, `.env.local`, `deploy.env`)
2. Remote `npm install` + `npm run build`
3. `pm2 restart skill-website --update-env`
4. Curl `/`, `/photo`, `/video` on localhost

One-off host override without editing the file:

```bash
DEPLOY_HOST=NEW.IP.ADDRESS ./scripts/deploy.sh
```

## Nginx / TLS tip

Point your domain at the VPS and reverse-proxy to `127.0.0.1:3001`. Canonical URL is controlled by `NEXT_PUBLIC_SITE_URL` in the server `.env.local` (see `src/lib/site.ts`).
