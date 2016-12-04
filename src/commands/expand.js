import Utils from '../utils';
import { GroupExpandedType } from '../constants';

const expand = (context) => {
  const { selection } = context;

  const layer = selection.firstObject();
  if (layer && layer.isKindOfClass(MSLayerGroup) && layer.expandableInLayerList() && !layer.isExpanded()) {
    layer.layerListExpandedType = GroupExpandedType.Expanded;
    Utils.refreshLayerList(context);
  } else {
    const parent = layer.parentGroup();
    if (!parent) {
      return;
    }

    var predicate = NSPredicate.predicateWithFormat('(SELF isKindOfClass:%@) AND (expandableInLayerList == TRUE) AND (isExpanded == FALSE)', MSLayerGroup.class());
    _.each(Utils.normalize(parent.layers().filteredArrayUsingPredicate(predicate)), (layer) => {
      layer.layerListExpandedType = GroupExpandedType.Expanded;
    });

    Utils.refreshLayerList(context);
  }

};

export default expand;