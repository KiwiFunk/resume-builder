"use client";

import { useState, useEffect, Suspense } from 'react';
import { getTemplate } from "@/templates";

export default function DisplayResume({ data, template }) {
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Use async function to wait for the template to load before setting
    async function loadTemplate() {
      setLoading(true);
      const Template = await getTemplate(template.id);
      setTemplateComponent(() => Template);
      setLoading(false);
    }
    
    loadTemplate();
  }, [template]); // Execute when template changes

  // Loading state
  if (loading || !TemplateComponent) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading template...</div>
      </div>
    );
  }

  // Render the loaded template component with the provided data
  return <TemplateComponent data={data} />;
}