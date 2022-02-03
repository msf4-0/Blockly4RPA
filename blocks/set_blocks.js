Blockly.Blocks['add_set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("VAR")
        .appendField("in set");
    this.appendValueInput("ELMNT")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["add","add"], ["remove","remove"], 
        ["discard","discard"]]), "ACTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    var thisBlock= this; 
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'add':
          tooltip = 'Adds an element to the set';
          break;
        case 'remove':
          tooltip ='Removes the specified element';
          break;
        case 'discard':
          tooltip = 'Removes the specified item';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'add':
          url = 'https://www.w3schools.com/python/ref_set_add.asp';
          break;
        case 'remove':
          url ='https://www.w3schools.com/python/ref_set_remove.asp';
          break;
        case 'discard':
          url = 'https://www.w3schools.com/python/ref_set_discard.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['copy_set'] = {
  init: function() {
    this.appendValueInput("SET")
        .setCheck("VAR")
        .appendField("in set");
    this.appendDummyInput()
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["clear","CLEAR"], ["copy","COPY"], 
        ["pop","POP"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(165);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'CLEAR':
          tooltip = 'Removes all the elements from the set';
          break;
        case 'COPY':
          tooltip = 'Returns a copy of the set';
          break;
        case 'POP':
          tooltip = 'Removes an element from the set';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'CLEAR':
          url = 'https://www.w3schools.com/python/ref_set_clear.asp';
          break;
        case 'COPY':
          url = 'https://www.w3schools.com/python/ref_set_copy.asp';
          break;
        case 'POP':
          url = 'https://www.w3schools.com/python/ref_set_pop.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['action_set'] = {
  init: function() {
    this.appendValueInput("SET")
        .setCheck("VAR")
        .appendField("in set");
    this.appendValueInput("INPUT")
        .setCheck("VAR")
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["difference","DIFFERENCE"], ["difference_update","DIFFERENCE_UPDATE"], 
        ["intersection","INTERSECTION"], ["intersection_update","INTERSECTION_UPDATE"], 
        ["symmetric_difference","SYMMETRIC_DIFFERENCE"], ["symmetric_difference_update","SYMMETRIC_DIFFERENCE_UPDATE"], 
        ["union","UNION"], ["update","UPDATE"]]), "ACTION")
        .appendField("with");
    this.setOutput(true, null);
    this.setColour(165);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip = '';
      switch(action){
        case 'DIFFERENCE':
          tooltip = 'Returns a set containing the difference between two or more sets';
          break;
        case 'DIFFERENCE_UPDATE':
          tooltip = 'Removes the items in this set that are also included in another, specified set';
          break;
        case 'INTERSECTION':
          tooltip = 'Returns a set, that is the intersection of two or more sets';
          break;
        case 'INTERSECTION_UPDATE':
          tooltip = 'Removes the items in this set that are not present in other, specified set(s)';
          break;
        case 'SYMMETRIC_DIFFERENCE':
          tooltip = 'Returns a set with the symmetric differences of two sets';
          break;
        case 'SYMMETRIC_DIFFERENCE_UPDATE':
          tooltip = 'inserts the symmetric differences from this set and another';
          break;
        case 'UNION':
          tooltip = 'Return a set containing the union of sets';
          break;
        case 'UPDATE':
          tooltip = 'Update the set with another set, or any other iterable';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'DIFFERENCE':
          url = 'https://www.w3schools.com/python/ref_set_difference.asp';
          break;
        case 'DIFFERENCE_UPDATE':
          url = 'https://www.w3schools.com/python/ref_set_difference_update.asp';
          break;
        case 'INTERSECTION':
          url = 'https://www.w3schools.com/python/ref_set_intersection.asp';
          break;
        case 'INTERSECTION_UPDATE':
          url = 'https://www.w3schools.com/python/ref_set_intersection_update.asp';
          break;
        case 'SYMMETRIC_DIFFERENCE':
          url = 'https://www.w3schools.com/python/ref_set_symmetric_difference.asp';
          break;
        case 'SYMMETRIC_DIFFERENCE_UPDATE':
          url = 'https://www.w3schools.com/python/ref_set_symmetric_difference_update.asp';
          break;
        case 'UNION':
          url = 'https://www.w3schools.com/python/ref_set_union.asp';
          break;
        case 'UPDATE':
          url = 'https://www.w3schools.com/python/ref_set_update.asp';
          break;
      }
      return url;
    });
  }
};

Blockly.Blocks['check_set'] = {
  init: function() {
    this.appendValueInput("SET")
        .setCheck("VAR")
        .appendField("is set");
    this.appendValueInput("INPUT")
        .setCheck("VAR")
        .appendField(new Blockly.FieldDropdown([["disjoint","ISDISJOINT"], ["subset","ISSUBSET"], 
        ["superset","ISSUPERSET"]]), "ACTION")
        .appendField("of");
    this.setOutput(true, "Boolean");
    this.setColour(165);
    var thisBlock = this;
    var action = thisBlock.getFieldValue('ACTION');
    this.setTooltip(function(){
      var tooltip ='';
      switch(action){
        case 'ISDISJOINT':
          tooltip = '	Returns whether two sets have a intersection or not';
          break;
        case 'ISSUBSET':
          tooltip = 'Returns whether another set contains this set or not';
          break;
        case 'ISSUPERSET':
          tooltip = 'Returns whether this set contains another set or not';
          break;
      }
      return tooltip;
    });
    this.setHelpUrl(function(){
      var url = '';
      switch(action){
        case 'ISDISJOINT':
          url ='https://www.w3schools.com/python/ref_set_isdisjoint.asp';
          break;
        case 'ISSUBSET':
          url ='https://www.w3schools.com/python/ref_set_issubset.aspp';
          break;
        case 'ISSUPERSET':
          url ='https://www.w3schools.com/python/ref_set_issuperset.asp';
          break;
      }
      return url;
    });
  }
};