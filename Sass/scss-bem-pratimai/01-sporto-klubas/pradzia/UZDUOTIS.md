# 1 užduotis. „Pulsas“ – sporto klubo svetainė

Sukurkite 3 puslapių svetainę: **index.html**, **tvarkarastis.html**, **registracija.html**.
HTML elementus ir visus stilius rašote patys. Tikslas – `tikslas-index.png`, `tikslas-tvarkarastis.png`, `tikslas-registracija.png`.

Ką praktikuojame: **projekto struktūrą**, **Sass partials + @use**, **BEM klasių vardus**, **lentelę**, **formą**, **hover efektus** ir **animaciją**.

---

## 0. Pasiruošimas

1. VS Code: **File → Open Folder → `pradzia/`** (būtent šį aplanką, kad veiktų `.vscode/settings.json`).
2. Sukurkite `scss/` struktūrą (žr. 2 punktą) ir paspauskite **Watch Sass** apatinėje juostoje.
3. `css/style.css` atsiras pats (savePath: `/css`). Jo **neredaguokite**.

Jau paruošta: tušti HTML puslapiai su komentarais, `img/` paveikslėliai, `.vscode/settings.json`.

## 1. `<head>` – failų jungimo tvarka

```html
<!-- 1. CSS reset (nuima naršyklės numatytuosius stilius) – PIRMAS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.css">
<!-- 2. Šriftai iš fonts.google.com -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap">
<!-- 3. Mūsų CSS – PASKUTINIS, kad perrašytų reset -->
<link rel="stylesheet" href="css/style.css">
```

Po reset: `h1` tokio pat dydžio kaip tekstas, sąrašai be taškų, nėra `margin`. **Viską stilizuojate patys.**
Reset nenustato `box-sizing` ir neperduoda šrifto formų elementams – tai padarykite `base/_base.scss`:
`*, *::before, *::after { box-sizing: border-box; }` ir `button, input, select, textarea { font: inherit; }`.

## 2. Privaloma failų struktūra

```
pradzia/
├─ index.html
├─ tvarkarastis.html
├─ registracija.html
├─ .vscode/settings.json
├─ img/                     (paruošta)
├─ css/style.css            (sugeneruoja Live Sass Compiler)
└─ scss/
   ├─ abstracts/
   │  ├─ _variables.scss    spalvos, šriftai, šešėliai, $radius
   │  └─ _mixins.scss       bent 2 mixin'ai
   ├─ base/
   │  ├─ _base.scss         body, h1–h3, a, img, formų šriftas
   │  └─ _animations.scss   visi @keyframes
   ├─ layout/
   │  ├─ _header.scss  _hero.scss  _section.scss  _signup.scss  _footer.scss
   ├─ components/
   │  ├─ _btn.scss  _badge.scss  _card.scss  _tag.scss
   │  ├─ _schedule.scss  _cta.scss  _benefits.scss  _form.scss
   └─ style.scss            tik @use eilutės: base → layout → components
```

Kiekvienas partial, kuriam reikia kintamųjų: `@use '../abstracts/variables' as v;` → `color: v.$primary;`

## 3. Dizainas

| Paskirtis | Reikšmė |
|---|---|
| Pagrindinė (mygtukai, akcentai) | `#FF5A36`, hover `#E2401D` |
| Tamsi (hero, footer, lentelės antraštė) | `#14172B` |
| Puslapio fonas | `#F5F6FA` |
| Kortelės / forma | `#FFFFFF` |
| Tekstas / antrinis tekstas | `#1F2340` / `#6B7085` |
| Rėmeliai | `#E3E5EE` |
| Lygiai: lengva / vidutinė / sunki | `#16A34A` / `#D97706` / `#DC2626` |
| Antraštės | **Montserrat** 700–800 |
| Tekstas | **Inter** 400–600 |
| Šešėlis | `0 4px 16px rgba(20, 23, 43, 0.08)`, hover `0 14px 32px rgba(20, 23, 43, 0.16)` |

Tarpus, `border-radius` ir dydžius parinkite patys, bet nuosekliai (laikykite kintamuosiuose).

## 4. BEM blokai

| Blokas | Elementai ir modifikatoriai |
|---|---|
| `header` | `__logo`, `__logo-img` |
| `nav` | `__link`, `__link--active` |
| `hero` | `__content`, `__title`, `__text`, `__actions` |
| `btn` | `--primary`, `--outline`, `--full` |
| `badge` | `--pulse` |
| `section` | `__title`, `__text` (naudojamas visuose puslapiuose) |
| `cards` + `card` | `__icon`, `__title`, `__text`, `__meta`, `__badge`, `--featured` |
| `schedule` | `__table`, `__head`, `__th`, `__row`, `__cell`, `__cell--time` |
| `tag` | `--easy`, `--medium`, `--hard` |
| `cta` | `__text` |
| `signup` | `__info` (dviejų stulpelių maketas) |
| `benefits` | `__item` (varnelė – `::before`) |
| `form` | `__row`, `__group`, `__label`, `__input`, `__input--textarea`, `__options`, `__option` |
| `footer` | `__text`, `__nav`, `__link` |

## 5. Turinys

**index.html**
- Badge: „Nauja: rytinės treniruotės 6:30“
- H1: „Treniruokis su pulsu“
- Tekstas: „Grupinės treniruotės, patyrę treneriai ir aiškus tvarkaraštis – viskas vienoje vietoje.“
- Mygtukai: „Registruotis“ → registracija.html, „Tvarkaraštis“ → tvarkarastis.html
- H2: „Treniruotės“, tekstas: „Pasirink pagal savo tikslą ir pasirengimo lygį.“
- Kortelės (ikona – `img/*.svg`):
  - Joga – „Lankstumas, laikysena ir ramus kvėpavimas.“ – 60 min · Lengva
  - Jėgos treniruotė – „Svoriai, taisyklinga technika ir stiprus kūnas.“ – 50 min · Vidutinė
  - Kardio intervalai (**--featured**, žyma „Populiaru“) – „Trumpi intensyvūs pratimai ir aktyvus poilsis.“ – 45 min · Sunki
  - Spiningas – „Ritmas, muzika ir ištvermė ant dviračio.“ – 45 min · Vidutinė

