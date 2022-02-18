//init(visual/browser/turbo/headless) 
Blockly.Blocks['initialize'] = {
  init: function() {
    this.appendValueInput("BOOLEAN")
        .setCheck("Boolean")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("initialize")
        .appendField(new Blockly.FieldDropdown([["visual_automation","visual_automation"], 
        ["chrome_browser ","chrome_browser"], ["headless","headless_mode"], ["turbo_mode","turbo_mode"]]), "ACTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 var thisBlock = this;
    var func = thisBlock.getFieldValue('FUNCTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(func){
        case 'visual_automation':
          tooltip = 'init(visual_automation)';
          break;
        case 'chrome_browser':
          tooltip = 'init(chrome_browser)';
          break;
        case 'headless':
          tooltip = 'init(headless_mode)';
          break;
        case 'turbo_mode':
          tooltip = 'init(turbo_mode)';
          break;
      }
    return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(func){
        case 'visual_automation':
          url = "https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#visual-automation";
          break;
        case 'chrome_browser':
          url = "https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#chrome-browser";
          break;
        case 'turbo_mode':
          url = "https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#turbo-mode";
          break;
      }
    return url;
    });
  }
};

// init ( browser and visual )
Blockly.Blocks['initialize2'] = {
  init: function() {
    this.appendValueInput("BOOLEAN")
        .setCheck("Boolean")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("visual_automation ");
    this.appendValueInput("BOOLEAN0")
        .setCheck("Boolean")
        .appendField("chrome_browser ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("init()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#initialize-browser-and-visual-automatisation");
  }
};

//init(chrome, visual, headless)
Blockly.Blocks['initialize3'] = {
  init: function() {
    this.appendValueInput("BOOLEAN")
        .setCheck("Boolean")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("visual_automation ");
    this.appendValueInput("BOOLEAN0")
        .setCheck("Boolean")
        .appendField("chrome_browser ");
    this.appendValueInput("BOOLEAN1")
        .setCheck("Boolean")
        .appendField("headless_mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("init()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#initialize-browser-and-visual-automatisation");
  }
};

// init/close/pack/update block 
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
    var func = thisBlock.getFieldValue('FUNCTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(func){
        case 'init()':
          tooltip = 'init()';
          break;
        case 'close()':
          tooltip = 'close()';
          break;
        case 'pack()':
          tooltip = 'pack()';
          break;
        case 'update()':
          tooltip = 'update()';
          break;
      }
    return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(func){
        case 'init()':
          url = "https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#initialize";
          break;
        case 'close()':
          url = "https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#close-rpa";
          break;
        case 'update()':
        case 'pack()':
          url = "https://github.com/msf4-0/Blockly4RPA/wiki/Core-Functions#deploy--update";
          break;
      }
    return url;
    });
  }
};
