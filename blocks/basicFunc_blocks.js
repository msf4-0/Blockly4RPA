Blockly.Blocks['url'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("go to web URL");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("url()");
 this.setHelpUrl("https://docs.google.com/document/d/138DjwJY7Tvp9NhruQMT2dxvbEFcYb5vHvg0Kp-BkHtE/edit#heading=h.h7r4ah9gy1ox");
  }
};

Blockly.Blocks['click1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["left-click on","click"], ["right-click on","rclick"],
         ["double-click on","dclick"], ["move mouse to","hover"]]), "ACTION");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x =");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  var thisBlock = this;
  this.setTooltip(function(){
    var action = thisBlock.getFieldValue('ACTION');
    var tooltip = '';
    switch(action){
      case 'click':
        tooltip = 'click() with xy coordinate';
        break;
      case 'rclick':
        tooltip = 'rclick() with xy coordinate';
        break;
      case 'dclick':
        tooltip = 'dclick() with xy coordinate';
        break;
      case 'hover':
        tooltip = 'hover() with xy coordinate';
        break;
    }
    return tooltip;
   });
  this.setHelpUrl("https://docs.google.com/document/d/138DjwJY7Tvp9NhruQMT2dxvbEFcYb5vHvg0Kp-BkHtE/edit#heading=h.oxnqj9y9hiig");
  }
};

Blockly.Blocks['type'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("at")
        .appendField("x =");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y =");
    this.appendValueInput("TEXT_TO_TYPE")
        .setCheck("String")
        .appendField("enter text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("type() with coordinate");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type1'] = {
  init: function() {
    this.appendValueInput("ELEMENT_IDENTIFIER")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("at");
    this.appendValueInput("TEXT_TO_TYPE")
        .setCheck("String")
        .appendField("enter text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("type()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("choose dropdown");
    this.appendValueInput("ELEMENT_IDENTIFIER")
        .setCheck("String")
        .appendField("at");
    this.appendValueInput("OPTION_VALUE")
        .setCheck("String")
        .appendField("option");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("select()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['select1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("choose dropdown at");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x =");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y = ");
    this.appendValueInput("OPTION_VALUE")
        .setCheck("String")
        .appendField("option");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("select() with xy coordinate");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['select2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("choose dropdown at");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y1");
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("option at")
        .appendField("X2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("Y2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("select() with x1y1 x2y2 coordinate");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("fetch element at");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y1");
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("X2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("Y2");
    this.setOutput(true, "String");
    this.setColour(345);
 this.setTooltip("read() with x1y1 x2y2 coordinate");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("fetch element at");
    this.appendValueInput("ELEMENT_IDENTIFIER")
        .setCheck("String");
    this.setOutput(true, "String");
    this.setColour(345);
 this.setTooltip("read()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['load'] = {
  init: function() {
    this.appendValueInput("FILENAME_TO_LOAD")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("load file ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("load()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ask'] = {
  init: function() {
    this.appendValueInput("TEXT_TO_PROMPT")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("ask");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("ask()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['click'] = {
  init: function() {
    this.appendValueInput("ELEMENT_IDENTIFIER")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["left-click on","click"], ["right-click on","rclick"], ["double-click","dclick"], ["move mouse","hover"]]), "INPUT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'click':
          tooltip = 'click()';
          break;
        case 'rclick':
          tooltip = 'rclick()';
          break;
        case 'dclick':
          tooltip = 'dclick()';
          break;
        case 'hover':
          tooltip = 'hover()';
          break;
      }
      return tooltip;
     });
 this.setHelpUrl("https://docs.google.com/document/d/138DjwJY7Tvp9NhruQMT2dxvbEFcYb5vHvg0Kp-BkHtE/edit#heading=h.oxnqj9y9hiig");
  }
};

Blockly.Blocks['snap_dump_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["save screenshot","snap"], 
        ["save text","dump"], ["append text","write"]]), "ACTION");
    this.appendValueInput("ELEMENT_IDENTIFIER")
        .setCheck("String")
        .appendField("at");
    this.appendValueInput("FILENAME_TO_SAVE")
        .setCheck("String")
        .appendField("to file");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'snap':
          tooltip = 'snap()';
          break;
        case 'dump':
          tooltip = 'dump()';
          break;
        case 'write':
          tooltip = 'write()';
          break;
      }
      return tooltip;
     });
 this.setHelpUrl("");
  }
};