"use client"; // Enables React hooks in Next.js 13+

import { useRouter } from "next/navigation"; // Import useRouter for routing
import { useState, useEffect } from "react";
import { getLocalData, setLocalData } from "@/utils/localData";

import CollapsibleContainer from "@/components/CollapsibleContainer";
import TaggingHandler from "@/components/TaggingHandler";
import DeleteButton from "@/components/DeleteButton";
import SocialMediaLinks from "@/components/EditForm/SocialMediaLinks";

import debugData from "@/UserData";         // Import placeholder data for debugging
import { useDebounce } from "@/utils/hooks";

const inputClasses = "w-full p-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

export default function EditDetailsPage() {
    const router = useRouter();                     // Initialize the router
    const [data, setData] = useState(null);         // Init as null to avoid hydration issues
    

    var useDebugData = false;                       // Set to true to load debug data

    const handleDeletion = (key, index) => {                // key (string) name of the array to delete from, index (number) of the item to delete
        setData({                                           // Call setData to update the state
            ...data,                                        // Spread the existing data
            [key]: data[key].filter((_, i) => i !== index)  // Access the key variable as an array and filter out the supplied index
        });
    };

    const handleAdd = (key, object) => {               // key (string) name of the array to add to
        setData({                                           // Call setData to update the state
            ...data,                                        // Spread the existing data
            [key]: [...data[key], object ]                  // Access the key variable as an array and add a new object to it
        });
    };

    /**
     * Handle nested state updates
     * 
     * @param {string} field - The main field in the state (e.g., "socials").
     * @param {number} index - The index of the item in the array.
     * @param {string} subfield - The property within the nested object (e.g., "url").
     * @param {*} value - The new value to set for the subfield.
     * 
     * Example Usage:
     * updateNestedState("socials", 2, "url", "https://newwebsite.com");
     */
    const updateNestedState = (field, index, subfield, value) => {
        setData({
            ...data,
            [field]: data[field].map((item, i) => 
                i === index ? { ...item, [subfield]: value } : item
            )
        });
    };
            
    useEffect(() => {
        // Fetch data from localStorage AFTER the component mounts.
        const storedData = getLocalData("userData", {
            name: "",
            email: "",
            phone: "",
            location: "",
            socials: [],                            
            skills: [],
            education: [],
            training: [],
            experience: [],
            projects: [],
            hobbies: "",
        });
        setData(storedData);                        // Set the loaded data to state

        if (useDebugData) {
            setData(debugData);                     // Set the debug data to state on component mount
        }
    }, []);                                         // Use empty dependency array to only run once.

    const handleSave = () => {
        setLocalData("userData", data);             // Save the updated data to local storage
        alert("Data saved successfully!");          // Alert the user
    }

    if (!data) {
        return <div>Loading...</div>;               // Show loading state until data is fetched
    }

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
                    onClick={handleSave}
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
                            <input 
                                type="text" 
                                id="name" 
                                value={data.name} 
                                onChange={(e) => setData({ ...data, name: e.target.value })} // Update state on change
                                className={inputClasses} 
                            />
                        </div>
                        <div className="sm:mt-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={data.email} 
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                            <input 
                                type="text" 
                                id="phone" 
                                value={data.phone} 
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-gray-700">Location:</label>
                            <input 
                                type="text" 
                                id="location" 
                                value={data.location}
                                onChange={(e) => setData({ ...data, location: e.target.value })} 
                                className={inputClasses} />
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
                        <input 
                            type="text" 
                            id="title" 
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })} 
                            className={inputClasses} />
                    </div>
                   
                    <div className="mt-4">
                        <label htmlFor="summary" className="block text-gray-700">Summary:</label>
                        <textarea 
                            id="summary" 
                            value={data.summary} 
                            onChange={(e) => setData({ ...data, summary: e.target.value })}
                            className={`${inputClasses} min-h-[18rem] sm:min-h-[12rem]`}
                        ></textarea>
                    </div>
                </CollapsibleContainer>
                
                    
                {/* Social Media Links */}
                <CollapsibleContainer title="Edit Socials" useAddBtn={true} callback={() => handleAdd("socials", { platform: "website", url: "", inUse: true })}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Map through the current social media data */}
                        {data.socials.map((social, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {/* Social Media Icon */}
                                <div
                                    className="w-7 h-7 bg-(--accent)"
                                    style={{
                                        maskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`,
                                        WebkitMaskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`,
                                        maskSize: 'contain',
                                        maskRepeat: 'no-repeat'
                                    }}
                                    aria-label={social.platform}
                                ></div>

                                {/* Social Media URL Input */}
                                <input
                                    type="text"
                                    value={social.url}
                                    className={inputClasses}
                                    onChange={(e) => updateNestedState("socials", index, "url", e.target.value)}                              
                                />  
                                <DeleteButton onDelete={() => handleDeletion("socials", index)} />
                            </div>
                        ))}
                        {/* Input field with social icon to the left, dynamically set by parsing the name from the url */}
                    </div>
                </CollapsibleContainer>

                {/* Skills Section */}
                <CollapsibleContainer title="Edit Skills" useAddBtn={true} callback={() => handleAdd("skills", { groupName: "New Skill Group", items: [] })}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Map through current skills data */}
                        {data.skills.map((group, index) => (
                            
                            <div id="skill-group" key={index} className="w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">
                            
                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="text"
                                        value={group.groupName}
                                        onChange={(e) => updateNestedState("skills", index, "groupName", e.target.value)} 
                                        className={inputClasses}
                                    />
                                    <DeleteButton onDelete={() => handleDeletion("skills", index)} />
                                </div>

                                {/* Pass array containing tags, and callback function for updating state to TaggingHandler */}
                                <TaggingHandler 
                                    tags={group.items} 
                                    onTagUpdate={(updatedTags) => updateNestedState("skills", index, "items", updatedTags)}
                                />
                            </div>   
                        ))}
                        {/* Implement react-dnd to allow drag and drop of skills between groups */}        
                    </div>
                </CollapsibleContainer>

                <CollapsibleContainer title="Your Education" useAddBtn={true} callback={() => handleAdd("education", { degree: "", institution: "", location: "", startDate: "", endDate: "" })}>
                    {/* Map through the current education data */}
                    {data.education
                        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                        .map((edu, index) => (
                            <div id="education-entry" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">

                                <div className="grid grid-cols-1 sm:mb-0 sm:grid-cols-2 sm:gap-4">
                                    <div className="mb-6">
                                        <label htmlFor="edutitle" className="block text-gray-700">Title:</label>
                                        <input 
                                            type="text" 
                                            id="edutitle" 
                                            value={edu.degree}
                                            onChange={(e) => updateNestedState("education", index, "degree", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="eduinstitute" className="block text-gray-700">Institution:</label>
                                        <input 
                                            type="text" 
                                            id="eduinstitute" 
                                            value={edu.institution}
                                            onChange={(e) => updateNestedState("education", index, "institution", e.target.value)}
                                            className={inputClasses} />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                                    <div className="flex-1">
                                        <label htmlFor="edulocation" className="block text-gray-700">Location:</label>
                                        <input 
                                            type="text" 
                                            id="edulocation" 
                                            value={edu.location} 
                                            onChange={(e) => updateNestedState("education", index, "location", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="edustart" className="block text-gray-700">Start Date:</label>
                                        <input 
                                            type="date" 
                                            id="edustart" 
                                            value={edu.startDate}
                                            onChange={(e) => updateNestedState("education", index, "startDate", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="eduend" className="block text-gray-700">End Date:</label>
                                        <input 
                                            type="date" 
                                            id="eduend" 
                                            value={edu.endDate} 
                                            onChange={(e) => updateNestedState("education", index, "endDate", e.target.value)}
                                            className={inputClasses}
                                        />
                                    </div>
                                    <DeleteButton onDelete={() => handleDeletion("education", index)} additionalClasses="h-full mt-6"/>
                                </div>
                            </div>
                        ))
                    }
                </CollapsibleContainer>

                <CollapsibleContainer title="Your Courses & Training" useAddBtn={true} callback={() => handleAdd("training", { title: "", institution: "", startDate: "", endDate: "", description: "" })}>
                    {/* Map through current courses data */}
                    {data.training
                        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                        .map((course, index) => (
                            <div id="training-entry" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">

                                <div className="grid grid-cols-1 sm:mb-0 sm:grid-cols-2 sm:gap-4">
                                    <div className="mb-6">
                                        <label htmlFor="course-title" className="block text-gray-700">Title:</label>
                                        <input 
                                            type="text" 
                                            id="course-title" 
                                            value={course.title} 
                                            onChange={(e) => updateNestedState("training", index, "title", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="course-institute" className="block text-gray-700">Institution:</label>
                                        <input 
                                            type="text" 
                                            id="course-institute" 
                                            value={course.institution} 
                                            onChange={(e) => updateNestedState("training", index, "institution", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>                                    
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                                    
                                    <div className="flex-1">
                                        <label htmlFor="course-start" className="block text-gray-700">Start Date:</label>
                                        <input 
                                            type="date" 
                                            id="course-start" 
                                            value={course.startDate} 
                                            onChange={(e) => updateNestedState("training", index, "startDate", e.target.value)}
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="course-end" className="block text-gray-700">End Date:</label>
                                        <input 
                                            type="date" 
                                            id="course-end" 
                                            value={course.endDate}
                                            onChange={(e) => updateNestedState("training", index, "endDate", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <DeleteButton onDelete={() => handleDeletion("training", index)} additionalClasses="h-full mt-6"/>
                                </div>

                                <label htmlFor="course-description" className="block text-gray-700 mt-6">Description:</label>
                                <textarea 
                                    id="course-description" 
                                    value={course.description}
                                    onChange={(e) => updateNestedState("training", index, "description", e.target.value)}
                                    className={inputClasses} 
                                    rows="3">
                                </textarea>

                            </div>
                        ))
                    }                     
                </CollapsibleContainer>

                <CollapsibleContainer title="Employment History" useAddBtn={true} callback={() => handleAdd("experience", { title: "", company: "", location: "", startDate: "", endDate: "", description: "" })}>
                    {/* Map through current employment data */}
                    {data.experience
                        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                        .map((job, index) => (
                            <div id="job-entry" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">

                                <div className="grid grid-cols-1 sm:mb-0 sm:grid-cols-2 sm:gap-4">
                                    <div className="mb-6">
                                        <label htmlFor="job-title" className="block text-gray-700">Title:</label>
                                        <input 
                                            type="text" 
                                            id="job-title" 
                                            value={job.title}
                                            onChange={(e) => updateNestedState("experience", index, "title", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="company" className="block text-gray-700">Company:</label>
                                        <input 
                                            type="text" 
                                            id="company" 
                                            value={job.company}
                                            onChange={(e) => updateNestedState("experience", index, "company", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>                                    
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                                    
                                    <div className="flex-1">
                                        <label htmlFor="job-location" className="block text-gray-700">Location:</label>
                                        <input 
                                            type="text" 
                                            id="job-location" 
                                            value={job.location}
                                            onChange={(e) => updateNestedState("experience", index, "location", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="job-start" className="block text-gray-700">Start Date:</label>
                                        <input 
                                            type="date" 
                                            id="job-start" 
                                            value={job.startDate}
                                            onChange={(e) => updateNestedState("experience", index, "startDate", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="job-end" className="block text-gray-700">End Date:</label>
                                        <input 
                                            type="date" 
                                            id="job-end" 
                                            value={job.endDate}
                                            onChange={(e) => updateNestedState("experience", index, "endDate", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <DeleteButton onDelete={() => handleDeletion("experience", index)} additionalClasses="h-full mt-6" />
                                </div>

                                <label htmlFor="course-description" className="block text-gray-700 mt-6">Description:</label>
                                <textarea 
                                    id="course-description" 
                                    value={job.description}
                                    onChange={(e) => updateNestedState("experience", index, "description", e.target.value)}
                                    className={`${inputClasses} min-h-[16rem] sm:min-h-[10rem]`}
                                ></textarea>
                                <p className="text-gray-400 text-sm">Sentences will be automatically formatted as bullet points.</p>
                            </div>
                        ))
                    }
                </CollapsibleContainer>

                <CollapsibleContainer title="Projects & Portfolio" useAddBtn={true} callback={() => handleAdd("projects", { title: "", url: "", skills: [], description: "" })}>
                    {/* Map through current projects data */}
                    {data.projects
                        .map((project, index) => (
                            <div id="project-entry" key={index} className="mb-4 w-full bg-white p-5 rounded-lg shadow-md border border-gray-300">
                                
                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                                    <div className="flex-1">
                                        <label htmlFor="project-title" className="block text-gray-700">Title:</label>
                                        <input 
                                            type="text" 
                                            id="project-title" 
                                            value={project.title} 
                                            onChange={(e) => updateNestedState("projects", index, "title", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="project-url" className="block text-gray-700">URL:</label>
                                        <input 
                                            type="text" 
                                            id="project-url" 
                                            value={project.url} 
                                            onChange={(e) => updateNestedState("projects", index, "url", e.target.value)}
                                            className={inputClasses} 
                                        />
                                    </div> 
                                    <DeleteButton onDelete={() => handleDeletion("projects", index)} additionalClasses="h-full mt-6"/>
                                </div>  

                                <label htmlFor="project-skills" className="block text-gray-700 mt-6">Technologies used:</label>
                                <TaggingHandler 
                                    tags={project.skills} 
                                    onTagUpdate={(updatedTags) => updateNestedState("projects", index, "skills", updatedTags)}
                                />
                                
                                <label htmlFor="project-description" className="block text-gray-700 mt-6">Description:</label>
                                <textarea 
                                    id="project-description" 
                                    value={project.description}
                                    onChange={(e) => updateNestedState("projects", index, "description", e.target.value)}
                                    className={inputClasses} 
                                    rows="3"
                                ></textarea>
                        
                            </div>
                    ))}               
                </CollapsibleContainer>

                <CollapsibleContainer title="Hobbies & Interests">
                    <label htmlFor="summary" className="hidden text-gray-700">Summary:</label>
                    <textarea 
                        id="summary" 
                        value={data.hobbies}
                        onChange={(e) => setData({ ...data, hobbies: e.target.value })} 
                        className={`${inputClasses} min-h-[26rem] sm:min-h-[16rem]`}
                    ></textarea>
                    <p className="text-gray-400 text-sm">Sentences will be automatically formatted as bullet points.</p>
                </CollapsibleContainer>

                {/* Submit button */}
                <button
                    type="button"
                    onClick={handleSave}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 cursor-pointer"
                >
                    Save Changes
                </button>
            </form>
        </main>
    );
}