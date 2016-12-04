import _ from 'lodash';
import Utils from '../utils';
import { Direction, CanvasAction } from '../constants';

const performCanvasAction = (targetArtboard,action) => {
  if(action == CanvasAction.None) {
    return;
  }

  switch(action) {
    case CanvasAction.Center:
      // TODO: To implement
      break;

    case CanvasAction.ZoomToFit:
      // TODO: To implement
      break;
  }
};

const selectArtboard = (context, direction,action = CanvasAction.None) => {
  const { document, selection } = context;
  const page = document.currentPage();
  const currentArtboard = page.currentArtboard();
  if(!currentArtboard) {
    // TODO: Add warning message.
    return;
  }

  const isPartOfSelection = Utils.findOne(selection,`objectID == '${currentArtboard.objectID()}'`) != null;
  if(!isPartOfSelection && direction == Direction.Up) {
    currentArtboard.select_byExpandingSelection(true,false);
    return;
  }

  const artboards = _.reverse(Utils.normalize(page.artboards()));
  let index = _.findIndex(artboards,ab => ab.objectID() == currentArtboard.objectID());
  if(index == -1) {
    // TODO: Add warning message.
    return;
  }

  switch(direction) {
    case Direction.Up:
      index--;
      break;

    case Direction.Down:
      index++;
      break;
  }

  if(index<0) {
    index = artboards.length - 1;
  } else if(index>=artboards.length) {
    index = 0;
  }

  const targetArtboard = artboards[index];
  targetArtboard.select_byExpandingSelection(true,false);
  performCanvasAction(targetArtboard,action);
};

export default selectArtboard;
