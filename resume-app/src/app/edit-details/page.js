"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation"; // Import useRouter for routing
import data from "@/UserData"; // Import the user data

const inputClasses = "w-full p-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

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

            {/* Form populated with data from UserData.js */}
            <form className="w-full max-w-4xl">

                {/* Persistant user info */}
                <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800">Your Info</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mt-4">
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input type="text" id="name" defaultValue={data.name} className={inputClasses} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input type="email" id="email" defaultValue={data.email} className={inputClasses} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                            <input type="text" id="phone" defaultValue={data.phone} className={inputClasses} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="location" className="block text-gray-700">Location:</label>
                            <input type="text" id="location" defaultValue={data.location} className={inputClasses} />
                        </div>
                    </div>
                </div>

                {/* Resume selector, with the option to create a new resume */}
                <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl flex gap-4">
                    <span
                        className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"
                    >
                    Resume 1
                    </span>
                    <span
                        className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"
                    >
                    Resume 2
                    </span>
                    <span
                        className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"
                    >
                    Resume 3
                    </span>
                    <span
                        className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"
                    >
                    <i className="bi bi-plus"></i>
                    </span>
                </div>

                {/* Resume Details */}
                <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800">Edit Details</h2>

                    <div className="mt-4">
                        <label htmlFor="title" className="block text-gray-700">Title:</label>
                        <input type="text" id="title" defaultValue={data.title} className={inputClasses} />
                    </div>
                   
                    <div className="mt-4">
                        <label htmlFor="summary" className="block text-gray-700">Summary:</label>
                        <textarea id="summary" defaultValue={data.summary} className={inputClasses} rows="6"></textarea>
                    </div>

                </div>
                    
                {/* Social Media Links */}

                <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2.5">Edit Socials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Map through the current social media data */}
                        {data.socials.map((social, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {/* Social Media Icon */}
                                <div
                                    className="w-6 h-5 bg-(--accent)"
                                    style={{ maskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`, WebkitMaskImage: `url('/icons/${social.platform.toLowerCase()}.svg')` }}
                                    aria-label={social.platform}
                                ></div>

                                {/* Social Media URL Input */}
                                <input
                                    type="text"
                                    defaultValue={social.url}
                                    className={inputClasses}
                                    onChange={(e) => handleSocialChange(index, e.target.value)}
                                />

                                {/* Delete Button */}
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-600 cursor-pointer hover:animate-wiggle hover:scale-110 transition-transform duration-100 ease-in-out"
                                    onClick={() => handleDeleteSocial(index)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        ))}

                         {/* Input field with social icon to the left, dynamically set by parsing the name from the url */}

                        {/* Create new social media button under the last social media link */}

                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2.5">Edit Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Map through current skills data */}

                        <div id="skill-group" className="mb-2 w-full bg-gray-100 p-4 rounded shadow-sm">
                            <h3 className="text-lg text-gray-800 bg-gray-200 w-full mb-2">Skill Group Name</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {/* Map through skills in that group */}
                                <span className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm">Placeholder</span>
                                <span className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm">Placeholder</span>
                                <span className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm">Placeholder</span>
                                <span className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"><i className="bi bi-plus"></i></span>
                            </div>
                        </div>
                                

                        {/* Create skill group button under the last skill group */}
                            {/* Add new skill button in each group */}
                        
                        {/* Implement react-dnd to allow drag and drop of skills between groups */}
                        
                    </div>
                </div>
                    

                {/* Add more fields as needed */}
                

                {/* Submit button */}
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 cursor-pointer"
                >
                    Save Changes
                </button>
            </form>

        </main>
    );
    }