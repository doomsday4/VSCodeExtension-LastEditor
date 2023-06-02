"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.showLastEditor', async () => {
        let outputChannel;
        outputChannel = vscode.window.createOutputChannel('Last Editor');
        const gitExtension = vscode.extensions.getExtension('vscode.git');
        if (gitExtension) {
            const git = gitExtension.exports.getAPI(1);
            const repositories = git.repositories;
            if (repositories.length > 0) {
                const activeEditor = vscode.window.activeTextEditor;
                if (activeEditor) {
                    const filePath = activeEditor.document.uri.fsPath;
                    const blameInfo = await repositories[0].blame(filePath);
                    if (blameInfo && blameInfo.length > 0) {
                        for (let i = 0; i < blameInfo.length; i++) {
                            const line = i + 1; // Lines are 1-based, so increment the index by 1
                            const lastEditAuthor = blameInfo[i].author.name;
                            outputChannel.appendLine(`Last author at line ${line}: ${lastEditAuthor}`);
                        }
                    }
                }
                else {
                    vscode.window.showWarningMessage('No active text editor found.');
                }
            }
            else {
                vscode.window.showWarningMessage('No Git repository found in the workspace.');
            }
        }
        else {
            vscode.window.showWarningMessage('The Git extension is not installed.');
        }
        outputChannel.show();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map