Blockly.Blocks['float_block'] = {
 // float casting block 
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(["Number", "String"])
        .appendField("float value of");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("Returns a floating point number");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_float.asp");
  }
};

Blockly.Blocks['int_block'] = {
  // int casting block 
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(["Number", "String"])
        .appendField("integer value of ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("Returns an integer number");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_int.asp");
  }
};

Blockly.Blocks['maximum_block'] = {
  //maximum look up block 
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("max value of list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("Returns the largest item in an iterable");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_max.asp");
  }
};

Blockly.Blocks['power'] = {
  //power block 
  init: function() {
    this.appendValueInput("BASE")
        .setCheck("Number")
        .appendField(" base ");
    this.appendValueInput("EXP")
        .setCheck("Number")
        .appendField("to the power of ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("Returns the value of x to the power of y");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_pow.asp");
  }
};

Blockly.Blocks['range'] = {
  // range printing block 
  init: function() {
    this.appendValueInput("START")
        .setCheck("Number")
        .appendField("range of from ");
    this.appendValueInput("STOP")
        .setCheck("Number")
        .appendField("to");
    this.appendValueInput("STEP")
        .setCheck("Number")
        .appendField("step by");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("Returns a sequence of numbers, starting from 0 and increments by 1 (by default)");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_range.asp");
  }
};

Blockly.Blocks['min_block'] = {
  // minimun lookup block 
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("min value of list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("Returns the smallest item in an iterable");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_min.asp");
  }
};

Blockly.Blocks['enumarate_block'] = {
  // eneumarate value from a list 
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("enumerate items in");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["#","0"], ["other","START"]]), "VALUE_START");
    this.appendValueInput("START")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("Takes a collection and returns it as an enumerate object");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_enumerate.asp");
  }
};

Blockly.Blocks['filter'] = {
  // the block filter value in list
  init: function() {
    this.appendStatementInput("FUNCTION")
        .setCheck(null)
        .appendField("filter");
    this.appendValueInput("LIST")
        .setCheck("VAR")
        .appendField("from list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("Use a filter function to exclude items in an iterable object");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_filter.asp");
  }
};

Blockly.Blocks['next'] = {
  // return next value block 
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck("Array")
        .appendField("get next value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("function returns the next item in an iterator");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_next.asp");
  }
};

Blockly.Blocks['insitanceof_block'] = {
  // the block if an abject is instance of class
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("is object");
    this.appendValueInput("FUNCTION")
        .setCheck(null)
        .appendField("instance of  class");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("Returns True if a specified object is an instance of a specified object");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_isinstance.asp");
  }
};

Blockly.Blocks['create_dict'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("create dictionary of ");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(105);
 this.setTooltip("Returns a dictionary (Array)");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_dict.asp");
  }
};

Blockly.Blocks['reverse_block'] = {
  // reverse block 
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("reverse");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("Returns a reversed iterator");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_reversed.asp");
  }
};

Blockly.Blocks['list_com'] = {
  init: function() {
    this.appendValueInput("EXPRESSION")
        .setCheck(null);
    this.appendValueInput("FOR")
        .setCheck(null)
        .appendField("for");
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("in");
    this.appendValueInput("IF_STM")
        .setCheck(null)
        .appendField("if");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_com2'] = {
  init: function() {
    this.appendValueInput("EXPRESSION")
        .setCheck(null);
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("for");
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("in");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['words'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("words"), "MODULE")
        .appendField("words()");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
