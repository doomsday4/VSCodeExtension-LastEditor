"use strict";
// //Importing the necessary modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// // The module 'vscode' contains the VS Code extensibility API
// import * as vscode from 'vscode';
// import * as os from 'os';
// // This method is called when your extension is activated
// // Your extension is activated the very first time the command is executed
// // export function activate(context: vscode.ExtensionContext) {
// // 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// // 	// This line of code will only be executed once when your extension is activated
// // 	console.log('Congratulations, your extension "lasteditor" is now active!');
// // 	// The command has been defined in the package.json file
// // 	// Now provide the implementation of the command with registerCommand
// // 	// The commandId parameter must match the command field in package.json
// // 	let disposable = vscode.commands.registerCommand('lasteditor.helloWorld', () => {
// // 		// The code you place here will be executed every time your command is executed
// // 		// Display a message box to the user
// // 		vscode.window.showInformationMessage('Hello World from LastEditor!');
// // 	});
// // 	context.subscriptions.push(disposable);
// // }
// //Creating a function to display the name of the last editor for each line of code
// export function activate(context: vscode.ExtensionContext) {
// 	//this is how the text (name) is going to be displayed
// 	const decorationType = vscode.window.createTextEditorDecorationType({
// 		before: {
// 		  contentText: 'last editor: ',
// 		  color: new vscode.ThemeColor('gitDecoration.addedResourceForeground')
// 		}
// 	  });
// 	  //this is to update the text whenever the active text editor changes for a line
// 	  vscode.window.onDidChangeActiveTextEditor(editor => {
// 		if (editor) {
// 		  updateDecorations(editor, decorationType);
// 		}
// 	  }, null, context.subscriptions);
// 	  //this will update the text whenever the document is edited
// 	  vscode.workspace.onDidChangeTextDocument(event => {
// 		if (vscode.window.activeTextEditor && event.document === vscode.window.activeTextEditor.document) {
// 		  updateDecorations(vscode.window.activeTextEditor, decorationType);
// 		}
// 	  }, null, context.subscriptions);
// 	  //initial update
// 	  if (vscode.window.activeTextEditor) {
// 		updateDecorations(vscode.window.activeTextEditor, decorationType);
// 	  }
// }
// function updateDecorations(editor: vscode.TextEditor, decorationType: vscode.TextEditorDecorationType) {
// 	const decorations: vscode.DecorationOptions[] = [];
// 	//name of the last editor from the workspace state
// 	const lastEditorName = vscode.workspace.getConfiguration().get('lastEditor.name', '');
// 	// Iterate over each line and add a decoration displaying the last editor's name
// 	for (let i = 0; i < editor.document.lineCount; i++) {
// 	  const line = editor.document.lineAt(i);
// 	  const range = new vscode.Range(line.range.start, line.range.start);
// 	  decorations.push({ range, renderOptions: { before: { contentText: lastEditorName } } });
// 	}
// 	// Apply the decorations to the text editor
// 	editor.setDecorations(decorationType, decorations);
//   }
// // This method is called when your extension is deactivated
// export function deactivate() {}
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.showLastEditor', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const line = editor.selection.active.line;
            const filePath = editor.document.uri.fsPath;
            vscode.commands.executeCommand('git.blame', { args: ['-L', `${line + 1},${line + 1}`, '--', filePath] })
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
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map