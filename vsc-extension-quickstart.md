# Welcome to your VS Code Extension

## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file in which you declare your extension and command.
  * The sample plugin registers a command and defines its title and command name. With this information VS Code can show the command in the command palette. It doesn’t yet need to load the plugin.
* `src/extension.ts` - this is the main file where you will provide the implementation of your command.
  * The file exports one function, `activate`, which is called the very first time your extension is activated (in this case by executing the command). Inside the `activate` function we call `registerCommand`.
  * We pass the function containing the implementation of the command as the second parameter to `registerCommand`.

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Run your command from the command palette by pressing (`Ctrl+Shift+P`) and typing `Hello World`.
* Set breakpoints in your code inside `src/extension.ts` to debug your extension.
* Find output from your extension in the debug console.

### Testing keybindings removal (safe local test, Windows)

1. Build the extension code (recommended)
   - In the workspace terminal run:
     - npm run compile

2. Launch Extension Development Host
   - Press F5 (Run → Start Debugging). A new VS Code window (Extension Development Host) will open. This host has its own user profile — your normal VS Code settings/keybindings are not used here.

3. Prepare the host's keybindings.json
   - In the Extension Development Host press `Ctrl+Shift+P` and run: Preferences: Open Keyboard Shortcuts (JSON) (command id: workbench.action.openGlobalKeybindingsFile).
   - Replace the file contents with a valid JSON array containing the sample entries you expect the extension to remove. IMPORTANT: the extension uses JSON.parse on this file, so the file must be strict JSON (no comments, no trailing commas).

4. Trigger the removal
   - Reload the Extension Development Host so the extension re-activates and runs removeSampleKeybindings():
     - `Ctrl+Shift+P` → Developer: Reload Window
   - After reload, re-open the Keyboard Shortcuts (JSON) file to confirm the sample entries were removed.

5. Test status bar and the `fllRobotName` setting
   - In the Extension Development Host open user settings JSON:
     - `Ctrl+Shift+P` → Preferences: Open User Settings (JSON) (command id: workbench.action.openSettingsJson)
   - Add or remove the `"fllRobotName": "YourRobotName"` entry and save. The status bar should update automatically (green when set, red when missing).

6. Optional quick test without reload
   - If you prefer not to reload, temporarily expose a command that calls the removal function, register it in package.json, run the host, invoke the command from the host's command palette, then remove the helper command before publishing.

Notes
* The Extension Development Host uses a separate profile; all testing must be done inside that host.
* Because the removal currently uses JSON.parse, files that include comments or trailing commas (JSONC) will not be changed — this is deliberate to avoid corrupting users' files.
* No publishing or reinstall is required to test — F5 plus edits inside the host is sufficient.

## Make changes

* You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Explore the API

* You can open the full set of our API when you open the file `node_modules/@types/vscode/index.d.ts`.

## Run tests

* Install the [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* Run the "watch" task via the **Tasks: Run Task** command. Make sure this is running, or tests might not be discovered.
* Open the Testing view from the activity bar and click the Run Test" button, or use the hotkey `Ctrl/Cmd + ; A`
* See the output of the test result in the Test Results view.
* Make changes to `src/test/extension.test.ts` or create new test files inside the `test` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.
  * You can create folders inside the `test` folder to structure your tests any way you want.

## Go further

* [Follow UX guidelines](https://code.visualstudio.com/api/ux-guidelines/overview) to create extensions that seamlessly integrate with VS Code's native interface and patterns.
* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
* Integrate to the [report issue](https://code.visualstudio.com/api/get-started/wrapping-up#issue-reporting) flow to get issue and feature requests reported by users.
