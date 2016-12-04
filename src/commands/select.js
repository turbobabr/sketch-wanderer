import _ from 'lodash';
import Utils from '../utils';
import { Direction, GroupExpandedType } from '../constants';
import ActionsManager, { ActionType } from '../actions-manager';

const select = (context, direction) => {
  var view = Utils.layerListView();
  if (!_.includes([ActionType.SelectDown, ActionType.SelectUp],ActionsManager.lastAction)) {
    ActionsManager.baseRowIndex = view.selectedRow();
  }

  ActionsManager.berserkBaseRowIndex = view.selectedRow();
  var baseRowIndex = ActionsManager.baseRowIndex;

  const selectedIndexes = view.selectedRowIndexes();
  const firstSelectedIndex = selectedIndexes.firstIndex();
  const lastSelectedIndex = selectedIndexes.lastIndex();

  const selectIndex = (index) => {
    var item = view.itemAtRow(index);
    if(item) { item.select_byExpandingSelection(true, true); }
  };

  const deselectIndex = (index) => {
    var item = view.itemAtRow(index);
    if(item) { item.select_byExpandingSelection(false, true); }
  };

  if (direction == Direction.Up) {
    if (lastSelectedIndex > baseRowIndex) {
      deselectIndex(lastSelectedIndex);
    } else if (firstSelectedIndex <= baseRowIndex) {
      selectIndex(firstSelectedIndex - 1);
    }
  } else if (direction == Direction.Down) {
    if(firstSelectedIndex < baseRowIndex) {
      deselectIndex(firstSelectedIndex);
    } else if (lastSelectedIndex >= baseRowIndex) {
      selectIndex(lastSelectedIndex + 1);
    }
  }
};

export default select;
