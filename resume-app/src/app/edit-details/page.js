"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation"; // Import useRouter for routing
import data from "@/UserData"; // Import the user data

export default function EditDetailsPage() {
    const router = useRouter(); // Initialize the router
    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* Page navigation and function buttons */}
            <div className="w-full max-w-4xl flex justify-between items-center">
                <button
                    className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                    onClick={() => router.push("/")}
                >
                    <i className="bi bi-chevron-left text-xl"></i>
                </button>

                <button
                    className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                    onClick={() => alert("Saving functionality coming soon!")}
                >
                    <i className="bi bi-floppy-fill text-xl"></i>
                </button>
                </div>

            {/* Display form populated by UserData JSON to allow updating fields. */}

        </main>
    );
    }