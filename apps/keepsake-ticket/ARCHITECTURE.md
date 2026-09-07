# Keepsake Ticket Architecture

## Runtime and modules

Standalone dependency-light Vite miniapp. `index.html` owns semantic structure, `src/styles.css` owns the paper-led visual system and responsive layout, and `src/main.js` owns preview-only file selection and mute preference.

## State and persistence

Start → Mark one memory point, stamp the date, then tear the ticket stub → Reveal a clean 3:4 original-photo and keepsake-ticket composition ready to keep → Restart or Done.

The current preview implements only the initial/sample state and temporary photo replacement. Full session transitions remain pending visual approval. Object URLs are revoked when replaced or when the page exits; only `keepsake-ticket.muted` persists.

## Shared mobile behavior

Use 100dvh, four-edge safe areas, 44px controls, keyboard and landscape fallbacks.

## Fallbacks

The core loop must complete without optional network, permission, audio or font capabilities.

In preview v1, unsupported files leave the sample usable and receive a concise message. Generated sample art remains visibly a sample when a local photo replaces the upper image.
