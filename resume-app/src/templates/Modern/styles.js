export const styles = {
  container: "font-sans",
  header: "flex flex-col md:flex-row gap-6 mb-8",
  contactContainer: "flex-grow",
  socialsContainer: "flex-shrink-0 min-w-[140px]",
  sectionTitle: "text-lg font-bold text-blue-600 border-b border-blue-200 pb-2 mb-4",
  section: "mb-6",
  summary: "mb-6 text-gray-700 leading-relaxed",
  
  // Component-specific styles

  contactInformation: {
    container: "font-sans",
    name: "text-4xl font-bold text-gray-900 mb-1",
    title: "text-lg text-blue-600 mb-3",
    contactsContainer: "text-gray-700 space-y-1",
    contactItem: "flex items-center gap-2",
    icon: "text-blue-500",
    showIcons: true
  },
  
  skills: {
    container: "grid grid-cols-2 sm:grid-cols-3 gap-4",
    skillGroup: "",
    groupName: "font-semibold text-gray-800 mb-2",
    skillsList: "flex flex-wrap gap-2",
    skill: "px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
  },
  
  experience: {
    container: "space-y-6",
    jobEntry: "mb-4",
    jobHeader: "flex flex-wrap justify-between items-start",
    jobTitle: "text-lg font-semibold text-gray-800",
    company: "text-gray-700",
    dateLocation: "text-sm text-gray-600 mt-1",
    description: "mt-2 text-gray-700"
  },
  
  // Add other styles later
};