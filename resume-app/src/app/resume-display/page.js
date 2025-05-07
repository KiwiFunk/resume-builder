"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation";    // Import useRouter for navigation
import DisplayResume from "./ResumeDisplay"; // Import the DisplayResume component from the same folder
import data from "@/UserData"; // Import your user data

export default function ResumeDisplayPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* Page navigation and tools such as save to PDF */}
            <i class="bi bi-chevron-left"></i>

            {/* Eventually, add a widget to handle selecting a resume template before displaying */}

            {/* Load in the resume display component */}
            <DisplayResume data={data} />
        </main>
    );
}