Blockly.Blocks['connect_block'] = {
  init: function() {
    this.appendValueInput("CONNECTOR")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("help to connect blocks");
 this.setHelpUrl("https://github.com/msf4-0/Blockly4RPA/wiki/Connector#connector-block");
  }
};
