import React from 'react';

// Default styles used as fallback
const defaultStyles = {
  container: "space-y-6",
  project: "mb-6",
  title: "font-semibold text-gray-800",
  urlLink: "text-blue-600 hover:underline ml-2 text-sm",
  skills: "flex flex-wrap gap-2 mt-2",
  skill: "text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded",
  description: "text-gray-700 mt-2"
};

export default function Projects({ data, styles = {} }) {
  // Merge provided styles with defaults
  const s = {
    container: styles.container || defaultStyles.container,
    project: styles.project || defaultStyles.project,
    title: styles.title || defaultStyles.title,
    urlLink: styles.urlLink || defaultStyles.urlLink,
    skills: styles.skills || defaultStyles.skills,
    skill: styles.skill || defaultStyles.skill,
    description: styles.description || defaultStyles.description
  };

  if (!data.projects || data.projects.length === 0) {
    return null;
  }

  return (
    <div className={s.container}>
      {data.projects.map((project, index) => (
        <div key={index} className={s.project}>
          <div className="flex items-center">
            <h3 className={s.title}>{project.title}</h3>
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={s.urlLink}
              >
                <i className="bi bi-link-45deg mr-1"></i>
                Link
              </a>
            )}
          </div>
          
          {project.skills && project.skills.length > 0 && (
            <div className={s.skills}>
              {project.skills.map((skill, i) => (
                <span key={i} className={s.skill}>{skill}</span>
              ))}
            </div>
          )}
          
          {project.description && (
            <p className={s.description}>{project.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}