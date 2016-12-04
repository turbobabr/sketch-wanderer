import Utils from '../utils';
import { GroupExpandedType, TargetGroupType } from '../constants';

const collapse = (context,target) => {
  const { selection, document } = context;
  const page = document.currentPage();
  const currentArtboard = page.currentArtboard();

  if(target == TargetGroupType.ArtboardGraph) {
    const targetArtboards = Utils.normalize(selection.valueForKeyPath("@distinctUnionOfObjects.parentArtboard"));
    _.each(targetArtboards,(artboard) => {
      const predicate = NSPredicate.predicateWithFormat('(SELF isKindOfClass:%@) AND (expandableInLayerList == TRUE) AND (isExpanded == TRUE)', MSLayerGroup.class());
      const targetGroups = artboard.children().filteredArrayUsingPredicate(predicate);
      _.each(Utils.normalize(targetGroups),layer => layer.layerListExpandedType = GroupExpandedType.Collapsed);
    });

    const resultingResponder = currentArtboard || _.first(targetArtboards);
    if(resultingResponder) {
      resultingResponder.select_byExpandingSelection(true,false);
    }

    Utils.refreshLayerList(context);
  } else if(target == TargetGroupType.Selection) {
    const layer = selection.firstObject();
    if (layer && layer.isKindOfClass(MSLayerGroup) && layer.expandableInLayerList() && layer.isExpanded()) {
      layer.layerListExpandedType = GroupExpandedType.Collapsed;
      Utils.refreshLayerList(context);
    } else if (layer) {
      const parent = layer.parentGroup();
      if (parent.isKindOfClass(MSPage)) {
        return;
      }

      parent.layerListExpandedType = GroupExpandedType.Collapsed;
      parent.select_byExpandingSelection(true, false);
      Utils.refreshLayerList(context);
    }
  } else if(target == TargetGroupType.PageGraph) {
    // TODO: TO IMPLEMENT
  }
};

export default collapse;