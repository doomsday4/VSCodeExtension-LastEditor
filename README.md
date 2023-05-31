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