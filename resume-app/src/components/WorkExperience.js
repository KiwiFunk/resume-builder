import React from 'react';
import { formatTextToPoints } from "../utils/formatText";
import { formatDate } from '../utils/formatDate';

// Default styles used as fallback
const defaultStyles = {
  container: "space-y-6",
  jobEntry: "mb-4",
  jobHeader: "flex flex-wrap justify-between items-start",
  jobTitle: "text-lg font-bold text-gray-800",
  company: "text-gray-700",
  location: "text-gray-700 text-sm",
  dateLocation: "text-sm text-gray-600 mt-1",
  description: "mt-3 text-gray-700",
  dateRight: true, 
  dateFormatting: {}
};

export default function WorkExperience({ data, styles = {} }) {
  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  
  // Determine whether to show dates on the right or inline
  const datesOnRight = styles.dateRight !== false;

  if (!data.experience || data.experience.length === 0) {
    return null;
  }

  return (
    <div className={mergedStyles.container}>
      {data.experience
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        .map((job, index) => (
          <div key={index} className={mergedStyles.jobEntry}>
            {datesOnRight ? (
              // Layout with dates on the right
              <div className={mergedStyles.jobHeader}>
                <div>
                  <h3 className={mergedStyles.jobTitle}>{job.title}</h3>
                  <p className={mergedStyles.company}>{job.company}</p>
                  <p className={mergedStyles.location}>{job.location}</p>
                </div>
                <div className={mergedStyles.dateLocation}>
                  {formatDate(job.startDate, mergedStyles.dateFormatting)} - {formatDate(job.endDate, mergedStyles.dateFormatting)}
                </div>
              </div>
            ) : (
              // Layout with dates inline
              <div>
                <h3 className={mergedStyles.jobTitle}>{job.title}</h3>
                <p className={mergedStyles.company}>{job.company}</p>
                <p className={mergedStyles.location}>{job.location}</p>
                <p className={mergedStyles.dateLocation}>
                  {formatDate(job.startDate, mergedStyles.dateFormatting)} - {formatDate(job.endDate, mergedStyles.dateFormatting)}
                </p>
              </div>
            )}

            <div className={mergedStyles.description}>
              {formatTextToPoints(job.description).map((point, pointIndex) => (
                <p key={pointIndex} className="mb-1">{point}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}