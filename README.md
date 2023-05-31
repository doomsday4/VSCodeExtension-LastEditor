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
2. I've used the git interface approach (*make sure the git blame extension is installed for this*) for this. Here, we use the data stored in git about who committed a specific line of code along with how long ago the commit was made. 
3. Edit the package.json file to add the respective devDependencies, commands and build scripts for execution.

# Execution
1. To add the extension to your editor and test it-
- Clone this repository to a specific location on your local machine.
- Navigate to the root directory and run the commands-<br>*"npm run build"*<br>*"npm install --save-dev typescript"*<br>*"code ."*
- After the last command, VS Code will open with the following extension installed.

# Testing
1. To test the extension, I firstly opened the very own files of this extension and saw myself as the user.
2. Then I cloned a public github repo and tried to see it's authors. It worked and also showed me the time when the last commit was made and by whom.

# THANK YOU!