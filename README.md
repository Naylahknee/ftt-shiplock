# ShipLock — Front Door

A landing page for the ShipLock accountability skill. Explains what ShipLock does, previews the six-question intake, and links buyers into the skill.

Built by Virtually NayLah / Finish That Thing.

## Before you deploy

Open `src/App.jsx` and set `SKILL_URL` (top of file) to wherever the ShipLock skill install or onboarding lives. It defaults to https://claude.ai.

## Run locally

```
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel: New Project, import the repo.
3. Vercel auto-detects Vite. Build `npm run build`, output `dist`. No config.
4. Deploy. Set the ftt-shiplock domain under Settings, Domains.
