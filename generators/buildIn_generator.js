Blockly.Python['float_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'float('+value_object+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['int_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int('+value_object+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['maximum_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'max('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['power'] = function(block) {
  var value_base = Blockly.Python.valueToCode(block, 'BASE', Blockly.Python.ORDER_ATOMIC);
  var value_exp = Blockly.Python.valueToCode(block, 'EXP', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pow('+value_base+','+value_exp+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['range'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  var value_stop = Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_ATOMIC);
  var value_step = Blockly.Python.valueToCode(block, 'STEP', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_start+','+value_stop+','+value_step+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['reverse_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'reversed('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['min_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'min('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['enumarate_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var dropdown_value_start = block.getFieldValue('VALUE_START');
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='';
  if(dropdown_value_start== 'START'){
    code  = 'enumerate('+value_list+','+value_start+')';
  }
  else{
    code  = 'enumerate('+value_list+')';
  }
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['filter'] = function(block) {
  var statements_function = Blockly.Python.statementToCode(block, 'FUNCTION');
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'filter('+statements_function+','+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['insitanceof_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  var value_function = Blockly.Python.valueToCode(block, 'FUNCTION', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'isinstanceof('+value_object+','+value_function+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['next'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'next('+value_input+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['create_dict'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'dict('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['list_com2'] = function(block) {
  var value_expression = Blockly.Python.valueToCode(block, 'EXPRESSION', Blockly.Python.ORDER_ATOMIC);
  var value_item = Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_ATOMIC);
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_expression+' for '+ value_item +' in ' + value_list +']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['list_com'] = function(block) {
  var value_expression = Blockly.Python.valueToCode(block, 'EXPRESSION', Blockly.Python.ORDER_ATOMIC);
  var value_for = Blockly.Python.valueToCode(block, 'FOR', Blockly.Python.ORDER_ATOMIC);
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var value_if_stm = Blockly.Python.valueToCode(block, 'IF_STM', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_expression+' for '+ value_for +' in ' + value_list +' if '+ value_if_stm +']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['words'] = function(block) {
  var text_module = block.getFieldValue('MODULE');
  // TODO: Assemble Python into code variable.
  var code = text_module+'.words()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};