const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// const argv = require('yargs/yargs')(process.argv.slice(2)).argv;



/**
 * {@link namepathOrURL}
 * 
 * [Link](https://example.com)
 */
async function activate(context) {

	// revealInExplorer

	// C:\Users\Mark\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\node_modules\typescript

	// System Installer will install VSC in C:\Program Files\Microsoft VS Code\
	// User Installer will install VSC in %HOMEPATH%\AppData\Local\Programs\Microsoft VS Code\

	const appRoot = vscode.env.appRoot;
	// C:\Users\Mark\AppData\Local\Programs\Microsoft VS Code\resources\app

	const tsPath = path.join(appRoot, "extensions", "node_modules", "typescript", "package.json");
	const tsVersion = JSON.parse(fs.readFileSync(tsPath)).version;

	// this gets the typescript-basics extension, not what we want
	// const tsExtension = await vscode.extensions.getExtension('vscode.typescript');

	const all = await vscode.extensions.all;

	console.log(all.id);

	const languageExtensions = all.filter(extension => extension.packageJSON?.contributes?.languages !== undefined);

	console.log(languageExtensions);

	// let disposable = vscode.commands.registerCommand('type', async (args) => {
	// 	console.log(`type with args`, args);
	// 	return vscode.commands.executeCommand('default:type', args);
	// 	console.log("here");
	// })

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

	// const  editor = vscode.window.activeTextEditor;
	// await vscode.languages.setTextDocumentLanguage(editor.document, 'javascript');

	// const insertString = `using System;

	// 	namespace HelloWorld {
	// 	class HelloWorld {
	// 	static void Main(string[] args) {
	// 	Console.WriteLine("Hello World!");
	// 	}
	// 	}
	// 	}`;

	// // await vscode.commands.executeCommand('editor.action.insertLineAfter');
	// // await vscode.commands.executeCommand('editor.action.insertLineAfter');

	// await editor.edit(editBuilder => {
	// 	editBuilder.insert(new vscode.Position(10,0), insertString);
	// });

	// await vscode.commands.executeCommand('editor.action.selectAll');
	// await vscode.commands.executeCommand('editor.action.formatSelection');
	// await vscode.commands.executeCommand('cancelSelection');

	// -------------------------



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

	const tabs = vscode.window.tabs;

	const openTerminalEditor = tabs.some(tab => tab.viewId === 'terminalEditor');

	vscode.window.onDidChangeActiveTab(tab => {  
		console.log(`tab : ${tab}`);  
	});

	vscode.window.onDidChangeTabs(tabs => {  
		console.log(`tabs : ${tabs}`);          
	})

	registerCursorMove(context);    

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


	let disposable4 = vscode.languages.registerHoverProvider('lisp', {
		provideHover(document, position) {
			
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

const value = "Jello";

// const content = new vscode.MarkdownString(`<span style="color:#000;background-color:#fff;">Howdy there.</span>`);
// content.appendMarkdown(`<p> Some label: <code>${value}</code></p>`);

const commentCommandUri = vscode.Uri.parse(`command:launches.showAllLaunchConfigs`);
// const content = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);
const content = new vscode.MarkdownString(`[Show All Launch Configs](${commentCommandUri})`);

// command:pkg.command
content.supportHtml = true;

content.isTrusted = true;

return new vscode.Hover(content, new vscode.Range(position, position));

			// const contents = new vscode.MarkdownString(`[test-link](https://www.google.com)`);

			// contents.appendMarkdown("<a href='https://www.google.com'>test-link2</a>");
			// contents.supportHtml = true;

			// contents.isTrusted = true;
			// return new vscode.Hover(contents);
		}
	});

	context.subscriptions.push(disposable4);

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

	// context.subscriptions.push(
  //   vscode.commands.registerCommand(
  //     "folder-operations.getFoldersInWorkspace",
  //     async () => {
  //       const { activeTextEditor } = vscode.window;

  //       // if (!activeTextEditor) {
  //         vscode.window.showInformationMessage("No *active text* editor");
  //         // return;
  //       }));

	// 			// const answer = await vscode.window.showInformationMessage("Want to close tabs?", { modal: true }, "Yes", "No");

  //       // if (answer === "Yes") {
  //       //   vscode.commands.executeCommand("openEditors.closeAll");
  //       // }
  //       // ON_ENTER: I was thinking an if case here that checks if enter has been pressed and also executes the command above?
  //     }
    // )
  // );


	// vscode.workspace.onDidOpenTextDocument(ev => {

	// 	vscode.commands.executeCommand('editor.foldAll');
	// })

	// let disposable2 = vscode.commands.registerCommand('vscode.diff', async function (args) {
	// 	console.log(args);
	// });
	// context.subscriptions.push(disposable2);

	// let disposable3 = vscode.commands.registerCommand('git.timeline.openDiff', async function (args) {
	// 	console.log(args);
	// });
	// context.subscriptions.push(disposable3);


  // get selected text
  // const selection = vscode.window.activeTextEditor.selection;
  // const query = vscode.window.activeTextEditor.document.getText(selection);

	// let outerDisposable = vscode.commands.registerCommand('folder-operations.createFile', () => {

	// 	let typeDisposable = vscode.commands.registerCommand('type', arg => {
	// 		// return vscode.commands.executeCommand('default:type', arg);

	// 		const editor = vscode.window.activeTextEditor;

	// 		const selections = editor.selections;

	// 		selections.forEach((selection, index) => {

	// 			let curPos = selection.active;
	// 			let curIndex = editor.document.offsetAt(curPos);

	// 			const lastLine = editor.document.lineAt(editor.document.lineCount - 1);
	// 			let curEndRange = new vscode.Range(curPos, lastLine.range.end);

	// 			let queryIndex = editor.document.getText(curEndRange).indexOf(arg.text);

	// 			// if queryIndex === 0, skip it and jump to next
	// 			if (queryIndex === 0) {
	// 				curPos = new vscode.Position(curPos.line, curPos.character + 1);
	// 		 	 	curEndRange = new vscode.Range(curPos, lastLine.range.end);
	// 				queryIndex = editor.document.getText(curEndRange).indexOf(arg.text);
	// 				curIndex = editor.document.offsetAt(curPos);
	// 			}

	// 			const queryPos = editor.document.positionAt(queryIndex + curIndex);

	// 			// select from cursor to query?
	// 			if (queryIndex !== -1) {
	// 				// selections[index] = new vscode.Selection(queryPos, queryPos);

	// 				// to select
	// 				selections[index] = new vscode.Selection(curPos, queryPos);
	// 			}
	// 		});

	// 		editor.selections = selections;

	vscode.commands.executeCommand('setContext', 'ext.list',
    [ 'bundle', 'concat' ]
  );

	let disposable2 = vscode.commands.registerCommand('folder-operations.createFile', async function () {

		const editor = vscode.window.activeTextEditor;
		const document = editor.document;
		const oldSelections = editor.selections;
		const newSelections = [];

		// how to recognize the comment characters for the current document
		// store them once retrieved

		// for (const selection of editor.selections) {
			
		// 	const startChar = document.getText(new vscode.Range(selection.start, new vscode.Position(selection.start.line, selection.start.character+1)));
		// 	// if char = " ", get next char?  No, allow to just add spaces
		// 	const startPosChar = selection.start.character;
		// 	const numLines = selection.end.line - selection.start.line + 1;

			const re = / *#/g;
			const re2 = /\t*#/g;
			const re3 = /[ \t]*#/g;


		// 	// const re = new RegExp(`\\s*${startChar}`, 'g');
			const firstLineText = document.lineAt(editor.selection.start.line).text;
			const numSpaces = [...firstLineText.matchAll(re)][0][0].length - 1;
			const numTabs = [...firstLineText.matchAll(re2)][0][0].length - 1;
			const numTabsSpaces = [...firstLineText.matchAll(re3)][0][0].length - 1;

		// 	// const firstLineLength = firstLineText.length;

		// 	for (let index = 1; index < numLines; index++) {

		// 		const line = selection.start.line + index;  // a line number
		// 		const endOfLine = document.lineAt(line).text.length;

		// 		const spaceString = " ".padEnd(startPosChar - endOfLine, " ");

		// 		await editor.edit(builder => {
		// 			builder.insert(new vscode.Position(line, endOfLine), `${spaceString}${startChar}`)
		// 		});

		// 		const selectPos = new vscode.Position(line, startPosChar);
		// 		newSelections.push(new vscode.Selection(selectPos, selectPos));
		// 	}

		// 	const selectPos = new vscode.Position(selection.start.line, startPosChar);
		// 	newSelections.push(new vscode.Selection(selectPos, selectPos));
		// }

		// editor.selections = newSelections;

		// ---------------------------------------------

		// get the tabsize?

		editor.edit(function (edit) {

			let j = 0;

			oldSelections.forEach(async (selection, index) => {

				const startChar = document.getText(new vscode.Range(selection.start, new vscode.Position(selection.start.line, selection.start.character+1)));
				const startPosChar = selection.start.character;

				let selectPos = new vscode.Position(selection.start.line, startPosChar);
				newSelections[j++] = new vscode.Selection(selectPos, selectPos);
	
					for (let i = selection.start.line + 1; i <= selection.end.line; i++) {

						selectPos = new vscode.Position(i, startPosChar);
						newSelections[j++] = new vscode.Selection(selectPos, selectPos);

						const endOfLine = document.lineAt(i).text.length;
						const spaceString = "".padEnd(startPosChar - endOfLine, " ");
						edit.insert(new vscode.Position(i, endOfLine), `${spaceString}${startChar}`);

						// const selectPos = new vscode.Position(i, startPosChar);
						// newSelections.push(new vscode.Selection(selectPos, selectPos));
					}
			});
	}).then(success => {
			if (!success) {
					return
			}
			 if (true) {
				// editor.selections = newSelections;
			}
	})

	editor.selections = newSelections;
	await vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');



		// vscode.commands.executeCommand('workbench.action.findInFiles',
		// 	{
		// 		query: "\"(.+)\"",
		// 		replace: "'$1'",
		// 		triggerSearch: true,
		// 		isRegex: true,
		// 		filesToInclude: fileName
		// 		// preserveCase: true,
		// 		// useExcludeSettingsAndIgnoreFiles: true,
		// 		// isCaseSensitive: true,
		// 		// matchWholeWord: true,
		// 		// filesToExclude: "./*.css"
		// 	}).then(() => {
		// 		setTimeout(() => {
		// 			vscode.commands.executeCommand('search.action.replaceAll');
		// 		}, 1000);
		// 	});
	});

	context.subscriptions.push(disposable2);

	// 		// let curPos = editor.selection.active;
	// 		// let curIndex = editor.document.offsetAt(curPos);

	// 		// const lastLine = editor.document.lineAt(editor.document.lineCount - 1);
	// 		// const curEndRange = new vscode.Range(curPos, lastLine.range.end);

	// 		// const firstLine = editor.document.lineAt(0);
	// 		// const curStartRange = new vscode.Range(firstLine.range.start, curPos);

	// 		// doc test from cursor to end
	// 		// if queryIndex === 0, skip it and jump to next
	// 		// let queryIndex = editor.document.getText(curEndRange).indexOf(arg.text);
	// 		// let queryPos = editor.document.positionAt(queryIndex + curIndex);

	// 		// // select from cursor to query?
	// 		// if (queryIndex !== -1) {
	// 		// 	editor.selection = new vscode.Selection(
	// 		// 		new vscode.Position(queryPos.line, queryPos.character),
	// 		// 		new vscode.Position(queryPos.line, queryPos.character),
	// 		// 	);
	// 		// }

	// 		// doc test from start to cursor
	// 		// editor.document.getText(curStartRange)

	// 		context.subscriptions.push(typeDisposable);
	// 		typeDisposable.dispose();
	// 	});

	// });

	// context.subscriptions.push(outerDisposable);

	// return;

	// const quickPickWorkspace = async () => {
	// 	const folder = await vscode.window.showWorkspaceFolderPick({ placeHolder: 'Pick the workplace folder...' });
	// 	if (folder) {
	// 		// console.log(folder.uri); // Always correct / different
	// 		const configuration = vscode.workspace.getConfiguration('', folder.uri);
	// 		const currentValue = configuration.get('boxed-components.useTemplates');
	// 		console.log('Reading:', currentValue); // Always the same settings (incorrect)
	// 	}
	// };



  // vscode.commands.executeCommand('workbench.action.findInFiles',
  //   {
  //     query: "customCommentHowdy",
  //     replace: "that's so swell",
  //     triggerSearch: true,
  //     preserveCase: true,
  //     useExcludeSettingsAndIgnoreFiles: true,
  //     isRegex: false,
  //     isCaseSensitive: true,
  //     matchWholeWord: true,
  //     filesToInclude: "",
  //     filesToExclude: "./*.css"
  //   }).then(() => {
  //     setTimeout(() => {
  //       vscode.commands.executeCommand('search.action.replaceAll');
  //     }, 1000);
  //   });



  // vscode.commands.executeCommand('search.action.replaceAll');

  // await vscode.commands.executeCommand('search.action.replaceAll');

  // let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");


  // console.log(context.extensionPath);

	// iif

  // const pathToFile = path.join(context.extensionPath, 'examples/runTasks.js');
  // const uriToFile = vscode.Uri.file(pathToFile);


  // fs.copyFileSync(pathToFile, vscode.workspace.workspaceFolders[0].uri.fsPath);
  // const fileContentsToMove = fs.readFileSync(pathToFile).toString();

  // fs.writeFileSync(vscode.workspace.workspaceFolders[0].uri.fsPath, fileContentsToMove);

  // writeFile(uri: Uri, content: Uint8Array, options: {create: boolean, overwrite: boolean}): void | Thenable<void>

  // vscode.workspace.fs.readFile(uriToFile)
  //   .then(e => {
  //     console.log(e.toString());
  //   });

  // await vscode.workspace.fs.copy(uriToFile, vscode.workspace.workspaceFolders[0].uri, { overwrite: true })
  //   .then(e => {
  //     console.log(e);
  // })

// C:\Users\Mark\folder-operations\examples\runTasks.js
  // let activeEditor = vscode.window.activeTextEditor;

  // vscode.workspace.onDidChangeTextDocument(event => {
  //   console.log(event);
  // })

  // workspaceConfiguration.inspect(key).languages[scopedLanguage].defaultValue
  // vscode.workspace.getConfiguration().inspect('autoClosingPairs').languages['javascript'].defaultValue;

    // let temp = vscode.workspace.getConfiguration().get("javascript.autoClosingPairs");
  // let temp = vscode.workspace.getConfiguration('javascript', { languageId: 'javascript' } );

  // const editor = vscode.window.activeTextEditor;
  // const documentLanguageId = editor.document.languageId;
  // var langConfigFilepath = null;

  // for (const _ext of vscode.extensions.all) {
  //   // All vscode default extensions ids starts with "vscode."
  //   if (
  //     _ext.id.startsWith("vscode.") &&
  //     _ext.packageJSON.contributes &&
  //     _ext.packageJSON.contributes.languages
  //   ) {
  //     // Find language data from "packageJSON.contributes.languages" for the languageId
  //     const packageLangData = _ext.packageJSON.contributes.languages.find(
  //       _packageLangData => (_packageLangData.id === documentLanguageId)
  //     );
  //     // If found, get the absolute config file path
  //     if (!!packageLangData) {
  //       langConfigFilepath = path.join(
  //         _ext.extensionPath,
  //         packageLangData.configuration
  //       );
  //       break;
  //     }
  //   }
  // }
  // // Validate config file existance
  // if (!!langConfigFilepath && fs.existsSync(langConfigFilepath)) {

  //   let langConfig = require(langConfigFilepath);
  //   let aCPs = langConfig.autoClosingPairs; // if you prefer this route

  //   // or use this
  //   let aCPs2 = JSON.parse(fs.readFileSync(langConfigFilepath).toString()).autoClosingPairs;
  //   console.log(aCPs);
  //   // PROFIT
  // }


  // vscode.workspace.onDidSaveTextDocument(event2 => {
  //   console.log(event2);
  // })



    // explorerResourceIsFolder
	// let createFile = vscode.commands.registerCommand('folder-operations.createFile', async (file, folder) => {

	// 	// quickPickWorkspace();

  //   let newUri = folder;

  //    if (!folder) {
  //      await vscode.commands.executeCommand('copyFilePath');
  //      console.log(file);
  //      folder = await vscode.env.clipboard.readText();

  //     //check if a file: fs.access()

  //      newUri = await vscode.Uri.file(folder);
  //    }

  //    createFileOpen(newUri);
  // });
  // context.subscriptions.push(createFile);

	// let disposable = vscode.commands.registerCommand('folder-operations.getFoldersInWorkspace', async function () {

  //   // get the workspaceFolder of the current file, check if multiple workspaceFolders
  //   // a file must be opened
  //   const wsFolders = await vscode.workspace.workspaceFolders;
  //   if (!wsFolders)  vscode.window.showErrorMessage('There is no workspacefolder open.')




	// });

  //    context.subscriptions.push(disposable);
// }



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



	const provider2 = vscode.languages.registerCompletionItemProvider(
		'lisp',
		{
			provideCompletionItems(document, position) {
	
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('console:')) {
					return undefined;
				}
	
				// const simpleCompletion = new vscode.CompletionItem(':foo');
				const simpleCompletion = new vscode.CompletionItem(":foo");
				simpleCompletion.detail = "myDetail";
				simpleCompletion.documentation = "myDocumentation";

				// const launchCommandUri = vscode.Uri.parse(`command:launches.showAllLaunchConfigs`);
				const commentCommandUri = vscode.Uri.parse(`command:editor.action.addCommentLine`);

				const content = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);
				// const content = new vscode.MarkdownString(`[Show All Launch Configs](${commentCommandUri})`);

				// command:pkg.command
				content.supportHtml = true;

				content.isTrusted = true;

				// const markdownDocumentation = new vscode.MarkdownString();
				// markdownDocumentation.supportHtml = true;
	
				// 									// bad lineHeight? when using <br/> tag to insert a line break
				// markdownDocumentation.appendMarkdown("<h1>howdy1<br/>howdy1</h1>");
				// markdownDocumentation.appendMarkdown("<h1>howdy1.1</h1><br/><h1>howdy1.1</h1>");

				// markdownDocumentation.appendMarkdown("<h2>howdy2<br/>howdy2</h2>");
	
				// 									// good lineHeight when using a <p> tag to separate blocks of html
				// markdownDocumentation.appendMarkdown("<p><h1>howdy3</h1></p><p><h1>howdy3</h1></p>");
				// markdownDocumentation.appendMarkdown("<p><h2>howdy4</h2></p><p><h2>howdy4</h2></p>");

				// markdownDocumentation.appendMarkdown("<ol><li>item1</li><li><span style='color:#000;background-color:#fff;'>item2</span></li><li>item3</li></ol>");


				// <span style='color:#000;background-color:#fff;'>
	
				// simpleCompletion.documentation = markdownDocumentation;
				simpleCompletion.documentation = content;
				
				// const word = vscode.window.activeTextEditor.document.getWordRangeAtPosition(position);
				
				simpleCompletion.range = new vscode.Range(position.line, position.character-1, position.line, position.character);
				
				return [simpleCompletion];
			}
		},
		':' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider2);
}



// exports.activate = activate;

// this method is called when your extension is deactivated
// function deactivate() {}

async function registerCursorMove(context)  {

	let disposable = vscode.commands.registerCommand('cursorMove', async function (args) {
		
		const editor = vscode.window.activeTextEditor;
		await disposable.dispose();

		if (args.by === "halfPage")  {
			const visibleRange = editor.visibleRanges;
			const halfViewPortHeight = (visibleRange[0].end.line - visibleRange[0].start.line) / 2;
			args.by = "line";
			if (!args.value) args.value = 1;
			args.value = args.value * Math.floor(halfViewPortHeight);
		}
		await vscode.commands.executeCommand('cursorMove', args);
		registerCursorMove(context);
	});

	context.subscriptions.push(disposable);
}

async function deactivate()  {
	return await vscode.workspace.getConfiguration("folder-operations").update("operation",undefined, true);
}

module.exports = {
	activate,
	deactivate
}