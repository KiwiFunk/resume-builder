import React from 'react';
import { formatTextToPoints } from "../utils/formatText";

// Default styles used as fallback
const defaultStyles = {
  container: "text-gray-700",
  hobbyItem: "mb-1",
  prefixItems: true
};

export default function Hobbies({ data, className = "", styles = {} }) {
  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  
  if (!data.hobbies || data.hobbies.trim() === "") {
    return null;
  }

  // Format hobbies text into bullet points if needed
  const formattedHobbies = formatTextToPoints(data.hobbies, mergedStyles.prefixItems);
  
  return (
    <div className={`${mergedStyles.container} ${className}`}>
      {formattedHobbies.map((hobby, index) => (
        <p key={index} className={mergedStyles.hobbyItem}>
          {hobby}
        </p>
      ))}
    </div>
  );
}