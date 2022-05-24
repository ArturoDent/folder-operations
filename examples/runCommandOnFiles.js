const vscode = require('vscode');


async function runCommandAcrossAllFilesInWorkspace() {

  // populate a QuickPick for the commands?
  let commands = await vscode.commands.getCommands(true);
  console.log(commands);

  // QuickPick for the folder - including "All in Workspace"
  let files = await vscode.workspace.findFiles(new vscode.RelativePattern(vscode.workspace.workspaceFolders[0], 'Checks/**/*.js'), '../node_modules/**');
  console.log(files);  // array[n].path = "/c:/Users/Mark/OneDrive/BuildSACC/Checks/soloResidentsNB.js"
 

  // return vscode.window.showInputBox( {
  //   placeHolder: "Enter a command to run"
  // }).then(command => {
  //   if (command) {
    // open each TextDocument, create and apply edit
  //     return vscode.commands.executeCommand(command)
  //   }
  // });
  
}