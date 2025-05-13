import React from 'react';
import ContactInformation from "@/components/ContactInformation";
import Education from "@/components/Education";
import Socials from "@/components/Socials";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import CoursesAndTraining from "@/components/CoursesAndTraining";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import { styles } from './styles';

export default function Creative({ data }) {
  return (
    <div className={styles.container}>
      {/* Colorful header section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <ContactInformation className={styles.contactContainer} data={data} />
          <div className={styles.socialWrapper}>
            <Socials className={styles.socialsContainer} data={data} />
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        {/* Summary with stylized container */}
        {data.summary && (
          <section className={styles.summarySection}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-chat-quote-fill"></i>
            </div>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.summary}>
              <p>{data.summary}</p>
            </div>
          </section>
        )}

        {/* Skills with visual flair */}
        {data.skills && data.skills.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-stars"></i>
            </div>
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
            <Skills data={data} styles={styles.skills} />
          </section>
        )}

        {/* Work Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-briefcase-fill"></i>
            </div>
            <h2 className={styles.sectionTitle}>Professional Journey</h2>
            <WorkExperience data={data} styles={styles.experience} />
          </section>
        )}

        {/* Projects with card layout */}
        {data.projects && data.projects.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-code-square"></i>
            </div>
            <h2 className={styles.sectionTitle}>Projects & Portfolio</h2>
            <Projects data={data} styles={styles.projects} />
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <h2 className={styles.sectionTitle}>Education</h2>
            <Education data={data} styles={styles.education} />
          </section>
        )}

        {/* Training & Courses */}
        {data.training && data.training.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-journal-bookmark-fill"></i>
            </div>
            <h2 className={styles.sectionTitle}>Courses & Certifications</h2>
            <CoursesAndTraining data={data} styles={styles.training} />
          </section>
        )}

        {/* Hobbies & Interests */}
        {data.hobbies && (
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <i className="bi bi-heart-fill"></i>
            </div>
            <h2 className={styles.sectionTitle}>Passions & Interests</h2>
            <Hobbies data={data} styles={styles.hobbies} />
          </section>
        )}
      </div>
    </div>
  );
}