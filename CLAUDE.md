# dusantatransky.sk

Slovenská verzia osobného webu Dušana Tatranského (Marketing. Kreativita. AI.).
Anglická verzia je dusantatransky.com (repozitár Busho-san/dusantatransky-com).

## Kde čo je

- Texty homepage: `src/components/layout.js` (sekcie Hero, Workshopy, O mne, Čomu verím, Dušan naživo, Bushido)
- Pás dôkazov a kontakt/pätička: `src/components/blocks.js`
- Podstránka /workshopy: `src/components/layoutWorkshops.js`
- Menu: `src/components/burger.js`
- Všetky externé odkazy: `src/data/links.js`
- Najbližšie akcie: `src/data/upcoming.json` (položky s dátumom v minulosti sa nezobrazia)
- SEO, canonical, hreflang: `src/components/seo.js`, JSON-LD v `src/pages/index.js`
- Presmerovania starých adries: `static/_redirects`; `static/robots.txt`, `static/sitemap.xml`

## Pravidlá textov

- Spisovná slovenčina s diakritikou, vykanie (výnimka: Bushido je kódex v tykaní).
- Žiadne em dashe (—).
- Titul vždy „Creative & Strategy Director“.
- Žiadne ceny workshopov.
- Typografia: za jednopísmenovými slovami (a, i, k, o, s, u, v, z) a v dátumoch/rokoch
  nedeliteľná medzera (U+00A0), aby sa nezalamovali na konci riadku.
- Odkazy na Promiseo na .sk webe vedú na https://www.promiseo.sk (na .com na promiseo.com).
- Pri zmene textu ho zjednoť všade, kde sa na webe opakuje (homepage, /workshopy, JSON-LD, SEO).

## Technika

- Gatsby 2, Node 14 (`.node-version`). Neupgradovať framework bez súhlasu.
- `yarn install` potrebuje `--ignore-engines` (je v `.yarnrc`).
- Hosting: Cloudflare Worker `dusantatransky-sk` (statické súbory), doména www.dusantatransky.sk.
  DNS je v Cloudflare, doména registrovaná na Websupporte, e-mail @dusantatransky.sk na Websupporte
  (wildcard a mailin záznamy musia ostať „DNS only“).

## Nasadenie

1. Zmeny commitni do `master` a pushni (`git push origin master`).
2. Spusti `bash scripts/deploy.sh`. Zbuilduje web na Node 14 a hotové súbory nahrá do vetvy
   `cloudflare`, ktorú Cloudflare do minúty zverejní.
3. Over na https://www.dusantatransky.sk.

Vetvu `cloudflare` needituj ručne.
