"use client";           // Make sure that this can only be used in client-side code since localStorage is not available on the server

/**
* @description Utility functions to manage local storage data.
* @param {string} key - The key under which the data is stored in local storage.
* @param {object} defaultValue - The default value to return if no data is found.
* @returns {object} - The parsed data from local storage or the default value.
*/

// Fetch data from local storage by key
export function getLocalData(key, defaultValue = {}) {
    const data = localStorage.getItem(key);
    // Check if data exists in local storage, if not return default value (empty object)
    return data ? JSON.parse(data) : defaultValue;
}

// Save data to local storage
export function setLocalData(key, data) {
    console.log(`Saving data to local storage: ${key}`, data);          // For debugging purposes
    localStorage.setItem(key, JSON.stringify(data));
}

// Delete data from local storage
export function removeLocalData(key) {
    // Clear the data stored under the specified key in local storage
    localStorage.removeItem(key);
}