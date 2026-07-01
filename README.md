# Melih Can Akgüneş — Portfolio

Backend & .NET developer portfolio. Modern, bilingual (TR / EN), dark theme.
Built with vanilla **HTML · CSS · JavaScript** — no build step, deploys straight to GitHub Pages.

🔗 Live: https://melihc6n.github.io/portfolio/

## Structure

| File         | Purpose                                                        |
| ------------ | ------------------------------------------------------------- |
| `index.html` | Page markup + sections                                        |
| `style.css`  | Modern dark / glassmorphism styling, fully responsive         |
| `main.js`    | Content data (TR/EN), language switch, animations, interactions |
| `IMG.png`    | Profile photo                                                 |

## Editing content

All content lives in **`main.js`** as simple JS objects near the top of the file
(`SKILLS`, `EDUCATION`, `PROJECTS`, `EXPERIENCE`, `FACTS`). Each item has a `tr`
and `en` field — edit the text, add or remove items, and the page updates
automatically. Sections marked `NOTE:` contain placeholders to replace with real data.

## Contact form

The form falls back to a `mailto:` link out of the box. To receive submissions in
your inbox, create a free [Formspree](https://formspree.io) form and replace
`your-id` in the form `action` in `index.html`.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
# then visit http://localhost:8080
```
