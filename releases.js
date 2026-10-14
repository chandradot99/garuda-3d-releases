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

  version: "1.1.0",
  released: "14 October 2026",
  notes: [
    "Installers for Windows and macOS as well as Linux",
    "Native builds for ARM as well as Intel and AMD",
    "Offline basemaps from MBTiles tile sets, for use with no tile server",
    "Military symbology annotations, shown on the map and over the 3D model",
    "Drawing tools for areas, lines and text",
    "Every task in a project in one 3D scene"
  ],

  files: [
    {
      platform: "windows",
      file: "garuda3d-offline-1.1.0-amd64.tar.gz",
      label: "Offline bundle",
      note: "Run install.ps1 in PowerShell. Nothing is fetched from the internet.",
      requires: "Windows 10 or 11, 64-bit, with Docker Desktop",
      size: 786105439,
      sha256: "4960a55935ef42efab606cfd22b45c89aa6c247214fb8d24abf7bd0d3561b50e"
    },
    {
      platform: "macos",
      file: "garuda3d-offline-1.1.0-arm64.tar.gz",
      label: "Offline bundle \u2014 Apple Silicon",
      note: "Run install.sh in Terminal. Nothing is fetched from the internet.",
      requires: "macOS 12 or later on M1 and above, with Docker Desktop",
      size: 735322250,
      sha256: "e9879634625004e051d175e85de1f8af4fb3099ef45a6a9894cafcc2fa338f7e"
    },
    {
      platform: "macos",
      file: "garuda3d-offline-1.1.0-amd64.tar.gz",
      label: "Offline bundle \u2014 Intel",
      note: "Run install.sh in Terminal. Nothing is fetched from the internet.",
      requires: "macOS 12 or later on Intel, with Docker Desktop",
      size: 786105439,
      sha256: "4960a55935ef42efab606cfd22b45c89aa6c247214fb8d24abf7bd0d3561b50e"
    },
    {
      platform: "linux",
      file: "garuda3d-offline-1.1.0-amd64.tar.gz",
      label: "Offline bundle \u2014 Intel and AMD",
      note: "Run install.sh. Nothing is fetched from the internet.",
      requires: "64-bit Linux with Docker Engine and the Compose plugin",
      size: 786105439,
      sha256: "4960a55935ef42efab606cfd22b45c89aa6c247214fb8d24abf7bd0d3561b50e"
    },
    {
      platform: "linux",
      file: "garuda3d-offline-1.1.0-arm64.tar.gz",
      label: "Offline bundle \u2014 ARM",
      note: "Run install.sh. Nothing is fetched from the internet.",
      requires: "64-bit ARM Linux with Docker Engine and the Compose plugin",
      size: 735322250,
      sha256: "e9879634625004e051d175e85de1f8af4fb3099ef45a6a9894cafcc2fa338f7e"
    }
  ]
};
