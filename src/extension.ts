// For help on publishing extensions see the following link: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
// But here are the steps:
// cd myExtension
// $ vsce package
// # myExtension.vsix generated
// $ vsce publish
// # <publisher id>.myExtension published to VS Code Marketplace
// 
//
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vs-code-keybindings-for-pybricks" is now active!');

	// Create a status bar item to show the fllRobotName setting
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	statusBarItem.tooltip = 'Open User Settings (json)';
	statusBarItem.command = 'vs-code-keybindings-for-pybricks.openFllRobotSettings';
	context.subscriptions.push(statusBarItem);

	// Command invoked when the status bar item is clicked
	const openSettingsDisposable = vscode.commands.registerCommand('vs-code-keybindings-for-pybricks.openFllRobotSettings', () => {
		// Open the user settings JSON file
		vscode.commands.executeCommand('workbench.action.openSettingsJson').then(() => {
			// Try to add a sample entry to the user settings
			const editor = vscode.window.activeTextEditor;
			if (editor && editor.document.fileName.endsWith('settings.json')) {
				const sampleEntry = `"fllRobotName": "SampleRobotName"`;
				const text = editor.document.getText();
				if (!text.includes('"fllRobotName"')) {
					// Find the position after the first opening brace
					const firstBrace = text.indexOf('{');
					if (firstBrace !== -1) {
						const edit = new vscode.WorkspaceEdit();
						const position = editor.document.positionAt(firstBrace + 1);
						// If the file has other entries, add a comma after the new entry
						const afterBraceText = text.substring(firstBrace + 1).trim();
						const entryText = '\n' + sampleEntry + (afterBraceText.length > 0 && afterBraceText !== '}' ? ',\n' : '\n');
						edit.insert(editor.document.uri, position, entryText);
						vscode.workspace.applyEdit(edit);
					}
				}
			}
		});
	});
	context.subscriptions.push(openSettingsDisposable);

	// Helper to update the status bar based on configuration
	function updateStatus() {
		const config = vscode.workspace.getConfiguration();
		const name = config.get<string>('fllRobotName');
		if (!name) {
			statusBarItem.text = 'fllRobotName is not set';
			statusBarItem.color = '#ff0000';
		} else {
			statusBarItem.text = `fllRobotName: ${name}`;
			statusBarItem.color = '#00ff00';
		}
		statusBarItem.show();
	}

	// Update status initially
	updateStatus();

	// Watch for configuration changes
	const configWatcher = vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration('fllRobotName')) {
			updateStatus();
		}
	});
	context.subscriptions.push(configWatcher);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('vs-code-keybindings-for-pybricks.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from VS Code Keybindings for Pybricks!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
