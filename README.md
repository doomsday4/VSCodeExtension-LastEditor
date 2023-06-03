# VSCodeExtension-LastEditor
This is a basic VS Code extension, that will allow the users to view the username of the last editor of each line of code. As in a code base, a team of multiple programmers work simultaneously, it is important to note what changes were made and who made them.

#  Basic Setup
1. Install Node.js, if not already installed.
2. Install the Yeoman extension generator. (use sudo if there are any permission issues.)
3. Create a new folder and run the ‘yo code’ command to generate a basic structure for the extension. And select the parameteres for the extension-
    1. <u>Type of extension</u>- *New Extension (TypeScript)*- This gives a basic structure for our extension which we will modify.
    2. <u>Name</u>- LastEditor 
    3. <u>Identifier</u>- lasteditor
    4. <u>Description</u>- This extension will allow the users to view the username of the last editor of each line of code. As in a code base, a team of multiple programmers work simultaneously, it is important to note what changes were made and who made them.
    5. <u>Initialise Git Repo</u>- Yes.
    6. <u>Bundle the Code with webpack</u>- For a basic extension, we don’t need to bundle the code. That is only required when we have a complex extension having multiple dependencies.
    7. <u>Package Manager</u>- We will be using the npm manager.
4. The Basic structure of the extension is created in the original folder.

# Main Function
1. Now edit the extension.ts file in the src directory and create the function to display the name of the author for each line of code.
2. I've used the git interface approach, which basically makes use of the Git Blame Info for this. Here, we use the data stored in git about who committed a specific line of code. 
3. Edit the package.json file to add the respective devDependencies, commands and build scripts for execution. Make sure to add the correct name of the command for activation of the extension and also the correct file path.

# Execution
1. Install the VSIX file attached in the repository, directly into your VS Code Editor.
2. Select the line you want to know the last author of.
3. Open the Command Palette (cmd+shift+P / ctrl+shift+P) and search for the Command- "Show Last Editor" and click it.

# Testing
1. To test the extension, I firstly opened the very own files of this extension and saw myself as the user.
2. Then I cloned a public github repo and tried to see it's authors.

# THANK YOU!