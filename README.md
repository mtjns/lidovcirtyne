# Web KDU-ČSL Rtyně v Podkrkonoší

Statický web místní organizace KDU-ČSL, postavený na **Jekyll** + **Tailwind CSS**
podle oficiálního vizuálního stylu Nových lidovců (viz `brand-design-rulebook.md`).

## Struktura

```
_config.yml            konfigurace + kontaktní údaje organizace (uprav zde)
_data/navigation.yml   položky hlavního menu
_layouts/              default.html, page.html, post.html
_includes/             header.html (nav), footer.html
_tailwindcss/main.css  vstupní CSS pro Tailwind
assets/css/style.css   vygenerované CSS (Tailwind)
index.html             úvodní stránka (hero + sekce)
o-nas / program / aktuality / kandidati / kontakt  ostatní stránky
_posts/                aktuality (jeden soubor = jeden článek)
```

## Předpoklady

- **Node.js** (pro Tailwind) — už nainstalováno.
- **Ruby + Jekyll** — na tomto počítači zatím **není**. Instalace na Windows:
  1. Nainstaluj **Ruby+Devkit** z https://rubyinstaller.org/ (verze 3.x, x64).
     Na konci instalace nech proběhnout `ridk install` (volba 3).
  2. Otevři nový terminál a ověř: `ruby -v`.
  3. `gem install bundler jekyll`

## První spuštění

```bash
npm install          # Tailwind + concurrently
bundle install       # Jekyll a pluginy (po instalaci Ruby)
npm run dev          # spustí Tailwind watch + jekyll serve na http://localhost:4000
```

## Užitečné příkazy

| Příkaz | Co dělá |
|---|---|
| `npm run dev` | vývoj: sleduje CSS i obsah, živý náhled |
| `npm run build:css` | jen zkompiluje Tailwind CSS |
| `npm run build` | produkční build (CSS + `jekyll build` → `_site/`) |

> Pokud ještě nemáš Ruby, můžeš si zatím kompilovat aspoň CSS přes
> `npm run build:css`. Kompletní web se ale sestaví až s Jekyllem.

## Co doplnit

1. **Loga** do `assets/img/` (viz tamní README).
2. **Kontaktní údaje** v `_config.yml` (e-mail, telefon, Facebook, adresa).
3. **Obsah** stránek `o-nas`, `program`, `kandidati` a reálné aktuality v `_posts/`.
4. **Kontaktní formulář** – napoj službu (Formspree apod.) v `kontakt.md`.
5. **Nadpisové písmo Owners** – volitelně licencuj a self-hostuj (viz `_tailwindcss/main.css`);
   jinak se použije povolená náhrada Arial/Helvetica.
