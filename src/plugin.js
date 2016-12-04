
import _ from 'lodash/core';
import Utils from './utils';

import move from './commands/move';
import expand from './commands/expand';
import collapse from './commands/collapse';
import select from './commands/select';
import switchShortcutsSchema from './commands/switch-shortcuts-schema';
import ActionsManager, { ActionType } from './actions-manager';


import { Direction, ShortcutsSchema } from './constants';

DefineSketchExtension({
  name: 'Wanderer',
  identifier: 'com.turbobabr.sketch.wanderer',
  version: '0.1.0',
  commands: {
    moveUp: {
      name: "Move Up",
      shortcut: "control-up",
      run(context) {
        Utils.runForever();
        move(context,Direction.Up);
        ActionsManager.setLastAction(ActionType.MoveUp);
      }
    },
    moveDown: {
      name: "Move Down",
      shortcut: "control-down",
      run(context) {
        Utils.runForever();
        move(context,Direction.Down);
        ActionsManager.setLastAction(ActionType.MoveDown);
      }
    },
    selectUp: {
      name: "Select Up",
      shortcut: "control-shift-up",
      run(context) {
        Utils.runForever();
        select(context,Direction.Up);
        ActionsManager.setLastAction(ActionType.SelectUp);
      }
    },
    selectDown: {
      name: "Select Down",
      shortcut: "control-shift-down",
      run(context) {
        Utils.runForever();
        select(context,Direction.Down);
        ActionsManager.setLastAction(ActionType.SelectDown);
      }
    },
    expand: {
      name: "Expand Group",
      shortcut: "control-right",
      run(context) {
        Utils.runForever();
        expand(context);
        ActionsManager.setLastAction(ActionType.Expand);
      }
    },
    collapse: {
      name: "Collapse Group",
      shortcut: "control-left",
      run(context) {
        Utils.runForever();
        collapse(context);
        ActionsManager.setLastAction(ActionType.Collapse);
      }
    },
    controlOptionSchema: {
      name: "✓  control-option+arrows",
      run() {
        switchShortcutsSchema(ShortcutsSchema.Default);
      }
    },
    controlSchema: {
      name: "     control+arrows",
      run() {
        switchShortcutsSchema(ShortcutsSchema.ControlOnly);
      }
    },
    help: {
      name: "Home page....",
      run() {
        Utils.openUrlInDefaultBrowser('https://github.com/turbobabr/duplicator');
      }
    }
  },
  menu: {
    items: [
      'moveUp',
      'moveDown',
      '-',
      'selectUp',
      'selectDown',
      '-',
      'expand',
      'collapse',
      '-',
      {
        title: 'Shortcuts Schema',
        items: [
          'controlOptionSchema',
          'controlSchema'
        ]
      },
      '-',
      'help'
    ]
  }
});