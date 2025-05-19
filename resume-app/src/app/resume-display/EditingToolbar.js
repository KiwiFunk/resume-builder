"use client";
import { useState } from 'react';

export default function EditingToolbar({
    template,
    setTemplate,
    availableTemplates,
    margins,
    setMargins,
    autoScaleEnabled,
    toggleAutoScale,
    scale,
    adjustManualScale,
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [accentMenuOpen, setAccentMenuOpen] = useState(false);

    

    const colorDotSize = 6; // Width of the color dot
    const colorDotMargin = 2; // Margin between dots
    const accentColors = [
        { name: "Blue", hex: "#2563eb" },
        { name: "Teal", hex: "#0d9488" },
        { name: "Purple", hex: "#7c3aed" },
        { name: "Green", hex: "#16a34a" },  
        { name: "Red", hex: "#dc2626" },
        { name: "Orange", hex: "#ea580c" },
        { name: "Pink", hex: "#db2777" },    
        { name: "Slate", hex: "#475569" }
    ];

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-4 overflow-hidden">
            {/* Toolbar for desktop and tablet - always visible */}
            <div className="hidden sm:flex items-center justify-center h-12 px-2 border-b border-gray-200 overflow-x-autoo">
                {/* Template dropdown with compact styling */}
                <div className="flex items-center px-2 h-full border-r border-gray-200">
                    <label htmlFor="template" className="text-xs font-medium text-gray-700 mr-2">Template</label>
                    <select
                        id="template"
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        className="h-8 text-sm text-gray-700 bg-white border border-gray-200 rounded px-2 py-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        {availableTemplates.map(tmpl => (
                            <option key={tmpl.id} value={tmpl.id}>{tmpl.name}</option>
                        ))}
                    </select>
                </div>
                {/* Accent color selector */}
                {/* Do not conditionally render */}
                <div className="flex items-center px-3 h-full border-r border-gray-200">
                    <label htmlFor="accentColor" className="text-xs font-medium text-gray-700 mr-2">
                        Accent
                    </label>

                    {/* Toggle Button */}
                    <div
                        className={`w-6 h-6 rounded-full bg-gray-100 border-2 cursor-pointer ${accentMenuOpen ? "border-blue-500" : "border-gray-200"
                            }`}
                        onClick={() => setAccentMenuOpen(!accentMenuOpen)}
                    ></div>
                    
                    {/* Width is multiples of 8. Dot is 6px, margin left is 2px */}
                    <div
                        className={`
                        ml-${colorDotMargin} h-8 flex items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out            
                        ${accentMenuOpen ? `w-${(colorDotSize + colorDotMargin) * accentColors.length} opacity-100` : "w-0 opacity-0"}
                        `}
                    >
                        {accentColors.map((color, index) => (
                            <div
                                key={index}
                                className={`
                                w-${colorDotSize} h-${colorDotSize} rounded-full cursor-pointer flex-shrink-0
                                transition-all duration-300 ease-out
                                `}
                                style={{
                                    backgroundColor: color.hex,
                                    transform: accentMenuOpen ? 'scale(1)' : 'scale(0.5)',
                                    opacity: accentMenuOpen ? 1 : 0,
                                    transitionDelay: accentMenuOpen ? `${index * 45}ms` : '0ms'
                                }}
                                aria-label={color.name}
                                onClick={() => setAccentMenuOpen(false)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Margin buttons with visual icons */}
                <div className="flex items-center h-full px-3 border-r border-gray-200">
                    <span className="text-xs font-medium text-gray-700 mr-2">Margins</span>
                    <div className="flex border border-gray-200 rounded overflow-hidden">
                        <button
                            onClick={() => setMargins(40)}
                            className={`px-2 py-1 ${margins === 40 ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-600'} hover:bg-gray-50`}
                            title="Narrow margins"
                        >
                            <i className="bi bi-arrows-angle-contract"></i>
                        </button>
                        <button
                            onClick={() => setMargins(70)}
                            className={`px-2 py-1 border-l border-r border-gray-200 ${margins === 70 ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-600'} hover:bg-gray-50`}
                            title="Standard margins"
                        >
                            <i className="bi bi-dash-lg"></i>
                        </button>
                        <button
                            onClick={() => setMargins(100)}
                            className={`px-2 py-1 ${margins === 100 ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-600'} hover:bg-gray-50`}
                            title="Wide margins"
                        >
                            <i className="bi bi-arrows-angle-expand"></i>
                        </button>
                    </div>
                </div>

                {/* Auto-fit button */}
                <div className="flex items-center h-full px-3 border-r border-gray-200">
                    <span className="text-xs font-medium text-gray-700 mr-2">Auto-fit</span>
                    <button
                        onClick={toggleAutoScale}
                        className={`h-8 px-3 rounded text-sm flex items-center gap-1 ${autoScaleEnabled
                                ? 'bg-blue-500 text-white hover:bg-blue-600'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            } transition-colors`}
                        title={autoScaleEnabled ? "Disable auto-fit" : "Enable auto-fit"}
                    >
                        <i className={`bi ${autoScaleEnabled ? 'bi-check2' : 'bi-x'}`}></i>
                        <span className="hidden md:inline">{autoScaleEnabled ? "On" : "Off"}</span>
                    </button>
                </div>

                {/* Zoom controls with better spacing */}
                <div className="flex items-center h-full pl-3">
                    <span className="text-xs font-medium text-gray-700 mr-2">Zoom</span>
                    <div className="flex items-center h-8 border border-gray-200 rounded overflow-hidden bg-white">
                        <button
                            className="px-2 py-1 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                            onClick={() => adjustManualScale(-10)}
                            title="Zoom out"
                        >
                            <i className="bi bi-dash"></i>
                        </button>
                        <div className="flex items-center justify-center min-w-[40px] px-1 border-l border-r border-gray-200">
                            <span className='text-gray-700'>{scale}%</span>
                        </div>
                        <button
                            className="px-2 py-1 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                            onClick={() => adjustManualScale(10)}
                            title="Zoom in"
                        >
                            <i className="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile toolbar - compact version */}
            <div className="sm:hidden">
                <div className="flex justify-between items-center px-3 py-2">
                    {/* Template selector (always visible on mobile) */}
                    <div className="flex items-center">
                        <select
                            value={template}
                            onChange={(e) => setTemplate(e.target.value)}
                            className="text-sm text-gray-700 border border-gray-200 rounded px-2 py-1"
                        >
                            {availableTemplates.map(tmpl => (
                                <option key={tmpl.id} value={tmpl.id}>{tmpl.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        {/* Zoom controls for Mobile */}
                        <div className="flex items-center h-full pl-3">
                            <div className="flex items-center h-8 border border-gray-200 rounded overflow-hidden bg-white">
                                <button
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                                    onClick={() => adjustManualScale(-10)}
                                    title="Zoom out"
                                >
                                    <i className="bi bi-dash"></i>
                                </button>
                                <div className="flex items-center justify-center min-w-[40px] px-1 border-l border-r border-gray-200">
                                    <span className='text-gray-700'>{scale}%</span>
                                </div>
                                <button
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                                    onClick={() => adjustManualScale(10)}
                                    title="Zoom in"
                                >
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>

                        {/* Toggle for additional controls */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-1 rounded text-gray-500 hover:bg-gray-100"
                        >
                            <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-sliders'}`}></i>
                        </button>
                    </div>
                    
                </div>

                {/* Expandable controls section */}
                {mobileMenuOpen && (
                    <div className="border-t border-gray-200 px-3 py-2 bg-gray-50 grid grid-cols-2 gap-2">
                        {/* Margins */}
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-gray-700 mb-1">Margins</span>
                            <div className="flex border border-gray-200 rounded overflow-hidden bg-white">
                                <button
                                    onClick={() => setMargins(40)}
                                    className={`flex-1 py-1 ${margins === 40 ? 'bg-gray-100 text-gray-800' : 'text-gray-600'}`}
                                >
                                    <i className="bi bi-arrows-angle-contract"></i>
                                </button>
                                <button
                                    onClick={() => setMargins(70)}
                                    className={`flex-1 py-1 border-l border-r border-gray-200 ${margins === 70 ? 'bg-gray-100 text-gray-800' : 'text-gray-600'}`}
                                >
                                    <i className="bi bi-dash-lg"></i>
                                </button>
                                <button
                                    onClick={() => setMargins(100)}
                                    className={`flex-1 py-1 ${margins === 100 ? 'bg-gray-100 text-gray-800' : 'text-gray-600'}`}
                                >
                                    <i className="bi bi-arrows-angle-expand"></i>
                                </button>
                            </div>
                        </div>

                        {/* Auto-fit toggle */}
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-gray-700 mb-1">Auto-fit</span>
                            <button
                                onClick={toggleAutoScale}
                                className={`py-1 rounded ${autoScaleEnabled ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-200'
                                    }`}
                            >
                                {autoScaleEnabled ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}