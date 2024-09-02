#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LEnsE.tech Training / Institut d'Optique

Compute FFT on a signal

@see : https://iogs-lense.github.io/lense.tech/

Created on 02/Sep/2024

.. note:: LEnsE - Institut d'Optique - version 1.0

.. moduleauthor:: Julien VILLEMEJANE <julien.villemejane@institutoptique.fr>
"""

import numpy as np
from matplotlib import pyplot as plt


if __name__ == "__main__":
    # Sampling parameters
    sampling_rate = 1000  # Samples per second
    T = 1.0 / sampling_rate  # Sampling interval
    N = 1000  # Number of sample points
    t = np.linspace(0.0, N*T, N, endpoint=False)  # Time vector
	# Define the function (e.g., sine wave with frequency 50 Hz)
    frequency = 50  # Frequency in Hz
    amplitude = 1.0  # Amplitude of the sine wave
    signal = amplitude * np.sin(2.0 * np.pi * frequency * t)
    
    # Create the figure and axis
    fig, ax = plt.subplots(figsize=(8, 6), dpi=100)
    
    # Plot the data
    ax.plot(t, signal, label='sin at 50 Hz', color='blue', linewidth=2)
    # Add title and labels
    ax.set_title('Sine Wave at 50 Hz ($f_s$ = 1kHz)', fontsize=16)
    ax.set_xlabel('Time (s)', fontsize=14)
    ax.set_ylabel('Signal (amplitude)', fontsize=14)

    # Add grid and legend
    ax.grid(True)
    ax.legend(fontsize=12)

    # Customize ticks
    ax.tick_params(axis='both', which='major', labelsize=12)

    # Display the plot
    plt.tight_layout()  # Adjust layout to avoid overlap
    plt.show()
    
    ## FFT calculation
    # Compute the FFT
    fft_result = np.fft.fft(signal)
    # Compute the frequency axis (for the positive half)
    frequencies = np.fft.fftfreq(N, T)
    # Take the magnitude of the FFT result and normalize
    fft_magnitude = np.abs(fft_result) / N
    
    # Plot the original signal
    # Create the figure and axis
    fig, ax = plt.subplots(figsize=(12, 8), dpi=100, nrows=2, ncols=1)

    ax[0].plot(t, signal)
    ax[0].set_title("Original Signal")
    ax[0].set_xlabel("Time [s]")
    ax[0].set_ylabel("Amplitude")
    ax[0].grid(True)

    ax[1].plot(frequencies, fft_magnitude)
    ax[1].set_title("FFT of the Signal")
    ax[1].set_xlabel("Frequency [Hz]")
    ax[1].set_ylabel("Magnitude")
    ax[1].grid(True)

    plt.tight_layout()
    plt.show()