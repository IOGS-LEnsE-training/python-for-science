#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LEnsE.tech Training / Institut d'Optique

Display a scientist figure with labels, title...

@see : https://iogs-lense.github.io/lense.tech/

Created on 31/Aug/2024

.. note:: LEnsE - Institut d'Optique - version 1.0

.. moduleauthor:: Julien VILLEMEJANE <julien.villemejane@institutoptique.fr>
"""

import numpy as np
import matplotlib.pyplot as plt

# Example ndarray data
x = np.linspace(0, 10, 100)  # x values from 0 to 10
y = np.sin(x)  # y values as the sine of x

# Create the figure and axis
fig, ax = plt.subplots(figsize=(8, 6), dpi=100)  # Adjust size and resolution

# Plot the data
ax.plot(x, y, label='sin(x)', color='blue', linewidth=2, marker='o')

# Add title and labels
ax.set_title('A Perfect Scientist Plot: Sine Wave', fontsize=16)
ax.set_xlabel('X-axis (radians)', fontsize=14)
ax.set_ylabel('Y-axis (amplitude)', fontsize=14)

# Add grid and legend
ax.grid(True)
ax.legend(fontsize=12)

# Customize ticks
ax.tick_params(axis='both', which='major', labelsize=12)

# Set limits (optional, to ensure proper scaling)
ax.set_xlim([0, 10])
ax.set_ylim([-1.5, 1.5])

# Display the plot
plt.tight_layout()  # Adjust layout to avoid overlap
plt.show()