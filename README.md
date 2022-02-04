# Blockly4RPA
  **Blockly4RPA** is a drag and drop Web-Based Low Code User Interface (UI) or Robotic Process Automation (RPA) based on TagUI. Each of it blocks represent a command in python, which can be later run into any IDE. 

## Instal Blockly locally 
To have Blockly4Rpa running locally it will reqquired you to install dependencies software 
1. download the zip file from gitHub 
2. install python 3.9 or any latest version https://www.python.org/downloads/
3. install node red to run locally https://nodered.org/docs/getting-started/local#installing-with-npm
4. install rpa for python package https://tagui.readthedocs.io/en/latest/tools.html#rpa-for-python-for-python-users
5. unzip Blockly4RPA file and open index.html using your browser 
6. open node red flow 
    * open your command prompt 
    * set your directory to *$cd ".../Blockly4RPA/scripts"* 
    * then run flow by typing into you command prompt *$node-red flowRunButton.json* 
    * if node red was installed prorparly you will see something similar to this in your command prompt 
    ![image](https://user-images.githubusercontent.com/88389254/152491258-2997e11e-652e-4e8c-aff0-bf4001a949c8.png)
    * now you can copy the url highlighted in white and paste into your browser to have node-red running 
    * **Do not close the command prompt doing so will stop the flow of node red**  
Your are now set to write your own flow 

## How to use Blockly4RPA
Now that all it set, all it left it building your rpa flow, to do so some basic knowledge of python and rpa it essential. However each blocks most of the blocks in the toolbar in web UI have and hint on how to use it which it showed when the mouse is on it and if need more information you can drag the block in the workspace and right click then click on help. 
