export const styles = {
  // Minimal, Muji inspired aesthetics
  container: "font-sans text-gray-700 max-w-4xl mx-auto bg-white tracking-wide",
  header: "flex flex-col md:flex-row justify-between items-start mb-10 pt-8",
  headerSide: "flex-1 flex flex-col gap-6",
  headerDivider: "h-px bg-gray-100 w-full mt-2",
  contactContainer: "mb-2 md:mb-0",
  socialsContainer: "flex",
  content: "space-y-10",
  
  section: "mb-10",
  sectionTitle: "text-base font-normal uppercase tracking-widest mb-5 text-gray-500",
  summaryText: "text-gray-600 leading-relaxed text-sm font-light max-w-2xl",

  contactInformation: {
    container: "font-sans",
    name: "text-2xl font-normal text-gray-900 mb-1 uppercase tracking-widest",
    title: "text-base text-gray-500 mb-4 font-light",
    contactsContainer: "text-gray-600 flex flex-wrap gap-8 text-sm font-light",
    contactItem: "inline-block",
    icon: "text-gray-400 text-xs mr-1.5",
    showIcons: true
  },

  socials: {
    container: "flex flex-wrap gap-x-8 gap-y-2 mt-2",
    socialItem: "inline-block",
    iconWrapper: "hidden",
    link: "text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200",
    linkText: "text-gray-500 text-sm",
    showIcons: false
  },

  skills: {
    container: "space-y-8",
    skillGroup: "mb-8",
    groupName: "font-normal text-gray-500 mb-4 uppercase text-xs tracking-widest",
    skillsList: "flex flex-wrap gap-y-2",
    skill: "text-gray-600 text-sm mr-6 font-light relative after:content-['·'] after:mx-3 after:text-gray-300 last:after:content-none last:mr-0"
  },

  experience: {
    container: "space-y-8",
    jobEntry: "mb-8",
    jobHeader: "flex flex-col",
    jobTitle: "font-normal text-gray-800 tracking-wide",
    company: "text-gray-700 font-light",
    location: "text-gray-500 text-sm font-light",
    dateLocation: "text-sm text-gray-500 mt-1 font-light",
    description: "mt-3 text-gray-600 text-sm font-light leading-relaxed",
    dateRight: false,
    dateFormatting: { month: "long" }
  },

  education: {
    container: "space-y-8",
    entry: "mb-6 border-l border-gray-100 pl-4",
    entryHeader: "flex flex-col",
    degree: "font-normal text-gray-800 tracking-wide",
    institution: "text-gray-700 font-light",
    location: "text-gray-500 text-sm font-light",
    dateLocation: "text-sm text-gray-500 mt-1 font-light",
    description: "mt-2 text-gray-600 text-sm font-light",
    dateRight: false,
    dateFormatting: { month: "long" }
  },

  projects: {
    container: "space-y-10",
    project: "mb-8",
    title: "font-normal text-gray-800 tracking-wide",
    skills: "flex flex-wrap gap-x-2 gap-y-1 mt-2 mb-2 text-gray-500",
    skill: "text-xs text-gray-500 inline-flex items-center after:content-['·'] after:ml-2 after:mr-2 after:text-gray-300 last:after:content-none",
    description: "text-gray-600 mt-3 font-light leading-relaxed text-sm",
    urlLink: "text-gray-400 hover:text-gray-600 ml-2 text-xs transition-colors"
  },

  training: {
    container: "space-y-6",
    entry: "mb-4",
    entryHeader: "flex flex-col",
    course: "font-normal text-gray-800 tracking-wide",
    institution: "text-gray-700 text-sm font-light",
    date: "text-sm text-gray-500 mt-1 font-light",
    description: "text-gray-600 mt-3 font-light leading-relaxed text-sm",
    dateRight: false,
    dateFormatting: { month: "long" }
  },

  hobbies: {
    container: "text-gray-600 font-light",
    hobbyItem: "mb-3 text-sm relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-200 before:rounded-full",
    prefixItems: false
  },
};