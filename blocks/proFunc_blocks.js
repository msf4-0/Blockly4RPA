Blockly.Blocks['telegram'] = {
  init: function() {
    this.appendValueInput("TELEGRAM_ID")
         .setCheck(["String", "Number"])
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("send to");
    this.appendValueInput("TEXT_TO_SEND")
        .setCheck("String")
        .appendField("message");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("telegram()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#telegram");
  }
};

Blockly.Blocks['keyboard'] = {
  init: function() {
    this.appendValueInput("KEYS_AND_MODIFIER")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("send keystrokes");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("keyboard()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#keyboard-key");
  }
};

Blockly.Blocks['mouse'] = {
  // mouse move 
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("send mouse event")
        .appendField(new Blockly.FieldDropdown([["down","down"], ["up","up"]]), "EVENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("mouse()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#mouse-move");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("wait")
        .appendField(new Blockly.FieldDropdown([["default","5"], ["#sec","DELAY"]]), "TIME");
    this.appendValueInput("DELAY")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("wait()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#wait");
  }
};

Blockly.Blocks['popup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("set context to web popup tab to ");
    this.appendValueInput("STRING_IN_URL")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("popup()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#popup");
  }
};

Blockly.Blocks['vision'] = {
  // Run Python block 
  init: function() {
    this.appendValueInput("COMMAND_TO_RUN")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("run custom SikuliX");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("vision()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#run-python");
  }
};

Blockly.Blocks['timeout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("change wait timeout");
    this.appendValueInput("TIME")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("timeout()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#timeout");
  }
};

Blockly.Blocks['table_upload'] = {
  // Create CSV & upload website block 
  init: function() {
    this.appendValueInput("TABLE_NUMBER")
        .setCheck(["String", "Number"])
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["save webpage","table"], 
        ["upload(CSS) file to web","upload"]]), "ACTION");
    this.appendValueInput("FILENAME_TO_SAVE")
        .setCheck("String")
        .appendField("to file");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'table':
          tooltip = 'table()';
          break;
        case 'upload':
          tooltip = 'upload()';
          break;
      }
      return tooltip;
    });
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#create-csv--upload-website");
  }
};

Blockly.Blocks['run_dom'] = {
  init: function() {
    this.appendValueInput("COMMAND_TO_RUN")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["run OS command","run"], 
        ["run code in DOM","dom"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'run':
          tooltip = 'run()';
          break;
        case 'dom':
          tooltip = 'dom()';
          break;
      }
      return tooltip;
    });
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#run-in-cmd-prompt--run-dom");
  }
};

Blockly.Blocks['download_unzip_frame'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck(["String", "Number"])
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["download from URL","download"], 
        ["unzip zip file","unzip"], ["set web frame","frame"]]), "ACTION");
    this.appendDummyInput()
        .appendField("to file(optional)");
    this.appendValueInput("FILENAME_TO_SAVE")
        .setCheck("String");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'download':
          tooltip = 'download()';
          break;
        case 'unzip':
          tooltip = 'unzip()';
          break;
        case 'frame':
          tooltip = 'frame()';
          break;
      }
      return tooltip;
     });
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Pro-Functions#download--unzip--rframemain_frame-id-or-name-sub_frame");
  }
};
