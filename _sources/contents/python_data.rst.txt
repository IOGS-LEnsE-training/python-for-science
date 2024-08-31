Data types and display in Python 
################################

.. note::

	In this section, you can use any of the working methods mentioned in the previous section :ref:`python_scripts`. It is even advisable to try several.


There are lots of **types of data** and **operations** already implemented in Python. 

In this section, we will deal with variables and their type to store **booleans**, **numbers**, **characters** and **strings of characters**, which are basic types in *Python*.

We will also present you a way to display their values and their types.

Comments
********

In Python, comments are used to annotate your code and provide explanations or notes that are not executed as part of the program. Comments are essential for making your code more understandable to yourself and others.

Single-Line Comments
====================

Single-line comments start with the :code:`#` symbol. Everything following the :code:`#` on that line is considered a comment and is ignored by the Python interpreter.

.. code-block:: python

	# This is a single-line comment
	print("Hello, World!")  # This is an inline comment


Multi-Line Comments
===================

Python does not have a specific syntax for multi-line comments like some other programming languages. However, there are two common ways to create multi-line comments:

* Using Multiple Single-Line Comments
* Using Docstrings with triple quotes (:code:`"""` or :code:`'''`). 

.. code-block:: python

   # This is a multi-line comment.
   # Each line starts with a # symbol.
   # This method is often used for longer comments.


.. code-block:: python

   """
   This is a multi-line comment using triple quotes.
   It can span multiple lines.
   """
   
.. note ::

	When used outside of functions, classes, or modules, docstrings don't affect the execution of the code. However, if placed within a function, class, or module, they serve as documentation and are accessible via :code:`__doc__` attributes.


.. code-block:: python

	def example_function():
		"""
		This is a docstring that can also be used as a multi-line comment.
		It provides information about the function.
		"""
		print("Example function")


Best Practices for Writing Comments
===================================

- **Be Clear and Concise:** Write comments that are easy to understand and get straight to the point.
- **Keep Comments Updated:** Ensure that comments accurately reflect the code they describe.
- **Avoid Obvious Comments:** Don’t comment on things that are self-explanatory.

**Example of Good Commenting:**

.. code-block:: python

	# Calculate the area of a rectangle
	width = 10
	height = 5

	# Area formula: width * height
	area = width * height

	print(f"The area is {area}")


**Example of Over-Commenting:**

.. code-block:: python

	# Assign 10 to width
	width = 10
	# Assign 5 to height
	height = 5

	# Multiply width by height and assign the result to area
	area = width * height

	# Print the value of area
	print(f"The area is {area}")


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

Variable names should be lowercase, with words separated by underscores as necessary to improve readability.

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

Strings are a **sequence of characters** used to represent text. They can include letters, numbers, symbols, and whitespace. Strings are one of the most commonly used data types in Python, and they are enclosed in either single quotes ('...'), double quotes ("...").

Create strings
==============

You can create a string by enclosing text in single quotes (:code:`'`), double quotes (:code:`"`).

.. code-block:: python
	
	my_string = "Hello, World!"

Access characters
=================

You can access individual characters in a string using indexing, as in a list. Python uses zero-based indexing.

.. code-block:: python
	
	first_char = my_string[0]  # 'H'
	last_char = my_string[-1]  # '!'

String Length
=============

You can find the length of a string using the `len()` function.

.. code-block:: python
	
	text = "Hello, World!"
	length = len(text)  # 13

Operations on strings
=====================

Concatenation
-------------

You can concatenate strings using the :code:`+` operator.

.. code-block:: python
	
	greeting = "Hello"
	name = "Alice"
	message = greeting + ", " + name + "!"  # 'Hello, Alice!'


Repetition
----------

You can repeat a string using the :code:`*` operator.

.. code-block:: python
	
	laugh = "ha" * 3  # 'hahaha'


Formatting (f-Strings - Python 3.6+)
------------------------------------

