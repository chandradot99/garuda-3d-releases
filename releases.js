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

  version: "1.1.2",
  released: "14 October 2026",
  notes: [],

  files: [
    {
      platform: "windows",
      file: "garuda3d-offline-1.1.2-amd64.tar.gz",
      label: "Offline bundle",
      note: "Run install.ps1 in PowerShell. Nothing is fetched from the internet.",
      requires: "Windows 10 or 11, 64-bit, with Docker Desktop",
      size: 789446079,
      sha256: "11bae5bf46f10b30e7d5ce8d47578758e08468a3b0e3a3fcb35dce7032ca0487"
    },
    {
      platform: "macos",
      file: "garuda3d-offline-1.1.2-arm64.tar.gz",
      label: "Offline bundle — Apple Silicon",
      note: "Run install.sh in Terminal. Nothing is fetched from the internet.",
      requires: "macOS 12 or later on M1 and above, with Docker Desktop",
      size: 738664017,
      sha256: "8fdfc8baac175df85e3b7f014b5adb36523ce2613ab3a952ed1c6e1b4109eebd"
    },
    {
      platform: "macos",
      file: "garuda3d-offline-1.1.2-amd64.tar.gz",
      label: "Offline bundle — Intel",
      note: "Run install.sh in Terminal. Nothing is fetched from the internet.",
      requires: "macOS 12 or later on Intel, with Docker Desktop",
      size: 789446079,
      sha256: "11bae5bf46f10b30e7d5ce8d47578758e08468a3b0e3a3fcb35dce7032ca0487"
    },
    {
      platform: "linux",
      file: "garuda3d-offline-1.1.2-amd64.tar.gz",
      label: "Offline bundle — Intel and AMD",
      note: "Run install.sh. Nothing is fetched from the internet.",
      requires: "64-bit Linux with Docker Engine and the Compose plugin",
      size: 789446079,
      sha256: "11bae5bf46f10b30e7d5ce8d47578758e08468a3b0e3a3fcb35dce7032ca0487"
    },
    {
      platform: "linux",
      file: "garuda3d-offline-1.1.2-arm64.tar.gz",
      label: "Offline bundle — ARM",
      note: "Run install.sh. Nothing is fetched from the internet.",
      requires: "64-bit ARM Linux with Docker Engine and the Compose plugin",
      size: 738664017,
      sha256: "8fdfc8baac175df85e3b7f014b5adb36523ce2613ab3a952ed1c6e1b4109eebd"
    }
  ]
};
