"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
const child_process_1 = require("child_process");
function activate(context) {
    let disposable = vscode.commands.registerCommand("extension.showLastEditor", () => {
        const editor = vscode.window.activeTextEditor; // To access the active Text Editor in VS Code
        if (editor) {
            const filePath = editor.document.uri.fsPath; // To access the file path of the document/file currently open
            const absolutefilePath = path.resolve(filePath);
            const directoryPath = path.dirname(absolutefilePath);
            console.log(directoryPath);
            const fileName = path.basename(absolutefilePath);
            console.log(fileName);
            const selection = editor.selection; // This part is specifically to display the username of the last editor
            const lineNumber = selection.active.line; // for the current line in the code.
            const options = { cwd: directoryPath };
            // This command uses the Git Blame info to get the author name for the current line and the --porcelain command is specifically used 
            // to avoid displaying the date and time of the last edit. Hence it displays only the username.
            (0, child_process_1.exec)(`git blame -L ${lineNumber + 1},${lineNumber + 1} --porcelain ${fileName}`, options, (error, stdout) => {
                if (error) {
                    console.error(`Error executing "git blame": ${error}`);
                    return;
                }
                const match = /^author (.+)$/m.exec(stdout);
                console.log(match?.[1]); // To avoid the error because of match = NULL, we difine that match is never = NULL, using the ?
                if (match) {
                    const author = match[1];
                    const range = new vscode.Range(lineNumber, 0, lineNumber, 0);
                    const decoration = vscode.window.createTextEditorDecorationType({
                        color: '#FF0000',
                        after: {
                            contentText: `[${author}]`,
                            color: 'red' // Changed the color to red so that it is easily visible and not confusing with the code.
                        }
                    });
                    editor.setDecorations(decoration, [range]);
                }
            });
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() {
    console.log('The LastEditor extension is deactivated.');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map