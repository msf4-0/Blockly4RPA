Blockly.Blocks['capitalize'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck("String")
        .appendField("capitalize ");
    this.setOutput(true, "String");
    this.setColour(150);
 this.setTooltip("Converts the first character to upper case");
 this.setHelpUrl("https://www.w3schools.com/python/ref_string_capitalize.asp");
  }
};

Blockly.Blocks['zfill'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck("String")
        .appendField("fill ");
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField("with ");
    this.appendDummyInput()
        .appendField("zeros");
    this.setOutput(true, "String");
    this.setColour(150);
 this.setTooltip("\tFills the string with a specified number of 0 values at the beginning");
 this.setHelpUrl("https://www.w3schools.com/python/ref_string_zfill.asp");
  }
};

Blockly.Blocks['lower'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String")
        .appendField("make all character in text");
    this.appendDummyInput()
        .appendField("to lower case");
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};