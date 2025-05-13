"use client";

import { getTemplate } from "@/templates";

export default function DisplayResume({ data, template = "modern" }) {
  // Get the selected template component
  const SelectedTemplate = getTemplate(template);
  
  // Render the selected template with the data
  return <SelectedTemplate data={data} />;
}