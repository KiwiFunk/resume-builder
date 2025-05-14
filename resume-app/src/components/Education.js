import React from 'react';
import { formatDate } from '../utils/formatDate';

// Default styles used as fallback
const defaultStyles = {
  container: "space-y-6",
  entry: "mb-4",
  entryHeader: "flex flex-wrap justify-between items-start",
  degree: "font-bold text-gray-800",
  institution: "text-gray-700",
  dateLocation: "text-sm text-gray-600 mt-1",
  description: "mt-2 text-gray-700",
  dateRight: true, 
  dateFormatting: {}
};

export default function Education({ data, styles = {} }) {
  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  
  // Determine whether to show dates on the right or inline
  const datesOnRight = styles.dateRight !== false;

  if (!data.education || data.education.length === 0) {
    return null;
  }

  return (
    <div className={mergedStyles.container}>
      {data.education
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        .map((edu, index) => (
          <div key={index} className={mergedStyles.entry}>
            {datesOnRight ? (
              // Layout with dates on the right
              <div className={mergedStyles.entryHeader}>
                <div>
                  <h3 className={mergedStyles.degree}>{edu.degree}</h3>
                  <p className={mergedStyles.institution}>{edu.institution}</p>
                  {edu.location && <p className={mergedStyles.location}>{edu.location}</p>}
                </div>
                <div className={mergedStyles.dateLocation}>
                  {formatDate(edu.startDate, mergedStyles.dateFormatting)} - {formatDate(edu.endDate, mergedStyles.dateFormatting)}
                </div>
              </div>
            ) : (
              // Layout with dates inline
              <div>
                <h3 className={mergedStyles.degree}>{edu.degree}</h3>
                <p className={mergedStyles.institution}>{edu.institution}</p>
                {edu.location && <p className={mergedStyles.location}>{edu.location}</p>}
                <p className={mergedStyles.dateLocation}>
                  {formatDate(edu.startDate, mergedStyles.dateFormatting)} - {formatDate(edu.endDate, mergedStyles.dateFormatting)}
                </p>
              </div>
            )}

            {edu.description && (
              <div className={mergedStyles.description}>
                <p>{edu.description}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}