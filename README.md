# Drawing Conclusions From Data

A static HTML slide deck, plus a "Try It Yourself" activity page. No build step or dependencies.

## Run locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000> (redirects to the deck). Activity page: <http://localhost:8000/try-it-yourself.html>.

Serve over HTTP rather than opening the files directly, so the data files load.

## Deploy

Netlify publishes the repo root (see `netlify.toml`).

## Albanian

The deck has an EN | SQ switch (top right, or press L). Open it directly in Albanian with `?lang=sq`.
Translations live in `.i18n/*.tsv` (English, tab, Albanian). After editing, run `python3 .i18n/build.py` to rebuild `i18n-sq.js`.
