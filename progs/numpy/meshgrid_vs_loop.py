#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LEnsE.tech Training / Institut d'Optique

Fill a 2D arrays with the values returned by a function
Comparison between a double loop or numpy array meshgrid

@see : https://iogs-lense.github.io/lense.tech/

Created on 13/May/2024

@author: LEnsE / IOGS / Palaiseau
@author: Julien Villemejane
"""

import time
import numpy as np


def sum(x, y):
    '''
    Return the sum of x and y.
    
    :param x: first term of the sum
    :type x: float
    :param y: second term of the sum
    :type y: float
    
    :rtype: float
    '''
    return x + y
    

if __name__ == "__main__":
    M = 3
    N = 5
    
    TIMES = 100
    
    x = np.linspace(0, M-1, M)
    y = np.linspace(0, N-1, N)
    
    x = x *0.1

    # First method to fill a 2D array with the sum of x and y index as integer
    # With a loop
    time_start = time.time()
    for k in range(TIMES): # 1000 times to obtain an evaluable time
        output_array = np.zeros((N, M))
        
        for i in range(N):
            for j in range(M):
                output_array[i][j] = sum(x[j], y[i])
    time_stop = time.time()
    
    elapsed1 = (time_stop - time_start) / TIMES * 1e6
    print(f'Temps d\'exécution (Loop) : {elapsed1:.2}us')
    
    print(output_array) 
    
    # First method to fill a 2D array with the sum of x and y index as integer
    # With a meshgrid
    time_start = time.time()
    for k in range(TIMES): # 1000 times to obtain an evaluable time
        XX, YY = np.meshgrid(x, y)
        
        output_array = sum(YY, XX)
    time_stop = time.time()
    
    print(XX)
    print(YY)
    
    elapsed1 = (time_stop - time_start) / TIMES * 1e6
    print(f'Temps d\'exécution (Meshgrid) : {elapsed1:.2}us') 
    
    print(output_array)    