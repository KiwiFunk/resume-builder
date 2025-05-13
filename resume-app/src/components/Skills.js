import React from 'react';

// Default styles if none provided
const defaultStyles = {
  container: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  skillGroup: "mb-4",
  groupName: "font-semibold text-gray-800 mb-2", 
  skillsList: "flex flex-wrap gap-2",
  skill: "px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded"
};

export default function Skills({ data, styles = {} }) {
  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  
  if (!data.skills || data.skills.length === 0) {
    return null;
  }

  return (
    <div className={mergedStyles.container}>
      {data.skills.map((group, index) => (
        <div key={index} className={mergedStyles.skillGroup}>
          {group.groupName && (
            <h3 className={mergedStyles.groupName}>{group.groupName}</h3>
          )}
          <div className={mergedStyles.skillsList}>
            {group.items.map((skill, i) => (
              <span key={i} className={mergedStyles.skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}