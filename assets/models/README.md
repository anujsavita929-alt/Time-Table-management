Instructions for adding a 3D model (battle-axe) used by index.html
---------------------------------------------------------------

Place a GLB/GLTF model at `assets/models/battle-axe.glb` to show an interactive fantasy battle axe on the landing page.

Options:

- Local: Put a `.glb` file at `assets/models/battle-axe.glb` and (optionally) a preview image at `assets/models/preview.jpg`.
- Remote URL: Edit the `src` attribute of the `<model-viewer>` in `index.html` to point to a hosted `.glb` URL.

Recommended attributes (already set in `index.html`):

- `camera-controls` — enables drag-to-orbit
- `auto-rotate` — slow continuous rotation
- `interaction-prompt="auto"` — shows a hint on first visit
- `shadow-intensity` and `exposure` — tweak lighting

Notes:

- `model-viewer` is included from CDN in `index.html`. No additional build step required.
- If the model does not appear, open browser devtools > Network to verify the `.glb` is loading and check console for errors.
- For a curated free model, download a `.glb` from a site that provides redistribution permission, then add it locally.

If you want, I can help fetch a free, appropriately licensed battle-axe `.glb` and add it here — tell me if you approve that step.
