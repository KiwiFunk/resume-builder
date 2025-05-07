import data from "@/UserData";  // Importing data from UserData.js
import DisplayResume from "./ResumeDisplay";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold">Resume Builder</h1>
      <p className="text-lg text-gray-600 mt-2">Create and customize your resume effortlessly.</p>

      <DisplayResume data={data} />
      
    </main>
  );
}