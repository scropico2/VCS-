# 2 užduotis. „Kodas 2027“ – IT konferencijos svetainė

Sukurkite 3 puslapių svetainę tamsiu stiliumi: **index.html**, **programa.html**, **bilietai.html**.
Šį kartą gaunate tik tuščius HTML failus ir paveikslėlius: **struktūrą, BEM elementų vardus ir partial failus sugalvojate patys.**
Tikslas – `tikslas-index.png`, `tikslas-programa.png`, `tikslas-bilietai.png` (1280px) ir `tikslas-telefonas.png` (390px).

Nauja, palyginti su 1 užduotimi: **Sass map + @each**, **@for**, **mixin su parametrais ir @content**, **@function / sass:color**, media užklausos per mixin, pseudo-elementų animacijos, savo stiliaus radio mygtukai.

---

## 0. Pasiruošimas

1. **File → Open Folder → `pradzia/`**.
2. Patys sukurkite `.vscode/settings.json`, kad CSS atsirastų `css/` aplanke (žr. Sass paskaitą, `savePath`).
3. Sukurkite `scss/` struktūrą, **Watch Sass**.
4. `<head>` tvarka: reset iš CDN → Google Fonts → `css/style.css`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap">
<link rel="stylesheet" href="css/style.css">
```

## 1. Struktūra (minimalūs reikalavimai)

```
scss/
├─ abstracts/   _variables.scss (+ $tracks map, breakpoint'ai), _mixins.scss (mixin'ai + @function)
├─ base/        _base.scss, _animations.scss
├─ layout/      header, hero, section, footer
├─ components/  po vieną failą kiekvienam blokui
└─ style.scss   tik @use
```

Ar `.stats` – layout ar komponentas? Ar `.speakers` (kortelių eilė) turi savo failą? Nuspręskite ir mokėkite paaiškinti.

## 2. Dizainas

| Paskirtis | Reikšmė |
|---|---|
| Fonas | `#0B1020` |
| Paviršius (kortelės, lentelė, forma) | `#141B34`, šviesesnis `#1D2547` |
| Rėmeliai | `#2A3360` |
| Tekstas / antrinis | `#E6E9F5` / `#8B93B0` |
| Pagrindinė (violetinė) | `#7C6CFF` |
| Akcentas (turkio) | `#00D1B2` |
| Sekcijos: frontend / design / backend | `#00D1B2` / `#FF6B9A` / `#FFB020` |
| Antraštės | **Space Grotesk** 700 |
| Tekstas | **Inter** 400–600 |
| Šešėlis | `0 10px 30px rgba(0, 0, 0, 0.35)` |
| Švytėjimas (hover) | `0 0 0 1px rgba(#7C6CFF, .6), 0 16px 40px rgba(#7C6CFF, .35)` |
| Lūžio taškas | `768px` (mobile first) |

## 3. Blokai (elementų vardus kuriate patys)

| Puslapis | Blokai |
|---|---|
| Visi | `header`, `logo`, `nav` (aktyvi nuoroda – modifikatorius), `btn` (primary, ghost, small), `footer` |
| index.html | `hero`, `live` (žyma su pulsuojančiu tašku), `stats` (4 skaičiai), `section`, `speaker` ×4, `tag` |
| programa.html | `legend`, `agenda` (lentelė, pertraukos eilutė – modifikatorius), `tag` |
| bilietai.html | `ticket` ×3 (vidurinis – modifikatorius *featured*), `form`, `sizes` (S M L XL) |

## 4. Turinys

**Bendra:** logotipas `img/logo.svg` + „kodas**2027**“ (2027 – akcento spalva). Meniu: Pradžia, Programa, Bilietai + mygtukas „Pirkti bilietą“ → bilietai.html.
Footer: logotipas, „Frontend konferencija · 2027 m. kovo 18–19 d. · Vilnius“, tos pačios 3 nuorodos.

