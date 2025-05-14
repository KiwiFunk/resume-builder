"use client";

import { useRouter } from "next/navigation";
import DisplayResume from "./ResumeDisplay";
import { useState, useEffect } from "react";
import { getLocalData } from "@/utils/localData";
import { getAllTemplates } from "@/templates";

export default function ResumeDisplayPage() {
  const router = useRouter();
  const [data, setData] = useState(null);                               //State to hold user data 
  const [isLoading, setIsLoading] = useState(true);                     //State to manage loading status
  const [template, setTemplate] = useState("modern");                   //State to hold current template
  const [scale, setScale] = useState(100);                              //State to manage zoom level  
  const [availableTemplates, setAvailableTemplates] = useState([]);     //State to hold template options

  useEffect(() => {
    // Load user data and preferred template if available
    const userData = getLocalData("userData");
    const templates = getAllTemplates();

    setData(userData);
    setAvailableTemplates(templates);
    setIsLoading(false);
  }, []);                                                               // Only run once on component mount

  const handleTemplateChange = (e) => {
    const newTemplate = e.target.value;
    setTemplate(newTemplate);
  };

  // LOADING PAGE
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your resume...</p>
        </div>
      </div>
    );
  }

  // NO DATA PAGE
  if (!data || !data.name) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
            <i className="bi bi-file-earmark-text text-2xl text-blue-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Resume Found</h2>
          <p className="text-gray-600 mb-6">Create your first resume by adding your details.</p>
          <button
            onClick={() => router.push("/edit-details")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              <i className="bi bi-plus-circle"></i>
              Create Resume Now
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-8">

      {/* Top toolbar */}
      <div className="sticky top-0 z-10 bg-white shadow-md py-3 mb-8 backdrop-blur">
        <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center">
          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded hover:bg-gray-100 transition-colors flex items-center gap-1 text-gray-700"
              onClick={() => router.push("/")}
            >
              <i className="bi bi-chevron-left text-xl"></i>
              <span className="hidden sm:inline">Home</span>
            </button>

            <h1 className="hidden sm:block text-xl font-medium text-gray-900">Resume Preview</h1>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Edit button */}
            <button
              className="px-3 py-2 rounded hover:bg-gray-100 transition-colors flex items-center gap-2 text-blue-600"
              onClick={() => router.push("/edit-details")}
            >
              <i className="bi bi-pencil"></i>
              <span className="hidden sm:inline">Edit</span>
            </button>

            {/* ATS checker */}
            <button
              className="px-3 py-2 rounded hover:bg-gray-100 transition-colors flex items-center gap-2 text-green-600"
              onClick={() => alert("ATS compatibility check coming soon!")}
            >
              <i className="bi bi-check2-circle"></i>
              <span className="hidden sm:inline">ATS Check</span>
            </button>

            {/* PDF download */}
            <button
              className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 text-white"
              onClick={() => alert("PDF export coming soon!")}
            >
              <i className="bi bi-file-earmark-pdf"></i>
              <span className="hidden sm:inline">Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Resume Container */}
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Resume display controls */}
        <div className="bg-white rounded-lg shadow-md mb-4 p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Template selection */}
            <div className="flex items-center gap-3">
              <label htmlFor="template" className="text-sm font-medium text-gray-700">Template:</label>
              <select
                id="template"
                value={template}
                onChange={handleTemplateChange}
                className="text-gray-600 bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {availableTemplates.map(tmpl => (
                  <option key={tmpl.id} value={tmpl.id}>
                    {tmpl.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Zoom control */}
            <div className="flex items-center gap-3">
              <label htmlFor="scale" className="text-sm font-medium text-gray-700">Zoom:</label>
              <div className="flex items-center text-gray-600">
                <button
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-l border border-gray-300"
                  onClick={() => setScale(Math.max(50, scale - 10))}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="px-3 py-1 border-t border-b border-gray-300">
                  {scale}%
                </span>
                <button
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-r border border-gray-300"
                  onClick={() => setScale(Math.min(150, scale + 10))}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Resume display section */}
        <div className="flex justify-center">
          <div
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-8 print:shadow-none origin-top transition-all duration-150"
            style={{
              maxWidth: '1000px',
              transform: `scale(${scale / 100})`,
              transformOrigin: 'top center'
            }}
          >
            <div className="p-8 a4-page">
              <DisplayResume data={data} template={template} />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}