Blockly.Python['capitalize'] = function(block) {
    var value_str = Blockly.Python.valueToCode(block, 'STR', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_str+'.capitalize()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };

  Blockly.Python['zfill'] = function(block) {
    var value_str = Blockly.Python.valueToCode(block, 'STR', Blockly.Python.ORDER_ATOMIC);
    var value_num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_str+'.zfill('+value_num+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };

  Blockly.Python['lower'] = function(block) {
    var value_string = Blockly.Python.valueToCode(block, 'STRING', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_string + '.lower()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };