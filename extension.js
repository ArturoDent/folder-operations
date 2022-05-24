const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const openDefault = require("open");

// const argv = require('yargs/yargs')(process.argv.slice(2)).argv;


/**
 * {@link namepathOrURL}
 * 
 * [Link](https://example.com)
 */
async function activate(context) {

	const q = vscode.window.createQuickPick();
	q.items =   [{
			label: "Test1 Label",
			description: "Test1 Description",
			detail: "$(files) Test1 Detail with icon",
		},
		{
			label: "Test2 Label",
			description: "Test2 Description",
			detail: "$(files) Test2 Detail with icon",
		}
	]
	q.activeItems = [		{
		label: "Test2 Label",
		description: "Test2 Description",
		detail: "$(files) Test2 Detail with icon",
	}];
	await q.show();

	console.log("here");

	// const filePath = vscode.window.activeTextEditor.document.fileName;
	// await openDefault(filePath);
	// console.log("closed");
	
	// const gitExtension = vscode.extensions.getExtension('vscode.git').exports;
	// const git = gitExtension.getAPI(1);
	// console.log(git);

	// const file = await vscode.workspace.openTextDocument("C:\\Users\\Mark\\jump-and-select\\command-alias\\jsconfig.json");
	// const file = await vscode.workspace.openTextDocument(".\\jsconfig.json");

	// console.log(file);

	// await vscode.debug.activeDebugSession?.onDidChange(function(event) { 
	// 	console.log("Event happened: " + event); 
	// });

	// await vscode.debug.onDidChangeActiveDebugSession(e => {
	// 	console.log('CHANGE ACTIVE', e.id);
	// })

	// await vscode.debug.onDidReceiveDebugSessionCustomEvent(e => {
	// 		console.log('CUSTOM EVENT', e.session.id, e.event);
	// })

	const savecommand = 'folder-operations.key-binding';

	const saveComamndHandler = vscode.commands.registerCommand(savecommand, () => {

			vscode.window.showInformationMessage("Saved file");

	});

	context.subscriptions.push(saveComamndHandler);

}

	// this gets the typescript-basics extension, not what we want
	// const tsExtension = await vscode.extensions.getExtension('vscode.typescript');

	// const decorations = vscode.window.createTextEditorDecorationType({
	// 	outlineWidth: '2px',
	// 	outlineStyle: 'solid',
	// 	outlineColor: '#f00',
	// 	before: {contentText: "♥"}
	// });	
	// await vscode.window.activeTextEditor.setDecorations(decorations,  [new vscode.Range(1,0,1,100)]);


	// const myTree = await vscode.window.createTreeView("package-dependencies", {treeDataProvider: myTreeDataProvider});
	// myTree.onDidChangeVisibility(ev => {
	// 	console.log(ev);
	// })

	// function myTreeDataProvider () {
	// 	return "howdy";
	// }

	// onDidChangeVisibility
	// vscode.tr  .onDidChangeVisibility(ev => {
	// 	console.log(ev);
	// })

	// const workbenchConfig = vscode.workspace.getConfiguration('editor');
	// const currentFont = workbenchConfig.get('fontFamily');
	// console.log(currentFont);
	
	// await workbenchConfig.update('fontFamily', 'Fira Code');

	// console.log("here");

// 	// ---------------------------------------------------------------

	// vscode.window.activeTextEditor.selections = [new vscode.Selection(new vscode.Position(0,0), new vscode.Position(0, 100))];

	// let typeDisposable = vscode.commands.registerCommand('editor.action.clipboardCopyAction', async (arg) => myCopy(typeDisposable)	);

	// async function myCopy(typeDisposable)  {

	// 	typeDisposable.dispose();      // must dispose to avoid endless loops

	// 	// run the built-in copy command
	// 	await vscode.commands.executeCommand('editor.action.clipboardCopyAction');

	// 	// get the copied text
	// 	const clipboardText = await vscode.env.clipboard.readText();
	// 	// use your clipboard text here
	// 	console.log(clipboardText);

	// 	// re-register to continue intercepting copy commands
	// 	typeDisposable = vscode.commands.registerCommand('editor.action.clipboardCopyAction', async (arg) => myCopy(typeDisposable)	);
	// 	context.subscriptions.push(typeDisposable);
	// }

	// context.subscriptions.push(typeDisposable);

	// await vscode.workspace.getConfiguration("folder-operations").get("operation");

	// const newURI = new vscode.Uri('C:\\Users\\Mark\\folder-operations\\snippets\\test.txt');

	// await vscode.commands.executeCommand('revealInExplorer', { fileUri: vscode.Uri.file('C:\\Users\\Mark\\folder-operations\\editTest.txt') },);

	// console.log(newURI);



	// const editor = vscode.window.activeTextEditor;


	// await vscode.workspace.openTextDocument(`c:\\Users\\Mark\\find-and-transform\\codeActions.md`)
	// .then(async doc => {
	// 	await vscode.window.showTextDocument(doc);
	// 	const editor = vscode.window.activeTextEditor;
	// 	editor.revealRange(new vscode.Range(new vscode.Position(44, 4), new vscode.Position(44, 8)), vscode.TextEditorRevealType.InCenter);
	// });

	// const tabs = vscode.window.tabs;

	// const openTerminalEditor = tabs.some(tab => tab.viewId === 'terminalEditor');

