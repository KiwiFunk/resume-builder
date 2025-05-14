export const styles = {
  container: "font-sans bg-white",
  
  // Header with gradient background
  header: "bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl mb-8 shadow-lg text-white relative overflow-hidden",
  headerContent: "flex flex-col md:flex-row gap-6 items-start relative z-10",
  headerMain: "flex-grow",
  headerSide: "md:max-w-[240px] w-full",
  socialsWrapper: "p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 border-opacity-20",
  socialsHeading: "text-white text-sm font-medium uppercase tracking-wider mb-3 opacity-90",
  contactContainer: "mb-2",

  mainContent: "space-y-8",
  
  // Section styling with icons
  section: "bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500 relative",
  sectionTitle: "text-xl font-bold text-gray-800 mb-4 pl-9",
  sectionIcon: "absolute left-4 top-6 h-6 w-6 flex items-center justify-center text-blue-500",
  
  // Summary styling
  summarySection: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md relative",
  summary: "text-gray-700 leading-relaxed pl-9",
  
  // Component-specific styles for Creative template
  contactInformation: {
    container: "font-sans",
    name: "text-4xl font-bold text-white mb-1",
    title: "text-lg text-blue-100 mb-4 font-medium",
    contactsContainer: "text-white space-y-2",
    contactItem: "flex items-center gap-2",
    icon: "text-blue-200",
    showIcons: true
  },

  socials: {
    container: "flex flex-wrap gap-2",
    socialItem: "mb-2 w-full",
    iconWrapper: "w-4 h-4 inline-block mr-2 bg-[#e0e7ff]", 
    link: "flex items-center w-full p-2 rounded-md bg-white/10 border border-white/20 transition-colors",
    linkText: "text-white text-sm"
  },
  
  skills: {
    container: "grid grid-cols-2 sm:grid-cols-3 gap-4",
    skillGroup: "bg-white p-4 rounded-lg shadow-sm",
    groupName: "font-semibold text-blue-600 mb-3 border-b border-blue-100 pb-1",
    skillsList: "flex flex-wrap gap-2",
    skill: "px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full"
  },
  
  experience: {
  container: "",
  jobEntry: "relative pl-6 pb-6 border-l-2 border-blue-200 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-blue-500 before:rounded-full before:left-[-9px] last:border-l-0 last:ml-0.5",
  jobHeader: "flex flex-col",
  jobTitle: "text-lg font-bold text-gray-800",
  company: "text-blue-600 font-medium",
  location: "text-gray-600 text-sm",
  dateLocation: "text-sm text-gray-600 mt-1",
  description: "mt-3 text-gray-700",
  dateRight: false // Put dates inline for timeline look
},
  
  education: {
    container: "space-y-4",
    entry: "bg-white rounded-lg p-4 shadow-sm",
    degree: "font-bold text-gray-800",
    institution: "text-blue-600",
    dateLocation: "text-sm text-gray-600 mt-1",
  },
  
  projects: {
    container: "grid grid-cols-1 md:grid-cols-2 gap-4",
    project: "bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",
    title: "font-bold text-gray-800",
    skills: "flex flex-wrap gap-1 mt-2",
    skill: "text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded",
    description: "text-gray-700 mt-2 text-sm",
  },
  
  training: {
    container: "space-y-4",
    entry: "bg-white rounded-lg p-4 shadow-sm",
    course: "font-medium text-gray-800",
    institution: "text-blue-600 text-sm",
    date: "text-xs text-gray-500 mt-1",
    description: "text-gray-700 mt-2 text-sm",
  },
  
  hobbies: {
    container: "text-gray-700 pl-9",
  }
};