"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation";    // Import useRouter for navigation
import DisplayResume from "./ResumeDisplay";    // Import the DisplayResume component from the same folder
import { useState, useEffect } from "react";
import { getLocalData } from "@/utils/localData";   // Import the getLocalData function to fetch data from local storage

export default function ResumeDisplayPage() {
    const router = useRouter();                     // Initialize the router
    const [data, setData] = useState(null);         // Initialize state to hold user data

    useEffect(() => {
        const userData = getLocalData("userData");  // Fetch user data from local storage once component mounts
        setData(userData);                          // Set the fetched data to state
    }, []); 

    if (!data) {
        return <div>Loading...</div>;               // Show loading state until data is fetched
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* Page navigation and tools such as save to PDF */}
            <div className="w-full max-w-4xl flex justify-between items-center">
                <button
                    className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                    onClick={() => router.push("/")}
                >
                    <i className="bi bi-chevron-left text-xl"></i>
                </button>

                <div className="gap-4 flex flex-row items-center">

                    {/* This feature will use scraping and simple JS to check for keyword matches against job listings, potentially expanded to AI suggestions */}
                    <button
                        className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                        onClick={() => alert("Check your resume for keyword matches against job listings, and ATS compatibility!")}
                    >
                        <i className="bi bi-check2-square text-xl"></i>
                    </button>
                    
                    <button
                        className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                        onClick={() => alert("PDF functionality coming soon!")}
                    >
                        <i className="bi bi-file-earmark-pdf-fill text-xl"></i>
                    </button>
                </div>
                
                </div>

            {/* Eventually, add a widget to handle selecting a resume template before displaying */}

            {/* Load in the resume display component */}
            <DisplayResume data={data} />
        </main>
    );
}