// vscode.debug.onDidChangeActiveDebugSession




	// vscode.window.onDidChangeTabs(tabs => {  
	// 	console.log(`tabs : ${tabs}`);          
	// })

	// registerCursorMove(context);    

	// let disposable1 = vscode.languages.registerHoverProvider('javascript', {
	// 	provideHover(document, position) {
	// 		const word = document.getText(document.getWordRangeAtPosition(position));
	// 		const searchOptions = {
	// 			query: word
	// 		};

	// 		const searchCommandUri = vscode.Uri.parse(
	// 			`command:workbench.action.findInFiles?${encodeURIComponent(JSON.stringify(searchOptions))}`
	// 		);
	// 		const contents = new vscode.MarkdownString(`[Search String](${searchCommandUri})`);

	// 		contents.isTrusted = true;
	// 		return new vscode.Hover(contents);
	// 	}
	// });
	// context.subscriptions.push(disposable1);

	// let disposable3 = vscode.languages.registerHoverProvider('plaintext', {
	// 	provideHover(document, position) {

	// 		let hoverRange;
	// 		const hoverLineText = document.lineAt(position.line).text;
	// 		const pattern = new RegExp("\\w+\\s*\\(.*\\s*\\)");

	// 		if (pattern.test(hoverLineText)){
	// 			hoverRange = document.getWordRangeAtPosition(position, pattern);
	// 			if (hoverRange) return new vscode.Hover(document.getText(hoverRange), new vscode.Range(position, position));
	// 		  else return null;
	// 		}
	// 		else return null;
	// 	}
	// });
	// context.subscriptions.push(disposable3);


	// let disposable4 = vscode.languages.registerHoverProvider('lisp', {
	// 	provideHover(document, position) {
			
			// a markdown table, wrapping in a styled span did not work
			// had to style each "cell" separately
			// html entity &nbsp; works

	// 		const markdown = new vscode.MarkdownString(`
	// |    <span style="color:#ff0;background-color:#000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>|    Header     |
	// |    :----:    |    :----:     |
	// |first cell    |second cell  |
	// |third cell    |<span style="color:#f00;background-color:#fff;">&nbsp;&nbsp;fourth cell&nbsp;&nbsp;</span>  |
	// 		\n\n\n`);  // the newline is necessary for any following appends to work correctly, multiple newlines are reduced to one
			
	// 		const styledString = `<span style="color:#fff;background-color:#666;">&nbsp;&nbsp;&nbsp;NASA code follows:&nbsp;&nbsp;&nbsp;</span>`;

	// 		const codeBlock = `const a = 12;
	// if (a) return;`;    // any preceding tabs will be rendered in a template literal, so flush left

	// 		// const codeBlock2 = `const c = 12;\nif (c) return;`;  // works, alternate form with newline

	// 		markdown.appendText("______________________________\n");  // a fake separator
	// 		markdown.appendMarkdown(styledString);
	// 		markdown.appendCodeblock(codeBlock, "javascript");
	// 		markdown.appendMarkdown(
	// `**Bold Text**
	// * some note
	// * another note
	// * final note`
	// 		);

// const value = "Jello";

// const content = new vscode.MarkdownString(`<span style="color:#000;background-color:#fff;">Howdy there.</span>`);
// content.appendMarkdown(`<p> Some label: <code>${value}</code></p>`);

// const commentCommandUri = vscode.Uri.parse(`command:launches.showAllLaunchConfigs`);
// const content = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);
// const content = new vscode.MarkdownString(`[Show All Launch Configs](${commentCommandUri})`);

// command:pkg.command
// content.supportHtml = true;

// content.isTrusted = true;

// return new vscode.Hover(content, new vscode.Range(position, position));

			// const contents = new vscode.MarkdownString(`[test-link](https://www.google.com)`);

			// contents.appendMarkdown("<a href='https://www.google.com'>test-link2</a>");
			// contents.supportHtml = true;

			// contents.isTrusted = true;
			// return new vscode.Hover(contents);
	// 	}
	// });

	// context.subscriptions.push(disposable4);

// 	let windowOpenOptions = {
// 		forceNewWindow: false,
// 		preferNewWindow: false
// 	}

