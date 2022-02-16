Blockly.Python['open_file'] = function(block) {
  var value_file_name = Blockly.Python.valueToCode(block, 'FILE_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble Python into code variable.
  var code = 'open('+value_file_name+',\''+dropdown_mode+'\')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_file'] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_size_input = block.getFieldValue('SIZE_INPUT');
  var value_size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='';
  if (dropdown_size_input=='SIZE'){
    code = value_file+'.read('+value_size+')\n';
  }
  else{
    this.removeInput('SIZE');
    code = value_file+'.read()\n';
  }
  return code;
};

Blockly.Python['write_file'] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_file+'.write('+value_text+')\n';
  return code;
};

Blockly.Python['close_file'] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_file+'.close()\n';
  return code;
};

Blockly.Python['csv_reader'] = function(block) {
  var text_module = block.getFieldValue('MODULE');
  var value_file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
  var text_instruction = block.getFieldValue('INSTRUCTION');
  var value_dialect = Blockly.Python.valueToCode(block, 'DIALECT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (text_instruction == ''){
    code = text_module+'.reader('+value_file+')';
  }
  else{
    code = text_module+'.reader('+value_file+','+text_instruction+'='+value_dialect+')';
  } 
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};