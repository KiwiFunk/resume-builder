"use client"
import React, { useState } from "react";

export default function CollapsibleContainer({ title, children }) {

    // State to manage the visibility of the collapsible content
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">

                    {/* Heading Bar */}
                    <div className="flex justify-between items-center">
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                        {/* Arrow icon */}
                        <i 
                            className="bi bi-caret-down-fill text-gray-300"
                            onClick={() => setIsOpen(!isOpen)}  // Toggle the collapsible content
                        ></i>
                    </div>

                    {/* Collapsable content */}
                    <div
                        className={`mt-2.5 transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
                        } overflow-hidden`}
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