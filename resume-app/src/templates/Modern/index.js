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

export default function Modern({ data }) {
  return (
    <div className={styles.container}>
      {/* Header with Contact Info and Socials */}
      <header className={styles.header}>
        <ContactInformation
          className={styles.contactContainer}
          data={data}
          styles={styles.contactInformation}
        />
        <Socials className={styles.socialsContainer} data={data} styles={styles.socials}/>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className={styles.summary}>
          <p>{data.summary}</p>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <Skills data={data} styles={styles.skills} />
        </section>
      )}

      {/* Work Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <WorkExperience data={data} styles={styles.experience} />
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <Projects data={data} styles={styles.projects} />
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <Education data={data} styles={styles.education} />
        </section>
      )}

      {/* Training & Courses */}
      {data.training && data.training.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Courses & Certifications</h2>
          <CoursesAndTraining data={data} styles={styles.training} />
        </section>
      )}

      {/* Hobbies & Interests */}
      {data.hobbies && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interests</h2>
          <Hobbies data={data} styles={styles.hobbies} />
        </section>
      )}
    </div>
  );
}