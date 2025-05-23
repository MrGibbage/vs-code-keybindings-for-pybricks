# vs-code-keybindings-for-pybricks README

## Features

Simply provides keybindings for pybricks using FLL Teams 24277's VS Code task configuration.

## Requirements

1. Set up a virtual environment for your pybrick project
2. `pip install pybricks`
3. `pip install pybricksdev`

Read more about [Pybricks](https://pybricks.com)

4. Copy [tasks.json](https://github.com/FLL-Team-24277/FLL-Fall-2024-Submerged/blob/main/.vscode/tasks.json) from FLL Team 24277 file saved in your project's .vscode directory.
5. Edit your copy of the tasks.json with any updates you have. In particular, you will need to update the list of robots about 2/3 of the way in the file.
6. Set a user environment variable named robotName and set the value to your robot name. Everything is case sensitive. Restart VS Code after updating the environment variable.
7. Test it out! Write a pybricks program that you want to run on a Lego hub. With that file open and active in the editor, press ctrl-l. It should run on your hub.


## Extension Settings

This extension contributes the following keybindings:

* ctrl-l: Run on my robot
* ctrl-alt-l: Run on Alt robot
* ctrl-shift-l: Run master_program.py on my robot
* ctrl-alt-shift-l: Run master_program.py on alt robot

## Provides

Review the "package.json" file to see the details, But this adds four keybindings:

```json
      {
        "key": "ctrl+l",
        "command": "workbench.action.tasks.runTask",
        "args": "Run on my robot"
      },
      {
        "key": "ctrl+alt+l",
        "command": "workbench.action.tasks.runTask",
        "args": "Run on alt robot"
      },
      {
        "key": "ctrl+shift+l",
        "command": "workbench.action.tasks.runTask",
        "args": "Run master_program.py on my robot"
      },
      {
        "key": "ctrl+shift+alt+l",
        "command": "workbench.action.tasks.runTask",
        "args": "Run master_program.py on alt robot"
      }
```

Because most of these shortcuts were already in use, this extension disables those existing shortcuts. Don't install this extension if you rely on the original shortcuts.

Disables:
```json
{
    "key": "ctrl+l",
    "command": "-workbench.action.chat.newChat",
    "when": "chatIsEnabled && inChat && chatLocation != 'editing-session'"
},
{
    "key": "ctrl+l",
    "command": "-workbench.action.chat.newEditSession",
    "when": "chatEditingParticipantRegistered && chatIsEnabled && inChat && chatLocation == 'editing-session'"
},
{
    "key": "ctrl+l",
    "command": "-expandLineSelection",
    "when": "textInputFocus"
},
{
    "key": "ctrl+l",
    "command": "-notebook.centerActiveCell",
    "when": "notebookEditorFocused"
},
{
    "key": "ctrl+l",
    "command": "-kb-macro.wrap",
    "when": "kb-macro.active && textInputFocus"
},
{
    "key": "ctrl+l",
    "command": "-kb-macro.wrap",
    "when": "kb-macro.active && notebookEditorFocused"
},
{
    "key": "ctrl+l",
    "command": "-kb-macro.wrap",
    "when": "chatIsEnabled && inChat && kb-macro.active && chatLocation != 'editing-session'"
},
{
    "key": "ctrl+l",
    "command": "-kb-macro.wrap",
    "when": "chatEditingParticipantRegistered && chatIsEnabled && inChat && kb-macro.active && chatLocation == 'editing-session'"
}
```

## Known Issues

None

## Release Notes

Initial release

### 1.0.0

Here we go!
