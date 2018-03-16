import { includes } from 'lodash';
import Utils from './utils';

import move from './commands/move';
import expand from './commands/expand';
import collapse from './commands/collapse';
import select from './commands/select';
import selectArtboard from './commands/select-artboard';
import switchShortcutsSchema from './commands/switch-shortcuts-schema';
import ActionsManager, {
  ActionType
} from './actions-manager';
import {
  Direction,
  ShortcutsSchema,
  TargetGroupType
} from './constants';

const commandHandlers = {
  moveUp: (context) => {
    move(context, Direction.Up);
    ActionsManager.setLastAction(ActionType.MoveUp);
  },
  moveDown: (context) => {
    move(context, Direction.Down);
    ActionsManager.setLastAction(ActionType.MoveDown);
  },
  selectUp: (context) => {
    select(context, Direction.Up);
    ActionsManager.setLastAction(ActionType.SelectUp);
  },
  selectDown: (context) => {
    select(context, Direction.Down);
    ActionsManager.setLastAction(ActionType.SelectDown);
  },
  selectArtboardAbove: (context) => {
    selectArtboard(context, Direction.Up);
    ActionsManager.setLastAction(ActionType.SelectArtboardAbove);
  },
  selectArtboardBelow: (context) => {
    selectArtboard(context, Direction.Down);
    ActionsManager.setLastAction(ActionType.SelectArtboardBelow);
  },
  expand: (context) => {
    expand(context, TargetGroupType.Selection);
    ActionsManager.setLastAction(ActionType.Expand);
  },
  expandArtboard: (context) => {
    expand(context, TargetGroupType.ArtboardGraph);
    ActionsManager.setLastAction(ActionType.Expand);
  },
  collapse: (context) => {
    collapse(context, TargetGroupType.Selection);
    ActionsManager.setLastAction(ActionType.Collapse);
  },
  collapseArtboard: (context) => {
    collapse(context, TargetGroupType.ArtboardGraph);
    ActionsManager.setLastAction(ActionType.Collapse);
  },
  controlOptionSchema: (context) => {
    switchShortcutsSchema(ShortcutsSchema.Default);
  },
  controlSchema: (context) => {
    switchShortcutsSchema(ShortcutsSchema.ControlOnly);
  },
  help: (context) => {
    Utils.openUrlInDefaultBrowser('https://github.com/turbobabr/sketch-wanderer');
  }
};

const runForeverBlackList = ['controlOptionSchema', 'controlSchema', 'help'];
const runCommand = (id, contex) => {
  if (!commandHandlers[id]) {
    console.warn(`[sketch-wanderer]: Unknown command - '${id}'`);
    return;
  }

  if (!includes(runForeverBlackList, id)) {
    Utils.runForever();
  }

  commandHandlers[id](context);
}

export default function (context) {
  const commandIdentifier = Utils.normalize(context.command.identifier());
  runCommand(commandIdentifier, context);
}
