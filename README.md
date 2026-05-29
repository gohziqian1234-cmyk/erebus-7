# Parasite Protocol

Single-player social-horror prototype inspired by deduction games, built as a standalone HTML canvas game.

## Play Locally

Open `parasite_protocol_next_level.html` directly, or run:

```bash
node serve_parasite.js
```

Then visit:

```text
http://127.0.0.1:8787/parasite_protocol_next_level.html
```

## Controls

- `WASD` move
- `E` infect
- `V` talk
- `M` tactical map
- `J` codex
- `Q/F/R/C/Z/B/G/T/X` parasite abilities

## Latest QA

Release sweep passed:

- 100 randomized game/map/UI cases
- 7-zone smoke coverage
- objective path checks
- actor wall-spawn checks
- tactical map side-panel checks
- syntax validation

## Publishing

For GitHub Pages, upload these files:

- `index.html`
- `parasite_protocol_next_level.html`
- `parasite_theme.mp4`
- `serve_parasite.js`
- `README.md`

Then enable GitHub Pages from the repository settings using the main branch root folder.
