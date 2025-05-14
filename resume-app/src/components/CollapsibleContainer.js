"use client"
import React, { useState, useRef } from "react";

/**
 * A modernized collapsible container component with consistent styling
 * 
 * @param {string} title - The title to be displayed in the header
 * @param {ReactNode} children - Content to be displayed inside the container
 * @param {string} icon - Optional Bootstrap icon class (e.g. "bi-stars")
 * @param {boolean} useAddBtn - Whether to display an add button
 * @param {function} callback - Function called when the add button is clicked
 * @param {boolean} defaultOpen - Whether the container should be open by default
 * @returns {JSX.Element} - A collapsible container component
 */
export default function CollapsibleContainer({ 
  title, 
  children, 
  icon = null,
  useAddBtn = false, 
  callback = null,
  defaultOpen = false
}) {
  // State to manage the visibility of the content
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const containerRef = useRef(null);

  // Toggle the collapsible content
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    
    // If opening, scroll into view with a small delay to ensure DOM updates first
    if (!isOpen) {
      requestAnimationFrame(() => {
        containerRef.current?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-white rounded-lg shadow-md mb-6 border border-gray-100 transition-all duration-200 hover:shadow-lg"
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-6 py-5 border-b border-gray-100 cursor-pointer"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleCollapse()}
      >
        <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
          {/* Icon display */}
          {icon && <i className={`bi ${icon} text-blue-500`}></i>}
          {title}
        </h2>
        
        <div className="flex items-center gap-3">
          {/* Add button */}
          {useAddBtn && (
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent toggling the container
                    callback();
                }}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Add new item"
            >
                <i className="bi bi-plus"></i>
            </button>
          )}
          
          {/* Toggle indicator with smooth rotation */}
          <div className="flex items-center justify-center h-6 w-6 rounded-full text-gray-400">
            <i className={`bi bi-chevron-down transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}></i>
          </div>
        </div>
      </div>
      
      {/* Content area with smooth height transition */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 py-6 px-6' 
            : 'max-h-0 opacity-0 py-0 px-6 overflow-hidden'
        }`}
      >
        {isOpen && children}
      </div>
    </div>
  );
}