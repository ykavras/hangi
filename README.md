# Hangi? / or — legal and support site

Static, bilingual site for GitHub Pages. The folder layout mirrors the Parallax legal site while using Hangi’s current app icon, Space Grotesk / JetBrains Mono fonts, and the current dark + lime app palette. English brand: **or**. Turkish brand: **Hangi?**.

```text
index.html                  English home
privacy/ terms/ support/     English pages
tr/index.html               Turkish home
tr/privacy/ terms/ support/ Turkish pages
assets/style.css            responsive theme and typography
assets/site.js              optional language preference helper
assets/favicon.png          current app icon from hangi-mobile/assets/icon.png
assets/icon.svg              current vector app icon from hangi-mobile/assets/icon.svg
assets/fonts/               locally hosted app fonts and OFL licenses
.nojekyll                   disable GitHub Pages Jekyll processing
```

There is no build step, analytics, cookie banner, external font request, or third-party script. Upload the contents of `hangi-legal/` to the root of the GitHub Pages repository, or select the `hangi-legal` folder as the Pages publishing source if supported. All internal links are relative and work at a GitHub Pages project path.

## Store link

The app’s App Store listing URL is not in the codebase yet. The current buttons use the live App Store search URL `https://apps.apple.com/tr/search?term=or%20hangi` and are labeled as a search. Once the listing is published, replace the `STORE` value in the generation source or update the `href` on the home page buttons with the exact listing URL. Do not use another app’s listing.

## Publisher details

- Albert Medya Yazılım ve Dijital Yayıncılık Hizmetleri A.Ş.
- Esentepe Mah. Keskin Kalem Sk. Arya Plaza Blok-17, İç Kapı 2, Şişli, İstanbul, Türkiye
- App support: `info@albertsoftware.com`
- Privacy and publisher contact: `info@albertsoftware.com`

Review data processors, production hosting/storage location, retention periods, transfer mechanisms and terms with the publisher before public launch; production provider identity is not specified in the app repository.
