# JT Studio — Audio Production Workbench

Standalone repository for JT Studio in the JT Digital World ecosystem.

## Run
Open `index.html` in a modern browser for session planning and test tones. Microphone monitoring and recording generally require HTTPS or localhost. No build step or third-party JavaScript package is required.

## Working features
- Session metadata, tempo, key, production notes and track list
- Local browser persistence
- Session JSON import/export
- Web Audio API sine test tone with frequency and level controls
- User-initiated microphone permission, live input level meter and local WebM recording where supported
- Downloaded takes listed in the session metadata

## Boundaries
This is an early browser audio workbench, not a full multitrack digital audio workstation. It does not yet implement waveform editing, multitrack audio playback/mixing, MIDI instruments, VST/AU plugins, mastering, cloud sync or JT AI Core integration. Recorded audio is downloaded as a separate file; the session JSON stores metadata only. Browser storage is local to the current origin and can be cleared by the browser.

## JT branding and future integration
Use JT branding. Expose the AI experience as Jeff AI through a provider abstraction when a real JT AI Core API is configured; never claim that an unconnected AI backend is live.
