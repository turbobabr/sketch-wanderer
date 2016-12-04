import _ from 'lodash';

const Utils = {};

Utils.normalizeObject = (obj) => {
  if(!obj) {
    return null;
  }

  if(obj.isKindOfClass(NSString)) {
    return obj.UTF8String();
  } else if(obj.isKindOfClass(NSValue)) {
    return obj + 0;
  } else if(obj.isKindOfClass(NSDictionary)) {
    return _.fromPairs(_.map(obj,(value,key) => {
      return [key,Utils.normalizeObject(value)];
    }));
  } else if(obj.isKindOfClass(NSArray)) {
    return _.map(obj,(value) => {
      return Utils.normalizeObject(value);
    });
  }

  return obj;
};

Utils.normalize = (obj) => { // Alias for `normalizeObject`
  return Utils.normalizeObject(obj);
};

Utils.readJSON = (filePath) => {
  let str = NSString.stringWithContentsOfFile_encoding_error(filePath,NSUTF8StringEncoding,null);
  if(!str) {
    return null;
  }

  str = Utils.normalize(str);
  try {
    return JSON.parse(str);
  } catch(e) {
    return null;
  }
};

Utils.writeJSON = (filePath,obj,prettyPrint = true) => {
  let str = prettyPrint ? JSON.stringify(obj,null,4) : JSON.stringify(obj);
  str = NSString.stringWithString(str);
  return str.writeToFile_atomically_encoding_error(filePath,true,NSUTF8StringEncoding,null);
};

Utils.currentDocument = () => {
  return MSDocument.currentDocument();
};

Utils.currentCommand = () => {
  return coscript.printController();
};

Utils.currentPluginBundle = () => {
  return Utils.currentCommand().pluginBundle();
};

Utils.manifestFilePath = () => {
  const pluginBundle = Utils.currentPluginBundle();
  return `${Utils.normalize(pluginBundle.url().path())}/Contents/Sketch/manifest.json`;
};

Utils.runForever = () => {
  coscript.setShouldKeepAround(true);
};

Utils.stopRunningForever = () => {
  coscript.setShouldKeepAround(false);
};

Utils.refreshLayerList = () => {
  Utils.layerListViewController().refresh();
};

Utils.filterArray = (array,predicateFormat) => {
  return array.filteredArrayUsingPredicate(NSPredicate.predicateWithFormat(predicateFormat));
};

Utils.showMessage = (msg) => {
  const document = Utils.currentDocument();
  document.showMessage(`[walker]: ${msg}`);
};

Utils.openUrlInDefaultBrowser = (url) => {
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url));
};

Utils.layerListViewController = () => {
  return Utils.currentDocument().valueForKeyPath('sidebarController.layerListViewController');
};


Utils.layerListView = () => {
  return Utils.currentDocument().valueForKeyPath('sidebarController.layerListViewController.outlineView');
};


export default Utils;