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
            }, 20);
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
                            className="bi bi-caret-down-fill text-gray-300"
                            onClick={toggleCollapse}  // Toggle the collapsible content
                        ></i>
                    </div>

                    {/* Collapsable content */}
                    <div
                        className={`mt-2.5 transition-all duration-100 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                    >
                        {children}
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                    </div>
                    
        </div>
    )

}