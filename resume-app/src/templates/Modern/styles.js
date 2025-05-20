export const styles = {
  container: "font-sans",
  header: "flex flex-col md:flex-row gap-6 mb-8",
  contactContainer: "flex-grow",
  socialsContainer: "flex-shrink-0 min-w-[140px]",
  sectionTitle: "text-lg font-bold text-[color:var(--accent)] border-b border-blue-200 pb-2 mb-4",
  section: "mb-6",
  summary: "mb-6 text-gray-700 leading-relaxed",
  
  // Component-specific styles

  contactInformation: {
    container: "font-sans",
    name: "text-4xl font-bold text-gray-900 mb-1",
    title: "text-lg text-[color:var(--accent)] mb-3",
    contactsContainer: "text-gray-700 space-y-1",
    contactItem: "flex items-center gap-2",
    icon: "text-[color:var(--accent)]",
    showIcons: true
  },

  socials: {
  container: "flex flex-col gap-2 mt-2",
  socialItem: "flex items-center",
  iconWrapper: "w-5 h-5 bg-[color:var(--accent)]",
  link: "flex items-center gap-2 hover:text-blue-600 transition-colors",
  linkText: "text-gray-700 text-sm",
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
    jobEntry: "mb-6",
    jobHeader: "flex flex-wrap justify-between items-start",
    jobTitle: "text-lg font-semibold text-gray-800",
    company: "text-gray-700",
    location: "text-gray-600 text-sm",
    dateLocation: "text-sm text-gray-500 mt-1",
    description: "mt-3 text-gray-700",
    dateRight: true // Keep dates on right
  },

  education: {
    container: "space-y-6",
    entry: "mb-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors",
    entryHeader: "flex flex-wrap justify-between items-start",
    degree: "font-semibold text-gray-900",
    institution: "text-blue-600",
    location: "text-gray-700 text-sm",
    dateLocation: "text-xs text-gray-500 bg-gray-200/70 px-2 py-1 rounded-full",
    description: "mt-2 text-gray-700",
    dateRight: true // Keep dates on right
  },

  training: {
    container: "space-y-6",
    entry: "mb-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors",
    entryHeader: "flex flex-wrap justify-between items-start",
    course: "font-semibold text-gray-900",
    institution: "text-blue-600 text-sm",
    date: "text-xs text-gray-500 bg-gray-200/70 px-2 py-1 rounded-full",
    description: "mt-2 text-gray-700 text-sm",
    dateRight: true // Modern style with aligned dates
  },
    
  hobbies: {
    container: "flex flex-wrap gap-2",
    hobbyItem: "bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
  },
};