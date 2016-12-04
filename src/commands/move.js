
import Utils from '../utils';
import { Direction, GroupExpandedType } from '../constants';

const move = (context,direction) => {
  const view = Utils.layerListView();
  var index = view.selectedRow();
  const currentLayer = view.itemAtRow(index);

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

  var targetLayer = view.itemAtRow(index);
  if(currentLayer && targetLayer && direction == Direction.Up &&
    currentLayer.valueForKeyPath('parentGroup.objectID') == targetLayer.objectID() &&
    targetLayer.layerListExpandedType() == GroupExpandedType.Undecided) {
    console.log("Have to expand item directly!");
    targetLayer.layerListExpandedType = GroupExpandedType.Expanded;
  }


  view.selectRowIndexes_byExtendingSelection(NSIndexSet.indexSetWithIndex(index),false);
};

export default move;
