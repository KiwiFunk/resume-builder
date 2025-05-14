export const styles = {
  container: "font-sans text-gray-800 max-w-4xl mx-auto bg-white",
  header: "flex flex-col md:flex-row justify-between items-start mb-10 pt-6",
  headerSide: "flex-1 flex flex-col gap-5",
  headerDivider: "h-px bg-gray-200 w-full mt-2",
  contactContainer: "mb-2 md:mb-0",
  socialsContainer: "flex",

  content: "space-y-8",

  section: "mb-10",
  sectionTitle: "text-lg font-semibold uppercase tracking-widest mb-3.5 text-gray-700",
  summaryText: "text-gray-700 leading-relaxed text-sm font-light",
  

  // Component-specific styles for Minimal template
  contactInformation: {
    container: "font-sans",
    name: "text-3xl font-bold text-gray-900 mb-1 uppercase tracking-wide",
    title: "text-lg text-gray-600 mb-4",
    contactsContainer: "text-gray-700 flex flex-wrap gap-6 text-sm",
    contactItem: "inline-block",
    icon: "text-gray-400 text-xs mr-1",
    showIcons: true // Let's use tiny, subtle icons
  },

  socials: {
    container: "flex flex-wrap gap-x-6 gap-y-2 mt-2",
    socialItem: "inline-block",
    iconWrapper: "hidden",
    link: "text-sm uppercase tracking-wider text-gray-700 hover:text-gray-900",
    linkText: "text-gray-700 text-sm",
    showIcons: false // Minimal design without icons
  },

  skills: {
    container: "space-y-8",
    skillGroup: "mb-6",
    groupName: "font-normal text-gray-500 mb-4 uppercase text-xs tracking-wider",
    skillsList: "flex flex-wrap gap-x-6 gap-y-2",
    skill: "text-gray-700 text-sm mr-5 font-light relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full"
  },

  experience: {
    container: "space-y-8",
    jobEntry: "mb-6",
    jobHeader: "flex flex-col",
    jobTitle: "font-semibold text-gray-800 tracking-widest",
    company: "text-gray-800 tracking-wide",
    location: "text-gray-700 text-sm",
    dateLocation: "text-sm text-gray-500 mt-1",
    description: "mt-1 text-gray-700 text-sm font-light leading-relaxed",
    dateRight: false,             // Put dates inline for minimal look
    dateFormatting: { month: "long" }
  },

  education: {
    container: "space-y-6",
    entry: "mb-4 border-l-2 border-gray-200 pl-4",
    entryHeader: "flex flex-col",
    degree: "font-semibold text-gray-800 tracking-widest",
    institution: "text-gray-800 tracking-wide",
    location: "text-gray-700 text-sm",
    dateLocation: "text-sm text-gray-500 mt-1",
    description: "mt-2 text-gray-700 text-sm font-light",
    dateRight: false,
    dateFormatting: { month: "long" }
  },

  projects: {
    container: "space-y-8",
    project: "mb-8 relative pl-0",
    title: "font-semibold text-gray-800 tracking-widest",
    skills: "flex flex-wrap gap-x-5 gap-y-1 mt-3 mb-3 text-gray-500",
    skill: "text-xs text-gray-500 inline-flex items-center",
    description: "text-gray-600 mt-3 font-light leading-relaxed text-sm",
    urlLink: "text-gray-400 hover:text-gray-600 ml-2 text-xs tracking-wide transition-colors"
  },

  training: {
    container: "space-y-4",
    entry: "mb-4",
    entryHeader: "flex flex-col",
    course: "font-semibold text-gray-800 tracking-widest",
    institution: "text-gray-800 text-sm",
    date: "text-sm text-gray-500 mt-1",
    description: "text-gray-600 mt-3 font-light leading-relaxed text-sm",
    dateRight: false, // Inline dates for minimal look
    dateFormatting: { month: "long" } // Full month name for minimal elegance
  },

  hobbies: {
    container: "text-gray-700",
  }
};