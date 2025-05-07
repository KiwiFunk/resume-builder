import ContactInformation from "@/components/ContactInformation";
import Education from "@/components/Education";
import Socials from "@/components/Socials";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import CoursesAndTraining from "@/components/CoursesAndTraining";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";

import data from "@/UserData";  // Importing data from UserData.js

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold">Resume Builder</h1>
      <p className="text-lg text-gray-600 mt-2">Create and customize your resume effortlessly.</p>

      <section>
        <div className="w-full flex flex-row gap-4 max-w-4xl">
          <ContactInformation className="flex-grow" data={data} />
          <Socials className="flex-shrink" data={data} />
        </div>

        {/* Resume Summary Paragraph */}
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
          <p className="text-gray-700">{data.summary}</p>
        </div>
      </section>

      <Skills data={data} />

      <Education data={data}/>
      <CoursesAndTraining data={data}/>
      <Projects data={data}/>
      
      <WorkExperience data={data}/>
      <Hobbies data={data}/>

      {/* Footer */}
      <footer className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
        <p className="text-gray-700">© 2025 Resume Builder. All rights reserved.</p>
      </footer>
    </main>
  );
}