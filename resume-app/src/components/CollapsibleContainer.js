"use client"
import React, { useState, useRef } from "react";

export default function CollapsibleContainer({ title, children }) {

    // State to manage the visibility of the collapsible content
    const [isOpen, setIsOpen] = useState(true);

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
                        {/* Arrow icon */}
                        <i 
                            className={`bi ${isOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"}
                            text-gray-300 hover:cursor-pointer hover:scale-105 hover:text-gray-600`}
                            onClick={toggleCollapse}  // Toggle the collapsible content
                        ></i>
                    </div>

                    {/* Collapsable content */}
                    <div
                        className={`transition-all duration-100 ease-in-out 
                        ${isOpen ? "max-h-screen opacity-100 mt-2.5" : "max-h-0 opacity-0 overflow-hidden"}`}
                    >
                        {children}
                    </div>
                    
        </div>
    )

}