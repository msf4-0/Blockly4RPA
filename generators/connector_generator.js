Blockly.Python['connect_block'] = function(block) {
    var value_connector = Blockly.Python.valueToCode(block, 'CONNECTOR', Blockly.Python.ORDER_MEMBER);
    // TODO: Assemble Python into code variable.
    var code = value_connector+'\n';
    return  code;
  };