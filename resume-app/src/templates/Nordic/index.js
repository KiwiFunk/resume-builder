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

export default function Nordic({ data }) {
  if (!data) return null;

  return (
    <div className={styles.container}>
      {/* Header section with name and contact */}
      <header className={styles.header}>
        <div className={styles.headerMain}>
          <ContactInformation data={data} styles={styles.contactInformation} />
          
          {data.summary && (
            <div className={styles.summary}>
              <p className={styles.summaryText}>{data.summary}</p>
            </div>
          )}
        </div>
        
        <div className={styles.headerAccent}></div>
        
        <div className={styles.headerSide}>
          {data.socials && data.socials.length > 0 && (
            <Socials data={data} styles={styles.socials} />
          )}
        </div>
      </header>

      {/* Main content in two columns */}
      <div className={styles.mainContent}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          {data.skills && data.skills.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Expertise</h2>
              <Skills data={data} styles={styles.skills} />
            </section>
          )}
          
          {data.education && data.education.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <Education data={data} styles={styles.education} />
            </section>
          )}
          
          {data.training && data.training.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Training</h2>
              <CoursesAndTraining data={data} styles={styles.training} />
            </section>
          )}
          
          {data.hobbies && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Interests</h2>
              <Hobbies data={data} styles={styles.hobbies} />
            </section>
          )}
        </div>
        
        {/* Right column - experience and projects */}
        <div className={styles.rightColumn}>
          {data.experience && data.experience.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <WorkExperience data={data} styles={styles.experience} />
            </section>
          )}
          
          {data.projects && data.projects.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              <Projects data={data} styles={styles.projects} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}