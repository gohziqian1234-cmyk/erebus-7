# Erebus-7: First Skin

[Play online](https://gohziqian1234-cmyk.github.io/erebus-7/)

![Erebus-7: First Skin key art](assets/erebus-7-first-skin-key-art.png)

Single-player social-horror prototype inspired by deduction games, built as a standalone HTML canvas game.

## Play Online

Open the public GitHub Pages build:

```text
https://gohziqian1234-cmyk.github.io/erebus-7/
```

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

For GitHub Pages, upload these files to the repository root:

- `index.html`
- `parasite_protocol_next_level.html`
- `assets/erebus-7-first-skin-key-art.png`
- `parasite_theme.mp4`
- `serve_parasite.js`
- `README.md`
- `voice/README.md`
- `.nojekyll`

Then enable GitHub Pages:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Set source to `Deploy from a branch`.
5. Pick `main` or `master`, then `/root`.
6. Save.

The public play URL will look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```
