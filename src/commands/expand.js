
import _ from 'lodash';
import Utils from '../utils';
import { GroupExpandedType, TargetGroupType } from '../constants';

const expand = (context,target) => {
  const { selection } = context;

  if(target == TargetGroupType.ArtboardGraph) {
    var artboards = selection.valueForKeyPath("@distinctUnionOfObjects.parentArtboard");
    _.each(Utils.normalize(artboards),(artboard) => {
      var predicate = NSPredicate.predicateWithFormat('(SELF isKindOfClass:%@) AND (expandableInLayerList == TRUE) AND (isExpanded == FALSE)', MSLayerGroup.class());
      var targetGroups = artboard.children().filteredArrayUsingPredicate(predicate);
      _.each(Utils.normalize(targetGroups),(layer) => {
        layer.layerListExpandedType = GroupExpandedType.Expanded;
      });
    });

    Utils.refreshLayerList(context);
  } else if(target == TargetGroupType.Selection) {
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
  }
};

export default expand;