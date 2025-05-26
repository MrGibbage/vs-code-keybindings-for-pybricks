# vs-code-keybindings-for-pybricks README

## Features

Simply provides keybindings for pybricks using FLL Teams 24277's VS Code task configuration.

## Requirements

1. Set up a virtual environment for your pybrick project
2. `pip install pybricks`
3. `pip install pybricksdev`

Read more about [Pybricks](https://pybricks.com)

4. Copy [tasks.json](https://github.com/FLL-Team-24277/FLL-Fall-2024-Submerged/blob/main/.vscode/tasks.json) from FLL Team 24277 file saved in your project's .vscode directory. These tasks perform the actions when the keyboard shortcuts are pressed. There is also one extra task that performs a git pull whenever the project folder is opened.
5. Edit your copy of the tasks.json with any updates you have. In particular, you will need to update the list of robots near the bottom of the file.
6. Set a Windows user environment variable named robotName and set the value to your robot name. Everything is case sensitive. Restart VS Code after updating the environment variable.
7. Test it out! Write a pybricks program that you want to run on a Lego hub. With that file open and active in the editor, press ctrl-l. It should run on your hub.


## Extension Settings

This extension contributes the following keybindings:

* ctrl-l: Run on my robot (as defined by the environment variable in step 6)
* ctrl-shift-l: Run master_program.py on my robot (as defined by the environment variable in step 6)
* ctrl-alt-l: Run on Alt robot (as defined by the robot list in tasks.json in step 5)
* ctrl-alt-shift-l: Run master_program.py on alt robot (as defined by the robot list in tasks.json in step 5)

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

### 0.0.1
Here we go!

### 0.0.2
README updates

### 0.0.3
More README updates
