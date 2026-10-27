# JT Studio — Audio Workflow Roadmap

JT Studio currently provides an early browser audio workbench and Electron shell. This roadmap separates implemented capabilities from future work.

## Stage 1 — Reliable session foundation
- Add automated tests for session JSON validation, save/load, import/export and invalid data.
- Version the session schema and provide migrations for older projects.
- Keep audio assets separate from session metadata and clearly report missing files.
- Add recovery/export guidance so browser storage is not mistaken for a backup.

## Stage 2 — Editing workflow
- Add an editable clip/track timeline with explicit start time, duration, gain and mute state.
- Support non-destructive edits and undo/redo.
- Provide visible transport controls and accurate playback state.
- Keep recording permission user-initiated and show a clear recording indicator.

## Stage 3 — Audio engine
- Introduce an audio-engine abstraction around Web Audio API.
- Test device unavailable, permission denied, input disconnected and playback interruption.
- Add waveform display only when the underlying audio data is actually available.
- Do not claim MIDI, VST/AU plugins, mastering or professional multitrack mixing until implemented and tested.

## Stage 4 — Project portability
- Package session metadata and referenced audio assets into a documented project archive.
- Validate archive paths and sizes before import.
- Provide explicit export and restore actions; do not upload recordings automatically.

## Stage 5 — JT ecosystem integration
- Integrate Jeff AI through a configured JT AI Core provider interface only.
- Keep AI assistance optional and disclose what project data is sent to a configured provider.
- Share project metadata with other JT apps only through explicit, app-scoped permissions.

## Acceptance gates

Every stage should include tests, a manual workflow check, clear error messages and documentation. A successful Electron package build alone is not proof that audio hardware, codecs or recording work on every operating system.
