Blockly.Python['series_pandas'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.Series('+value_input+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['dataframe_pandas'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.DataFrame('+value_input+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['head_tail'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_input = block.getFieldValue('INPUT');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if( dropdown_input =='head'|| dropdown_input== 'tail'){
    code = value_dataframe+'.'+dropdown_input+'('+value_input+')\n';
  }
  else{
    code = value_dataframe+'.'+dropdown_input;
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['index_col'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_input = block.getFieldValue('INPUT');
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.'+dropdown_input+'\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['describe_df'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.'+dropdown_action+'()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['empty'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.empty()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['iloc_col_row'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.iloc['+value_col+']'+'['+value_row+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['insert'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_loc = Blockly.Python.valueToCode(block, 'LOC', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var value_duplicate = Blockly.Python.valueToCode(block, 'DUPLICATE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['read_csv'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.read_csv('+value_dataframe+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['read_excel'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'.read_excel('+value_dataframe+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['iat'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.iat['+value_row+','+value_col+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['iloc_slice'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  var value_stop = Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.iloc['+value_start+':'+value_stop+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['insert'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_loc = Blockly.Python.valueToCode(block, 'LOC', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_duplicate = block.getFieldValue('DUPLICATE');
  // TODO: Assemble Python into code variable.
  var code = value_dataframe+'.insert('+value_loc+','+value_col+','+value_value+','+dropdown_duplicate+')\n';
  return code;
};

Blockly.Python['loc'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_col== ''){
    code = value_dataframe+'.loc['+value_row+']';
  }
  else{
    code = value_dataframe+'.loc['+value_row+','+value_col+']';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['slice_df'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_start = block.getFieldValue('START');
  var value_rows = Blockly.Python.valueToCode(block, 'ROWS', Blockly.Python.ORDER_ATOMIC);
  var dropdown_end = block.getFieldValue('END');
  var value_rowe = Blockly.Python.valueToCode(block, 'ROWE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='';
  if (dropdown_start== 'S' && dropdown_end =='E'){
    code = value_dataframe+'['+value_col+':'+value_rows+']';
  }
  else if (dropdown_start== 'S' && dropdown_end ==''){
    code = value_dataframe+'['+value_col+': ]';
  }
  else if (dropdown_start== '' && dropdown_end =='E'){
    code = value_dataframe+'[ :'+value_rows+']';
  } 
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['astype'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_MEMBER);
  var value_dtype = Blockly.Python.valueToCode(block, 'DTYPE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_copy = block.getFieldValue('COPY');
  var dropdown_errors = block.getFieldValue('ERRORS');
  // TODO: Assemble Python into code variable.
  var code = value_name+'.astype('+value_dtype+','+dropdown_copy+',\''+dropdown_errors+'\')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['set_df_to'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  var value_to_set = Blockly.Python.valueToCode(block, 'TO_SET', Blockly.Python.ORDER_MEMBER);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_col== ''){
    code = value_name+'['+value_row+']='+value_to_set+'\n';
  }
  else{
    code = value_name+'['+value_row+']['+value_col+']='+value_to_set+'\n';
  }
  return code;
};

Blockly.Python['get_df2d'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_col == ''){
    code = value_name+'['+value_row+']';
  }
  else{
    code = value_name+'['+value_row+']['+value_col+']';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['axes'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'.axes';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['iloc_row_col'] = function(block) {
  var value_dataframe = Blockly.Python.valueToCode(block, 'DATAFRAME', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_col== null){
    code = value_dataframe+'.iloc['+value_row+']';
  }
  else{
    code = value_dataframe+'.iloc['+value_row+']['+value_col+']';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['set_df_label'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  var value_to_set = Blockly.Python.valueToCode(block, 'TO_SET', Blockly.Python.ORDER_MEMBER);
  // TODO: Assemble Python into code variable.
  var code = '';
  if (value_col== ''){
    code = value_name+'['+value_row+']='+value_to_set+'\n';
  }
  else{
    code = value_name+'['+value_row+']['+value_col+']='+value_to_set+'\n';
  }
  return code;
};
