export const styles = {
  container: "font-serif",
  header: "text-center mb-6",
  contactContainer: "mb-2",
  divider: "h-0.5 bg-gray-300 w-1/3 mx-auto my-4",
  socialsContainer: "flex justify-center mb-6 gap-4",
  summary: "text-center mb-6",
  summaryText: "text-gray-700 leading-relaxed italic",

  twoColumnLayout: "flex flex-col md:flex-row gap-8",
  leftColumn: "flex-1 space-y-6",
  rightColumn: "flex-[2] space-y-6",

  sectionTitle: "text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-4",
  section: "mb-8",

  // Component-specific styles for Classic 
  contactInformation: {
    container: "font-serif text-center",
    name: "text-4xl font-bold text-gray-900 mb-2",
    title: "text-xl text-gray-700 mb-4 font-medium",
    contactsContainer: "text-gray-700 flex flex-wrap justify-center gap-4",
    contactItem: "text-sm",
    icon: "hidden",
    showIcons: false // Classic style typically doesn't use icons
  },

  socials: {
    container: "flex justify-center gap-4 mt-2",
    socialItem: "inline-block px-2",
    iconWrapper: "w-4 h-4 bg-gray-700 mr-1 inline-block",
    link: "flex items-center text-gray-700 hover:text-gray-900",
    linkText: "text-gray-700 text-sm border-b border-gray-300 hover:border-gray-900",
    showIcons: true // Classic style typically shows icons
  },

  skills: {
    container: "space-y-4",
    skillGroup: "mb-5",
    groupName: "font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3",
    skillsList: "flex flex-row gap-x-3 gap-y-2",
    skill: "text-gray-700 font-normal text-sm" // Simplified without bullets
  },

  experience: {
    container: "space-y-4",
    jobEntry: "mb-5",
    jobHeader: "flex flex-wrap justify-between items-start border-b border-gray-200 pb-2",
    jobTitle: "font-bold text-gray-900",
    company: "text-gray-700 italic",
    location: "text-gray-700 text-sm",
    dateLocation: "text-sm text-gray-600",
    description: "mt-3 text-gray-700",
    dateRight: true // Traditional right-aligned dates
  },

  education: {
    container: "space-y-5",
    entry: "mb-4",
    entryHeader: "flex flex-wrap justify-between items-start border-b border-gray-200 pb-1",
    degree: "font-bold text-gray-900",
    institution: "text-gray-800 italic",
    location: "text-gray-700 text-sm",
    dateLocation: "text-sm text-gray-600 font-medium",
    description: "mt-2 text-gray-700",
    dateRight: true // Traditional right-aligned dates
  },

  projects: {
    container: "space-y-5",
    project: "mb-4",
    projectHeader: "flex flex-wrap justify-between items-start border-b border-gray-200 pb-1",
    title: "font-bold text-gray-900",
    skills: "flex flex-wrap gap-1 mt-2 mb-3",
    skill: "text-xs text-gray-600 italic mr-2",
    description: "mt-2 text-gray-700",
    urlLink: "text-gray-600 italic text-sm hover:text-gray-900 border-b border-gray-300 hover:border-gray-900"
  },

  training: {
    container: "space-y-4",
    entry: "mb-4",
    entryHeader: "flex flex-wrap justify-between items-start border-b border-gray-200 pb-1",
    course: "font-bold text-gray-900",
    institution: "text-gray-700 italic text-sm",
    date: "text-sm text-gray-600 font-medium",
    description: "mt-2 text-gray-700 text-sm",
    dateRight: true 
  },

  hobbies: {
    container: "text-gray-700",
    hobbyItem: "relative pl-3 mb-2 before:content-['•'] before:absolute before:left-0 before:text-gray-500",
    prefixItems: false
  },
};