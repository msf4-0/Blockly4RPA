Blockly.Python['add_set'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('ACTION');
  var value_elmnt = Blockly.Python.valueToCode(block, 'ELMNT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'.'+dropdown_name+'('+value_elmnt+')\n';
  return code;
};

Blockly.Python['copy_set'] = function(block) {
  var value_set = Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = value_set+'.'+dropdown_action.toLowerCase() +'()\n';
  return code;
};

Blockly.Python['action_set'] = function(block) {
  var value_set = Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_set+'.'+dropdown_action.toLowerCase() +'('+value_input+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['check_set'] = function(block) {
  var value_set = Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_set+'.'+dropdown_action.toLowerCase() +'('+value_input+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};