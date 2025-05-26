# vs-code-keybindings-for-pybricks README

## Features

Simply provides keybindings for pybricks using FLL Teams 24277's VS Code task configuration. This will enable a very simple way to run the current program (that is, the program that is open and currently being edited in the editor) on a specific identified robot (that is, "YOUR" robot), simply by pressing ctrl-l. In the example below, BOB is the robot that is defined as my robot using a Windows environment variable, and carter.py is the program that is currently open in the editor.

![image](https://github.com/user-attachments/assets/bfb95788-c71d-4248-af1c-4cb4ac4791d5)

For teams with more than one robot, you can also run the current program on any of your team's robots. This comes in handy when a team member wants to test their program on a different robot:

![image](https://github.com/user-attachments/assets/a20ef371-48b8-40f3-9506-2158ba2e061b)

We have individual programs for each mission, and we have a master program (sometimes called a "sequencing" program) that we use at tournaments to select the individual mission as needed. There is also a keybinding for running the master program on your robot or on any robot. In this case, it isn't necessary that the master program be open in the editor at all.

## Requirements

1. Set up a virtual environment for your pybrick project
2. `pip install pybricks`
3. `pip install pybricksdev`

Read more about [Pybricks](https://pybricks.com)

4. Copy [tasks.json](https://github.com/FLL-Team-24277/FLL-Fall-2024-Submerged/blob/main/.vscode/tasks.json) from FLL Team 24277 file saved in your project's .vscode directory. Tasks in VS Code are used to run external programs. In this case we want to run the pybricksdev.exe program with the correct parameters to run the userr program as needed.
5. Edit your copy of the tasks.json with any updates you have. In particular, you will need to update the list of robots about 2/3 of the way in the file. By the way, note that there is also a task in that tasks.json file that we use to automatically do a git pull whenever we open the folder in VS Code. You may or may not want that feature. If you don't, simply delete it.
6. Set a user environment variable named robotName and set the value to your robot name. Everything is case sensitive. Restart VS Code after updating the environment variable.
7. Test it out! Write a pybricks program that you want to run on a Lego hub. With that file open and active in the editor, press ctrl-l. It should run on your hub.


## Extension Settings

This extension contributes the following keybindings:

* ctrl-l (that's a lower-case "L"): Run on my robot, as defined in Step 6 above
* ctrl-alt-l: Run on Alt robot, as defined in the robot list from Step 4 above
* ctrl-shift-l: Run master_program.py on my robot
* ctrl-alt-shift-l: Run master_program.py on alt robot

We remember this by recognizing that L stands for "launch"
If you add the "alt" key, you get the option to run on any "alternative" robot
If you add the "shift" key, you will run the "**S**equencing" program (or you can think of it as the ma**S**ter program)

By the way, with great power comes great responsibility. Be sure to instruct the team members to be careful to not accidentally run the program on a robot that they don't have control of. You don't want robots driving off of desks!

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

### 0.0.1
Here we go!

### 0.0.2
README updates

### 0.0.3
More README updates

### 0.0.4
More README updates
