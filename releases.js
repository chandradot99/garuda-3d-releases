/*
What the download page offers.

This is the only file that changes when a release is published. The installers
themselves are not in the repository -- they are attached to a GitHub release,
and the page links to them there, so a multi-gigabyte bundle never has to live
in git.

Leave `version` empty before the first release: the page then says so plainly
and points at the releases listing instead of offering links that 404.

`site/tools/release-manifest.sh` prints the `files` entries for a set of built
installers, with their sizes and checksums already filled in.
*/
window.GARUDA_RELEASES = {
  repo: "chandradot99/garuda-3d-releases",

  version: "1.1.3",
  released: "14 October 2026",
  notes: [],

  files: [
    {
      platform: "windows",
      file: "garuda3d-offline-1.1.3-amd64.tar.gz",
      label: "Offline bundle",
      note: "Run install.ps1 in PowerShell. Nothing is fetched from the internet.",
      requires: "Windows 10 or 11, 64-bit, with Docker Desktop",
      size: 789435374,
      sha256: "449ce1379bfcec4580654ec279f6cc97bfff2a0bea8a4b331afb4a2059985273"
    },
    {
      platform: "macos",
      file: "garuda3d-offline-1.1.3-arm64.tar.gz",
      label: "Offline bundle — Apple Silicon",
      note: "Run install.sh in Terminal. Nothing is fetched from the internet.",
      requires: "macOS 12 or later on M1 and above, with Docker Desktop",
      size: 738634315,
      sha256: "aae20bca387d44ef0565dbc7256970c30e1e5d538c4bd4715ad9bf5fe2a0b09b"
    },
    {
      platform: "macos",
      file: "garuda3d-offline-1.1.3-amd64.tar.gz",
      label: "Offline bundle — Intel",
      note: "Run install.sh in Terminal. Nothing is fetched from the internet.",
      requires: "macOS 12 or later on Intel, with Docker Desktop",
      size: 789435374,
      sha256: "449ce1379bfcec4580654ec279f6cc97bfff2a0bea8a4b331afb4a2059985273"
    },
    {
      platform: "linux",
      file: "garuda3d-offline-1.1.3-amd64.tar.gz",
      label: "Offline bundle — Intel and AMD",
      note: "Run install.sh. Nothing is fetched from the internet.",
      requires: "64-bit Linux with Docker Engine and the Compose plugin",
      size: 789435374,
      sha256: "449ce1379bfcec4580654ec279f6cc97bfff2a0bea8a4b331afb4a2059985273"
    },
    {
      platform: "linux",
      file: "garuda3d-offline-1.1.3-arm64.tar.gz",
      label: "Offline bundle — ARM",
      note: "Run install.sh. Nothing is fetched from the internet.",
      requires: "64-bit ARM Linux with Docker Engine and the Compose plugin",
      size: 738634315,
      sha256: "aae20bca387d44ef0565dbc7256970c30e1e5d538c4bd4715ad9bf5fe2a0b09b"
    }
  ]
};
