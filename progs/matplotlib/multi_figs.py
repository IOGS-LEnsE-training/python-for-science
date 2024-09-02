#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LEnsE.tech Training / Institut d'Optique

Figure with subplots.

@see : https://iogs-lense.github.io/lense.tech/

Created on 31/Aug/2024

.. note:: LEnsE - Institut d'Optique - version 1.0

.. moduleauthor:: Julien VILLEMEJANE <julien.villemejane@institutoptique.fr>
"""

import matplotlib.pyplot as plt
import numpy as np

# Create a figure and a 2x2 grid of subplots
fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(10, 8))

# Data for plotting
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = np.sin(2 * x)
y4 = np.cos(2 * x)

# Plot data in each subplot
ax[0, 0].plot(x, y1, 'r-')
ax[0, 0].set_title('Sine Wave')

ax[0, 1].scatter(x, y2) #, 'b--')
ax[0, 1].set_title('Cosine Wave')

ax[1, 0].bar(x[::10], y3[::10])
ax[1, 0].set_title('Bar Plot')

ax[1, 1].hist(y4, bins=20)
ax[1, 1].set_title('Histogram')

# Adjust layout and display the plot
plt.tight_layout()
plt.show()