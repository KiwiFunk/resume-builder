import React from 'react';

// Default styles used as fallback
const defaultStyles = {
  container: "font-sans",
  name: "text-4xl font-bold text-gray-900 mb-1",
  title: "text-lg text-gray-700 mb-3",
  contactsContainer: "text-gray-700 space-y-1",
  contactItem: "flex items-center gap-2",
  icon: "text-gray-500",
  showIcons: true  // By default, show icons
};

export default function ContactInformation({ data, className = "", styles = {} }) {
  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  
  // Determine whether to show icons (default: true)
  const showIcons = styles.showIcons !== false;
  
  return (
    <div className={`${mergedStyles.container} ${className}`}>
      <h1 className={mergedStyles.name}>
        {data.name || "Your Name"}
      </h1>
      
      {data.title && (
        <h2 className={mergedStyles.title}>
          {data.title}
        </h2>
      )}
      
      <div className={mergedStyles.contactsContainer}>
        {data.email && (
          <p className={mergedStyles.contactItem}>
            {showIcons && <i className={`bi bi-envelope ${mergedStyles.icon}`}></i>}
            <span>{data.email}</span>
          </p>
        )}
        
        {data.phone && (
          <p className={mergedStyles.contactItem}>
            {showIcons && <i className={`bi bi-telephone ${mergedStyles.icon}`}></i>}
            <span>{data.phone}</span>
          </p>
        )}
        
        {data.location && (
          <p className={mergedStyles.contactItem}>
            {showIcons && <i className={`bi bi-geo-alt ${mergedStyles.icon}`}></i>}
            <span>{data.location}</span>
          </p>
        )}
      </div>
    </div>
  );
}