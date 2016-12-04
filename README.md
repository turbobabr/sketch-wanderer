# Sketch Wanderer

A small SketchApp extension that introduce frictionless `Finder` like navigation in layer list by using beloved arrow keys and simple shortcuts. No more `shift`/`shift-tab` nightmare! 

> Huge thanks to [Sasha Okunev](https://twitter.com/okunev) who inspired me to build this plugin! :)

![Screencast](https://github.com/turbobabr/sketch-wanderer/blob/master/docs/intro-screencast.gif?raw=true)

## Installation

1. Download  archive.
2. Unpack and double click on `com.turbobabr.sketch.wanderer.sketchplugin` file to install it into Sketch plugins folder.
3. Enjoy! :)

## Usage

Wanderer is very simple to use, just recall how navigation works in Finder and use any arrow keys with `control-option` modifiers.


## The complete list of supported commands:
| Command     | Shortcut | Description |
| :-------------  | :------------- | :---- |
| Move Up | <kbd>ctrl</kbd> + <kbd>option</kbd> + <kbd>↑</kbd> | Selects layer above |
| Move Down | <kbd>ctrl</kbd> + <kbd>option</kbd> + <kbd>↓</kbd> | Selects layer below |
| Expand Group    | <kbd>ctrl</kbd> + <kbd>option</kbd> + <kbd>→</kbd>   | Expands selected group, shape group or artboard |
| Collapse Group    | <kbd>ctrl</kbd> + <kbd>option</kbd> + <kbd>←</kbd>   | Collapses selected group, shape group or artboard.<br> When run on already collapsed group, it's parent<br> will be collapsed. |
| Select Up | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>↑</kbd> | Finder like multi-select by holding shift and selecting files<br> via arrows. |
| Select Down    | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>↓</kbd>   | Finder like multi-select by holding shift and selecting files<br> via arrows. |
| Expand Artboard    | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>→</kbd>   | Expands all child groups in the current artboard. |
| Collapse Artboard    | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>←</kbd>   | Collapses all child groups in the current artboard<br> and artboard itself.  |
| Select Artboard Above    | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>→</kbd>   | Selects artboard above current arboard.<br> In case some child layer is selected, this command will select artboard itself.  |
| Select Artboard Below    | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>←</kbd>   | Selects artboard below current artboard. |


## Simple Shortcuts Schema & Mission Control

By default Wanderer uses `control-option+arrows` shortcuts for the most common commands like `Move Up`, `Move Down` and `Expand/Collapse Group`: 

![Mission Control Shortcuts](https://github.com/turbobabr/sketch-wanderer/blob/master/docs/replacible-shortcuts.png?raw=true)

It's quite nice, but not perfect - the better solution is to use shorter set `control+arrows`, which is by default occupied by `macOS: Mission Control`. Just in case you don't use these shortcuts, you could quickly replace them by using a special command by doing these simple steps:

1. Open `System Preferences -> Keyboard -> Shortcuts -> Mission Control` and disable the following highlighted system shortcuts:

![Mission Control Shortcuts](https://github.com/turbobabr/sketch-wanderer/blob/master/docs/mission-control-shortcuts.png?raw=true)

2. In Sketch select `Plugins -> Wanderer -> Shortcuts Schema -> control+arrows` command:

![Switching shortcuts schema](https://github.com/turbobabr/sketch-wanderer/blob/master/docs/switching-shortcuts-schema.png?raw=true)

3. Wait 10-15 seconds while Sketch reloading changes and check whether new shortcuts are setup correctly:

![Successful Setup](https://github.com/turbobabr/sketch-wanderer/blob/master/docs/control-arrows-shortcuts.png?raw=true)

> Note: In case you'll need to revert changes, just run `Plugins -> Wanderer -> Shortcuts Schema -> control-option+arrows` command.

<table>
<tbody>
<tr>
<td width="25">text asdfasdfasdfaf </td>
<td>text asdfsdf</td>
<td width="120">Selects artboard above current arboard.<br> In case some child layer is selected, this command will select artboard itself.</td>
</tr>
</tbody>
</table>
 

## Feedback

If you discover any issue or have any suggestions for improvement of the plugin, please [open an issue](https://github.com/turbobabr/sketch-wanderer/issues) or find me on twitter [@turbobabr](http://twitter.com/turbobabr).

## License

The MIT License (MIT)

Copyright (c) 2016 Andrey Shakhmin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.