# SCSS Practice - 4 sites

## Folder map
```
scss-practice/
├── index.html                  <- start here (the hub)
├── README.md
├── shared/
│   ├── css/                    <- plain CSS used by every page (hub + bottom nav bar)
│   └── scss/                   <- shared partials (_variables, _mixins) used in 04
├── 01-coffee-variables/        <- index.html, styles.scss, styles.css
├── 02-portfolio-nesting/
├── 03-blog-mixins/             <- also has its own _mixins.scss
└── 04-dashboard-shared/        <- imports from ../shared/scss/
```

## How to work
1. Open the whole `scss-practice` folder in VS Code (File -> Open Folder).
2. Click "Watch Sass" in the bottom status bar (Live Sass Compiler).
3. Open `index.html` in the browser (Live Server or double click).
4. In each site, open `styles.scss` and follow the STEP comments. Replace every `___` and `TODO`.
5. SAVE the .scss file (Cmd+S) - `styles.css` is generated automatically.
6. Use the bottom bar on each page to go Prev / Hub / Next.

## Paths to understand (this is the navigation practice)
- From a site page back to the hub:  `../index.html`
- From a site page to shared CSS:    `../shared/css/exercise-nav.css`
- From a site SCSS to shared SCSS:   `@use "../shared/scss/variables"`
- `..` = go up one folder, `/` = go into a folder.

## Challenge at the end
Create a 5th folder `05-your-own-site` with the same structure, add it to the hub as a 5th card, and add Prev/Next links to it from 04.
