# GARUDA 3D — downloads

The download page and the release bundles for GARUDA 3D.

**https://chandradot99.github.io/garuda-3d-releases/**

There is no source code here. This repository exists so that the software can
be distributed publicly while its source stays private: it holds the download
page, and each release carries the offline bundles the page links to.

## What a bundle is

A single file containing every container image GARUDA 3D needs, with an
installer and checksums. The machine it installs on never reaches the
internet. Docker has to be installed on it first — the bundle provides
GARUDA 3D, not Docker.

One bundle per processor architecture:

- `-amd64` — Intel and AMD, which is almost every Windows and Linux machine
- `-arm64` — Apple Silicon Macs and ARM servers

Unpack it and run `install.sh`, or `install.ps1` on Windows. Each bundle
carries its own README.

## Checking a download

Every download shows its SHA-256. A file carried onto an air-gapped machine
has nothing else to tell you it arrived whole:

- Windows: `certutil -hashfile <file> SHA256`
- macOS, Linux: `shasum -a 256 <file>`

## How this is published

The release workflow in the private source repository builds the images,
assembles the bundles, attaches them to a release here and updates
`releases.js` with their sizes and checksums. Nothing here is edited by hand.

## Licence

GARUDA 3D is licensed under the
[GNU Affero General Public License v3.0](LICENSE.md). It is based on the open
source code of [WebODM](https://github.com/WebODM/WebODM), licensed under the
same terms, and is a modified version of it. It is not affiliated with,
endorsed by or supported by WebODM or UAV4GEO.

The AGPL requires that the source of a modified version be available to those
who use it. Ask through the channel you received this software from.
