/**
 * Formats a date string into a consistent format
 * @param {string} dateString - The date string to format
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "short"
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  if (!dateString) return "Present";
  
  try {
    return new Date(dateString).toLocaleDateString("en-US", mergedOptions);
  } catch (error) {
    console.error("Date formatting error:", error);
    // Fallback to default options if supplied options are invalid
    return new Date(dateString).toLocaleDateString("en-US", defaultOptions); 
  }
}