**index.html**
- Žyma „Registracija atvira“
- H1: „Frontend konferencija **Vilniuje**“ (žodis „Vilniuje“ – gradientinis tekstas)
- „Dvi dienos, trys sekcijos ir 20 pranešimų apie HTML, CSS ir JavaScript.“
- „2027 m. kovo 18–19 d. · LITEXPO, Vilnius“
- Mygtukai: „Pirkti bilietą →“, „Žiūrėti programą“
- Statistika: 20 pranešimų · 3 sekcijos · 600+ dalyvių · 2 dienos
- H2 „Pranešėjai“, „Praktikai iš Lietuvos ir užsienio produktų komandų.“

| Nuotrauka | Vardas | Pareigos | Sekcija |
|---|---|---|---|
| pranesejas-1.svg | Lukas Mažeika | CSS architektas, „Pikselis“ | Frontend |
| pranesejas-2.svg | Eglė Stankevičiūtė | UX dizainerė, „Banga Labs“ | Dizainas |
| pranesejas-3.svg | Rūta Kairytė | JavaScript programuotoja, „Kodo kalvė“ | Frontend |
| pranesejas-4.svg | Andrius Vasiliauskas | API inžinierius, „Debesis“ | Backend |

**programa.html** – H1 „Programa“, „1 diena · 2027 m. kovo 18 d. Pranešimai vyksta trijose salėse vienu metu.“, legenda (3 žymos), lentelė: Laikas | Pranešimas (pavadinimas + pranešėjas) | Sekcija | Salė

| Laikas | Pranešimas | Pranešėjas | Sekcija | Salė |
|---|---|---|---|---|
| 09:00 | *Registracija ir kava* (pertrauka, `colspan="3"`) | | | |
| 10:00 | Šiuolaikinis CSS be bibliotekų | Lukas Mažeika | Frontend | A salė |
| 11:00 | Dizaino sistema nuo nulio | Eglė Stankevičiūtė | Dizainas | B salė |
| 12:00 | REST ar GraphQL: ką pasirinkti? | Andrius Vasiliauskas | Backend | C salė |
| 13:00 | *Pietų pertrauka* | | | |
| 14:00 | JavaScript animacijos be lėtėjimo | Rūta Kairytė | Frontend | A salė |
| 15:00 | Prieinamumas (accessibility) praktiškai | Eglė Stankevičiūtė | Dizainas | B salė |
| 16:00 | Sass projekto architektūra | Lukas Mažeika | Frontend | A salė |

**bilietai.html** – H1 „Bilietai“, „Kaina galioja iki vasario 1 d. Visi bilietai – abiem dienoms.“
- Studento 29 € – ✓ Visi pranešimai, ✓ Kava ir pietūs, ✕ Seminarai (perbraukta)
- Standartinis 89 € (**Populiariausias**) – ✓ Visi pranešimai, ✓ Kava ir pietūs, ✓ 1 seminaras
- VIP 179 € – ✓ Visi pranešimai, ✓ Vakarienė su pranešėjais, ✓ Visi seminarai
- Forma „Registracija“: Vardas ir pavardė, El. paštas (abu required), Bilietas (select), Marškinėlių dydis (radio S/M/L/XL), Klausimas pranešėjams (textarea), „Sutinku gauti naujienas el. paštu“ (checkbox), mygtukas „Patvirtinti registraciją →“

## 5. Privalomi Sass įrankiai

| Įrankis | Kur panaudoti |
|---|---|
| Map + `@each` | `$tracks: (frontend: #00D1B2, design: #FF6B9A, backend: #FFB020);` → sugeneruoti `.tag--frontend`, `.tag--design`, `.tag--backend` |
| `@for` | `.speaker` kortelėms skirtingas `animation-delay` per `:nth-child(#{$i})` |
| Mixin su `@content` | `@mixin respond($min) { @media (min-width: $min) { @content; } }` – visos media užklausos tik per jį |
| Mixin su parametrais | pvz. `panel($padding)`, `focus-ring($color)`, `tinted($color)` |
| `@function` arba `sass:color` | šviesesnė mygtuko spalva hover būsenai: `color.adjust($primary, $lightness: 6%)` |
| Interpoliacija `#{}` | klasės vardui `&--#{$name}` ir selektoriui `:nth-child(#{$i})` |

