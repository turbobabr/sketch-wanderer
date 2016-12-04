
import Utils from '../utils';
import { Direction, GroupExpandedType } from '../constants';

const move = (context,direction) => {
  var view = Utils.layerListView();
  var index = view.selectedRow();
  index = index != -1 ? index : 0;

  switch(direction) {
    case Direction.Up:
      index--;
      break;

    case Direction.Down:
      index++;
      break;
  }

  const numberOfRows = view.numberOfRows();
  if(index < 0) {
    index = numberOfRows - 1;
  } else if(index >= numberOfRows) {
    index = 0;
  }

  view.selectRowIndexes_byExtendingSelection(NSIndexSet.indexSetWithIndex(index),false);
};

export default move;
