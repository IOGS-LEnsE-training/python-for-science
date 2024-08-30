Functions in Python language
############################

Functions in Python are a fundamental concept in programming that allow you to **group a set of statements** so they can be **reused** and **organized** more effectively. 

Goal of functions
*****************

- **Code Reusability:** Functions allow you to write code once and reuse it multiple times throughout your program.
- **Modularity:** They help break down a large program into smaller, manageable, and more understandable pieces.
- **Maintainability:** Functions make the code easier to read, debug, and maintain.
- **Abstraction:** They allow you to abstract complex operations and provide a simpler interface.


How to Define a function
************************

Function names should be lowercase, with words separated by underscores as necessary to improve readability.

* Use the `def` keyword followed by the function name and parentheses `()`.
* Inside the parentheses, you can define parameters (optional) that the function can accept.
* The function body is indented and contains the code that performs the task.
* Optionally, you can return a value using the `return` keyword.

.. code-block:: python

	def function_name(parameters):
		# function body
		# optional return statement
		return value


How to Use a function
*********************

* To execute the function, call it by its name followed by parentheses.
* If the function requires parameters, pass the arguments inside the parentheses.

>>> function_name(arguments)


Parameters and options
**********************

Functions can accept a variety of parameters, each serving a different purpose. Parameters allow a better **reusability**.

Positional Parameters
=====================

These are the most common type of parameters. They must be provided in the **correct order** when the function is called.

.. code-block:: python

	def add(a, b):
		return a + b

>>> result = add(2, 3)



Default Value for parameters
============================

You can define **default values for parameters**, which will be used if no value is provided when the function is called.

.. code-block:: python

	def greet(name="Guest"):
		print(f"Hello, {name}")

>>> greet()         
Hello, Guest

>>> greet("Alice") # Overrides default value
Hello, Alice
	   
Keyword Parameters
==================

Python allows you to pass arguments by specifying the parameter name, regardless of their position. This can make the function calls more readable.


.. code-block:: python

	def greet(name, message):
		print(f"{message}, {name}")

>>> greet(name="Alice", message="Hello")
>>> greet(message="Good morning", name="Bob")


Parameter annotations
=====================

Annotations are optional and provide a way to **attach metadata to function parameters** and return values. They don’t enforce type checking but are useful for documentation and tools.

.. code-block:: python

	def add(a: int, b: int) -> int:
		return a + b

>>> result = add(2, 3)  # Annotations suggest that 'a' and 'b' should be integers

Multiple Return Values Functions
********************************

Functions can return **multiple values** by returning them as a **tuple**. This allows you to pack multiple values together and then unpack them when the function is called. This is particularly useful when a function needs to compute and return several related pieces of data.

.. code-block:: python

	def get_min_max(numbers):
		return min(numbers), max(numbers)

>>> min_val, max_val = get_min_max([1, 2, 3, 4, 5])
>>> print(f"Min: {min_val}, Max: {max_val}")
Min: 1, Max: 5


Lambda functions
****************

A **lambda function** is a small, **anonymous function** defined using the *lambda* keyword. Unlike regular functions defined using the *def* keyword, lambda functions are typically used for short, simple operations. They can take any number of arguments but have only one expression.

.. code-block:: python

	lambda arguments: expression

They are limited to a **single expression**, which is evaluated and returned. They cannot contain multiple statements or annotations.

For example:

.. code-block:: python

	add = lambda x, y: x + y

>>> print(add(2, 3))
5

Some examples
*************

Simple Function without Parameters
==================================

.. code-block:: python

	def greet():
		print("Hello, World!")
   

>>> greet()
Hello, World!

Function with Parameters
========================

.. code-block:: python

	def greet_user(name: str):
		print(f"Hello, {name}!")
   

>>> greet_user("Alice")
Hello, Alice!

Function with a Return Value
============================

.. code-block:: python

	def add_numbers(a: int, b: int) -> int:
		return a + b
   

>>> result = add_numbers(5, 3)
>>> print(result)
8

Function with Default Parameter Values
======================================

.. code-block:: python

	def greet_user(name: str ="Guest"):
       print(f"Hello, {name}!")

>>> greet_user("Alice")
Hello, Alice!

>>> greet_user("Bob") 
Hello, Bob!