.. code-block:: python
	
	name = "Alice"
	age = 30
	formatted_string = f"My name is {name} and I am {age} years old."
	# 'My name is Alice and I am 30 years old.'


Changing Case
-------------

- **`upper()`**: Converts all characters to uppercase.
- **`lower()`**: Converts all characters to lowercase.
- **`capitalize()`**: Capitalizes the first character.
- **`title()`**: Capitalizes the first character of each word.
- **`swapcase()`**: Swaps the case of each character.

.. code-block:: python
	
	text = "hello world"
	print(text.upper())       # 'HELLO WORLD'
	print(text.capitalize())  # 'Hello world'
	print(text.title())       # 'Hello World'

Stripping Whitespace
--------------------

- **`strip()`**: Removes leading and trailing whitespace.
- **`lstrip()`**: Removes leading (left-side) whitespace.
- **`rstrip()`**: Removes trailing (right-side) whitespace.

.. code-block:: python
	
	text = "   Hello, World!   "
	print(text.strip())   # 'Hello, World!'
	print(text.lstrip())  # 'Hello, World!   '
	print(text.rstrip())  # '   Hello, World!'


Splitting and Joining Strings
-----------------------------

- **`split()`**: Splits a string into a list of substrings based on a delimiter.
- **`join()`**: Joins a list of strings into a single string with a specified delimiter.

.. code-block:: python
	
	text = "Hello, World!"
	words = text.split(", ")  # ['Hello', 'World!']
	joined_text = " - ".join(words)  # 'Hello - World!'

Finding and Replacing Substrings
--------------------------------

- **`find()`**: Returns the lowest index of the substring if found, otherwise returns `-1`.
- **`replace()`**: Replaces occurrences of a substring with another substring.

.. code-block:: python
	
	text = "Hello, World!"
	index = text.find("World")  # 7
	new_text = text.replace("World", "Python")  # 'Hello, Python!'


Checking String Properties
--------------------------

- **`startswith()`**: Checks if the string starts with a specified substring.
- **`endswith()`**: Checks if the string ends with a specified substring.
- **`isalpha()`**: Checks if the string consists only of alphabetic characters.
- **`isdigit()`**: Checks if the string consists only of digits.
- **`isalnum()`**: Checks if the string consists only of alphanumeric characters.

.. code-block:: python
	
	text = "Hello123"
	print(text.startswith("Hell"))  # True
	print(text.isalpha())           # False (because it contains digits)
	print(text.isalnum())           # True (because it contains only letters and digits)

Booleans
********

Booleans in Python are a fundamental data type that can have one of two values: :code:`True` or :code:`False`. Booleans are used to represent the truth values in logic and are the backbone of conditional expressions and control flow in programming.

These values are case-sensitive and must be written with an uppercase :code:`T` and :code:`F`.

The boolean type in Python is :code:`bool`.

.. code-block:: python

	is_sunny = True
	is_raining = False
	
	print(type(is_sunny))  # Output: <class 'bool'>
	print(is_sunny)        # Output: True
	print(is_raining)      # Output: False


Boolean values are often manipulated using boolean operators:

Logical Operators
=================

- :code:`and`: Returns :code:`True` if both operands are :code:`True`.
- :code:`or`: Returns :code:`True` if at least one operand is :code:`True`.
- :code:`not`: Returns :code:`True` if the operand is :code:`False`, and vice versa.

.. code-block:: python
	
	a = True
	b = False
	
	print(a and b)  # Output: False
	print(a or b)   # Output: True
	print(not a)    # Output: False


Comparison Operators
====================

These operators compare two values and return :code:`True` or :code:`False`.

- :code:`==` : Equal to
- :code:`!=` : Not equal to
- :code:`>`  : Greater than
- :code:`<`  : Less than
- :code:`>=` : Greater than or equal to
- :code:`<=` : Less than or equal to


.. code-block:: python
	
	print(5 > 3)   # Output: True
	print(5 == 5)  # Output: True
	print(5 != 5)  # Output: False


