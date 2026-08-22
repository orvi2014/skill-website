# Skill Graphics website

Next.js site for [Skill Graphics](https://www.skillgraphics.com) — AI-powered image & video post-production.

## Local development

```bash
npm install
cp .env.local.example .env.local   # SMTP / site URL as needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production deploy

This app deploys over **SSH** to a VPS (PM2 on port 3001), not Vercel.

See **[DEPLOY.md](./DEPLOY.md)** for full setup.

Quick path for developers who already have SSH access:

```bash
cp deploy.env.example deploy.env   # set DEPLOY_HOST / user / path
npm run deploy
```

If the server IP changes, update `DEPLOY_HOST` in `deploy.env` and run `npm run deploy` again.
