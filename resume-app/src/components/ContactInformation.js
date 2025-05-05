"use client";   // Enables React hooks in Next.js 13+

import data from "@/UserData";  // Importing data from UserData.js

export default function ResumeEditor() {

  return (
    <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-lg">
      <p className="mt-4 text-gray-700 text-4xl font-bold">{data.name}</p>
      <p className="mt-4 text-gray-700">{data.email || "email@service.com"}</p>
      <p className="mt-4 text-gray-700">{data.phone || "+00 123 4567"}</p>
      <p className="mt-4 text-gray-700 text-sm">{data.location || "Location, CA"}</p>
    </div>
  );
}