## 6. Efektai ir animacijos (privaloma)

| Kur | Kas vyksta | Ką naudoti |
|---|---|---|
| `.hero` fonas | gradientas lėtai „plaukia“ | `background-size: 300% 300%` + `@keyframes` keičiant `background-position` |
| `.hero::before / ::after` | du susilieję spalvoti apskritimai plaukioja | `filter: blur()`, `@keyframes float`, `animation-delay` su minusu |
| `.live` | taškas ir nuo jo sklindantis žiedas | `::after` + `@keyframes` su `scale()` ir `opacity` |
| `.nav__link` | pabraukimas išauga iš centro | `::after` + `transform: scaleX(0 → 1)` |
| `.logo` | hover – ikona apsisuka 360° | `transform: rotate()` + `transition` |
| `.btn` | rodyklė „→“ pasislenka dešinėn | `&:hover &__arrow { transform: translateX() }` |
| `.speaker` | atsiranda iš eilės; hover – pakyla, švyti, nuotrauka priartėja | `@for`, `overflow: hidden` + `scale()` |
| `.ticket` | hover – pakyla ir švyti | tas pats mixin kaip `.speaker` |
| `.agenda` eilutė | hover – fonas ir kairysis akcento brūkšnys | `box-shadow: inset 4px 0 0 …` |
| `.form` laukeliai | fokusas – žiedas; neteisinga reikšmė – raudonas | `:focus`, `:not(:placeholder-shown):invalid` |
| `.sizes` | radio paslėptas, pažymėtas dydis – violetinis | `input:checked + span` |

### Užuominos: kur rasti informacijos

- CSS animacijos: https://www.w3schools.com/css/css3_animations.asp
- Perėjimai: https://www.w3schools.com/css/css3_transitions.asp
- Gradientai: https://www.w3schools.com/css/css3_gradients.asp
- Keli fonai viename elemente: https://www.w3schools.com/css/css3_backgrounds.asp
- `::before` / `::after`: https://www.w3schools.com/css/css_pseudo_elements.asp
- Gretimo elemento selektorius `+`: https://www.w3schools.com/css/css_combinators.asp
- Gradientinis tekstas (`background-clip: text`): https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
- `:invalid` ir `:placeholder-shown`: https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid
- Lentelė su apvaliais kampais (`border-collapse: separate`): https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
- Sass `@each`: https://sass-lang.com/documentation/at-rules/control/each/
- Sass `@for`: https://sass-lang.com/documentation/at-rules/control/for/
- Sass maps: https://sass-lang.com/documentation/values/maps/
- Sass `@content`: https://sass-lang.com/documentation/at-rules/mixin/#content-blocks
- Sass `@function`: https://sass-lang.com/documentation/at-rules/function/
- `sass:color` modulis: https://sass-lang.com/documentation/modules/color/
- Animacijų idėjos: https://animista.net

Pavyzdys (ne visas sprendimas):

```scss
@use 'sass:color';

$tracks: (frontend: #00D1B2, design: #FF6B9A, backend: #FFB020);

.tag {
  @each $name, $color in $tracks {
    &--#{$name} { color: $color; }     // → .tag--frontend { color: #00D1B2; }
  }
}

.speaker {
  @for $i from 1 through 4 {
    &:nth-child(#{$i}) { animation-delay: $i * 0.15s; }
  }
}
```

## 7. Patikra

- [ ] Visos 1 užduoties patikros taisyklės (BEM, struktūra, @use, kintamieji)
- [ ] `.tag--*` klasės sugeneruotos per `@each`, ne parašytos ranka
- [ ] Media užklausos tik per `respond()` mixin'ą
- [ ] Puslapiai tvarkingi ir 390px, ir 1280px pločiu; lentelė telefone neišlenda už ekrano
- [ ] Visos animacijos iš lentelės veikia, o `css/style.css` nė karto neredaguotas ranka
