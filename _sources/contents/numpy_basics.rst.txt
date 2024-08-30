Numpy Basics
############

Numpy is an essential **library for scientists**.

The two main motivations for using it are:

- The implementation of the **concept of vectors and matrices** in Python
- Access to **classical mathematical functions** (such as trigonometric functions)

This library facilitates **data formatting** for many other advanced scientific libraries: Pandas, Scipy, Scikit-image, OpenCV, Keras, TensorFlow...

For more information about this library: https://numpy.org/

To use this library, you need to import it in your script:

.. code-block:: python

	import numpy as np


Mathematical Functions
**********************

Numpy is primarily a **library dedicated to mathematics** and offers a set of basic functions: square root, power, exponential, trigonometric functions, etc. Some constants are also defined, such as :math:`\pi`.

.. code-block:: python

	print("Pi :", np.pi)
	print("Square root :", np.sqrt(2))
	print("Exponential :", np.exp(1))
	print("Sine :", np.sin(3))
	
The previous example gives the result:

.. code-block:: yaml

	Pi : 3.141592653589793
	Square root : 1.4142135623730951
	Exponential : 2.718281828459045
	Sine : 0.1411200080598672


Using Vectors
*************

Numpy provides support for arrays, matrices, and a collection of mathematical functions to operate on these data structures.

Creating Vectors
================

Vector from a List
------------------

To create a vector with Numpy, you use the :code:`array` function.

.. code-block:: python

	a_vect = np.array([1, 2, 3, 4, 5])
	b_vect = np.array([-1, -2, -3, -4, -5])

You can then display these vectors using Python’s `print` function:

.. code-block:: python

	print(a_vect)
	print(b_vect)

These commands produce the following output:

.. code-block:: yaml

	[1 2 3 4 5]
	[-1 -2 -3 -4 -5]


Linearly Spaced Vectors
-----------------------

The :code:`linspace` function generates a vector of predefined size from a start value to an end value, with a constant step that depends on the interval and the size of the vector.

.. code-block:: python
	
	# np.linspace(start, stop, size)
	x_lin = np.linspace(0, 10, 15)  # Creates a vector of size 15 from 0 to 10 with a constant step
	
>>> print("np.linspace:\n", x_lin)

[ 0.          0.71428571  1.42857143  2.14285714  2.85714286  3.57142857   4.28571429  5.          5.71428571  6.42857143  7.14285714  7.85714286   8.57142857  9.28571429 10.        ]

There is also the :code:`arange` function which generates a vector from a start value to an end value, with a predefined constant step.

.. code-block:: python
	
	# np.arange(start, stop, step)
	x_ara = np.arange(0, 20, 2.1)  # Creates a vector from 0 to 18.9 with a step of 2.1

>>> print("np.arange:\n", x_ara)
[ 0.   2.1  4.2  6.3  8.4 10.5 12.6 14.7 16.8 18.9]

When the step is not provided to the :code:`arange` function, it uses a default value of 1.

Pre-filled Vectors with 0 or 1
------------------------------

The :code:`zeros` function generates a vector of a predefined size with all elements set to 0.

.. code-block:: python
	
	# np.zeros(size)
	vect_zeros = np.zeros(3)  # Creates a vector of 3 elements, each with a value of 0

.. code-block:: python
	
	# np.ones(size)
	vect_ones = np.ones(3)  # Creates a vector of 3 elements, each with a value of 1

Operations on Vectors
=====================

Number of Elements
------------------

To find the number of elements in a vector, you can use one of the following commands:

.. code-block:: python

	print(len(b_vect))
	print(b_vect.size)
	print(b_vect.shape)

Unlike Python native lists, Numpy array objects allow for vectorized operations.

Element-wise Addition
---------------------

The :code:`+` operator allows for element-wise addition between two vectors.

.. code-block:: python

	c_vect = a_vect + b_vect
	
>>> print(c_vect)
[0 0 0 0 0]


Multiplying Elements by a Scalar
--------------------------------

You can multiply all elements of a vector by a scalar using the :code:`*` operator.

.. code-block:: python

	k_vect = a_vect * 2.1

>>> print(k_vect)
[ 2.1  4.2  6.3  8.4 10.5]

Element-wise Multiplication
---------------------------

It is also possible to perform element-wise multiplication of vectors using the :code:`*` operator.

.. code-block:: python

	m_vect = a_vect * b_vect
	
>>> print(m_vect)
[ -1  -4  -9 -16 -25]

Indexing Vectors
----------------

Indexing of Numpy vectors is the same as for native Python lists.

