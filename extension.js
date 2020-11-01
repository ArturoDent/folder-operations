const vscode = require('vscode');
const fs = require('fs');
const path = require('path');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('folder-operations.getFoldersInWorkspace', async function () {

    // get the workspaceFolder of the current file, check if multiple workspaceFolders
    // a file must be opened
    const wsFolders = await vscode.workspace.workspaceFolders;
    if (!wsFolders)  vscode.window.showErrorMessage('There is no workspacefolder open.')
    const currentWorkSpace = await vscode.workspace.getWorkspaceFolder(vscode.window.activeTextEditor.document.uri);

    // filter out files, keep folder names.  Returns an array of string.
    // no attempt made here to handle symbolic links for example - look at lstatSync if necessary

    const allFilesFolders = fs.readdirSync(currentWorkSpace.uri.fsPath);
    const onlyFolders = allFilesFolders.filter(f => fs.statSync(path.join(currentWorkSpace.uri.fsPath, f)).isDirectory());

    // showQuickPick() takes an array of strings
    return vscode.window.showQuickPick(onlyFolders);
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
