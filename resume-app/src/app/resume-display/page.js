"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation";    // Import useRouter for navigation
import DisplayResume from "./ResumeDisplay"; // Import the DisplayResume component from the same folder
import data from "@/UserData"; // Import your user data

export default function ResumeDisplayPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Your Resume</h1>
      <DisplayResume data={data} />
    </main>
  );
}