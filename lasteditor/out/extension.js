"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
//importing the necessary modules
const vscode = require("vscode");
//the main function to display the name of the last editor
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.showLastEditor', () => {
        const editor = vscode.window.activeTextEditor; // this part handles the text that is shown to us at each line
        if (editor) {
            const line = editor.selection.active.line;
            const filePath = editor.document.uri.fsPath;
            const escapedPath = filePath.includes(' ') || filePath.includes('\n')
                ? `"${filePath.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`
                : filePath;
            //const  = editor.document.uri.fsPath;
            // this command uses the git blame command to examine the content line by line and get the author name
            vscode.commands.executeCommand('git.blame', { args: ['-L', `${line + 1},${line + 1}`, '--', escapedPath] })
                .then(result => {
                const blameInfo = result;
                if (blameInfo.length > 0) {
                    const lastEditAuthor = blameInfo[0].author;
                    vscode.window.showInformationMessage(`Last editor at line ${line + 1}: ${lastEditAuthor}`);
                }
            })
                .then(undefined, error => {
                console.error(error);
            });
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method will deactivate the extension
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map