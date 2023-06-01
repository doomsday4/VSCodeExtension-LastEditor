# lasteditor README

This is the README for our extension "lasteditor".
This will keep a record of all the functioning and usage of the extension.

## Features

1. The main feature of this extension is to display the name of the last editor of each line of a code.
2. It uses the Git Blame command to read and extract content from the git database.
> Note: For this approach, it is necessary to have the Git Blame extension installed in VS Code.<br>For a code which is locally placed on a machine, it will display the editor as *You* because obviously, it cannot trace who actually edited the code.
3. Along with the name, we can also see the time when the edits were made and the name of the commit with which they were included. This will help in tracing the code better.

<u>For example:</u> I've attached 3 screenshots, diplaying the names of the authors of the code.

Personal Repo:

![Alt text](./image/Personal%20eg.png)


Public Repo 1:

![Alt text](./image/Public%20Repo%20eg1.png)

Public Repo 2:

![Alt text](./image/Public%20Repo%20eg2.png)

## Requirements

The major requirements are:
1. Have the Git Blame extension installed in your VS Code.
2. Have the npm package manager to build the extension and deploy it.

<!-- ## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something. -->

## Known Issues

1. Might not work if the appropriate extensions (Git Blame, Git) are not installed.
2. On executing the command "*code .*", if it doesn't recognise the command, we need to add it to the path from VS Code.
 - Open VS Code and press *cmd/ctrl + shift + P*, this shall open the command search palette.
 - Search for the shell command- *Install 'Code' command in PATH*
 - This shall add the command to the path and now we can proceed.

<!-- ## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

--- -->

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

**Enjoy!**
