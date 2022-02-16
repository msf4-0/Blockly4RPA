 Blockly.Python['dic_clear'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = value_dictionary+'.'+dropdown_action.toLowerCase()+'()';
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['dic_item'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = value_dictionary+'.'+dropdown_action.toLowerCase()+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['get_dic'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var dropdown_key = block.getFieldValue('ACTION');
  var value_key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Ass'...';emble Python into code variable.
  var code = value_dictionary+'.'+dropdown_key.toLowerCase()+'('+value_key+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['setdefault'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='';
  if (value_value==null){
    code =value_dictionary+'.setdefault('+value_key+')';
  }
  else{
    code = value_dictionary+'.setdefault('+value_key+','+value_value+')';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['fromkeys'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_value==null){
    code = value_dictionary+'.fromkeys('+value_key+')';
  }
  else{
    code = value_dictionary+'.fromkeys('+value_key+','+value_value+')';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['access_key'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dictionary+'['+value_key+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['update_dic'] = function(block) {
  var value_dictionary = Blockly.Python.valueToCode(block, 'DICTIONARY', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dictionary+'.update({'+value_key+':'+value_value+'})\n';
  return code;
};