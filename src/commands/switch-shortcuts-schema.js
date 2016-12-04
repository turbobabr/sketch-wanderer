
import Utils from '../utils';
import { ShortcutsSchema } from '../constants';

const KeyMap = {
  Up: '↑',
  Down: '↓',
  Right: '→',
  Left: '←',
  Control: 'control',
  Options: 'option'
};

const switchShortcutsSchema = (schema) => {
  const symbolsMap = {
    moveUp: KeyMap.Up,
    moveDown: KeyMap.Down,
    collapse: KeyMap.Left,
    expand: KeyMap.Right
  };

  let commandsPatch = {};

  const modifiers = schema == ShortcutsSchema.Default ? [KeyMap.Control,KeyMap.Options] : [KeyMap.Control];
  _.each(symbolsMap,(value,key) => {
    const shortcut = modifiers.concat([value]).join(' ');
    commandsPatch[key] = { shortcut };
  });

  commandsPatch['controlOptionSchema'] = { name: schema === ShortcutsSchema.Default ? "✓  control-option+arrows" : "     control-option+arrows" };
  commandsPatch['controlSchema'] = { name: schema !== ShortcutsSchema.Default ? "✓  control+arrows" : "     control+arrows" };

  const filePath = Utils.manifestFilePath();
  let manifest = Utils.readJSON(filePath);

  manifest = _.assign({},manifest,{
    commands: _.map(manifest.commands,(command) =>{
      const id = command.identifier;
      if(commandsPatch[id]) {
        return _.assign({},command,commandsPatch[id]);
      }

      return command;
    })
  });

  Utils.writeJSON(filePath,manifest);
};

export default switchShortcutsSchema;
