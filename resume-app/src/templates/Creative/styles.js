export const styles = {
  container: "font-sans bg-white",
  
  // Header with gradient background using CSS variables
  header: "bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-dark,_#4338ca)] p-6 rounded-xl mb-8 shadow-lg text-white relative overflow-hidden",
  headerContent: "flex flex-col md:flex-row gap-6 items-start relative z-10",
  headerMain: "flex-grow",
  headerSide: "md:max-w-[240px] w-full",
  socialsWrapper: "p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 border-opacity-20",
  socialsHeading: "text-white text-sm font-medium uppercase tracking-wider mb-3 opacity-90",
  contactContainer: "mb-2",

  mainContent: "space-y-8",
  
  // Section styling with icons
  section: "bg-white rounded-xl p-6 shadow-md border-l-4 border-[color:var(--accent)] relative",
  sectionTitle: "text-xl font-bold text-gray-800 mb-4 pl-9",
  sectionIcon: "absolute left-4 top-6 h-6 w-6 flex items-center justify-center text-[color:var(--accent)]",
  
  // Summary styling
  summarySection: "bg-gradient-to-r from-[color:var(--accent-light)] to-[color:var(--accent-light)] rounded-xl p-6 shadow-md relative",
  summary: "text-gray-700 leading-relaxed pl-9",
  
  // Component-specific styles for Creative template
  contactInformation: {
    container: "font-sans",
    name: "text-4xl font-bold text-white mb-1",
    title: "text-lg text-white/90 mb-4 font-medium",
    contactsContainer: "text-white space-y-2",
    contactItem: "flex items-center gap-2",
    icon: "text-white/80",
    showIcons: true
  },

  socials: {
    container: "flex flex-wrap gap-2",
    socialItem: "mb-2 w-full",
    iconWrapper: "w-4 h-4 inline-block mr-2 bg-white/20", 
    link: "flex items-center w-full p-2 rounded-md bg-white/10 border border-white/20 transition-colors",
    linkText: "text-white text-sm"
  },
  
  skills: {
    container: "grid grid-cols-2 sm:grid-cols-3 gap-4",
    skillGroup: "bg-white p-4 rounded-lg shadow-sm",
    groupName: "font-semibold text-[color:var(--accent)] mb-3 border-b border-[color:var(--accent-light)] pb-1",
    skillsList: "flex flex-wrap gap-2",
    skill: "px-3 py-1 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-dark,_var(--accent))] text-white text-sm rounded-full"
  },
  
  experience: {
    container: "",
    jobEntry: "relative pl-6 pb-6 border-l-2 border-[color:var(--accent-light)] before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[color:var(--accent)] before:rounded-full before:left-[-9px] last:border-l-0 last:ml-0.5",
    jobHeader: "flex flex-col",
    jobTitle: "text-lg font-bold text-gray-800",
    company: "text-[color:var(--accent)] font-medium",
    location: "text-gray-600 text-sm",
    dateLocation: "text-sm text-gray-600 mt-1",
    description: "mt-3 text-gray-700",
    dateRight: false // Put dates inline for timeline look
  },
  
  education: {
    container: "space-y-4",
    entry: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-[color:var(--accent-light)]",
    entryHeader: "flex flex-col",
    degree: "font-bold text-gray-800",
    institution: "text-[color:var(--accent)]",
    location: "text-gray-600 text-sm",
    dateLocation: "text-sm text-gray-600 mt-1 italic",
    description: "mt-2 text-gray-700 text-sm",
    dateRight: false // Put dates inline for styled cards
  },
  
  projects: {
    container: "grid grid-cols-1 md:grid-cols-2 gap-4",
    project: "bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",
    title: "font-bold text-gray-800",
    skills: "flex flex-wrap gap-1 mt-2",
    skill: "text-xs px-2 py-1 bg-[color:var(--accent-light)] text-[color:var(--accent)] rounded",
    description: "text-gray-700 mt-2 text-sm",
  },
  
  training: {
    container: "space-y-4",
    entry: "bg-white rounded-lg p-4 shadow-sm",
    entryHeader: "flex flex-col",
    course: "font-medium text-gray-800",
    institution: "text-[color:var(--accent)] text-sm",
    date: "text-xs text-gray-500 mt-1",
    description: "text-gray-700 mt-2 text-sm",
    dateRight: false // Inline dates for card-based design
  },
  
  hobbies: {
    container: "flex flex-wrap gap-2",
    hobbyItem: "bg-[color:var(--accent-light)] text-[color:var(--accent)] px-3 py-1 rounded-full text-sm"
  },
};