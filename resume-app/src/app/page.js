"use client";   // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import data from "@/UserData"; // Import your user data

export default function Home() {
  const router = useRouter(); // Initialize the router

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold">Resume Builder</h1>
      <p className="text-lg text-gray-600 mt-2">Create and customize your resume effortlessly.</p>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 cursor-pointer"
        onClick={() => router.push("/resume-display")} // Navigate to resume display page
      >
        Display Resume
      </button>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 cursor-pointer"
        onClick={() => router.push("/edit-details")} // Navigate to the edit details page
      >
        Edit Details
      </button>
    </main>
  );
}