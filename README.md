# vs-code-keybindings-for-pybricks README

## Features

Provides keybindings for pybricks using FLL Teams 24277's VS Code task configuration. This will enable a very simple way to run the current program (that is, the program that is open and currently being edited in the editor) on a specific identified robot (that is, "YOUR" robot), simply by pressing ctrl-l. In the example below, BOB is the robot that is defined as my robot using a Windows environment variable, and carter.py is the program that is currently open in the editor.

![image](https://github.com/user-attachments/assets/bfb95788-c71d-4248-af1c-4cb4ac4791d5)

For teams with more than one robot, you can also run the current program on any of your team's robots. This comes in handy when a team member wants to test their program on a different robot:

![image](https://github.com/user-attachments/assets/a20ef371-48b8-40f3-9506-2158ba2e061b)

We have individual programs for each mission, and we have a master program (sometimes called a "sequencing" program) that we use at tournaments to select the individual mission as needed. There is also a keybinding for running the master program on your robot or on any robot. In this case, it isn't necessary that the master program be open in the editor at all.

Also provides a button on the status bar to show what the robot name is. Clicking on the button opens the user settings.json file so the robot name can be edited.

<img width="268" height="111" alt="image" src="https://github.com/user-attachments/assets/2201d323-b5bb-4a15-a34c-1febdc10ca72" />

<img width="259" height="65" alt="image" src="https://github.com/user-attachments/assets/42804f6f-d926-4944-af41-833957fac693" />

## Requirements

1. Set up a virtual environment for your pybricks project (uv, venv, anaconda are all ok)
  - `pip install pybricks`
  - `pip install pybricksdev`

Read more about [Pybricks](https://pybricks.com)

2. Copy [tasks.json](https://github.com/FLL-Team-24277/FLL-Fall-2025-Unearthed/blob/main/.vscode/tasks.json) from FLL Team 24277 file saved in your project's .vscode directory. Tasks in VS Code are used to run external programs. In this case we want to run the pybricksdev.exe program with the correct parameters to run the userr program as needed.

3. Edit tasks.json
   a. Edit your copy of the tasks.json with any updates you have. In particular, you will need to update the list of robots about 2/3 of the way in the file. 
   b. Optional. By the way, note that there is also a task in that tasks.json file that we use to automatically do a git pull whenever we open the folder in VS Code. You may or may not want that feature. If you don't, simply delete it. If you do want to use it, be sure to also download the [gitpull.py](https://github.com/FLL-Team-24277/FLL-Fall-2025-Unearthed/blob/main/.vscode/gitpull.py) file which actually does all the work.

4. Click on the fllRobotName button on the status bar to set a VS Code user setting named fllRobotName and set the value to your robot name. Everything is case sensitive. 

5. Test it out! Write a pybricks program that you want to run on a Lego hub. With that file open and active in the editor, press ctrl-l. It should run on your hub.


## Extension Settings

This extension contributes the following keybindings:

* ctrl-l (that's a lower-case "L"): Run the current open file on my robot, as defined in Step 4 above
* ctrl-alt-l: Run the current open file on Alt robot, as defined in the robot list in tasks.json from Step 3 above
* ctrl-shift-l: Run master_program.py on my robot (does not require the master_program.py file to be open)
* ctrl-alt-shift-l: Run master_program.py on alt robot (does not require the master_program.py file to be open)

We remember this by recognizing that L stands for "launch"
If you add the "alt" key, you get the option to run on any "alternative" robot
If you add the "shift" key, you will run the "**S**equencing" program (or you can think of it as the ma**S**ter program)

By the way, with great power comes great responsibility. Be sure to instruct the team members to be careful to not accidentally run the program on a robot that they don't have control of. You don't want robots driving off of desks!

If you are using a master program, it must be named master_program.py for the master program keybindings to work. Someday I will make it a configurable setting if there is interest.

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

## Note about removing existing keybindings

To avoid surprising users, the extension only removes keybindings that match the samples we shipped. Important details:

- The extension will always remove any keybinding that uses one of these keys, regardless of its command or args:
  - ctrl+l
  - ctrl+shift+l
  - ctrl+alt+l
  - ctrl+shift+alt+l

- In addition, the extension removes a set of "exact match" sample entries (key + command + args). Only entries that exactly match those samples are removed.

- Removal runs once when the extension activates. That means users who upgrade will have matching sample entries removed when VS Code reloads the extension (no uninstall/reinstall required).

- Safety and limitations:
  - The current implementation uses JSON.parse on keybindings.json. If the user's keybindings.json contains comments or trailing commas (JSONC), the file will not be modified to avoid corruption.
  - When entries are removed you will see a non-intrusive informational message indicating how many sample keybindings were removed, with an action button to open the keybindings file.
  - If you are concerned, back up your keybindings.json before updating the extension.

- Testing tip:
  - Use the Extension Development Host (press F5) and edit the host's Preferences: Open Keyboard Shortcuts (JSON) file to add test entries (must be strict JSON). Reload the host to trigger the removal and verify the behavior.

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

### 1.0.0
Release 1.0.0

### 1.1.0
Added taskbar notification and setting for fllRobotName

### 1.2.0
Added feature to delete existing keybindings needed for this extension