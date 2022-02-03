
  var toolbox = document.getElementById("toolbox");

  var options = { 
    toolbox : toolbox, 
    collapse : true, 
    comments : true, 
    disable : true, 
    maxBlocks : Infinity, 
    trashcan : true, 
    horizontalLayout : false, 
    toolboxPosition : 'start', 
    css : true, 
    media : 'https://blockly-demo.appspot.com/static/media/', 
    rtl : false, 
    scrollbars : true, 
    sounds : true, 
    oneBasedIndex : true,
    grid : {
      spacing : 20, 
      length : 1, 
      colour : '#888', 
      snap : false
    }, 
    zoom : {
      controls : true, 
      wheel : true, 
      startScale : 1, 
      maxScale : 3, 
      minScale : 0.3, 
      scaleSpeed : 1.2
    }
  };

  Blockly.inject('blocklyDiv', options);

  function showCode(){
    let workspace = Blockly.getMainWorkspace();
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById("textarea").value = code;
  }
