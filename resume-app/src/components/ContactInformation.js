"use client";   // Enables React hooks in Next.js 13+

import { useState } from "react";

export default function ResumeEditor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-lg">
      <p className="mt-4 text-gray-700 text-4xl font-bold">{name || "Your Name"}</p>
      <p className="mt-4 text-gray-700">{email || "email@service.com"}</p>
      <p className="mt-4 text-gray-700">{phone || "+00 123 4567"}</p>
      <p className="mt-4 text-gray-700 text-sm">{location || "Location, CA"}</p>
    </div>
  );
}