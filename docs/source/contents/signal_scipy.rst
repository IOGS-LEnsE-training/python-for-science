SciPy
#####

http://lense.institutoptique.fr/mine/python-scipy-premiers-pas/

FFT : http://lense.institutoptique.fr/mine/python-scipy-transformee-de-fourier/

Régression : http://lense.institutoptique.fr/mine/python-scipy-regressions/


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
