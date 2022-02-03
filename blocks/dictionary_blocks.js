Blockly.Blocks['dic_clear'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("in dictionary");
    this.appendDummyInput()
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["clear","CLEAR"], ["copy","COPY"], 
        ["pop last item","POPITEM"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(345);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'CLEAR':
          tooltip ='Removes all the elements from the dictionary';
          break;
        case 'COPY':
          tooltip ='Returns a copy of the dictionary';
          break;
        case 'POPITEM':
          tooltip ='Removes the last inserted key-value pair';
           break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'CLEAR':
          url ='https://www.w3schools.com/python/ref_dictionary_clear.asp';
          break;
        case 'COPY':
          url ='https://www.w3schools.com/python/ref_dictionary_copy.asp';
          break;
        case 'POPITEM':
          url ='https://www.w3schools.com/python/ref_dictionary_popitem.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['dic_item'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("in dictionary");
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["values","VALUES"], ["items","ITEMS"],
         ["keys","KEYS"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'VALUES':
          tooltip ='Returns a list of all the values in the dictionary';
          break;
        case 'ITEMS':
          tooltip ='Returns a list containing a tuple for each key value pair';
          break;
          case 'KEYS':
            tooltip ='Returns a list containing the dictionary\'s keys';
            break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'VALUES':
          url ='https://www.w3schools.com/python/ref_dictionary_values.asp';
          break;
        case 'ITEMS':
          url ='https://www.w3schools.com/python/ref_dictionary_items.asp';
          break;
        case 'KEYS':
          url ='https://www.w3schools.com/python/ref_dictionary_keys.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['get_dic'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("from dictionary");
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["get key","GET"], ["pop key","POP"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'GET':
          tooltip ='Returns the value of the specified key';
          break;
        case 'POP':
          tooltip ='Removes the element with the specified key';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'GET':
          url ='https://www.w3schools.com/python/ref_dictionary_get.asp';
          break;
        case 'POP':
          url ='https://www.w3schools.com/python/ref_dictionary_pop.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['setdefault'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("set dictionary ");
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField("of key");
    this.appendDummyInput()
        .appendField("to default value of ");
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("Returns the value of the specified key. If the key does not exist: insert the key, with the specified value");
 this.setHelpUrl("https://www.w3schools.com/python/ref_dictionary_setdefault.asp");
  }
};

Blockly.Blocks['fromkeys'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("create dictionary ");
    this.appendValueInput("KEY")
        .setCheck("VAR")
        .appendField("of keys");
    this.appendDummyInput()
        .appendField("of identical value ");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("Returns a dictionary with the specified keys and value");
 this.setHelpUrl("https://www.w3schools.com/python/ref_dictionary_fromkeys.asp");
  }
};

Blockly.Blocks['access_key'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("in dictionary");
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("get key ");
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("return value at specific key");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['update_dic'] = {
  init: function() {
    this.appendValueInput("DICTIONARY")
        .setCheck("VAR")
        .appendField("in dictionary");
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("update key");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("with value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("Updates the dictionary with the specified key-value pairs");
 this.setHelpUrl("https://www.w3schools.com/python/ref_dictionary_update.asp");
  }
};