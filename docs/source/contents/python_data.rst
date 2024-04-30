Data types and display in Python 
################################

.. note::

	In this section, you can use any of the working methods mentioned in the previous section :ref:`python_scripts`. It is even advisable to try several.


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
	
	.. code-block:: python
	
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

Formatted display
=================

If you want to display a string of character including variable values, you can use the :code:`format` method or *f-strings* (formatted string literals) to achieve formatted printing. 

Format method
-------------
.. code-block:: python
	
	velocity = 20  # meters per second
	acceleration = 5  # meters per second squared
	time = 3  # seconds
	
	formatted_string = "Velocity: {} m/s, Acceleration: {} m/s^2".format(velocity, acceleration)	
	

Formatted string literals
-------------------------

.. code-block:: python
	
	velocity = 20  # meters per second
	acceleration = 5  # meters per second squared
	time = 3  # seconds
	
	formatted_string = f"Velocity: {velocity} m/s, Acceleration: {acceleration} m/s^2"


Both of these methods will produce the same output:

>>> print(formatted_string)
Velocity: 20 m/s, Acceleration: 5 m/s^2

You can include any variables or expressions within the curly braces {} of the f-string or the placeholders within the format() method, and they will be replaced with their values when the string is formatted.


Numbers
*******

In Python, numbers can be of different types:

- **Integers** (:class:`int`): whole numbers without any decimal point.
- **Floating-point numbers** (:class:`float`): numbers that have a decimal point or use exponential (scientific) notation.
- **Complex numbers** (:class:`complex`): consisting of a real part and an imaginary part. They are represented as :math:`a + bj`, where :math:`a` is the real part, :math:`b` is the imaginary part, and :math:`j` represents the square root of -1 (imaginary unit).

Here are some examples of using these numeric types in Python:


.. code-block:: python

	# Integers
	x = 42
	y = -10
	print(x)  # Output: 42
	print(y)  # Output: -10

	# Floating-point numbers
	pi = 3.14159
	e = 2.71828
	print(pi)  # Output: 3.14159
	print(e)   # Output: 2.71828

	# Complex numbers
	z = 2 + 3j
	print(z)  # Output: (2+3j)
	
	
Python provides various arithmetic operations for working with numbers, including addition (+), subtraction (-), multiplication (*), division (/), exponentiation (**), and more. These operations work as you would expect, and you can mix different types of numbers in your expressions.


Strings
*******

Booleans
********

Lists, tuples, dictionaries
***************************

