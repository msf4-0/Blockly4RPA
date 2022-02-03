Blockly.Python['import_as'] = function(block) {
  var text_module = block.getFieldValue('MODULE');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'import '+text_module+' as '+text_name +'\n';
  return code;
};

Blockly.Python['import'] = function(block) {
  var text_module = block.getFieldValue('MODULE');
  // TODO: Assemble Python into code variable.
  var code = 'import '+text_module+'\n';
  return code;
};

Blockly.Python['with_as'] = function(block) {
  var value_with = Blockly.Python.valueToCode(block, 'WITH', Blockly.Python.ORDER_MEMBER);
  var value_variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_MEMBER);
  var statements_input = Blockly.Python.statementToCode(block, 'INPUT');
  // TODO: Assemble Python into code variable.
  var code = 'with ' + value_with+' as '+value_variable+':\n'+ statements_input;
  return code;
};

Blockly.Python['from_block'] = function(block) {
  var text_module = block.getFieldValue('MODULE');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from '+text_module + ' import ' +text_name+ '\n';
  return code;
};

Blockly.Python['in'] = function(block) {
  var value_str = Blockly.Python.valueToCode(block, 'STR', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_str + ' in ' + value_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['for_loop'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  var value_condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);
  var statements_stm = Blockly.Python.statementToCode(block, 'STM');
  // TODO: Assemble Python into code variable.
  var code = 'for '+ value_variable+ ' in '+ value_condition + ':\n' + statements_stm;
  return code;
};