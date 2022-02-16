Blockly.Blocks['open_file'] = {
  init: function() {
    this.appendValueInput("FILE_NAME")
        .setCheck("String")
        .appendField("open file ");
    this.appendDummyInput()
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["read","r"], ["write","w"], ["creation","x"], ["append","a"], ["binary","b"], ["text","t"], ["update","+"]]), "MODE");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("Opens a file and returns a file object");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_open.asp");
  }
};

Blockly.Blocks['read_file'] = {
  init: function() {
    this.appendValueInput("FILE")
        .setCheck("VAR")
        .appendField("read in");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["#","-1"], ["size","SIZE"]]), "SIZE_INPUT");
    this.appendValueInput("SIZE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(60);
 this.setTooltip("Returns the file content");
 this.setHelpUrl("https://www.w3schools.com/python/ref_file_read.asp");
  }
};

Blockly.Blocks['write_file'] = {
  init: function() {
    this.appendValueInput("FILE")
        .setCheck("VAR")
        .appendField("write in ");
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Writes the specified string to the file");
 this.setHelpUrl("https://www.w3schools.com/python/ref_file_write.asp");
  }
};

Blockly.Blocks['close_file'] = {
  init: function() {
    this.appendValueInput("FILE")
        .setCheck("VAR")
        .appendField("close file");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Closes the file");
 this.setHelpUrl("https://www.w3schools.com/python/ref_file_close.asp");
  }
};

Blockly.Blocks['csv_reader'] = {
  init: function() {
    this.appendValueInput("FILE")
        .setCheck(null)
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("csv"), "MODULE")
        .appendField("read");
    this.appendValueInput("DIALECT")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("newline"), "INSTRUCTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("Return a reader object which will iterate over lines in the given csvfile");
 this.setHelpUrl("https://docs.python.org/3/library/csv.html#module-contents");
  }
};