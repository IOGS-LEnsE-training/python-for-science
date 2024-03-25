Data types and display in Python 
################################

There are lots of **types of data** and **operations** already implemented in Python. 

In this section, we will deal with variables and their type to store **booleans**, **numbers**, **characters** and **strings of characters**, which are basic types in *Python*.

We will also present you a way to display their values and their types.

Variables, types and assignement
********************************

Variables
=========

A variable is a **container for storing a data value**. In *Python*, variables are created the moment you first assign them a value.

There are some rules for naming a variable in Python:

* A variable name must **start with a letter** or the underscore character
* A variable name can **only contain alpha-numeric characters** and underscores (A-z, 0-9, and _ )
* Variable names are **case-sensitive** (age, Age and AGE are three different variables)
* A variable name cannot be any of the Python keywords.

.. note:: 

	To **make your code more understandable**, it's important to call your variables in a way that quickly identifies the information they contain.
	
	Don't call a variable :code:`a` or :code:`b` if its content is the wavelength of a source. Call it :code:`wavelength`.
	

Assignement
===========

Assignement of a variable is done with the equal ( = ) character.

.. code-block:: python

	wavelength = 632   # nm
	
In this example, wavelength is the name of the variable and a value of 632 is assigned to it. The part of the line beginning by the `#` character is a comment (here to specify the unit).

You can reaffect a variable during the execution of your program. In *Python*, you can also change its type.

.. code-block:: python

	wavelength = 632   	# nm - here wavelength is an integer
	wavelength = '632'	# Here wavelength is a string
	wavelength = 632.0	# Here wavelength is a float number

Type of a variable
==================

The :code:`type` function from *Python* permits to know the type of the data stored in a variable.

>>> first_name = "LEnsE"
>>> type(first_name)
<class 'str'>

.. note::

	If your code is executed **from a script**, you need to put the return of the :code:`type` method as the argument of the :code:`print` method.
	
	.. code-block::
	
		wavelength = 632.0
		print(type(wavelength))
		
	This example gives: :code:`<class 'float'>`

.. note::

	The previous note is true for all the return object of a function you want to display inside a script file.

Multiple values assignement
===========================

Python allows you to assign values to multiple variables in one line.

>>> first_name, last_name, age = "LEnsE", "tech", 12
>>> print(last_name)
tech

It's also possible to affect the same value to differents variables.

>>> a = b = 5.7
>>> print(b)
5.7

Display information to the user
*******************************

Display a string of characters
==============================

To display information to the user, you can use the :code:`print` function from *Python*.

>>> print('Hello from LEnsE.tech')
Hello from LEnsE.tech

This method takes a string of characters as an argument.

Display the value of a variable
===============================

You can also give a variable or the return of a function to the :code:`print` function.

>>> first_name = "LEnsE"
>>> print(first_name)
LEnsE

>>> number_of_students = 158
>>> print(number_of_students)
158


Numbers
*******


Numbers, strings, booleans

Lists, tuples, dictionaries

