Execution time of functions
###########################

The :code:`timeit` module is a handy tool for measuring the **execution time of small code snippets**, including functions. It provides a simple way to time how long it takes for a function to run, which is useful for performance testing and optimization.

|

Here is how you can use :code:`timeit` to measure the execution time of a function:

.. code-block:: python

	import timeit

	# Define a function
	def my_function():
		return sum(range(1000))

	# Measure the execution time of the function
	execution_time = timeit.timeit("my_function()", globals=globals(), number=1000)

The first parameter is the name of the function to test.

This second one ensures that the :code:`my_function` defined in the global scope is accessible within the :code:`timeit` call.

The last one, called :code:`number`, specifies how many times to run the code. The default is 1, but running it multiple times helps average out any fluctuations.

>>> print(f"Execution time: {execution_time} seconds")
Execution time: 0.01500284999999168 seconds

