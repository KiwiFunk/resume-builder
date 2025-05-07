"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation";    // Import useRouter for navigation
import DisplayResume from "./ResumeDisplay"; // Import the DisplayResume component from the same folder
import data from "@/UserData"; // Import your user data

export default function ResumeDisplayPage() {
    const router = useRouter(); // Initialize the router

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* Page navigation and tools such as save to PDF */}
            <div className="w-full max-w-4xl">
                <button 
                    className="self-start cursor-pointer hover:scale-120 transition-transform duration-200 ease-in-out"
                    onClick={() => router.push("/")} // Navigate back to the home pagemm
                ><i className="bi bi-chevron-left"></i></button>
            </div>

            {/* Eventually, add a widget to handle selecting a resume template before displaying */}

            {/* Load in the resume display component */}
            <DisplayResume data={data} />
        </main>
    );
}