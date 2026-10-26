# Deploy Guide — Ruang Obat

## Netlify (Recommended)
1. Open https://app.netlify.com/drop
2. Drag folder `C:\Users\user\hermes-first-task\` to browser
3. Wait 30 seconds
4. Live URL provided

## Vercel
```bash
cd C:\Users\user\hermes-first-task
vercel --prod
```

## GitHub Pages
1. Push to GitHub repo
2. Settings → Pages → Enable
3. URL: https://[username].github.io/[repo]

## Custom Domain
- Buy domain: ruangobat.id (~Rp150rb/year)
- Point to Netlify/Vercel
- SSL: Free (Let's Encrypt)
