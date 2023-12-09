# Running the Client on Linux

This page serves as a community-driven guide to assist you in setting up the GameVault client on Linux.

:::warning
Please note that running GameVault on Linux using this method is considered **unsupported** and **unrecommended**. It should only be utilized as a last resort when no other options are available.
:::

## Getting the application

To start, you need the Application files. The simplest way to get them is explained [here](../client-docs/setup.md#option-1-obtain-pre-built-artifacts-from-github).

## Setting up with Wine

1. Install Wine and winetricks
2. Run `winetricks dotnetdesktop6` in a terminal
3. Launch `gamevault.exe`

## Setting up with Bottles

:::tip

When using Bottles under flatpak, your data will be in the following directory:

`~/.var/app/com.usebottles.bottles/data/bottles/[YOUR BOTTLE NAME]`

Keep that in mind when unpacking games to install them.

:::

1. Install [Bottles](https://usebottles.com/)
2. Create a new bottle  
   ![Creating a new Bottle](/img/linux/bottles/make_bottle.png)
3. Inside your bottle click `Dependencies` and install `dotnetcoredesktop6`  
   ![Configuring the .NET Core Dependency](/img/linux/bottles/dotnet.png)
4. Go back to the main page for your bottle and press `Run Executable...` and select `gamevault.exe`

## Updating the Client

:::warning
Since there is currently no auto-update functionality available (as mentioned in [this link](../client-docs/updating-client.md#other-sources)), it is your responsibility to manually update your GameVault client. To update your client, you will need to repeat the procedure in this documentation.
:::

## Known issues

- Text can look very broken if certain fonts are not installed on your system.
  - If you're on Arch Linux, [this](https://aur.archlinux.org/packages/ttf-ms-win11-auto) AUR package fixes the issue.
  - If you're on Debian, you could try to use [this](https://packages.debian.org/ttf-mscorefonts-installer) package. (untested)
  - Additionally - you can also try [this](https://archive.org/details/windows-11-21h2-complete-font-collection) and install it to your wine prefix's fonts folder ~/.wine/drive_c/windows/Fonts ; This works on the steamdeck
