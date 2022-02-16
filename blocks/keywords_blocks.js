Blockly.Blocks['import_as'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("rpa"), "MODULE")
        .appendField("as")
        .appendField(new Blockly.FieldTextInput("r"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("import the module as a variable");
 this.setHelpUrl("https://www.w3schools.com/python/ref_keyword_import.asp");
  }
};

Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("pandas"), "MODULE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("import module");
 this.setHelpUrl("https://www.w3schools.com/python/ref_keyword_import.asp");
  }
};

Blockly.Blocks['with_as'] = {
  init: function() {
    this.appendValueInput("WITH")
        .setCheck(null)
        .appendField("with");
    this.appendValueInput("VARIABLE")
        .setCheck("VAR")
        .appendField("as");
    this.appendStatementInput("INPUT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("simplify exception handling");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['from_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldTextInput("datetime"), "MODULE")
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("time"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("import a specific parts of a module");
 this.setHelpUrl("https://www.w3schools.com/python/ref_keyword_from.asp");
  }
};

Blockly.Blocks['in'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck("String")
        .appendField("is text");
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("in");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendValueInput("VARIABLE")
        .setCheck("String")
        .appendField("for");
    this.appendValueInput("CONDITION")
        .setCheck("String")
        .appendField("in");
    this.appendStatementInput("STM")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};