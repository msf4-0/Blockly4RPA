Blockly.Python['clipboard'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_text_to_put_ = Blockly.Python.valueToCode(block, 'TEXT_TO_PUT ', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.clipboard('+value_text_to_put_+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['get_text'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_source_text = Blockly.Python.valueToCode(block, 'SOURCE_TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var value_count = Blockly.Python.valueToCode(block, 'COUNT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.get_text('+value_source_text+','+value_left+','+value_right+','+value_count+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['del_chars'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_source_text = Blockly.Python.valueToCode(block, 'SOURCE_TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_characters = Blockly.Python.valueToCode(block, 'CHARACTERS', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.del_chars('+value_source_text+','+value_characters+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['mouse_event'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['title_text'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['timer'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name+'.timer()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['exist_present'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action+'('+value_element_identifier+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['count'] = function(block) {
  Blockly.Python.definitions_['import_rpa'] = 'import rpa as r';
  var text_name = block.getFieldValue('NAME');
  var value_table_number = Blockly.Python.valueToCode(block, 'TABLE_NUMBER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.count('+value_table_number+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};