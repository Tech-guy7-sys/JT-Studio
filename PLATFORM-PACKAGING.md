# JT Studio platform packaging

The JT Studio source remains in this repository. The Electron wrapper packages the existing browser workbench as a desktop application.

## Build locally

- Install Node.js 20 or newer.
- Run npm install.
- Run npm start for the desktop shell.
- Run npm run dist to package for the current host platform.

## CI targets

The desktop artifact workflow attempts Windows x64 and ia32, macOS Intel x64 and Apple Silicon arm64, and Linux x64 and arm64. GitHub Actions artifacts are temporary build outputs, not releases. Confirm every matrix job succeeds before advertising a package as available.

## Important boundaries

JT Studio is an early audio workbench, not yet a full multitrack DAW. Microphone access requires explicit permission. The current source does not implement VST/AU plugins, full waveform editing, cloud sync, or a configured Jeff AI backend. macOS signing/notarization is not configured; do not describe installers as signed.
