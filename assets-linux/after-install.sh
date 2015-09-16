#!/bin/bash

# Link to the binary
ln -sf /opt/BorneOkaidi/BorneOkaidi /usr/local/bin/BorneOkaidi

# Launcher icon
desktop-file-install /opt/BorneOkaidi/BorneOkaidi.desktop
