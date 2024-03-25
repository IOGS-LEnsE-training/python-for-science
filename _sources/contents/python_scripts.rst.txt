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

Jupyter Notebooks
*****************

Jupyter Notebooks are interactive documents that combine code, visualizations, and explanatory text. They're great for data analysis, machine learning, and sharing code. You can run Python code in cells within the notebook.

JupyterLab is a web-based interactive development environment for Jupyter notebooks.