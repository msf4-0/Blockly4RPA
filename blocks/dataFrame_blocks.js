Blockly.Blocks['series_pandas'] = {
  // create a series with pandas 
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
 this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/dsintro.html#series");
  }
};

Blockly.Blocks['dataframe_pandas'] = {
  // create a dataframe with pandas 
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
 this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/dsintro.html#dataframe");
  }
};

Blockly.Blocks['head_tail'] = {
  // return the head or tail of dataframe with pandas 
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
    this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/basics.html#head-and-tail")
  }
};

Blockly.Blocks['index_col'] = {
  // return the index/columns/types/shape/null/size of dataframe with pandas 
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
    this.setHelpUrl(function(){
      var url = '';
      switch(input){
        case 'columns':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.columns.html#pandas.DataFrame.columns';
          break;
        case 'index':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.index.html#pandas.DataFrame.index';
          break;
        case 'dtypes':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dtypes.html#pandas.DataFrame.dtypes';
          break;
        case 'shape':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shape.html#pandas-dataframe-shape';
          break;
        case 'isnull':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isnull.html#pandas-dataframe-isnull';
          break;
        case 'size':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.size.html#pandas-dataframe-size';
          break;
        case 'sum':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sum.html#pandas-dataframe-sum';
          break;
      }
      return url;
    });

  }
};

Blockly.Blocks['describe_df'] = {
  // describe a dataframe
  // Print a concise summary of a DataFrame.
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
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html#pandas-dataframe-describe';
          break;
        case 'info':
          url ='https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html#pandas-dataframe-info';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['empty'] = {
  //Indicator whether Series/DataFrame is empty.
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
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.empty.html#pandas-dataframe-empty");
  }
};

Blockly.Blocks['iat'] = {
  //Access a single value for a row/column pair by integer position
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
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iat.html#pandas-dataframe-iat");
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
 this.setTooltip("slice dataframe using position");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['insert'] = {
  //Insert column into DataFrame at specified location.
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
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.insert.html#pandas-dataframe-insert");
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
  //Access a group of rows and columns by label(s) or a boolean array.
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
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html#pandas-dataframe-loc");
  }
};

Blockly.Blocks['slice_df'] = {
  //slice a daframe from start to end 
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
 this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/indexing.html#slicing-ranges");
  }
};

Blockly.Blocks['astype'] = {
  //Cast a pandas object to a specified dtype dtype
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
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.astype.html#pandas-dataframe-astype");
  }
};

Blockly.Blocks['set_df_to'] = {
  // set a value in dataframe by acess true position 
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
 this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/dsintro.html#column-selection-addition-deletion");
  }
};

Blockly.Blocks['get_df2d'] = {
  // access dataframe by position, label 
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
 this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/dsintro.html#column-selection-addition-deletion");
  }
};

Blockly.Blocks['axes'] = {
  //Return a list representing the axes of the DataFrame.
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("get labels of row and col in ");
    this.setOutput(true, "Array");
    this.setColour(75);
 this.setTooltip("Return a list representing the axes of the DataFrame.");
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.axes.html#pandas.DataFrame.axes");
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
  //Purely integer-location based indexing for selection by position.
  init: function() {
    this.appendValueInput("DATAFRAME")
        .setCheck("VAR")
        .appendField("from dataframe");
    this.appendValueInput("ROW")
        .setCheck(["Number", "Boolean", "Array"])
        .appendField("access data at row position");
    this.appendValueInput("COL")
        .setCheck(["Number", "Boolean", "Array"])
        .appendField("and col position");
    this.setOutput(true, null);
    this.setColour(75);
 this.setTooltip("Get the values of a group of elements in the specified positions");
 this.setHelpUrl("https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iloc.html#pandas-dataframe-iloc");
  }
};

Blockly.Blocks['set_df_label'] = {
  // set value in dataframe data with label 
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
 this.setHelpUrl("https://pandas.pydata.org/docs/user_guide/indexing.html#selection-by-label");
  }
};
