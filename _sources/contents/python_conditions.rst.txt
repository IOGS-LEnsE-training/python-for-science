Conditionals and loops
######################

In Python, conditionals and loops are fundamental constructs that control the flow of a program. 

Boolean conditions
******************

In Python, a **condition** is an expression that evaluates to either :code:`True` or :code:`False`. Conditions are used to make decisions in the code, such as whether to execute a certain block of code, repeat a loop, or choose between different options.

Common Conditional Expressions
==============================

Here are some common ways to create conditions in Python.

Comparison Operators
--------------------

These operators compare two values and return :code:`True` or :code:`False`.

- :code:`==` : Equal to
- :code:`!=` : Not equal to
- :code:`>`  : Greater than
- :code:`<`  : Less than
- :code:`>=` : Greater than or equal to
- :code:`<=` : Less than or equal to

.. code-block:: python
	
	x = 10
	y = 5
	condition = (x > y)  # True, because 10 is greater than 5


Logical Operators
-----------------

These operators are used to combine multiple conditions.

- :code:`and` : Returns :code:`True` if both conditions are :code:`True`
- :code:`or`  : Returns :code:`True` if at least one condition is :code:`True`
- :code:`not` : Returns :code:`True` if the condition is :code:`False`

.. code-block:: python

	x = 10
	y = 5
	z = 3
	condition = ((x > y) and (y > z))  # True, because both x > y and y > z are True


Membership Operators
--------------------

These operators are used to check if a value is in a sequence (like a list, tuple, or string).

- :code:`in` : Returns :code:`True` if the value is found in the sequence
- :code:`not in` : Returns :code:`True` if the value is not found in the sequence

.. code-block:: python
	
	numbers = [1, 2, 3, 4, 5]
	condition = (3 in numbers)  # True, because 3 is in the list

Identity Operators
------------------

These operators compare the memory locations of two objects.

- :code:`is` : Returns :code:`True` if both variables point to the same object
- :code:`is not` : Returns :code:`True` if the variables point to different objects

.. code-block:: python

	a = [1, 2, 3]
	b = a
	condition = (a is b)  # True, because b refers to the same object as a


Conditionals
************

Conditionals are used to execute certain pieces of code based on whether a condition is :code:`True` or :code:`False`. Python provides :code:`if`, :code:`elif`, and :code:`else` statements for conditional execution.

.. code-block:: python

	if condition1:
		# code block to execute if condition1 is True
	elif condition2:
		# code block to execute if condition2 is True
	else:
		# code block to execute if none of the above conditions are True

For example:

.. code-block:: python

	if x > 10:
		print("x is greater than 10")
	elif x > 5:
		print("x is greater than 5 but less than or equal to 10")
	else:
		print("x is 5 or less")

If you test this code for :code:`x = 7`, the result is : :code:`"x is greater than 5 but less than or equal to 10"`.

Loops
*****

Loops are used to repeatedly execute a block of code as long as a condition is true or for a specified number of iterations.

`for` Loop
==========

A :code:`for` loop is used to iterate over a sequence (such as a list, tuple, dictionary, set, or string).

.. code-block:: python
	
	for item in sequence:
		# code block to execute for each item in the sequence

For example:

.. code-block:: python
	
	numbers = [1, 2, 3, 4, 5]
	for number in numbers:
		print(number)

This example give this output:

.. code-block:: yaml
	
	1
	2
	3
	4
	5


`range()` with `for` Loop
=========================

The :code:`range()` function generates a sequence of numbers, which is often used with a :code:`for` loop.

.. code-block:: python
	
	for i in range(start, stop, step):
		# code block to execute for each value in the range


For example:

.. code-block:: python
	
	for i in range(1, 6):
		print(i)

This example give this output:

.. code-block:: yaml
	
	1
	2
	3
	4
	5
	
`enumerate()` with `for` Loop
=============================

When you use :code:`enumerate()` in a :code:`for` loop, it provides two values: the index (which starts from 0 by default) and the item from the iterable. This is particularly useful when you need both the element and its position in the iterable.

.. code-block:: python
	
	for index, item in enumerate(iterable, start=0):
		# Code block that uses index and item

- **`iterable`**: The sequence you want to loop over (e.g., a list, tuple, string).
- **`start`**: The index value at which to start counting (default is 0).

Example with a List:

.. code-block:: python
	
	fruits = ["apple", "banana", "cherry"]

	for index, fruit in enumerate(fruits):
		print(f"Index: {index}, Fruit: {fruit}")

This example give this output:

.. code-block:: yaml
	
	Index: 0, Fruit: apple
	Index: 1, Fruit: banana
	Index: 2, Fruit: cherry

`while` Loop
============

A :code:`while` loop repeatedly executes a block of code as long as the condition is :code:`True`.

.. code-block:: python
	
	while condition:
		# code block to execute while the condition is True


.. code-block:: python
	
	x = 1
	while x <= 5:
		print(x)
		x += 1

This example give this output:

.. code-block:: yaml
	
	1
	2
	3
	4
	5

`break` and `continue`
======================

- **`break`**: Exits the loop prematurely, regardless of the loop's condition.
- **`continue`**: Skips the rest of the current iteration and moves on to the next iteration.

Example using **break**:

.. code-block:: python
	
	for i in range(1, 10):
		if i == 5:
			break
		print(i)

This example give this output:

.. code-block:: yaml
	
	1
	2
	3
	4

Example using **continue**:

.. code-block:: python
	
	for i in range(1, 6):
		if i == 3:
			continue
		print(i)

This example give this output:

.. code-block:: yaml
	
	1
	2
	4
	5