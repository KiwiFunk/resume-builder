import React from 'react';
import { formatDate } from '../utils/formatDate';

// Default styles used as fallback
const defaultStyles = {
  container: "space-y-4",
  entry: "mb-4",
  entryHeader: "flex flex-wrap justify-between items-start",
  course: "font-semibold text-gray-800",
  institution: "text-gray-700 text-sm",
  date: "text-sm text-gray-600 mt-1",
  description: "mt-2 text-gray-700 text-sm",
  dateRight: true,
  dateFormatting: {}
};

export default function CoursesAndTraining({ data, className = "", styles = {} }) {
  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  
  // Determine whether to show dates on the right or inline
  const datesOnRight = styles.dateRight !== false;
  
  if (!data.training || data.training.length === 0) {
    return null;
  }

  return (
    <div className={`${mergedStyles.container} ${className}`}>
      {data.training
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        .map((course, index) => (
          <div key={index} className={mergedStyles.entry}>
            {datesOnRight ? (
              // Layout with dates on the right
              <div className={mergedStyles.entryHeader}>
                <div>
                  <h3 className={mergedStyles.course}>{course.title}</h3>
                  <p className={mergedStyles.institution}>{course.institution}</p>
                </div>
                <div className={mergedStyles.date}>
                  {formatDate(course.startDate, mergedStyles.dateFormatting)} - {formatDate(course.endDate, mergedStyles.dateFormatting)}
                </div>
              </div>
            ) : (
              // Layout with dates inline
              <div>
                <h3 className={mergedStyles.course}>{course.title}</h3>
                <p className={mergedStyles.institution}>{course.institution}</p>
                <p className={mergedStyles.date}>
                  {formatDate(course.startDate, mergedStyles.dateFormatting)} - {formatDate(course.endDate, mergedStyles.dateFormatting)}
                </p>
              </div>
            )}
            
            {course.description && (
              <div className={mergedStyles.description}>{course.description}</div>
            )}
          </div>
        ))}
    </div>
  );
}