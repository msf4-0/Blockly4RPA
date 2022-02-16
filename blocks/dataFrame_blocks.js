Blockly.Blocks['series_pandas'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck(null)
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("pd"), "NAME")
        .appendField("Create a series");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Create a simple Pandas Series from a list or dictionary");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/pandas_series.asp");
  }
};

Blockly.Blocks['dataframe_pandas'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck("Array")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("pd"), "NAME")
        .appendField("Create a dataframe");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Create a simple Pandas DataFrame");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/pandas_dataframes.asp");
  }
};

Blockly.Blocks['head_tail'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe ");
    this.appendValueInput("INPUT")
        .setCheck("Number")
        .appendField("view data ")
        .appendField(new Blockly.FieldDropdown([["#5 top","head()"], ["#5 tail","tail()"], 
        ["#top","head"], ["#tail;","tail"]]), "INPUT");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
    var thisBlock = this;
    var input = thisBlock.getFieldValue('INPUT');
    this.setTooltip(function(){
      var tooltip = '';
      switch(input){
        case 'head()':
          tooltip ='return the 5 fist row';
          break;
        case 'head':
          tooltip ='return the number of row specify starting from the top';
          break;
        case 'tail()':
          tooltip ='return the 5 last row';
          break;
        case 'tail':
          tooltip ='return the number of row specify starting from the bottom';
          break;
      }
      return tooltip
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(input){
        case 'head':
        case 'head()':
          url ='https://www.w3schools.com/python/pandas/ref_df_head.asp';
          break;
        case 'tail()':
        case 'tail()':
          url ='https://www.w3schools.com/python/pandas/ref_df_tail.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['index_col'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe ");
    this.appendDummyInput()
        .appendField("view data ")
        .appendField(new Blockly.FieldDropdown([["columns","columns"], ["index","index"], 
        [" type col","dtypes"], ["shape","shape"], ["null","isnull"], ["size","size"], 
        ["sum","sum"]]), "INPUT");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
    var thisBlock = this;
    var input = thisBlock.getFieldValue('INPUT');
    this.setTooltip(function(){
      var tooltip = '';
      switch(input){
        case 'columns':
          tooltip ='Returns the column labels of the DataFrame';
          break;
        case 'index':
          tooltip ='Returns the row labels of the DataFrame';
          break;
        case 'dtypes':
          tooltip ='Returns the dtypes of the columns of the DataFrame';
          break;
        case 'shape':
          tooltip ='Returns the number of rows and columns of the DataFrame';
          break;
        case 'isnull':
          tooltip ='Finds NULL values';
          break;
        case 'size':
          tooltip ='Returns the number of elements in the DataFrame';
          break;
        case 'sum':
          tooltip ='Returns the sum of the values in the specified axis';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl("");

  }
};

Blockly.Blocks['describe_df'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["describe data from ","describe"], 
        ["info","info"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'describe':
          tooltip ='Returns a description summary for each column in the DataFrame';
          break;
        case 'info':
          tooltip ='Prints information about the DataFrame';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'describe':
          url ='https://www.w3schools.com/python/pandas/ref_df_describe.asp';
          break;
        case 'info':
          url ='https://www.w3schools.com/python/pandas/ref_df_info.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['empty'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("is dataframe");
    this.appendDummyInput()
        .appendField("empty");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(75);
 this.setTooltip("Returns True if the DataFrame is empty, otherwise False");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_empty.asp");
  }
};

Blockly.Blocks['iat'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe");
    this.appendValueInput("ROW")
        .setCheck("Number")
        .appendField("access data at row");
    this.appendValueInput("COL")
        .setCheck("Number")
        .appendField("column");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Get the value of the item in the specified position");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_iat.asp");
  }
};

Blockly.Blocks['iloc_slice'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe");
    this.appendValueInput("START")
        .setCheck("Number")
        .appendField("slice from row position");
    this.appendValueInput("STOP")
        .setCheck("Number")
        .appendField("to");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['insert'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("in dataframe ");
    this.appendValueInput("LOC")
        .setCheck("Number")
        .appendField("insert col at location ");
    this.appendValueInput("COL")
        .setCheck("String")
        .appendField("label");
    this.appendValueInput("VALUE")
        .setCheck("Array")
        .appendField("value");
    this.appendDummyInput()
        .appendField("allow duplicate")
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "DUPLICATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("Insert a column in the DataFrame");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_insert.asp");
  }
};

Blockly.Blocks['read_csv'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("pd"), "NAME")
        .appendField("read csv file ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Load the CSV into a DataFrame");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/pandas_csv.asp");
  }
};

Blockly.Blocks['loc'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe");
    this.appendValueInput("ROW")
        .setCheck(["Array", "String", "Boolean"])
        .appendField("access data at row label(s)");
    this.appendValueInput("COL")
        .setCheck(["Array", "String", "Boolean"])
        .appendField("access data at col label(s)");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Get the value of a group of elements specified using their labels");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_loc.asp");
  }
};

Blockly.Blocks['slice_df'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("slice dataframe");
    this.appendValueInput("ROWS")
        .setCheck(null)
        .appendField("from ")
        .appendField(new Blockly.FieldDropdown([["#start",""], ["#","S"]]), "START");
    this.appendValueInput("ROWE")
        .setCheck(null)
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["#end",""], ["#","E"]]), "END");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("slice a datafrom from row x to y exclude");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['astype'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("cast dataframe object ");
    this.appendValueInput("DTYPE")
        .setCheck(null)
        .appendField("to type of ");
    this.appendDummyInput()
        .appendField("copy ")
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "COPY");
    this.appendDummyInput()
        .appendField("error")
        .appendField(new Blockly.FieldDropdown([["raise","raise"], ["ignore","ignore"]]), "ERRORS");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Convert the DataFrame into a specified dtype");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_astype.asp");
  }
};

Blockly.Blocks['set_df_to'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("set ");
    this.appendValueInput("ROW")
        .setCheck(["Number", "Boolean", "Array"])
        .appendField("at row position");
    this.appendValueInput("COL")
        .setCheck(["Number", "Array", "Boolean"])
        .appendField("and col position ");
    this.appendValueInput("TO_SET")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("set the variable at the specific row and col(optional)position ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_df2d'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("in");
    this.appendValueInput("ROW")
        .setCheck(["Array", "String", "Number", "Boolean"])
        .appendField("get element at row");
    this.appendValueInput("COL")
        .setCheck(["Array", "String", "Number", "Boolean"])
        .appendField("and col ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("get the data at specific row and column");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['axes'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("get labels of row and col in ");
    this.setOutput(true, "Array");
    this.setColour(75);
 this.setTooltip("Returns the labels of the rows and the columns of the DataFrame");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_axes.asp");
  }
};

Blockly.Blocks['read_excel'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("String")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("pd"), "NAME")
        .appendField("read excel file ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Load the excel into a DataFrame");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iloc_row_col'] = {
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe");
    this.appendValueInput("ROW")
        .setCheck(null)
        .appendField("access data at row position");
    this.appendValueInput("COL")
        .setCheck(null)
        .appendField("and col position");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Get the values of a group of elements in the specified positions");
 this.setHelpUrl("https://www.w3schools.com/python/pandas/ref_df_iloc.asp");
  }
};

Blockly.Blocks['set_df_label'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("set ");
    this.appendValueInput("ROW")
        .setCheck(["String", "Array"])
        .appendField("at row label");
    this.appendValueInput("COL")
        .setCheck(["String", "Array"])
        .appendField("and col label");
    this.appendValueInput("TO_SET")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("set the data with the specific labels col(optional)");
 this.setHelpUrl("");
  }
};