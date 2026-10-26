# JT Studio

JT Studio is the JT audio production workspace. This repository contains the browser workbench and an Electron desktop shell for Windows, macOS, and Linux packaging.

## Run the browser workbench
Open index.html in a modern browser, or run:

```bash
npm install
npm run serve
```

## Run the desktop shell
Requires Node.js 20 or newer.

```bash
npm install
npm start
```

## Build desktop packages

```bash
npm run dist
```

The CI workflow attempts Windows x64 and ia32, macOS Intel x64 and Apple Silicon arm64, and Linux x64 and arm64 packages. CI output is stored as workflow artifacts; it is not a published release. Treat a package as available only after its matching CI job succeeds and the artifact is verified. macOS signing/notarization is not configured.

## Current features

- Session metadata, tempo, key, production notes and track list
- Local browser persistence and session JSON import/export
- Web Audio API sine test tone with frequency and level controls
- User-initiated microphone permission, live input level meter and local WebM recording where supported
- Downloaded takes listed in the session metadata

## Current limitations

This is an early browser audio workbench, not a full multitrack digital audio workstation. It does not yet implement waveform editing, multitrack audio playback/mixing, MIDI instruments, VST/AU plugins, mastering, cloud sync, or a configured JT AI Core integration. Recorded audio is downloaded as a separate file; the session JSON stores metadata only.

## JT ecosystem and privacy

Use the exact product name **JT Studio** and JT branding. Expose any future AI experience as **Jeff AI** through a provider abstraction only when a real JT AI Core API is configured. Do not claim an unconnected backend is live. Microphone access must remain user initiated and permission gated.
