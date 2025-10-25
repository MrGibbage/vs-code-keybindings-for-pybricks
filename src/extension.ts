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
export function activate(context: vscode.ExtensionContext) {

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
            // user set this to green already; keep green
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

    // Remove sample keybindings from the user's keybindings.json (only the samples)
    async function removeSampleKeybindings() {
        // Exact-match sample keybindings to remove (must exactly match fields to be removed)
        const exactSamples = [
            { "key": "ctrl+alt+l 1", "command": "workbench.action.tasks.runTask", "args": "Run on robot1" },
            { "key": "ctrl+alt+l 2", "command": "workbench.action.tasks.runTask", "args": "Run on robot2" },
            { "key": "ctrl+alt+l 3", "command": "workbench.action.tasks.runTask", "args": "Run on robot3" },
            { "key": "ctrl+alt+l 4", "command": "workbench.action.tasks.runTask", "args": "Run on robot4" },
            { "key": "ctrl+alt+l 5", "command": "workbench.action.tasks.runTask", "args": "Run on robot5" },
            { "key": "ctrl+alt+l 6", "command": "workbench.action.tasks.runTask", "args": "Run on robot6" },
            { "key": "ctrl+alt+l 7", "command": "workbench.action.tasks.runTask", "args": "Run on robot7" },
            { "key": "ctrl+alt+l 8", "command": "workbench.action.tasks.runTask", "args": "Run on robot8" },
            { "key": "ctrl+alt+l 9", "command": "workbench.action.tasks.runTask", "args": "Run on robot9" },
            { "key": "ctrl+alt+l 0", "command": "workbench.action.tasks.runTask", "args": "Run on robot0" },
            { "key": "ctrl+alt+l -", "command": "workbench.action.tasks.runTask", "args": "Run on robot-" },
            { "key": "ctrl+alt+l =", "command": "workbench.action.tasks.runTask", "args": "Run on robot=" },
            // Note: ctrl+shift+l was intentionally moved out of exactSamples and is handled by partialKeys below.
        ];

        // Partial-match keys: remove any entry that uses one of these keys, regardless of command/args.
        const partialKeys = new Set([
            "ctrl+l",
            "ctrl+shift+l",
            "ctrl+alt+l",
            "ctrl+shift+alt+l"
        ]);

        // Open the user's global keybindings.json in the editor
        await vscode.commands.executeCommand('workbench.action.openGlobalKeybindingsFile');

        const editor = vscode.window.activeTextEditor;
        if (!editor || !editor.document.fileName.endsWith('keybindings.json')) {
            return;
        }
        const text = editor.document.getText();

        // Try to parse the file as JSON. If parsing fails (comments, trailing commas, etc.), bail out.
        let parsed: any;
        try {
            parsed = JSON.parse(text || '[]');
        } catch {
            // Could not parse keybindings.json safely; do not modify user's file.
            return;
        }

        if (!Array.isArray(parsed)) {
            return;
        }

        function entryMatchesExact(sample: any, entry: any) {
            const keyMatch = sample.key === entry.key;
            const commandMatch = sample.command === entry.command;
            const argsMatch = (sample.args === undefined && entry.args === undefined)
                || JSON.stringify(sample.args) === JSON.stringify(entry.args);
            return keyMatch && commandMatch && argsMatch;
        }

        // Filter out any entries that match an exact sample OR whose key is in partialKeys
        const filtered = parsed.filter((entry: any) => {
            // If entry key matches one of the partial keys, remove it
            if (typeof entry.key === 'string' && partialKeys.has(entry.key)) {
                return false; // drop this entry
            }
            // Otherwise, remove only if it exactly matches one of the exactSamples
            if (exactSamples.some(sample => entryMatchesExact(sample, entry))) {
                return false; // drop this entry
            }
            return true; // keep otherwise
        });

        // If nothing to remove, return without editing
        if (filtered.length === parsed.length) {
            return;
        }

        // Replace entire document with cleaned content (pretty-printed)
        const fullRange = new vscode.Range(
            editor.document.positionAt(0),
            editor.document.positionAt(text.length)
        );

        const editSuccess = await editor.edit(editBuilder => {
            editBuilder.replace(fullRange, JSON.stringify(filtered, null, 4));
        });

        if (editSuccess) {
            const removedCount = parsed.length - filtered.length;
            if (removedCount > 0) {
                const message = `${removedCount} sample keybinding${removedCount === 1 ? '' : 's'} removed`;
                // Non-intrusive notification with an action to view the keybindings file
                vscode.window.showInformationMessage(message, 'View keybindings').then(selection => {
                    if (selection === 'View keybindings') {
                        vscode.commands.executeCommand('workbench.action.openGlobalKeybindingsFile');
                    }
                });
            }
        }
    }

    // Run the removal once on activation. It will do nothing if parsing fails or if no matches.
    removeSampleKeybindings().catch(() => { /* fail silently */ });

    // The command has been defined in the package.json file
    const disposable = vscode.commands.registerCommand('vs-code-keybindings-for-pybricks.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from VS Code Keybindings for Pybricks!');
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
