Blockly.Blocks['clipboard'] = {
  init: function() {
    this.appendValueInput("TEXT_TO_PUT ")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("put text");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(180);
 this.setTooltip("clipboard()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#write-in-the-clipboard");
  }
};

Blockly.Blocks['get_text'] = {
  init: function() {
    this.appendValueInput("SOURCE_TEXT")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("at");
    this.appendValueInput("LEFT")
        .setCheck("String")
        .appendField("get text between left");
    this.appendValueInput("RIGHT")
        .setCheck("String")
        .appendField("and right");
    this.appendValueInput("COUNT")
        .setCheck("Number")
        .appendField("count ");
    this.setOutput(true, "String");
    this.setColour(180);
 this.setTooltip("get_text()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#get-text");
  }
};

Blockly.Blocks['del_chars'] = {
  init: function() {
    this.appendValueInput("SOURCE_TEXT")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("delete from text ");
    this.appendValueInput("CHARACTERS")
        .setCheck("String")
        .appendField("the characters");
    this.setOutput(true, "String");
    this.setColour(180);
 this.setTooltip("del_chars()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#delete-character");
  }
};

Blockly.Blocks['mouse_event'] = {
  //Mouse Coordinates block 
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["get coordinates of mouse ","mouse_xy()"], 
        ["get x coordinate of mouse","mouse_x()"], ["get y coordinate of mouse","mouse_y()"]]), "ACTION");
    this.setOutput(true, ["String", "Number"]);
    this.setColour(180);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'mouse_xy()':
          tooltip = 'mouse_xy()';
          break;
        case 'mouse_x()':
          tooltip = 'mouse_x()';
          break;
        case 'mouse_y()':
          tooltip = 'mouse_y()';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#mouse-coordinates");
  }
};

Blockly.Blocks['title_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["return page title","title()"], ["return text content","text()"]]), "ACTION");
    this.setOutput(true, "String");
    this.setColour(180);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('Action');
      var tooltip = '';
      switch(action){
        case 'title()':
          tooltip = 'title()';
          break;
        case 'text()':
          tooltip = 'text()';
          break;
      }
      return tooltip;
    });
  this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#page-title-and-text");
  }
};

Blockly.Blocks['timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("return time elapsed");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("timer()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#timer");
  }
};

Blockly.Blocks['exist_present'] = {
  init: function() {
    this.appendValueInput("ELEMENT_IDENTIFIER")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField(new Blockly.FieldDropdown([["is element exists before timeout","exist"], ["is element is present now","present"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(180);
    var thisBlock = this;
    this.setTooltip(function(){
      var action = thisBlock.getFieldValue('ACTION');
      var tooltip = '';
      switch(action){
        case 'exist':
          tooltip = 'exist()';
          break;
        case 'present':
          tooltip = 'present()';
          break;
      }
      return tooltip;
    });
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#existing-and-present-element");
  }
};

Blockly.Blocks['count'] = {
  init: function() {
    this.appendValueInput("TABLE_NUMBER")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("r"), "NAME")
        .appendField("get the number of web elements");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("count()");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Helper-Functions#count-element");
  }
};