Lists, tuples, dictionaries
***************************

Lists
=====

A **list** is a versatile and widely-used data structure that allows you to store an ordered collection of items. These items can be of any type, including integers, floats, strings, other lists, or even custom objects. Lists are mutable, meaning you can modify their contents after creation.

Define a list
-------------

You can create an **empty list**:

.. code-block:: python
	
	my_list = []

You can also create a specific list with elements:

.. code-block:: python

	my_list = [1, 2, 3, 4, 5]
   
Lists can also contain elements of different types:

.. code-block:: python

   mixed_list = [1, "hello", 3.14, True, [1, 2, 3]]

Finally, list comprehensions provide a concise way to create lists.


.. code-block:: python

    squares = [x**2 for x in range(1, 6)]
    
>>> print(squares) 
[1, 4, 9, 16, 25]

Access to an element or a part of elements
------------------------------------------

You can access to an element of a list by its index:

.. code-block:: python

	first_element = my_list[0]  # Accesses the first element
	
>>> print(first_element)
1


You can also use negative indices to access elements from the end of the list:

.. code-block:: python

	last_element = my_list[-1]  # Accesses the last element

>>> print(last_element)
5

To access to a range of elements, you can use slicing method:

.. code-block:: python

	sub_list = my_list[1:4]  # Gets elements from index 1 to 3

>>> print(sub_list)
[2, 3, 4]


Add Elements to a List
----------------------

You can add elements to a list with several methods.

With the :code:`append` method, that adds an element to the end of the list:


.. code-block:: python

	my_list.append(6)

>>> print(my_list)
[1, 2, 3, 4, 5, 6]

With the :code:`insert` method, that inserts an element at a specified position:

.. code-block:: python

	my_list.insert(2, 'a')

>>> print(my_list)
[1, 2, 'a', 4, 5, 6]

With the :code:`extend` method, that adds elements from another list (or any iterable) to the end of the list:

.. code-block:: python

	my_list.extend([7, 8, 9])

>>> print(my_list)
[1, 2, 'a', 4, 5, 6, 7, 8, 9]

Remove Elements to a List
-------------------------

You can remove elements of a list with several methods.

With the :code:`remove` method, that removes the first occurrence of a specific element:

.. code-block:: python

	my_list.remove('a')
    	
>>> print(my_list)  
[1, 2, 3, 4, 5, 6, 7, 8, 9]

With the :code:`pop` method, that removes an element at a specified position and returns it. If no index is specified, it removes the last element:

.. code-block:: python
	
	last_element = my_list.pop()
	
>>> print(my_list)       
[1, 2, 3, 4, 5, 6, 7, 8]

With the :code:`clear` method, that removes all elements from the list:

.. code-block:: python

	my_list.clear()

>>> print(my_list)
[]

Concatenate two lists
---------------------

The :code:`+` operator is the simplest way to concatenate two lists. It combines the elements of both lists into a new list.

.. code-block:: python
	
	list1 = [1, 2, 3]
	list2 = [4, 5, 6]

	# Concatenate lists
	result = list1 + list2

>>> print(result)
[1, 2, 3, 4, 5, 6]

The :code:`extend` method can also add all elements of the second list to the end of the first list. This method modifies the original list in place and does not return a new list.

Check membership
----------------

You can check if an element exists in the list with the :code:`in` keyworkd:

.. code-block:: python
	
	if 3 in my_list:
        print("3 is in the list")


Length of a list
----------------

To find the number of elements in the list, you can use the :code:`len` method from Python:

.. code-block:: python
	
	length = len(my_list)

>>> print(length)
5

Iterate Over a List
-------------------

You can loop through the elements of a list using a :code:`for` loop.

.. code-block:: python

	for item in my_list:
		print(item)


Tuples
======

A tuple is an ordered, immutable **collection of elements**. Tuples are similar to lists in that they can store a sequence of items, but unlike lists, the elements of a tuple cannot be changed after the tuple is created. This immutability makes tuples useful in situations where a constant set of values is needed.

