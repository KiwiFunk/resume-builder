export const styles = {
  // Main container
  container: "font-sans bg-white grid grid-cols-[280px_1fr] relative",
  icon: "text-[color:var(--accent)] text-lg",
  
  // Sidebar styling
  sidebar: "bg-gray-50 rounded py-8 px-6 flex flex-col gap-5",
  photoPlaceholder: "w-24 h-24 rounded-full bg-[var(--accent)] mx-auto flex items-center justify-center text-white mb-3 shadow-md",
  photoInitials: "text-2xl font-bold",
  nameSection: "text-center mb-4",
  sidebarSection: "border-t border-gray-200 pt-4 mt-1",
  sidebarSectionTitle: "text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2",
  
  // Contact details in sidebar
  contactDetails: "flex flex-col gap-2.5",
  contactItem: "flex items-center gap-2 text-sm text-gray-700 hover:text-[var(--accent)] transition-colors",
  
  // Main content area
  mainContent: "py-7 px-8 flex flex-col gap-4",
  contentSection: "flex flex-col gap-4 mb-6",
  
  // Section titles with icon
  sectionTitleWrapper: "flex items-center gap-2 mb-3",
  sectionTitle: "text-lg font-bold text-gray-800 pb-1.5 border-b-2 border-[var(--accent)]",
  
  // Summary styling
  summaryBanner: "bg-[var(--accent-light)] p-5 rounded-lg mb-2",
  summarySectionTitle: "flex items-center gap-2 mb-2 text-[var(--accent)]",
  summaryText: "text-gray-700 leading-relaxed text-sm",
  
  // Contact information
  contactInformation: {
    container: "flex flex-col gap-1",
    name: "text-xl font-bold text-gray-800",
    title: "text-[var(--accent)] font-medium text-sm",
    contactsContainer: "hidden",
    contactItem: "hidden",
    icon: "hidden",
    showIcons: false
  },

  // Socials
  socials: {
    container: "flex flex-col gap-2",
    socialItem: "w-full",
    iconWrapper: "bg-[var(--accent)] w-4 h-4 mr-2", 
    link: "flex items-center text-sm text-gray-700 hover:text-[var(--accent)] transition-colors",
    linkText: "truncate",
    showIcons: true
  },
  
  // Skills
  skills: {
    container: "space-y-3",
    skillGroup: "mb-3",
    groupName: "text-sm font-bold text-[var(--accent)] mb-1.5",
    skillsList: "space-y-2",
    skill: "relative text-gray-800 pl-3 flex justify-between text-sm before:content-[''] before:absolute before:left-0 before:top-[calc(50%_-_2px)] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--accent)]"
  },
  
  // Education
  education: {
    container: "space-y-3",
    entry: "pb-2 last:pb-0",
    entryHeader: "flex flex-col",
    degree: "text-sm font-bold text-gray-800",
    institution: "text-xs text-[var(--accent)]",
    location: "text-xs text-gray-600",
    dateLocation: "text-xs text-gray-500 mt-0.5",
    description: "text-xs text-gray-700 mt-0.5",
    dateRight: false
  },
  
  // Experience
  experience: {
    container: "space-y-0",
    jobEntry: "relative pl-7 pb-5 border-l-2 border-gray-200 before:content-[''] before:absolute before:w-3.5 before:h-3.5 before:bg-[var(--accent)] before:rounded-full before:left-[-8px] before:shadow-sm last:border-0 last:pb-0",
    jobHeader: "flex flex-wrap justify-between",
    jobTitle: "text-base font-bold text-gray-800",
    company: "text-[var(--accent)] font-semibold text-sm",
    location: "text-xs text-gray-600",
    dateLocation: "text-xs text-gray-600 bg-[var(--accent-light)] px-2.5 py-0.5 rounded-full font-medium text-[var(--accent)] inline-block mt-1",
    description: "mt-1.5 text-gray-700 leading-relaxed text-sm",
    dateRight: false
  },
  
  // Projects
  projects: {
    container: "grid grid-cols-1 gap-4",
    project: "rounded-lg bg-white border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col",
    title: "text-base font-semibold text-gray-800 mr-2",
    skills: "flex flex-wrap gap-1 mt-2 mb-1",
    skill: "text-xs px-2 py-0.5 bg-[var(--accent-light)] text-[var(--accent)] rounded-full",
    description: "text-xs text-gray-700 mt-1.5",
    urlLink: "text-[var(--accent)] hover:underline text-xs inline-flex items-center font-medium"
  },
  
  // Training 
  training: {
    container: "space-y-4",
    entry: "flex gap-3",
    entryHeader: "flex-grow",
    course: "font-semibold text-gray-800 text-sm",
    institution: "text-[var(--accent)] text-xs",
    date: "text-xs text-gray-600 mt-0.5",
    description: "text-xs text-gray-700 mt-1",
    dateRight: false
  },
  
  // Hobbies
  hobbies: {
    container: "flex flex-wrap gap-1.5",
    hobbyItem: "text-xs bg-[var(--accent-light)] text-[var(--accent)] rounded-full px-6 py-2 mb-1"
  },
};