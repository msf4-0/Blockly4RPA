Blockly.Python['telegram'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_telegram_id = Blockly.Python.valueToCode(block, 'TELEGRAM_ID', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_send = Blockly.Python.valueToCode(block, 'TEXT_TO_SEND', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.telegram('+value_telegram_id+','+value_text_to_send+')\n';
  return code;
};

Blockly.Python['keyboard'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_keys_and_modifier = Blockly.Python.valueToCode(block, 'KEYS_AND_MODIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.keyboard('+value_keys_and_modifier+')\n';
  return code;
};

Blockly.Python['mouse'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_event = block.getFieldValue('EVENT');
  // TODO: Assemble Python into code variable.
  var code = text_name+'.mouse(\''+dropdown_event+'\')\n';
  return code;
};

Blockly.Python['wait'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_time = block.getFieldValue('TIME');
  var value_delay = Blockly.Python.valueToCode(block, 'DELAY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='';
  if(dropdown_time =='5'){
    code = text_name+'.wait()'+'\n';
  }
  else{
    code = text_name+'.wait('+value_delay+')\n';
  }
  return code;
};

Blockly.Python['popup'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_string_in_url = Blockly.Python.valueToCode(block, 'STRING_IN_URL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_string_in_url ==''){
    
    code = text_name+ '.popup()\n';
  }
  else{
    code = text_name+'.popup('+value_string_in_url+')\n';
  }
  return code;
};

Blockly.Python['vision'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_command_to_run = Blockly.Python.valueToCode(block, 'COMMAND_TO_RUN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.vision('+value_command_to_run+')\n';
  return code;
};

Blockly.Python['timeout'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_time==''){
    code = text_name +'.timeout()\n';
  }
  else{
    code = text_name +'.timeout('+value_time+')\n';
  }
  return code;
};

Blockly.Python['table_upload'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_table_number = Blockly.Python.valueToCode(block, 'TABLE_NUMBER', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action+'('+value_table_number+','+value_filename_to_save+')\n';
  return code;
};

Blockly.Python['download_unzip_frame'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  if(value_filename_to_save==''){
    code = text_name+'.'+dropdown_action+'('+value_input+')\n';
  }
  else{
    code = text_name+'.'+dropdown_action+'('+value_input+','+value_filename_to_save+')\n';
  }
  return code;
};

Blockly.Python['run_dom'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_action = block.getFieldValue('ACTION');
  var value_command_to_run = Blockly.Python.valueToCode(block, 'COMMAND_TO_RUN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.'+dropdown_action+'('+value_command_to_run+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};