// vscode.commands.executeCommand('_files.windowOpen', [
// 	// { folderUri: vscode.Uri.file('C:\\Users\\Mark\\OneDrive\\Test Bed') },
// 	{ fileUri: vscode.Uri.file('C:\\Users\\Mark\\OneDrive\\Test Bed\\test.md') }, // must be absolute path
// 	{ fileUri: vscode.Uri.file('C:\\Users\\Mark\\OneDrive\\Test Bed\\dest6\\dist\\test1.txt') }
// ],
// 	windowOpenOptions
// );


	let disposable2 = vscode.commands.registerCommand('folder-operations.createFile', async  (...file) =>  {

		// const filePath = vscode.window.tabGroups.activeTabGroup.activeTab.input.uri.fsPath;
		// await openDefault(filePath);
		console.log(file);

});

// async function createFileOpen(folder) {

//   const we = new vscode.WorkspaceEdit();

//   const thisWorkspace = await vscode.workspace.workspaceFolders[0].uri.toString();

//   // if you want it to be in some folder under the workspaceFolder: append a folder name

//   // const uriBase = `${thisWorkspace}/folderName`;
//   // let newUri1 = vscode.Uri.parse(`${uriBase}/index.js`);

//   // create a Uri for a file to be created
//   // const newUri = await vscode.Uri.parse(`${ thisWorkspace }\\myTestIndex.js`);
//   // const newUri = await vscode.Uri.parse(`${ folder }\\myTestIndex.js`, true);
//   const newUri = await vscode.Uri.joinPath(folder, `myTestIndex.js`);

//   await we.createFile(newUri, { ignoreIfExists: false, overwrite: true });  // create an edit that will create a file

//   await vscode.workspace.applyEdit(we); // apply the edit: in this case file creation

//   await vscode.workspace.openTextDocument(newUri)
//     .then(async document => {
//       await vscode.window.showTextDocument(document);
//     });

  // await vscode.commands.executeCommand('editor.action.insertSnippet', { 'name': 'My Custom Snippet Label Here'});



	// const provider2 = vscode.languages.registerCompletionItemProvider(
	// 	'lisp',
	// 	{
	// 		provideCompletionItems(document, position) {
	
	// 			const linePrefix = document.lineAt(position).text.substr(0, position.character);
	// 			if (!linePrefix.endsWith('console:')) {
	// 				return undefined;
	// 			}
	
	// 			// const simpleCompletion = new vscode.CompletionItem(':foo');
	// 			const simpleCompletion = new vscode.CompletionItem(":foo");
	// 			simpleCompletion.detail = "myDetail";
	// 			simpleCompletion.documentation = "myDocumentation";

	// 			// const launchCommandUri = vscode.Uri.parse(`command:launches.showAllLaunchConfigs`);
	// 			const commentCommandUri = vscode.Uri.parse(`command:editor.action.addCommentLine`);

	// 			const content = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);
	// 			// const content = new vscode.MarkdownString(`[Show All Launch Configs](${commentCommandUri})`);

	// 			// command:pkg.command
	// 			content.supportHtml = true;

	// 			content.isTrusted = true;

	// 			// const markdownDocumentation = new vscode.MarkdownString();
	// 			// markdownDocumentation.supportHtml = true;
	
	// 			// 									// bad lineHeight? when using <br/> tag to insert a line break
	// 			// markdownDocumentation.appendMarkdown("<h1>howdy1<br/>howdy1</h1>");
	// 			// markdownDocumentation.appendMarkdown("<h1>howdy1.1</h1><br/><h1>howdy1.1</h1>");

	// 			// markdownDocumentation.appendMarkdown("<h2>howdy2<br/>howdy2</h2>");
	
	// 			// 									// good lineHeight when using a <p> tag to separate blocks of html
	// 			// markdownDocumentation.appendMarkdown("<p><h1>howdy3</h1></p><p><h1>howdy3</h1></p>");
	// 			// markdownDocumentation.appendMarkdown("<p><h2>howdy4</h2></p><p><h2>howdy4</h2></p>");

	// 			// markdownDocumentation.appendMarkdown("<ol><li>item1</li><li><span style='color:#000;background-color:#fff;'>item2</span></li><li>item3</li></ol>");


	// 			// <span style='color:#000;background-color:#fff;'>
	
	// 			// simpleCompletion.documentation = markdownDocumentation;
	// 			simpleCompletion.documentation = content;
				
	// 			// const word = vscode.window.activeTextEditor.document.getWordRangeAtPosition(position);
				
	// 			simpleCompletion.range = new vscode.Range(position.line, position.character-1, position.line, position.character);
				
	// 			return [simpleCompletion];
	// 		}
	// 	},
	// 	':' // triggered whenever a '.' is being typed
	// });

	// context.subscriptions.push(provider2);
// }



// exports.activate = activate;

// this method is called when your extension is deactivated
// function deactivate() {}


async function deactivate()  {
	return await vscode.workspace.getConfiguration("folder-operations").update("operation",undefined, true);
}

module.exports = {
	activate,
	deactivate
}