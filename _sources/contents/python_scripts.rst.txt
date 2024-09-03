.. _python_scripts:

Different ways to run Python code
#################################

There are several ways to **run Python code**:

#. **Interactive Interpreter (Python REPL)**: This is the most basic way to run Python code. You can open a command prompt or terminal and type `python` to enter the Python interactive interpreter. Then you can type Python code directly and execute it line by line.
#. **Script Execution**: Python code is written in a text file and then executed using the Python interpreter. 
#. **Integrated Development Environments (IDEs)**: IDEs provide a complete environment for writing, debugging, and running code.
#. **Jupyter Notebooks**: Jupyter Notebooks are interactive documents that combine code, visualizations, and explanatory text. 
#. **Online Platforms**: There are online platforms and services that allow you to write and execute Python code directly in your web browser without installing anything locally. Examples include *Google Colab*, *Repl.it*, and *Jupyter Online*.

Interactive Interpreter (Python REPL)
*************************************

A :abbr:`REPL (Read-Eval-Print Loop)` is an interactive programming environment that allows you to **enter commands which are then executed immediately**, and the results are displayed.

*Python*'s standard interactive interpreter provides a REPL environment, where you can type *Python* expressions or statements and see their results immediately.

To execute *Python* instructions directly in its REPL, you can start it from the command line with :code:`python` in a command shell (:code:`cmd` in Microsoft Windows).

.. figure:: ../_static/images/start/cmd_shell_python.png
	:align: center
	:width: 90%

	Example of execution of an instruction in a Python REPL.
	
Then you can run any instruction and see its result.

Script Execution
****************

Script execution refers to running *Python* code stored in **script files** (:file:`.py` files). While a REPL allows you to execute Python code interactively line by line, script execution involves running a **complete Python script** from start to finish.

A common method to run a script is to execute from the command line or terminal by navigating to the directory containing the script and using the python command followed by the script's filename. For example: 

.. code-block:: bash

	python script.py


Integrated Development Environments
***********************************

Integrated Development Environments, like *PyCharm*, *Visual Studio Code* or *Spyder* provide a convenient interface for writing, debugging, and executing Python scripts. You can simply open the script file in the IDE and run it using the provided tools.

IDLE from Python
================

The :abbr:`IDLE (Integrated Development and Learning Environment)` provided by *Python* is a simple IDE. You can start it from your start menu by selecting :menuselection:`IDLE (Python 3.xx 32/64 bits)` (xx and 32 or 64 bits options depend on the version you installed on your machine).

.. figure:: ../_static/images/start/python_idle.png
	:align: center
	:width: 40%
	
	Start IDLE from Windows search bar.

You then access to an interactive *Python* console, where you can directly run instruction, using the REPL from *Python* (with syntax color highlighting), or execute a script by opening a file from the :menuselection:`File` menu.

.. figure:: ../_static/images/start/python_idle_hello.png
	:align: center
	:width: 90%

	Example of execution of an instruction from the interactive REPL and a script from a file in the IDLE environment of *Python*.


Spyder / Anaconda distribution
==============================

TO DO !


PyCharm / IDE
=============

**PyCharm** is a popular integrated development environment (IDE) specifically designed for Python programming. Developed by *JetBrains*, **PyCharm** offers a comprehensive set of tools that streamline the process of writing, debugging, and testing Python code. It is widely used by developers due to its powerful features, ease of use, and support for various Python frameworks and libraries.

.. figure:: ../_static/images/pycharm/pycharm_main_window.png
	:align: center
	
	Main window of PyCharm
	
More details on the PyCharm website: https://www.jetbrains.com/pycharm/

Create a project
----------------

To create a new project:

- Start the PyCharm software
- Click on :file:`New Project` or :file:`File / New Project`

.. figure:: ../_static/images/pycharm/pycharm_new_project.png
	:align: center

In the new window:

- select the **folder** where the project will be saved in the :file:`Location` box
- in the :file:`Python Interpreter` area, check on the :file:`Previously configured` choice
- and select your local interpreter. If no interpreter is set up, see the section below, otherwise:
- check the :file:`create a main.py welcome script` choice
- finally, click on :file:`Create`


Choose an interpreter
---------------------

In the :file:`Python Interpreter` area:

- click on :file:`Add Interpreter` and :file:`Add Local Interpreter`

.. figure:: ../_static/images/pycharm/pycharm_add_interpreter.png
	:align: center

- select :file:`System Interpreter` and choose a **Python 3** version

.. figure:: ../_static/images/pycharm/pycharm_add_interpreter_system.png
	:align: center
	
- click :file:`OK`

Run a program
-------------

Before running your code, you need to select a configuration to interprete your program.

In the top of the window, click on the option located to the left of the play button (Run).

.. figure:: ../_static/images/pycharm/pycharm_configuration.png
	:align: center
	
In the :file:`Run/Debug configurations` window, click on :file:`Add new` in the left part.

.. figure:: ../_static/images/pycharm/pycharm_configuration_new.png
	:align: center

Enter a **name** for your configuration and select the python script in the :file:`Scrip file` option box.

Select a Python 3 interpreter and then click :file:`OK`.

.. figure:: ../_static/images/pycharm/pycharm_configuration_new_python.png
	:align: center

You're ready to run your first script with PyCharm... Click on the play button (Run).

Debug a program
---------------

PyCharm comes with a built-in debugging tool that offers a user-friendly interface for debugging Python code. To run PyCharm in a debug mode, you have to click on the **bug button** located to the right of the play button (Run).

You can easily set **breakpoints** by clicking next to the line number in the editor. When the code execution reaches a breakpoint, it pauses, allowing you to inspect the state of the program.

You can also **"watch" variables**, meaning you can track the values of specific variables as your code executes, which helps in diagnosing issues, in the :file:`Threads & Variables` section (bottom of the main window).

.. figure:: ../_static/images/pycharm/pycharm_debug.png
	:align: center

|

Jupyter Notebooks
*****************

Jupyter Notebooks are interactive documents that combine code, visualizations, and explanatory text. They're great for data analysis, machine learning, and sharing code. You can run Python code in cells within the notebook.

JupyterLab is a web-based interactive development environment for Jupyter notebooks.