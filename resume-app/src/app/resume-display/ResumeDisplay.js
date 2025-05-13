"use client";

import ContactInformation from "@/components/ContactInformation";
import Education from "@/components/Education";
import Socials from "@/components/Socials";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import CoursesAndTraining from "@/components/CoursesAndTraining";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";

// Template styles
const templates = {
  modern: {
    container: "font-sans",
    header: "flex flex-col md:flex-row gap-6 mb-8",
    contactContainer: "flex-grow",
    socialsContainer: "flex-shrink-0 min-w-[140px]",
    sectionTitle: "text-lg font-bold text-blue-600 border-b border-blue-200 pb-2 mb-4",
    section: "mb-6",
    summary: "mb-6 text-gray-700 leading-relaxed"
  },
  classic: {
    container: "font-serif",
    header: "mb-8",
    contactContainer: "mb-4 text-center",
    socialsContainer: "flex justify-center",
    sectionTitle: "text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-4",
    section: "mb-8",
    summary: "mb-8 text-gray-700 leading-relaxed italic"
  },
  creative: {
    container: "font-sans",
    header: "flex flex-col-reverse md:flex-row gap-6 mb-8 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg",
    contactContainer: "flex-grow",
    socialsContainer: "flex-shrink-0 min-w-[140px]",
    sectionTitle: "text-lg font-bold text-blue-600 mb-4 flex items-center gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-blue-600 before:rounded-full",
    section: "mb-6 p-4 bg-white rounded-lg shadow-sm",
    summary: "mb-6 text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg italic"
  },
  minimal: {
    container: "font-sans text-gray-800",
    header: "mb-8",
    contactContainer: "flex-grow",
    socialsContainer: "flex-shrink-0 min-w-[140px]",
    sectionTitle: "text-lg font-bold text-gray-800 uppercase tracking-wider mb-4",
    section: "mb-8",
    summary: "mb-8 text-gray-700 leading-relaxed"
  }
};

export default function DisplayResume({ data, template = "modern" }) {
  // Get the selected template styles or default to modern
  const style = templates[template] || templates.modern;

  return (
    <div className={style.container}>
      {/* Header with Contact Info and Socials */}
      <header className={style.header}>
        <ContactInformation className={style.contactContainer} data={data} template={template} />
        <Socials className={style.socialsContainer} data={data} template={template} />
      </header>

      {/* Summary */}
      {data.summary && (
        <section className={style.summary}>
          {data.summary}
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className={style.section}>
          <h2 className={style.sectionTitle}>
            {template === 'creative' && <i className="bi bi-stars"></i>}
            Skills
          </h2>
          <Skills data={data} template={template} />
        </section>
      )}

      {/* Work Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className={style.section}>
          <h2 className={style.sectionTitle}>
            {template === 'creative' && <i className="bi bi-briefcase"></i>}
            Professional Experience
          </h2>
          <WorkExperience data={data} template={template} />
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className={style.section}>
          <h2 className={style.sectionTitle}>
            {template === 'creative' && <i className="bi bi-code-square"></i>}
            Projects
          </h2>
          <Projects data={data} template={template} />
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className={style.section}>
          <h2 className={style.sectionTitle}>
            {template === 'creative' && <i className="bi bi-mortarboard"></i>}
            Education
          </h2>
          <Education data={data} template={template} />
        </section>
      )}

      {/* Training & Courses */}
      {data.training && data.training.length > 0 && (
        <section className={style.section}>
          <h2 className={style.sectionTitle}>
            {template === 'creative' && <i className="bi bi-journal-bookmark"></i>}
            Courses & Certifications
          </h2>
          <CoursesAndTraining data={data} template={template} />
        </section>
      )}

      {/* Hobbies & Interests */}
      {data.hobbies && (
        <section className={style.section}>
          <h2 className={style.sectionTitle}>
            {template === 'creative' && <i className="bi bi-bookmark-heart"></i>}
            Interests
          </h2>
          <Hobbies data={data} template={template} />
        </section>
      )}
    </div>
  );
}