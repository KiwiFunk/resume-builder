"use client"
import React, { useState, useRef } from "react";

/**
 * Create a collapsible container component,
 * 
 * @param {string} title - The title to be displayed in the heading bar h2 element.
 * @param {ReactNode} children - The content to be displayed inside the collapsible container.
 * @param {boolean} useAddButton - Display an add button in the heading bar.
 * @param {function} createItemCallback - Callback function to be called when the add button is clicked.
 * @returns {JSX.Element} - A collapsible container component.
 * 
 */
export default function CollapsibleContainer({ title, children, useAddBtn = false, callback = null }) {

    // State to manage the visibility of the collapsible content
    const [isOpen, setIsOpen] = useState(false);

    // Reference to this container
    const containerRef = useRef(null);

    // Toggle the collapsible content and scroll into view when expanded
    const toggleCollapse = () => {
        setIsOpen((prev) => {
        if (!prev) {
            // Scroll into view when expanding (Needs a timeout to work with opacity transition for some reason)
            setTimeout(() => {
                containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
        }
        return !prev;
        });
    };

    return (
        <div ref={containerRef} className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">

                    {/* Heading Bar */}
                    <div className="flex justify-between items-center">

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                        
                        {/* Container controls */}
                        <div className="flex items-center gap-4 text-xl">
                            {/* Add button */}
                            {useAddBtn && (
                                <i 
                                    className="bi bi-plus-circle-fill text-gray-300 hover:cursor-pointer text-lg hover:scale-105 hover:text-gray-600"
                                    onClick={callback}  // Call the callback function when clicked
                                ></i>
                            )}
                            {/* Collapse/Expand icon */}
                            <i 
                                className={`bi ${isOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"}
                                text-gray-300 hover:cursor-pointer hover:scale-105 hover:text-gray-600`}
                                onClick={toggleCollapse}  // Toggle the collapsible content
                            ></i>
                        </div>
                    </div>

                    {/* Collapsable content */}
                    <div
                        className={`transition-all duration-100 ease-in-out 
                        ${isOpen ? "opacity-100 mt-2.5" : "max-h-0 opacity-0 overflow-hidden"}`}
                    >
                        {children}
                    </div>
                    
        </div>
    )

}