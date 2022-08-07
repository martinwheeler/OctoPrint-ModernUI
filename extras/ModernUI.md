---
layout: plugin

id: ModernUI
title: OctoPrint-ModernUI
description: A React version of the frontend UI.
authors:
- Martin Wheeler
license: AGPLv3

date: 2022-08-07

homepage: https://github.com/martinwheeler/OctoPrint-ModernUI
source: https://github.com/martinwheeler/OctoPrint-ModernUI
archive: https://github.com/martinwheeler/OctoPrint-ModernUI/archive/master.zip

# TODO
tags:
- responsive
- style
- styling
- theme
- ui
- widescreen

screenshots:
- url: /docs/images/dashboard.png
  alt: Dashboard preview
  caption: A preview of the dashboard consuming full width

featuredimage: /docs/images/dashboard.png

# TODO
# You only need the following if your plugin requires specific OctoPrint versions or
# specific operating systems to function - you can safely remove the whole
# "compatibility" block if this is not the case.

compatibility:

  # List of compatible versions
  #
  # A single version number will be interpretated as a minimum version requirement,
  # e.g. "1.3.1" will show the plugin as compatible to OctoPrint versions 1.3.1 and up.
  # More sophisticated version requirements can be modelled too by using PEP440
  # compatible version specifiers.
  #
  # You can also remove the whole "octoprint" block. Removing it will default to all
  # OctoPrint versions being supported.

  octoprint:
  - 1.4.0

  # List of compatible operating systems
  #
  # Valid values:
  #
  # - windows
  # - linux
  # - macos
  # - freebsd
  #
  # There are also two OS groups defined that get expanded on usage:
  #
  # - posix: linux, macos and freebsd
  # - nix: linux and freebsd
  #
  # You can also remove the whole "os" block. Removing it will default to all
  # operating systems being supported.

  os:
  - linux
  - windows
  - macos
  - freebsd

  # Compatible Python version
  #
  # It is recommended to only support Python 3 for new plugins, in which case this should be ">=3,<4"
  # 
  # Plugins that wish to support both Python 2 and 3 should set it to ">=2.7,<4".
  #
  # Plugins that only support Python 2 will not be accepted into the plugin repository.

  python: ">=3,<4"

---

My personal take on a Modern UI for OctoPrint.

Uses flexbox to control the layout instead of relying on fixed pixels which allows a more responsive UI.

## Todo

- [ ] Mobile responsiveness
- [ ] Add generic flex to default classnames used in the UI already
- [ ] Update designs of elements to look more modern I.e. Latest bootstrap/material designs
