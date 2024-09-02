#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LEnsE.tech Training / Institut d'Optique

Different types of graphs with matplotlib.pyplot.

@see : https://iogs-lense.github.io/lense.tech/

Created on 31/Aug/2024

.. note:: LEnsE - Institut d'Optique - version 1.0

.. moduleauthor:: Julien VILLEMEJANE <julien.villemejane@institutoptique.fr>
"""

import matplotlib.pyplot as plt
import numpy as np

## Line plot
plt.figure()
# Example data
time = [0, 1, 2, 3, 4, 10, 11, 12, 15, 18, 20]  # Time in hours
temperature = [10, 9, 8, 8, 7, 15, 16, 19, 21, 22, 20]  # Temperature in degrees Celsius

# Create the plot
plt.plot(time, temperature, marker='o', linestyle='-', color='b')

# Add labels and title
plt.xlabel('Time (hours)')
plt.ylabel('Temperature (°C)')
plt.title('Temperature Over Time')



## Scatter plot
plt.figure()
# Example data
study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Hours spent studying
exam_scores = [40, 50, 60, 65, 70, 75, 85, 88, 90, 90]  # Exam scores

# Create the scatter plot
plt.scatter(study_hours, exam_scores, color='r', marker='x')

# Add labels and title
plt.xlabel('Study Hours')
plt.ylabel('Exam Scores')
plt.title('Relationship Between Study Hours and Exam Scores')



## Bar graph
plt.figure()
# Example data
products = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E']  # Product names
sales = [150, 200, 300, 250, 100]  # Sales numbers

# Create the bar plot
plt.bar(products, sales, color='green')

# Add labels and title
plt.xlabel('Products')
plt.ylabel('Sales')
plt.title('Sales of Different Products')



## Histogram
plt.figure()
# Example data
ages = [22, 25, 29, 24, 23, 28, 30, 22, 24, 26, 32, 35, 31, 29, 28, 34, 36, 37, 28, 29, 30, 31, 33, 27, 26]

# Specify custom bin edges
bins = [20, 25, 30, 35, 40]

# Specify the range to display
range_to_display = (20, 40)

# Create the histogram
plt.hist(ages, bins=bins, range=range_to_display, color='blue', edgecolor='black')

# Add labels and title
plt.xlabel('Age')
plt.ylabel('Number of People')
plt.title('Age Distribution of Group')


## Pie Chart
plt.figure()
# Example data
categories = ['Electronics', 'Clothing', 'Groceries', 'Books', 'Toys']
sales = [300, 200, 150, 100, 50]

# Create the pie chart
plt.pie(sales, labels=categories, autopct='%1.1f%%', startangle=90, colors=['blue', 'orange', 'green', 'red', 'purple'])

# Add a title
plt.title('Sales Distribution by Product Category')


## Heatmap
plt.figure()
# Example data: 5x5 grid of temperatures
temperature_data = np.array([
    [30, 32, 34, 33, 31],
    [28, 29, 31, 32, 30],
    [27, 28, 29, 30, 28],
    [26, 27, 28, 29, 27],
    [25, 26, 27, 26, 25]
])

# Create the heatmap using plt.imshow
plt.imshow(temperature_data, cmap='hot', interpolation='nearest')

# Add a color bar to indicate the temperature scale
plt.colorbar(label='Temperature (°C)')

# Add title and labels (optional)
plt.title('Temperature Heatmap')
plt.xlabel('X-axis (Location)')
plt.ylabel('Y-axis (Location)')


## Contour
plt.figure()
# Define the grid of x and y values
x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)

# Define the function z = sqrt(x^2 + y^2)
Z = np.sqrt(X**2 + Y**2)

# Create the contour plot
contour = plt.contour(X, Y, Z, levels=10, cmap='viridis')

# Add a color bar to indicate the z value scale
plt.colorbar(contour, label='z value')

# Add title and labels
plt.title('Contour Plot of $z = \sqrt{x^2 + y^2}$')
plt.xlabel('x')
plt.ylabel('y')


## Polar
plt.figure()
# Define the angular data (theta) and radial data (r)
theta = np.linspace(0, 2 * np.pi, 100)  # 100 points from 0 to 2*pi
r = 1 + np.sin(theta)  # Radial distance as a function of theta

# Create the polar plot
plt.polar(theta, r, color='b')

# Add a title
plt.title('Polar Plot of $r = 1 + \sin(\\theta)$')



# Display the plot
plt.show()