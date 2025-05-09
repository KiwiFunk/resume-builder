"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation"; // Import useRouter for routing
import data from "@/UserData"; // Import the user data
import CollapsibleContainer from "@/components/CollapsibleContainer";

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
                        <div className="sm:mt-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input type="email" id="email" defaultValue={data.email} className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                            <input type="text" id="phone" defaultValue={data.phone} className={inputClasses} />
                        </div>
                        <div>
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
    
                <CollapsibleContainer title="Edit Resume Details">
                    <div className="mt-4">
                        <label htmlFor="title" className="block text-gray-700">Title:</label>
                        <input type="text" id="title" defaultValue={data.title} className={inputClasses} />
                    </div>
                   
                    <div className="mt-4">
                        <label htmlFor="summary" className="block text-gray-700">Summary:</label>
                        <textarea id="summary" defaultValue={data.summary} className={inputClasses} rows="6"></textarea>
                    </div>
                </CollapsibleContainer>
                
                    
                {/* Social Media Links */}
                <CollapsibleContainer title="Edit Socials">
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
                                    className="p-3 border border-gray-300 rounded text-red-500 hover:text-red-600 cursor-pointer hover:animate-wiggle hover:scale-110 transition-transform duration-100 ease-in-out"
                                    onClick={() => alert("Delete social functionality coming soon!")}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        ))}

                         {/* Input field with social icon to the left, dynamically set by parsing the name from the url */}

                        {/* Create new social media button under the last social media link */}

                    </div>
                </CollapsibleContainer>

                {/* Skills Section */}
                <CollapsibleContainer title="Edit Skills">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Map through current skills data */}
                        {data.skills.map((group, index) => (
                            <div id="skill-group" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">
                            
                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="text"
                                        defaultValue={group.groupName}
                                        className={inputClasses}
                                    />
                                    <button 
                                        className="p-3 border border-gray-300 rounded text-red-500 hover:text-red-600 cursor-pointer hover:animate-wiggle hover:scale-110 transition-transform duration-100 ease-in-out"
                                        onClick={() => alert("Delete skill group functionality coming soon!")}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {/* Skill Tags */}
                                    {group.items.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 text-sm font-medium shadow-sm transition duration-300 [&:has(button:hover)]:bg-red-500"
                                        >
                                            <span className="transition duration-300 [&:has(button:hover)]:text-white">{skill}
                                                <button 
                                                    className="ml-2"
                                                    onClick={() => alert("Delete skill functionality coming soon!")}
                                                >
                                                    <i className="bi bi-x text-red-500 cursor-pointer transition duration-300 hover:text-white"></i>
                                                </button>
                                            </span>
                                        </div>
                                    ))}

                                    {/* Add Skill Button */}
                                    <button className="px-3 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm font-medium shadow-sm hover:bg-gray-400 transition duration-200">
                                        <i className="bi bi-plus"></i>
                                    </button>

                                    {/* Implement react-dnd to allow drag and drop of skills between groups */}
                                </div>
                            </div>   
                        ))}
                                                        
                        {/* Create skill group button under the last skill group, MAKE RESPONSIVE 1/2 COLUMNS */}
                            {/* Add new skill button in each group */}
                        
                        {/* Implement react-dnd to allow drag and drop of skills between groups */}
                        
                    </div>

                </CollapsibleContainer>

                <CollapsibleContainer title="Your Education"> 
                    {/* Map through the current education data */}
                    {data.education
                        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                        .map((edu, index) => (
                            <div id="education-entry" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">

                                <div className="grid grid-cols-1 sm:mb-0 sm:grid-cols-2 sm:gap-4">
                                    <div>
                                        <label htmlFor="edutitle" className="block text-gray-700">Title:</label>
                                        <input type="text" id="edutitle" defaultValue={edu.degree} className={inputClasses} />'
                                    </div>
                                    <div>
                                        <label htmlFor="eduinstitute" className="block text-gray-700">Institution:</label>
                                        <input type="text" id="eduinstitute" defaultValue={edu.institution} className={inputClasses} />
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-6 sm:gap-4">
                                    <div className="flex-1">
                                        <label htmlFor="edulocation" className="block text-gray-700">Location:</label>
                                        <input type="text" id="edulocation" defaultValue={edu.location} className={inputClasses} />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="edustart" className="block text-gray-700">Start Date:</label>
                                        <input type="date" id="edustart" defaultValue={edu.startDate} className={inputClasses} />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="eduend" className="block text-gray-700">End Date:</label>
                                        <input type="date" id="eduend" defaultValue={edu.endDate} className={inputClasses} />
                                    </div>

                                    {/* Delete button */}
                                    <button 
                                        className="h-full p-3 mt-6 border border-gray-300 rounded text-red-500 hover:text-red-600 cursor-pointer sm:hover:animate-wiggle sm:hover:scale-110 transition-transform duration-100 ease-in-out flex-0"
                                        onClick={() => alert("Delete skill group functionality coming soon!")}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                            ))
                        }

                        {/* Add new education button under the last education entry */}
                </CollapsibleContainer>
                
                <CollapsibleContainer title="Your Courses & Training">
                        {/* Map through current courses data */}
                        {data.training
                            .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                            .map((course, index) => (
                                <div id="training-entry" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">

                                    <div className="grid grid-cols-1 sm:mb-0 sm:grid-cols-2 sm:gap-4">
                                        <div>
                                            <label htmlFor="course-title" className="block text-gray-700">Title:</label>
                                            <input type="text" id="course-title" defaultValue={course.title} className={inputClasses} />'
                                        </div>
                                        <div>
                                            <label htmlFor="course-institute" className="block text-gray-700">Institution:</label>
                                            <input type="text" id="course-institute" defaultValue={course.institution} className={inputClasses} />
                                        </div>
                                    </div>

                                    <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-6 sm:gap-4">
                                    
                                        <div className="flex-1">
                                            <label htmlFor="course-start" className="block text-gray-700">Start Date:</label>
                                            <input type="date" id="course-start" defaultValue={course.startDate} className={inputClasses} />
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="course-end" className="block text-gray-700">End Date:</label>
                                            <input type="date" id="course-end" defaultValue={course.endDate} className={inputClasses} />
                                        </div>

                                        {/* Delete button */}
                                        <button 
                                            className="h-full p-3 mt-6 border border-gray-300 rounded text-red-500 hover:text-red-600 cursor-pointer sm:hover:animate-wiggle sm:hover:scale-110 transition-transform duration-100 ease-in-out flex-0"
                                            onClick={() => alert("Delete skill group functionality coming soon!")}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>

                                    <label htmlFor="course-description" className="block text-gray-700 mt-4">Description:</label>
                                    <textarea id="course-description" defaultValue={course.description} className={inputClasses} rows="3"></textarea>

                                </div>
                            ))
                        }
                        {/* Add new course button under the last course entry */}
                        
                </CollapsibleContainer>

                <CollapsibleContainer title="Employment History">
                        {/* Map through current employment data */}
                        {/* Job Title, Company Name, Location, Start/End date selection, TextArea for description of job */}
                        {/* Add new job button under the last job entry */}
                        {/* Always sort with descending hierarchy, no need for dnd */}
                </CollapsibleContainer>
                <CollapsibleContainer title="Projects & Portfolio">
                    {/* Map through current projects data */}
                        {/* Project Name, URL for repo/hosting, skills used entry, TextArea for description of project */}
                        {/* Add new project button under the last project entry */}
                        {/* Always sort with descending hierarchy, no need for dnd */}
                </CollapsibleContainer>
                <CollapsibleContainer title="Hobbies & Interests">
                    <label htmlFor="summary" className="hidden text-gray-700">Summary:</label>
                    <textarea id="summary" defaultValue={data.hobbies} className={inputClasses} rows="6"></textarea>
                    <p className="text-gray-400 text-sm">Sentences will be automatically formatted as bullet points.</p>
                </CollapsibleContainer>


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