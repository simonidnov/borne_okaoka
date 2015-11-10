!include "MUI2.nsh"

Name "BorneOkaidi"
BrandingText "okaidi.fr"

# set the icon
!define MUI_ICON "icon.ico"

# define the resulting installer's name:
OutFile "..\dist\BorneOkaidi.exe"

# set the installation directory
InstallDir "$PROGRAMFILES\BorneOkaidi\"

# app dialogs
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_INSTFILES

!define MUI_FINISHPAGE_RUN_TEXT "Start BorneOkaidi"
!define MUI_FINISHPAGE_RUN "$INSTDIR\BorneOkaidi.exe"

!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_LANGUAGE "English"

# default section start
Section

  # delete the installed files
  RMDir /r $INSTDIR

  # define the path to which the installer should install
  SetOutPath $INSTDIR

  # specify the files to go in the output path
  File /r ..\build\BorneOkaidi\win32\*

  # create the uninstaller
  WriteUninstaller "$INSTDIR\Uninstall BorneOkaidi.exe"

  # create shortcuts in the start menu and on the desktop
  CreateShortCut "$SMPROGRAMS\BorneOkaidi.lnk" "$INSTDIR\BorneOkaidi.exe"
  CreateShortCut "$SMPROGRAMS\Uninstall BorneOkaidi.lnk" "$INSTDIR\Uninstall BorneOkaidi.exe"
  CreateShortCut "$DESKTOP\BorneOkaidi.lnk" "$INSTDIR\BorneOkaidi.exe"

SectionEnd

# create a section to define what the uninstaller does
Section "Uninstall"

  # delete the installed files
  RMDir /r $INSTDIR

  # delete the shortcuts
  Delete "$SMPROGRAMS\BorneOkaidi.lnk"
  Delete "$SMPROGRAMS\Uninstall BorneOkaidi.lnk"
  Delete "$DESKTOP\BorneOkaidi.lnk"

SectionEnd
