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

## Recorded Voice Pack

The game supports real recorded voiceover clips in the `voice/` folder. If a matching clip exists, it plays that recording instead of browser speech. If not, it falls back automatically to the built-in human-like voice agent.

The voice agent chooses the most natural English browser voice available and uses different delivery profiles for the narrator, SELENE, parasite, commanders, doctors, and crew.

See `voice/README.md` for file names like `story-01.mp3`, `prologue-01.mp3`, and `chapter-01-01.mp3`.

## Publishing

For GitHub Pages, upload these files:

- `index.html`
- `parasite_protocol_next_level.html`
- `parasite_theme.mp4`
- `serve_parasite.js`
- `README.md`
- `voice/README.md`

Then enable GitHub Pages from the repository settings using the main branch root folder.
