"use client";

import { useRouter } from "next/navigation";
import DisplayResume from "./ResumeDisplay";
import { useState, useEffect } from "react";
import { getLocalData } from "@/utils/localData";
import { getAllTemplates } from "@/templates";
import DocumentViewer from "./DocumentViewer";
import { useAutoScale } from "@/hooks/useAutoScale";

export default function ResumeDisplayPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [template, setTemplate] = useState("modern");
  const [availableTemplates, setAvailableTemplates] = useState([]);

  // Auto-scale state
  const [autoScaleEnabled, setAutoScaleEnabled] = useState(true);
  const [manualScale, setManualScale] = useState(100);

  // Get auto-calculated scale from hook when enabled
  const autoScale = useAutoScale(autoScaleEnabled);

  // Use auto scale or manual scale based on the toggle
  const scale = autoScaleEnabled ? autoScale : manualScale;

  useEffect(() => {
    // Load user data and preferred template if available
    const userData = getLocalData("userData");
    const templates = getAllTemplates();

    setData(userData);
    setAvailableTemplates(templates);
    setIsLoading(false);
  }, []);

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const toggleAutoScale = () => {
    setAutoScaleEnabled(prev => !prev);
  };

  const adjustManualScale = (delta) => {
    setAutoScaleEnabled(false); // Disable auto-scale when adjusting manually

    setManualScale(prev => {
      let newScale = autoScaleEnabled ? autoScale : prev + delta;

      // Ensure correct rounding behavior based on delta direction
      newScale = delta > 0
        ? Math.ceil(newScale / 10) * 10  // Round UP when increasing scale
        : Math.floor(newScale / 10) * 10; // Round DOWN when decreasing scale

      // Keep within allowed range
      return Math.max(30, Math.min(150, newScale));
    });
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
              <label htmlFor="template" className="hidden sm:block text-sm font-medium text-gray-700">Template:</label>
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

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Auto-fit:</span>
              <button
                onClick={toggleAutoScale}
                className={`px-2 py-1 text-xs rounded-md ${autoScaleEnabled
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                  }`}
                title={autoScaleEnabled ? "Disable auto-fit" : "Enable auto-fit"}
              >
                <i className={`bi ${autoScaleEnabled ? 'bi-check-lg' : 'bi-x-lg'}`}></i>
              </button>
            </div>

            {/* Zoom control */}
            <div className="flex items-center gap-3">
              <label htmlFor="scale" className="hidden sm:block text-sm font-medium text-gray-700">Zoom:</label>
              <div className="flex items-center text-gray-600">
                <button
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-l border border-gray-300"
                  onClick={() => adjustManualScale(-10)}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="px-3 py-1 border-t border-b border-gray-300">
                  {scale}%
                </span>
                <button
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-r border border-gray-300"
                  onClick={() => adjustManualScale(10)}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resume display section */}
        <div className="flex justify-center mb-2 margin-auto">
          <DocumentViewer scale={scale}>
            <DisplayResume data={data} template={template} />
          </DocumentViewer>
        </div>
      </div>
    </main>
  );
}