Blockly.Python['url'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_url == ''){
    code = text_name+'.url()\n'; 
  }
  else{
    code = text_name+'.url('+value_url+')\n';
  }
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL] ;
};

Blockly.Python['click1'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action+'('+value_x+','+value_y+')\n';
  return code;
};

Blockly.Python['type'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_type = Blockly.Python.valueToCode(block, 'TEXT_TO_TYPE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.type('+value_x+','+value_y+','+value_text_to_type+')\n';
  return code;
};

Blockly.Python['type1'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_type = Blockly.Python.valueToCode(block, 'TEXT_TO_TYPE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.type('+value_element_identifier+','+value_text_to_type+')\n';
  return code;
};

Blockly.Python['select'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_option_value = Blockly.Python.valueToCode(block, 'OPTION_VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.select('+value_element_identifier+','+value_option_value+')\n';
  return code;
};

Blockly.Python['select1'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_option_value = Blockly.Python.valueToCode(block, 'OPTION_VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.select('+value_x+','+value_y+','+value_option_value+')\n';
  return code;
};

Blockly.Python['select2'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'X2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.select('+value_x1+','+value_y1+','+value_x2+','+value_y2+')\n';
  return code;
};

Blockly.Python['read'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'X2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.read('+value_x1+','+value_y1+','+value_x2+','+value_y2+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read1'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.read('+value_element_identifier+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['load'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_filename_to_load = Blockly.Python.valueToCode(block, 'FILENAME_TO_LOAD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  text_name+'.load('+value_filename_to_load+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ask'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_text_to_prompt = Blockly.Python.valueToCode(block, 'TEXT_TO_PROMPT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  text_name+'.ask('+value_text_to_prompt+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['click'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var dropdown_input = block.getFieldValue('INPUT');
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_input+'('+value_element_identifier+')\n';
  return code;
};

Blockly.Python['snap_dump_write'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action+'('+value_element_identifier+','+value_filename_to_save+')\n';
  return code;
};