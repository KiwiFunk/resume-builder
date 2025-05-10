"use client"

import React from "react";
import { useState } from "react";

export default function TaggingHandler({ tagCollection }) {

    // State to handle tag name input
    const [tagName, setTagName] = useState("");
    // State to store index of the tag being edited
    const [editingIndex, setEditingIndex] = useState(null);

    // Handle double click event
    const handleDoubleClick = (index) => {
        setEditingIndex(index);                 // Set the index of the tag being edited
        setTagName(tagCollection[index]);       // Set input field to the current tag value
    };

    // Function to handle tag renaming
    const handleTagRename = (event) => {
        setTagName(event.target.value);         // Update tag name state
        {/* Logic to update the stored data in the database */}
    };

    // Edit mode exit events
    const handleFocusLoss = () => {
        setEditingIndex(null);                  // Exit editing mode when focus is lost
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setEditingIndex(null);              // Exit editing mode on Enter key
        }
    };

    const createTag = () => {
        // Logic to create a new tag and add it to the tagCollection
        alert("Create tag functionality coming soon!");
    };

    return (
        <div className="flex flex-wrap gap-2 mt-3">
            
            {tagCollection.map((tag, index) => (
                <div
                    key={index}
                    className={`select-none px-3 py-2 rounded-lg bg-gray-200 text-gray-700 text-sm font-medium shadow-sm ${editingIndex !== index ? "hover:bg-gray-300" : ""} transition duration-300 [&:has(button:hover)]:bg-red-500 ${
                        editingIndex === index 
                        ? "border border-blue-500 text-gray-800 bg-white" // Edit mode styles
                        : ""
                    }`}
                >
                    <span className="transition duration-300 [&:has(button:hover)]:text-white">

                        {/* Tag name */}
                        {editingIndex === index ? (
                            <input
                                type="text"
                                value={tagName}
                                className="rounded border border-gray-300 text-sm px-1 border-none outline-none"
                                onChange={handleTagRename}
                                autoFocus
                                // Set input width based on text content
                                style={{ width: `${tagName.length + 2}ch` }}
                                // Exit events
                                onBlur={handleFocusLoss} 
                                onKeyDown={handleKeyDown} 
                            />
                        ) : (
                            <span onDoubleClick={() => handleDoubleClick(index)}>{tag}</span>
                        )}
                        
                        {/* Delete tag button */}
                        <button
                            type="button"
                            className="ml-2"
                            onClick={() => alert("Delete tag functionality coming soon!")}
                        >
                            <i className="bi bi-x text-red-500 cursor-pointer transition duration-300 hover:text-white"></i>
                        </button>
                    </span>
                </div>
            ))}

            {/* Add tag Button */}
            <button 
                type="button"
                className="px-3 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm font-medium shadow-sm hover:bg-gray-400 transition duration-200 hover:cursor-pointer"
                onClick={createTag}
            >
                <i className="bi bi-plus"></i>
            </button>

            {/* Implement react-dnd to allow drag and drop of tags between groups */}
        </div>
    );
}