In the following example, a vector named :code:`vect_1D` of 3 elements is generated, indexed from 0 to 2. You access the i-th element of this vector using the command :code:`vect_1D[i]`. In this example, the first element of this vector is accessed.

.. code-block:: python

	vect_1D = np.array([1, 2, 3])
	first_element = vect_1D[0]
	
>>> print(first_element)
0

Concatenating Vectors
---------------------

Vectors can be concatenated using the :code:`concatenate` function.

In the following example, two vectors :code:`x1` and :code:`x2` of the same dimension are concatenated.

.. code-block:: python

	x1 = np.arange(0, 5, 1)
	x2 = np.arange(-2.5, 2.5, 1)
	x_concat = np.concatenate((x1, x2))

>>> print(x_concat)
[ 0.   1.   2.   3.   4.  -2.5 -1.5 -0.5  0.5  1.5]

Statistics on arrays
====================

.. code-block:: python

	data = np.array([1, 2, 3, 4, 5])
	mean = np.mean(data)
	std_dev = np.std(data)

	print("Mean:", mean)
	print("Standard Deviation:", std_dev)


Functions and arrays
********************

Functions can operate on arrays to perform element-wise operations or apply mathematical functions to array elements. NumPy functions are vectorized, meaning they operate on entire arrays at once.

.. code-block:: python

	x_vect = np.array([1, 2, 3, 4])
	x_vect_exp = np.exp(x_vect)

>>> print(x_vect_exp)
[ 2.71828183  7.3890561  20.08553692 54.59815003]

This method can also be used with functions that you have defined yourself.

In the following example, we provide a function :math:`f(x) = 4 \cdot x^2 - 3 \cdot x + 9` and wish to calculate the value of this function for different values of :math:`x`. These values are then stored in a vector.

.. code-block:: python

	# Function
	def f(x):
		return 4*x**2 - 3*x + 9

	y_vect = f(x_vect)

>>> print(y_vect)
[10 19 36 61]


Using matrices
**************

Numpy was created to handle matrices, called arrays. 

*Other libraries such as SciPy and Pandas can also work with matrices in different contexts.*

Create matrices
=============== 

Matrix from lists
-----------------

.. code-block:: python

	# Create a 2D array (matrix)
	
	matrix = np.array([[1, 2, 3], [4, 5, 6]])

>>> print(matrix)
array([[1, 2, 3],
       [4, 5, 6]])
	   
Pre-filled Matrix
-----------------

The functions seen for vectors can be used to create arrays of more than 1 dimension.

.. code-block:: python

	# Create a matrix of zeros
	zeros_matrix = np.zeros((3, 3))  # 3x3 matrix filled with zeros

	# Create a matrix of ones
	ones_matrix = np.ones((2, 4))  # 2x4 matrix filled with ones

There are also specific functions to create particular matrix.

.. code-block:: python

	# Create an identity matrix
	identity_matrix = np.eye(3)  # 3x3 identity matrix

For testing some algoritms, a matrix filled with random numbers can be useful.

.. code-block:: python

	# Create a matrix with random values
	random_matrix = np.random.rand(3, 3)  # 3x3 matrix with random values between 0 and 1

Access to elements
==================

You can access to a specific element by its index:

.. code-block:: python

	# Accessing elements
	element = matrix[1, 2]  # Element in 2nd row, 3rd column

>>> print(element)
6

You can generate a new matrix based on a part of another one by slicing:

.. code-block:: python

	sub_matrix = matrix[0:2, 1:3]  # Rows 0 to 1, Columns 1 to 2

>>> print(sub_matrix)
array([[2, 3],
       [5, 6]])
	   

Matrix Operations
=================

Element-wise Addition
---------------------

The :code:`+` operator allows for element-wise addition between two matrices.

.. code-block:: python

	matrix1 = np.array([[1, 2], [3, 4]])
	matrix2 = np.array([[5, 6], [7, 8]])
	sum_matrix = matrix1 + matrix2
	
>>> print(sum_matrix)
array([[ 6,  8],
       [10, 12]])
	
Element-wise Multiplication
---------------------------

The :code:`*` operator allows for element-wise multiplication between two matrices.

.. code-block:: python

	matrix1 = np.array([[1, 2], [3, 4]])
	matrix2 = np.array([[5, 6], [7, 8]])
	product_matrix = matrix1 * matrix2

>>> print(product_matrix)
array([[ 5, 12],
       [21, 32]])

Dot product of arrays
---------------------

The dot product or **scalar product** is given by the :code:`dot` function.

**Using the `dot` Function:**

