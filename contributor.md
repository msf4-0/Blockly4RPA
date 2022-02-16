# Contributor and developer guidelines 

### Here how you can help 
- [Add new block](https://github.com/msf4-0/Blockly4RPA/new/main#adding-block)
- [improving an existing block design and code generator efficiency](https://github.com/msf4-0/Blockly4RPA/edit/main/contributor.md#improve-existing-block)
- [fix a bug](https://github.com/msf4-0/Blockly4RPA/edit/main/contributor.md#fix-bug) 
- [add new sample](https://github.com/msf4-0/Blockly4RPA/edit/main/contributor.md#add-new-sample)
- [improve Web design and accesbility](https://github.com/msf4-0/Blockly4RPA/edit/main/contributor.md#improvethe-web-design)

Before making any change to the source code, you will need first to read through the [licence](https://github.com/msf4-0/Blockly4RPA/blob/main/LICENSE) file to familiarize yourself with the limations you have. Then make pull request specifying what it is you are trying to achieve. Writing a proper request may be helpful for the community so that everyone may have clear understanding of what you did.  

## Adding block
Blocks are created using [Blockly guide](https://developers.google.com/blockly/guides/create-custom-blocks/overview) there you will find 
all the needed tool to desing your block and generator and guideline on how to add it into toolbox.   
where and how to organized your code in source code?    
- Blocks design js code or file can be include in the blocks directory either under one of the category or a new one you created. All the block in the source code are written in json structure so it may be goood to keep it that way. 
- Generator same as the block it can be either add into one of the category or a new one created. Make sure that the generator created follw all the python syntacx and semantics.    
- Add it to the toolbox xml area in the index.html file so it can seen in the UI.  
- Add documentation in the [wiki page](https://github.com/msf4-0/Blockly4RPA/wiki) on how to use your block or link it to a proper source on what the block does. 

## Improve existing block 
All blocks and generator structure are located in the block and generator directory, all you need it to find the block name and edit. Don't forget to update the documentation in the [wiki page](https://github.com/msf4-0/Blockly4RPA/wiki) if major change have been made. 

## Fix bug 
Find any bug, first have a look to issues post to see if there is not someone already working on it. If not then you will need to communicate with the team on how you are planning on fixing it so 
that they can help and support you in any way they can. 

## Add new sample 
Want to help other user understand how the building of the flow work with some RPA flow? first make sure that the automation accomplish is not redundant to the sample already there. If not 
build your flow and export the corresponding xml file. Only the xml file will be nessary as each user can download their own python file generated. 
It may be helpful to explain what your flow does. 

## improvethe web design 
In case you want to improve some fonctionality in the web ui you can access the index file and main script file where you can add or modify the event and object found on the UI.  