Define a tuple
--------------

Tuples are defined by enclosing the elements in parentheses :code:`()` and separating them with commas :code:`,`.

You can create an **empty tuple**:

.. code-block:: python

	empty_tuple = ()
	
Or with elements:


.. code-block:: python
	
	mixed_tuple = (1, "hello", 3.14, True)
	

Access to an element of a Tuple
-------------------------------

You can access elements in a tuple using indexing, similar to lists. The index starts from 0.

.. code-block:: python
	
	my_tuple = (10, 20, 30, 40, 50)

	# Access the first element
	first_element = my_tuple[0]  # Output: 10

	# Access the last element using negative indexing
	last_element = my_tuple[-1]  # Output: 50

	# Slicing a tuple
	sub_tuple = my_tuple[1:4]  # Output: (20, 30, 40)

Concatenate tuples
------------------

You can concatenate two or more tuples using the :code:`+` operator.

.. code-block:: python
	
	tuple1 = (1, 2, 3)
	tuple2 = (4, 5, 6)
	combined_tuple = tuple1 + tuple2  # Output: (1, 2, 3, 4, 5, 6)

Unpack Tuples
-------------

You can unpack the elements of a tuple into variables.

.. code-block:: python
	
	my_tuple = (1, 2, 3)
	a, b, c = my_tuple
	print(a)  # Output: 1
	print(b)  # Output: 2
	print(c)  # Output: 3

Dictionaries
============

A **dictionary** is a built-in data structure that allows you to store and manage data in **key-value pairs**. Dictionaries are versatile and widely used for tasks that require a mapping of unique keys to values. 


Define a dictionary
-------------------

Dictionaries are defined using curly braces :code:`{}`, with key-value pairs separated by commas. Each key and value is separated by a colon :code:`:`.

.. code-block:: python

	# Creating a dictionary
	my_dict = {
		"name": "Alice",
		"age": 30,
		"city": "New York"
	}
	

Access to values
----------------

You can access values in a dictionary by referencing their keys using square brackets :code:`[]`.

.. code-block:: python

	name = my_dict["name"]  # Output: Alice
	age = my_dict["age"]    # Output: 30

Add a value
-----------

You can add new **key-value pairs** or update existing ones by assigning values to keys.

**Example:**

.. code-block:: python

	# Adding a new key-value pair
	my_dict["email"] = "alice@example.com"

	# Modifying an existing key-value pair
	my_dict["age"] = 31

Remove a value
--------------

You can remove key-value pairs using the :code:`del` statement or the :code:`pop` method.

.. code-block:: python

	# Using del to remove a key-value pair
	del my_dict["city"]

	# Using pop() to remove a key-value pair and get the value
	email = my_dict.pop("email")  # Output: alice@example.com


Common Dictionary Methods
-------------------------

- :code:`keys()`: Returns a view object displaying a list of all keys in the dictionary.

>>> print(my_dict.keys())  
dict_keys(['name', 'age'])

- :code:`values()`: Returns a view object displaying a list of all values in the dictionary.

>>> print(my_dict.values())  
dict_values(['Alice', 31])

- :code:`items()`: Returns a view object displaying a list of all key-value pairs in the dictionary.

>>> print(my_dict.items()) 
dict_items([('name', 'Alice'), ('age', 31)])

- :code:`clear()`: Removes all key-value pairs from the dictionary.

>>> my_dict.clear()

Nested Dictionaries
-------------------

Dictionaries can contain other dictionaries as values, allowing for complex data structures.

.. code-block:: python

	employees = {
		"Alice": {"age": 30, "position": "Engineer"},
		"Bob": {"age": 25, "position": "Designer"}
	}

You can access to nested values:

.. code-block:: python

	alice_age = employees["Alice"]["age"]  # Output: 30
	bob_position = employees["Bob"]["position"]  # Output: Designer
