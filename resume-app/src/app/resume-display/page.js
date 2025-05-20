"use client";

import { useRouter } from "next/navigation";
import DisplayResume from "./ResumeDisplay";
import { useState, useEffect } from "react";
import { getLocalData } from "@/utils/localData";
import { getAllTemplates } from "@/templates";
import DocumentViewer from "./DocumentViewer";
import { useAutoScale } from "@/hooks/useAutoScale";
import LoadingPage from "./LoadingPage";
import NoDataPage from "./NoDataPage";
import ResumeToolbar from "./EditingToolbar";

export default function ResumeDisplayPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [template, setTemplate] = useState({});
  const [availableTemplates, setAvailableTemplates] = useState([]);
  const [margins, setMargins] = useState(70); 
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

    setTemplate(templates[0]);
    setData(userData);
    setAvailableTemplates(templates);
    setIsLoading(false);
  }, []);

  const toggleAutoScale = () => {
    setAutoScaleEnabled(prev => !prev);
  };

  const adjustManualScale = (delta) => {
    // First capture the current scale value (whether auto or manual)
    const currentScale = autoScaleEnabled ? autoScale : manualScale;
    
    // Disable auto-scale when adjusting manually
    setAutoScaleEnabled(false);
    
    // Calculate new scale based on current visible scale + delta
    const newScaleRaw = currentScale + delta;
    
    // Round the new scale to the nearest 10
    const newScaleRounded = delta > 0
      ? Math.floor(newScaleRaw / 10) * 10   
      : Math.ceil(newScaleRaw / 10) * 10;  
    
    // Apply minimum 30% and maximum 150% constraints
    const finalScale = Math.max(30, Math.min(150, newScaleRounded));
    
    // Set the new manual scale
    setManualScale(finalScale);
  };

  // LOADING PAGE
  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  // NO DATA PAGE
  if (!data || !data.name) {
    return (
      <NoDataPage />
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
        <ResumeToolbar
          template={template}
          setTemplate={setTemplate}
          availableTemplates={availableTemplates}
          margins={margins}
          setMargins={setMargins}
          autoScaleEnabled={autoScaleEnabled}
          toggleAutoScale={toggleAutoScale}
          scale={scale}
          adjustManualScale={adjustManualScale}
        />

        {/* Resume display section */}
        <div className="flex justify-center mb-2 margin-auto">
          <DocumentViewer scale={scale} margins={margins}>
            <DisplayResume data={data} template={template} />
          </DocumentViewer>
        </div>
      </div>
    </main>
  );
}