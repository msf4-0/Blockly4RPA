# Blockly4RPA
  **Blockly4RPA** is a drag and drop Web-Based Low Code User Interface (UI) or Robotic Process Automation (RPA) based on TagUI. Each of it blocks represent a command in python, which can be later run into any IDE.    

![Blockly4RPA_UI](https://user-images.githubusercontent.com/88389254/152508781-9bd835c6-2cc7-4768-ae4f-aa64408a04f8.png)
> Fig1 representaion of the UI with a sample block flow and anotation of each part associate to the UI 

## Instal Blockly locally 
To have Blockly4Rpa running locally it will reqquired you to install dependencies software 
1. download the zip file from gitHub 
2. [install python](https://www.python.org/downloads/) 3.9 or any latest version 
3. [install node red](https://nodered.org/docs/getting-started/local#installing-with-npm) to run locally
4. [install rpa package for python](https://tagui.readthedocs.io/en/latest/tools.html#rpa-for-python-for-python-users)
5. unzip Blockly4RPA file and open index.html using your browser 
6. open node red flow 
    * open your command prompt 
    * set your directory to *$cd ".../Blockly4RPA/scripts"* 
    * then run flow by typing into you command prompt *$node-red flowRunButton.json* 
    * if node red was installed prorparly you will see something similar to this in your command prompt
    
    ![image](https://user-images.githubusercontent.com/88389254/152491258-2997e11e-652e-4e8c-aff0-bf4001a949c8.png)
    > Fig2 command prompt after node-red is run locally 
    
    * now you can copy the url highlighted in white and paste into your browser to have node-red running 
    * **Do not close the command prompt doing so will stop the flow of node red**  
Your are now set to write your own flow 

## How to use Blockly4RPA
Now that all it set, all it left it building your rpa flow, to do so some basic knowledge of python and rpa it essential. However most of the blocks in the toolbar in web APP UI have and hint on how to use it or what it does which it showed when the mouse is on top of it and if more informations is needed there is reference help page attach to that can be found up on right click on the block. 

https://user-images.githubusercontent.com/88389254/152506899-e07d9534-7908-4182-ac3e-2883062a175d.mp4

https://user-images.githubusercontent.com/88389254/152507635-b30364f4-e56d-4b5a-9f30-c427b4a57b79.mp4

After the flow is built, it may required to be saved or just save the python generated code of it which can be seen in the leftmost area of the UI. To do so you need to click on the "Export Flow" and "Download Python" on the blue panel (Fig3) respectively to export the XML file containing the block as in the workspace display and download the python script as appeard in the code generator box. **!!! The code generator is text edit box, however all change made directly to it would not appear in the download python script only if modification made on the block itself.** Clicking one of them will pop up a box (Fig4) where the file name need to be enter then the file will be saved into the directory set by the browser in use. If a need of download directory is need, you can refer to [this](https://www.computerhope.com/issues/ch002103.htm) on how to do it.  

![fig 3](https://user-images.githubusercontent.com/88389254/153107422-706c7e3d-9891-4de6-9af8-7023635655b5.png)
> Fig3 export xml and download python script button

![image](https://user-images.githubusercontent.com/88389254/153113889-1a4b6cd0-062e-4986-ab90-78f84d2e32b9.png)
> Fig4 file name input popup box 

To modify a flow previoulsy built you will need fisrst to delete all the blocks currently present in the workspace by either dragging each block to the bin or reloading the web page, not doing so will make the imported workspace overlap with the current one. Then click on "Import Workspace" in the blue panel then choose the file xml you want to import then click on "Import" follow by "close" there you have your old workspace.  

Finally to run your downloaded pythin script you can clic on "Run Python" in blue panel then the node-red dashboard UI, to run your file you will need to enter the location of your file enclose in to double quotation marks then press enter. **!!! Enter the location according to the default location your command prompt open in, example if your command prompt open in the user directory and your file is located in Downloads your entry will look like this "Downloads/py_file.py", if your file is located in same directory as the command prompt pointing all you need to do it to type the name of your file eg py_file.py without the quotation marks***

