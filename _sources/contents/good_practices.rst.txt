Good practices with Python (and other langages)
###############################################

.. warning::
	
	Under construction !

* PEP 8 : https://peps.python.org/pep-0008/
* PEP257 (docstring) : https://peps.python.org/pep-0257/

Naming objects
**************

To **make your code more understandable**, it's important to call your variables in a way that quickly identifies the information they contain.
	
Don't call a variable :code:`a` or :code:`b` if its content is the wavelength of a source. Call it :code:`wavelength`.


Documenting methods and classes
*******************************

Documenting methods and classes in Python is crucial for: 

- **Clarity and Readability**: Documenting makes your code more understandable for others (and for yourself when you revisit the code later). They explain what a method does, what arguments it takes, and what it returns.
- **Maintenance and Debugging**: Clear documentation reduces the time needed to maintain or debug code. When the functionality is well-documented, it’s easier to identify and fix issues.
- **Collaboration**: In team environments, docstrings allow team members to quickly understand each part of the code, facilitating collaboration.
- **IDE Support**: Many IDEs use docstrings to provide inline help and autocompletion, enhancing the coding experience.

Docstring format
================

A **docstring** (short for "documentation string") is a special type of comment in Python used to document modules, classes, methods, and functions. Unlike regular comments, which are usually placed above or beside code and are intended to be ignored by Python, a docstring is stored as an attribute of the object it documents and can be accessed at runtime.

Python uses triple quotes (:code:`"""` or :code:`'''`) to create docstrings. There are different styles for writing docstrings, but the most common formats are the **PEP 257** and **NumPy/SciPy** styles. 

Documenting methods
===================


One-liner Docstring
-------------------

For **very simple methods**, a single line docstring may suffice.

.. code-block:: python
	
	def add(a, b):
		"""Return the sum of a and b."""
		return a + b

Multi-line Docstring
--------------------

**When more detail is required**, use a multi-line docstring.

.. code-block:: python
	
	def multiply(a, b):
		"""
		Multiply two numbers and return the result.

		Parameters:
		a (int, float): The first number.
		b (int, float): The second number.

		Returns:
		int, float: The product of a and b.
		"""
		return a * b


Detailed Docstring
------------------

For **methods with multiple parameters**, optional arguments, or complex behaviors, a detailed docstring is useful. This style often follows the NumPy/SciPy convention.

.. code-block:: python
	
	def divide(a, b):
		"""
		Divide one number by another.

		Parameters
		----------
		a : int, float
			The numerator.
		b : int, float
			The denominator. Must be non-zero.

		Returns
		-------
		float
			The result of the division.

		Raises
		------
		ZeroDivisionError
			If `b` is zero.
		ValueError
			If either `a` or `b` is not a number.
		"""
		if b == 0:
			raise ZeroDivisionError("Cannot divide by zero")
		return a / b




Docstring in rst format
-----------------------

Tools like Sphinx or Doxygen can automatically generate documentation from docstrings. This makes it easier to maintain up-to-date documentation. Sphinx uses the **reStructuredText** (reST) format.

.. code-block:: python
	
	def calculate_area(length, width):
		"""
		Calculate the area of a rectangle.

		:param length: The length of the rectangle.
		:type length: float or int
		:param width: The width of the rectangle.
		:type width: float or int

		:return: The area of the rectangle.
		:rtype: float
		"""
		return length * width

Documenting classes
===================

A class docstring typically includes the following sections:

- **Class Summary**: A brief description of what the class represents or does.
- **Attributes**: A list and description of the class attributes.
- **Methods**: Optionally, a summary of the methods, especially if some methods are crucial to understanding the class's functionality.
- **Examples**: Optionally, examples of how to use the class.


.. code-block:: python
	
	class Car:
		"""
		A class used to represent a Car.

		Attributes
		----------
		make : str
			The manufacturer of the car.
		model : str
			The model of the car.
		year : int
			The year the car was manufactured.
		color : str, optional
			The color of the car (default is 'white').

		Methods
		-------
		start_engine():
			Starts the car's engine.
		stop_engine():
			Stops the car's engine.
		drive(distance):
			Drives the car a certain distance.
		"""

		def __init__(self, make, model, year, color='white'):
			"""
			Constructs all the necessary attributes for the car object.

			Parameters
			----------
			make : str
				The manufacturer of the car.
			model : str
				The model of the car.
			year : int
				The year the car was manufactured.
			color : str, optional
				The color of the car (default is 'white').
			"""
			self.make = make
			self.model = model
			self.year = year
			self.color = color

		def start_engine(self):
			"""Starts the car's engine."""
			print("Engine started.")

		def stop_engine(self):
			"""Stops the car's engine."""
			print("Engine stopped.")

		def drive(self, distance):
			"""
			Drives the car a certain distance.

			Parameters
			----------
			distance : float
				The distance to drive in miles.
			"""
			print(f"Car is driving for {distance} miles.")

You can also add an example section:

.. code-block:: python
	
	Examples
    --------
    >>> my_car = Car('Toyota', 'Corolla', 2020)
    >>> my_car.start_engine()
    Engine started.


Adding separators in numbers
****************************

https://www.youtube.com/watch?v=C-gEQdGVXbk&ab_channel=CoreySchafer

Using enumerate in lists
************************


Try / Except
************

__main__
********


Creating functions
******************


Creating modules
****************