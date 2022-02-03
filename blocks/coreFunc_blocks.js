
Blockly.Blocks['initialize'] = {
  init: function() {
    this.appendValueInput("BOOLEAN")
        .setCheck("Boolean")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("initialize")
        .appendField(new Blockly.FieldDropdown([["visual_automation","visual_automation"], 
        ["chrome_browser ","chrome_browser"], ["turbo_mode","turbo_mode"]]), "ACTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("init()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['initialize2'] = {
  init: function() {
    this.appendValueInput("BOOLEAN")
        .setCheck("Boolean")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("visual_automation ");
    this.appendValueInput("BOOLEAN0")
        .setCheck("Boolean")
        .appendField("chrome_browser ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("init()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['init_close_pack_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["init","init()"], ["close","close()"], ["pack","pack()"], ["update","update()"]]), "FUNCTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    var thisBlock = this;
    this.setTooltip(function(){
      var func = thisBlock.getFieldValue('FUNCTION');
      var tooltip = '';
      switch(func){
        case 'init()':
          tooltip = 'init()';
          break;
        case 'close()':
          tooltip = 'close()';
          break;
        case 'update()':
          tooltip = 'update()';
          break;
      }
    return tooltip;
    });
    this.setHelpUrl("");
  }
};