.. code-block:: python

	matrix1 = np.array([[1, 2], [3, 4]])
	matrix2 = np.array([[5, 6], [7, 8]])
	result = np.dot(matrix1, matrix2)

>>> print(result)
array([[19, 22],
       [43, 50]])

Matrix Transposition and Inversion
----------------------------------

The transposition of a matrix can be viewed by the :code:`T` attribute of an array.

.. code-block:: python
	
	transposed_matrix = matrix1.T

>>> print(transposed_matrix)
array([[1, 3],
       [2, 4]])

The inversion of a matrix can be performed by the :code:`inv` method of the :code:`linalg` sublibrary of Numpy.

.. code-block:: python
	
	inverse_matrix = np.linalg.inv(matrix1)

>>> print(inverse_matrix)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])

.. note ::

	The matrix must be square (same number of rows and columns) and non-singular (determinant not equal to zero) to be invertible.

Matrix Determinant and Eigenvalues
----------------------------------

To calculate the determinant of a matrix, you can use the :code:`det` method of the :code:`linalg` sublibrary of Numpy.

.. code-block:: python
	
	det = np.linalg.det(matrix1)

>>> print(det)
-2

To calculate the eigenvalues and the eigenvectors of a matrix, you can use the :code:`eig` method of the :code:`linalg` sublibrary of Numpy. 

.. code-block:: python
	
	eigenvalues, eigenvectors = np.linalg.eig(matrix1)

>>> print(eigenvalues)
array([-0.37228132,  5.37228132])

>>> print(eigenvectors)
array([[-0.82456484, -0.41597356],
       [ 0.56576746, -0.90937671]])


Arrays vs Lists
***************

Arrays and lists are both used to store collections of items, but they have distinct advantages depending on the context in which they are used. Below are the advantages of using arrays compared to lists, particularly focusing on numerical and scientific computing scenarios:

- **Memory Efficiency**: Arrays are typically more memory-efficient than lists. In languages like Python (using libraries such as NumPy), arrays have a fixed size and type, which reduces overhead compared to lists that can store mixed data types.
  
- **Speed of Operations**: Array operations are generally faster due to vectorization. Libraries like NumPy use optimized C and Fortran libraries, which means operations on arrays can be executed more quickly than the equivalent operations on lists.

- **Homogeneous Data Types**: Arrays are designed to store elements of a single data type. This homogeneity allows for optimizations and reduces the complexity associated with type checking. Lists, on the other hand, can store mixed data types, which can introduce inefficiencies.

- **Vectorized Operations**: Arrays support vectorized operations, meaning you can perform operations on entire arrays at once without explicit loops. This is particularly useful for mathematical and scientific computations. For instance, adding two arrays element-wise is a single operation with arrays but requires a loop with lists.

- **Linear Algebra**: Libraries like NumPy provide extensive support for linear algebra operations on arrays, including matrix multiplication, eigenvalue computation, and more. Lists do not inherently support these operations.

Examples
========

Functions
---------

To illustrate the benefit of using vectors (or matrices later), here’s an example using classic lists. This example is not recommended...

.. code-block:: python

	# Version with lists: not recommended!
	x_list = [1, 2, 3, 4]  # Not recommended!
	for i in x_list:  # Not recommended!
		print(f"exp({i}) ="{np.exp(i)}")  # Not recommended!


This method produces the following results:

.. code-block:: yaml

	exp(1) = 2.718281828459045
	exp(2) = 7.38905609893065
	exp(3) = 20.085536923187668
	exp(4) = 54.598150033144236


A more robust and less time-consuming solution is the use of vectors (or matrices).

.. code-block:: python

	x_vect = np.array([1, 2, 3, 4])
	x_vect_exp = np.exp(x_vect)

>>> print(x_vect_exp)
[ 2.71828183  7.3890561  20.08553692 54.59815003]



http://lense.institutoptique.fr/mine/python-numpy/


http://lense.institutoptique.fr/mine/python-numpy-matrices-et-calculs/



SciPy
*****

Specialized Matrix Functions
============================

SciPy provides additional functionalities for matrix operations.

.. code-block:: python

	from scipy.linalg import lu, svd

	# LU Decomposition
	P, L, U = lu(matrix1)
	print("LU Decomposition:")
	print("P:\n", P)
	print("L:\n", L)
	print("U:\n", U)

	# Singular Value Decomposition (SVD)
	U, s, Vh = svd(matrix1)
	print("SVD:")
	print("U:\n", U)
	print("Singular Values:", s)
	print("Vh:\n", Vh)
