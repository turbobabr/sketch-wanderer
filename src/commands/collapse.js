import Utils from '../utils';
import { GroupExpandedType } from '../constants';

const collapse = (context) => {
  const { selection } = context;

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
};

export default collapse;