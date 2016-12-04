
import _ from 'lodash/core';
import Utils from './utils';

import move from './commands/move';
import expand from './commands/expand';
import collapse from './commands/collapse';
import select from './commands/select';
import selectArtboard from './commands/select-artboard';
import switchShortcutsSchema from './commands/switch-shortcuts-schema';
import ActionsManager, { ActionType } from './actions-manager';
import { Direction, ShortcutsSchema, TargetGroupType } from './constants';

DefineSketchExtension({
  name: 'Wanderer',
  identifier: 'com.turbobabr.sketch.wanderer',
  description: "A small SketchApp extension that introduces 'Finder' like features for working with layer list.",
  author: "Andrey Shakhmin",
  version: '0.1.0',
  commands: {
    moveUp: {
      name: "Move Up",
      shortcut: "control-option-up",
      run(context) {
        Utils.runForever();
        move(context,Direction.Up);
        ActionsManager.setLastAction(ActionType.MoveUp);
      }
    },
    moveDown: {
      name: "Move Down",
      shortcut: "control-option-down",
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
    selectArtboardAbove: {
      name: "Select Artboard Above",
      shortcut: "control-shift-option-up",
      run(context) {
        Utils.runForever();
        selectArtboard(context,Direction.Up);
        ActionsManager.setLastAction(ActionType.SelectArtboardAbove);
      }
    },
    selectArtboardBelow: {
      name: "Select Artboard Below",
      shortcut: "control-shift-option-down",
      run(context) {
        Utils.runForever();
        selectArtboard(context,Direction.Down);
        ActionsManager.setLastAction(ActionType.SelectArtboardBelow);
      }
    },
    expand: {
      name: "Expand Group",
      shortcut: "control-option-right",
      run(context) {
        Utils.runForever();
        expand(context,TargetGroupType.Selection);
        ActionsManager.setLastAction(ActionType.Expand);
      }
    },
    expandArtboard: {
      name: "Expand Artboard",
      shortcut: "control-shift-right",
      run(context) {
        Utils.runForever();
        expand(context,TargetGroupType.ArtboardGraph);
        ActionsManager.setLastAction(ActionType.Expand);
      }
    },
    collapse: {
      name: "Collapse Group",
      shortcut: "control-option-left",
      run(context) {
        Utils.runForever();
        collapse(context,TargetGroupType.Selection);
        ActionsManager.setLastAction(ActionType.Collapse);
      }
    },
    collapseArtboard: {
      name: "Collapse Artboard",
      shortcut: "control-shift-left",
      run(context) {
        Utils.runForever();
        collapse(context,TargetGroupType.ArtboardGraph);
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
      name: "Help...",
      run() {
        Utils.openUrlInDefaultBrowser('https://github.com/turbobabr/sketch-wanderer');
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
      'expandArtboard',
      'collapseArtboard',
      '-',
      'selectArtboardAbove',
      'selectArtboardBelow',
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