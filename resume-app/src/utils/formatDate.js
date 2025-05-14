/**
 * Formats a date string into a consistent format
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export default function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
};
