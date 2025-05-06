# vs-code-keybindings-for-pybricks README

## Features

Simply provides keybindings for pybricks using FLL Teams 24277's VS Code task configuration.

## Requirements

[Pybricks](https://pybricks.com), of course. Also you will need to have the [tasks.json](https://github.com/FLL-Team-24277/FLL-Fall-2024-Submerged/blob/main/.vscode/tasks.json) from FLL Team 24277 file saved in your project's .vscode directory.


## Extension Settings

This extension contributes the following keybindings:

* ctrl-l: Run on my robot
* ctrl-alt-l: Run on Alt robot
* ctrl-shift-l: Run master_program.py on my robot
* ctrl-alt-shift-l: Run master_program.py on alt robot

Because most of these shortcuts were already in use, this extension disables those shortcuts. Don't install this extension if you rely on the original shortcuts.

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
