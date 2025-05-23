"use client"

import React from "react";
import { useState } from "react";

/* 
Using a callback function to update the main state whenever a tag is added, deleted or renamed
This allows the parent component to manage the state of the tags 
*/
export default function TaggingHandler({ tags, onTagUpdate }) {

    // State to handle tag name input
    const [tagName, setTagName] = useState("");
    // State to store index of the tag being edited
    const [editingIndex, setEditingIndex] = useState(null);

    // Handle double click event
    const handleDoubleClick = (index) => {
        setEditingIndex(index);                 // Set the index of the tag being edited
        setTagName(tags[index]);       // Set input field to the current tag value
    };

    // Functions to handle tag renaming
    const handleTagRename = (event) => {
        setTagName(event.target.value);         // Update tag name state
    };

    const applyRenamedTag = () => {
        if (editingIndex !== null) {
            const updatedTags = [...tags];
            //Clean up tag name
            updatedTags[editingIndex] = tagName.trim() === "" ? "Untitled" : tagName.trim();

            onTagUpdate(updatedTags);       // Use callback to update the parent state     
        }
    };

    // Edit mode exit events
    const handleFocusLoss = () => {
        applyRenamedTag();                      // Apply the new tag name on focus loss
        setEditingIndex(null);                  // Exit editing mode when focus is lost
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            applyRenamedTag();                  // Apply the new tag name on Enter key
            setEditingIndex(null);              // Exit editing mode on Enter key
        }
    };

    const createTag = () => {
        tags.push("New Tag");                  // Add new tag to the collection
        handleDoubleClick(tags.length - 1);    // Enter edit mode for the new tag
    };
    
    const handleTagDelete = (index) => {
        const updatedTags = tags.filter((_, i) => i !== index); // Create new array excluding 'index'
        onTagUpdate(updatedTags);                               // Update the state with the new array by using the callback
        setEditingIndex(null);                                  // Exit editing mode if the deleted tag was being edited
    }

    return (
        <div className="flex flex-wrap gap-2 mt-3">
            
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className={`select-none px-3 py-2 rounded-lg bg-gray-200 text-gray-700 text-sm font-medium shadow-sm ${editingIndex !== index ? "hover:bg-gray-300" : ""} transition duration-300 [&:has(button:hover)]:bg-red-500 [&:has(button:hover)]:scale-105 ${
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
                                className="rounded border border-gray-300 text-sm border-none outline-none"
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
                            onClick={() => handleTagDelete(index)}
                        >
                            <i className="bi bi-x text-red-500 cursor-pointer transition duration-300 hover:text-white"></i>
                        </button>
                    </span>
                </div>
            ))}

            {/* Add tag Button */}
            <button 
                type="button"
                className="px-3 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm font-medium shadow-sm hover:bg-gray-400 hover:text-white transition duration-200 hover:cursor-pointer"
                onClick={createTag}
            >
                <i className="bi bi-plus"></i>
            </button>

            {/* Implement react-dnd to allow drag and drop of tags between groups */}
        </div>
    );
}