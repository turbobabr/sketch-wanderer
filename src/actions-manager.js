
import Utils from './utils';

export const ActionType = {
  None: 'none',
  SelectUp: 'selectUp',
  SelectDown: 'selectDown',
  MoveUp: 'moveUp',
  MoveDown: 'moveDown',
  Expand: 'expand',
  Collapse: 'collapse'
};

const keyForProperty = (prop) => {
  return `com.turbobabr.sketch.wanderer.${prop}`;
};

const LAST_ACTION_KEY = keyForProperty('last-action');
const BASE_ROW_KEY = keyForProperty('base-row');
const BERSERK_BASE_ROW_KEY = keyForProperty('berserk-base-row');

class ActionsManager {
  get ThreadDictionary() {
    return NSThread.currentThread().threadDictionary();
  }

  get(prop) {
    return Utils.normalize(this.ThreadDictionary[prop]);
  }

  set(prop,value) {
    this.ThreadDictionary[prop] = value;
  }

  get lastAction() {
    return this.get(LAST_ACTION_KEY) || ActionType.None;
  }
  set lastAction(value) {
    this.set(LAST_ACTION_KEY,value);
  }

  setLastAction(action) {
    this.lastAction = action;
  }

  get baseRowIndex() {
    return this.get(BASE_ROW_KEY) || -1;
  }
  set baseRowIndex(value) {
    this.set(BASE_ROW_KEY,value);
  }

  get berserkBaseRowIndex() {
    return this.get(BERSERK_BASE_ROW_KEY) || -1;
  }
  set berserkBaseRowIndex(value) {
    this.set(BERSERK_BASE_ROW_KEY,value);
  }
}


export default new ActionsManager();
