# Mohammed Uqla — Portfolio

Källkoden till Mohammed Uqlas professionella utvecklarportfolio.

Webbplatsen är byggd med vanlig HTML, CSS och JavaScript. Den kräver ingen installation, inget ramverk och ingen byggprocess.

## Struktur

```text
.
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── aquasvea-dashboard.png
    └── tiktokii-map.png
```

- `index.html` innehåller all text, projekt, erfarenhet, utbildning och länkar.
- `styles.css` styr färger, typografi, layout och mobilanpassning.
- `script.js` styr sidans enkla animationer och aktuellt år i sidfoten.
- `assets/` innehåller projektbilderna.

## Redigera direkt

Öppna mappen i Visual Studio Code och ändra filerna. För mindre textändringar kan du även öppna en fil direkt på GitHub och klicka på pennikonen.

Om du ersätter en projektbild kan du behålla samma filnamn. Då behöver du inte ändra HTML-koden. Om filnamnet ändras uppdaterar du bildens `src` i `index.html`.

## Förhandsgranska lokalt

Dubbelklicka på `index.html`, eller starta en enkel lokal server från projektmappen:

```bash
py -m http.server 8000
```

Öppna sedan `http://localhost:8000` i webbläsaren.

## Lägg upp projektet på GitHub

Skapa först ett tomt repository med namnet `portfolio` på GitHub. Kör sedan följande kommandon i projektmappen:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/Mouqla/portfolio.git
git push -u origin main
```

## Publicera med GitHub Pages

1. Öppna repositoryts **Settings** på GitHub.
2. Välj **Pages**.
3. Välj **Deploy from a branch**.
4. Välj branchen `main` och mappen `/ (root)`.
5. Spara.

Efter publiceringen uppdateras webbplatsen när du gör nya commits till `main`.

## Egen domän

En egen domän kan kopplas under **Settings → Pages → Custom domain**. Domänen påverkar inte hur du redigerar webbplatsen. Du fortsätter göra ändringar i källkoden och publicerar dem med `git push`.

## Kontakt

- [LinkedIn](https://www.linkedin.com/in/mohammed-uqla-73a7b0171/)
- [GitHub](https://github.com/Mouqla)
- [E-post](mailto:m.uqla6370@gmail.com)
