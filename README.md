# DevZero Website

Standalone prototype for DevZero marketing pages, separate from the SEO presentation repo.

## Pages

- `/core-technologies/` — Core Technologies (Workload, Cluster & Network)

## Local preview

```bash
cd /Users/Lily/Documents/devzero-website
python3 -m http.server 8080
```

Open [http://localhost:8080/core-technologies/](http://localhost:8080/core-technologies/)

## Share with the team (GitHub Pages)

1. Create an empty repo on GitHub: [github.com/new](https://github.com/new) → name it `devzero-website`
2. Push from this folder:

```bash
cd /Users/Lily/Documents/devzero-website
git push -u origin main
```

3. In the repo on GitHub: **Settings → Pages → Build from branch → `main` / `/ (root)` → Save**
4. Share the live link (after a minute or two):

   `https://lily00marie.github.io/devzero-website/core-technologies/`