**tvarkarastis.html**
- H1: „Savaitės tvarkaraštis“, tekstas: „Vietų skaičius ribotas – registruokis iš anksto.“
- Lentelė: Diena | Laikas | Treniruotė | Treneris | Lygis | Vietos

| Diena | Laikas | Treniruotė | Treneris | Lygis | Vietos |
|---|---|---|---|---|---|
| Pirmadienis | 06:30 | Joga | Ieva Petraitė | Lengva | 8 / 15 |
| Pirmadienis | 18:00 | Kardio intervalai | Tomas Kazlauskas | Sunki | 12 / 20 |
| Antradienis | 19:00 | Jėgos treniruotė | Marius Jonaitis | Vidutinė | 5 / 12 |
| Trečiadienis | 07:00 | Spiningas | Greta Vaitkutė | Vidutinė | 15 / 18 |
| Ketvirtadienis | 18:30 | Joga | Ieva Petraitė | Lengva | 10 / 15 |
| Penktadienis | 17:30 | Kardio intervalai | Tomas Kazlauskas | Sunki | 20 / 20 |
| Šeštadienis | 10:00 | Jėgos treniruotė | Marius Jonaitis | Vidutinė | 3 / 12 |

- CTA: „Radai tinkamą laiką?“ + mygtukas „Registruotis“

**registracija.html**
- H1: „Registracija į treniruotę“, tekstas: „Užpildyk formą ir mes patvirtinsime vietą el. paštu per 24 valandas.“
- Privalumai: „Pirmoji treniruotė – nemokamai“, „Narystę galima sustabdyti bet kada“, „Rankšluosčiai ir spintelės įskaičiuoti“
- Forma: Vardas ir pavardė (text, required), El. paštas (email, required), Telefonas (tel), Treniruotė (select: 4 treniruotės), Narystė (radio: Vienkartinė – 8 €, Mėnesio – 39 €, Metinė – 349 €), Komentaras (textarea), „Sutinku su klubo taisyklėmis“ (checkbox), mygtukas „Registruotis“

## 6. Efektai ir animacija (privaloma)

| Kur | Kas vyksta | Ką naudoti |
|---|---|---|
| `.nav__link`, `.footer__link` | spalva ir fonas keičiasi sklandžiai | `:hover` + `transition` |
| `.btn` | pakyla 2px, `--primary` gauna spalvotą šešėlį | `transform: translateY()`, `box-shadow` |
| `.card` | pakyla 6px, šešėlis didėja | mixin `hover-lift` su `&:hover` viduje |
| `.card__icon` | užvedus ant **kortelės** – padidėja ir pasisuka | `&:hover &__icon { transform: scale() rotate(); }` |
| `.schedule__row` | lyginės eilutės kitos spalvos, hover – paryškinama | `:nth-child(even)`, `:hover` |
| `.form__input` | fokusuojant – oranžinis rėmelis ir „žiedas“ | `:focus`, `box-shadow: 0 0 0 4px rgba(...)` |
| `.hero__title`, `__text`, `__actions` | įkėlus puslapį iškyla iš apačios **vienas po kito** | `@keyframes slide-up` + `animation-delay` |
| `.badge--pulse` | be sustojimo pulsuoja šešėlio žiedas | `@keyframes pulse` + `infinite` |

### Užuominos: kur rasti informacijos

- Perėjimai (transition): https://www.w3schools.com/css/css3_transitions.asp
- Animacijos ir @keyframes: https://www.w3schools.com/css/css3_animations.asp
- transform (translate, scale, rotate): https://www.w3schools.com/css/css3_2dtransforms.asp
- box-shadow: https://www.w3schools.com/css/css3_shadows_box.asp
- Lentelių stiliai: https://www.w3schools.com/css/css_table.asp
- Formų stiliai: https://www.w3schools.com/css/css_form.asp
- `animation` savybės (MDN): https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- `accent-color` (radio/checkbox spalva): https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
- Sass mixin'ai: https://sass-lang.com/documentation/at-rules/mixin/
- Paruoštų animacijų idėjos: https://animista.net

Pavyzdys (ne visas sprendimas):

```scss
// base/_animations.scss
@keyframes slide-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

// layout/_hero.scss
.hero__text {
  animation: slide-up 0.8s ease-out 0.2s both; // pavadinimas trukmė kreivė vėlavimas fill-mode
}
```

> `both` reiškia: kol laukiama vėlavimo, elementas jau yra pradinėje būsenoje (nematomas), o pasibaigus lieka galinėje.

## 7. Patikra prieš žiūrint sprendimą

- [ ] HTML jungia `css/style.css`, o reset jungiamas **prieš** jį
- [ ] `style.scss` turi tik `@use`, `abstracts/` jame nejungiami
- [ ] Vienas BEM blokas = vienas partial (`.card` → `components/_card.scss`)
- [ ] Nėra `.card__body__title` tipo vardų ir selektorių kaip `.card h3`
- [ ] Modifikatorius visada kartu su baze: `class="btn btn--primary"`
- [ ] Spalvos ir šriftai – tik per kintamuosius
- [ ] Veikia visos nuorodos tarp 3 puslapių, aktyvi nuoroda paryškinta
- [ ] Visi 8 efektai iš lentelės veikia
