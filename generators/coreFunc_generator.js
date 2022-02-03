Blockly.Python['initialize'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.init('+dropdown_action+'='+value_boolean+')\n';
  return code;
};

Blockly.Python['initialize2'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  var value_boolean0 = Blockly.Python.valueToCode(block, 'BOOLEAN0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.init(visual_automation='+value_boolean+',chrome_browser='+value_boolean0+')\n';
  return code;
};

Blockly.Python['init_close_pack_update'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_function = block.getFieldValue('FUNCTION');
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_function+'\n';
  return code;
};