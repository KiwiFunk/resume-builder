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

export default function Meridian({ data }) {
  return (
    <div className={styles.container}>
      {/* Left sidebar */}
      <div className={styles.sidebar}>
        {/* Profile photo area (placeholder for future feature) */}
        <div className={styles.photoPlaceholder}>
          <div className={styles.photoInitials}>
            {data.name ? data.name.charAt(0) : ""}
          </div>
        </div>
        
        {/* Name and title */}
        <div className={styles.nameSection}>
          <ContactInformation data={data} styles={styles.contactInformation} />
        </div>
        
        {/* Contact details */}
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarSectionTitle}>Contact</h3>
          <div className={styles.contactDetails}>
            {data.email && (
              <div className={styles.contactItem}>
                <i className="bi bi-envelope"></i>
                <span>{data.email}</span>
              </div>
            )}
            {data.phone && (
              <div className={styles.contactItem}>
                <i className="bi bi-telephone"></i>
                <span>{data.phone}</span>
              </div>
            )}
            {data.location && (
              <div className={styles.contactItem}>
                <i className="bi bi-geo-alt"></i>
                <span>{data.location}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Social links */}
        {data.socials && data.socials.length > 0 && (
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarSectionTitle}>Connect</h3>
            <Socials data={data} styles={styles.socials} />
          </div>
        )}
        
        {/* Skills section */}
        {data.skills && data.skills.length > 0 && (
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarSectionTitle}>Expertise</h3>
            <Skills data={data} styles={styles.skills} />
          </div>
        )}
        
        {/* Education section */}
        {data.education && data.education.length > 0 && (
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarSectionTitle}>Education</h3>
            <Education data={data} styles={styles.education} />
          </div>
        )}
        
        {/* Hobbies section */}
        {data.hobbies && (
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarSectionTitle}>Interests</h3>
            <Hobbies data={data} styles={styles.hobbies} />
          </div>
        )}
      </div>

      {/* Main content area */}
      <div className={styles.mainContent}>
        {/* Summary banner */}
        {data.summary && (
          <div className={styles.summaryBanner}>
            <div className={styles.summarySectionTitle}>
              <i className={`bi bi-person-vcard ${styles.icon}`}></i>
              <h2>Profile</h2>
            </div>
            <p className={styles.summaryText}>{data.summary}</p>
          </div>
        )}
        
        {/* Experience section */}
        {data.experience && data.experience.length > 0 && (
          <div className={styles.contentSection}>
            <div className={styles.sectionTitleWrapper}>
              <i className={`bi bi-briefcase ${styles.icon}`}></i>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            <WorkExperience data={data} styles={styles.experience} />
          </div>
        )}
        
        {/* Projects section */}
        {data.projects && data.projects.length > 0 && (
          <div className={styles.contentSection}>
            <div className={styles.sectionTitleWrapper}>
              <i className={`bi bi-layers ${styles.icon}`}></i>
              <h2 className={styles.sectionTitle}>Projects</h2>
            </div>
            <Projects data={data} styles={styles.projects} />
          </div>
        )}
        
        {/* Training & Courses section */}
        {data.training && data.training.length > 0 && (
          <div className={styles.contentSection}>
            <div className={styles.sectionTitleWrapper}>
              <i className={`bi bi-journal-code ${styles.icon}`}></i>
              <h2 className={styles.sectionTitle}>Professional Development</h2>
            </div>
            <CoursesAndTraining data={data} styles={styles.training} />
          </div>
        )}
      </div>
    </div>
  );
}