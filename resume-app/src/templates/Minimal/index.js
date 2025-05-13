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

export default function Minimal({ data }) {
  return (
    <div className={styles.container}>
      {/* Clean, minimal header */}
      <header className={styles.header}>
        <ContactInformation className={styles.contactContainer} data={data} />
        <Socials className={styles.socialsContainer} data={data} />
      </header>
      
      {/* Main content with ample whitespace */}
      <div className={styles.content}>
        {/* Summary */}
        {data.summary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Profile</h2>
            <p className={styles.summaryText}>{data.summary}</p>
          </section>
        )}
        
        {/* Work Experience - given prominence */}
        {data.experience && data.experience.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <WorkExperience data={data} styles={styles.experience} />
          </section>
        )}
        
        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <Education data={data} styles={styles.education} />
          </section>
        )}
        
        {/* Skills - horizontal layout */}
        {data.skills && data.skills.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <Skills data={data} styles={styles.skills} />
          </section>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <Projects data={data} styles={styles.projects} />
          </section>
        )}

        {/* Training & Courses */}
        {data.training && data.training.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Training</h2>
            <CoursesAndTraining data={data} styles={styles.training} />
          </section>
        )}
        
        {/* Hobbies & Interests - kept simple */}
        {data.hobbies && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Interests</h2>
            <Hobbies data={data} styles={styles.hobbies} />
          </section>
        )}
      </div>
    </div>
  );
}