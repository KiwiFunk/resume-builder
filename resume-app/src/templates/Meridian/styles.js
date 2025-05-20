export const styles = {
  // Main container with CSS variables for dynamic color support
  container: "font-sans bg-white grid grid-cols-[280px_1fr] min-h-full relative",
  icon: "text-[color:var(--accent)] text-lg",
  
  // Sidebar styling
  sidebar: "bg-gray-50 py-8 px-6 flex flex-col gap-6 border-r border-gray-200",
  photoPlaceholder: "w-28 h-28 rounded-full bg-[var(--accent)] mx-auto flex items-center justify-center text-white mb-4 shadow-lg",
  photoInitials: "text-3xl font-bold",
  nameSection: "text-center mb-4",
  sidebarSection: "border-t border-gray-200 pt-5 mt-1",
  sidebarSectionTitle: "text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3",
  
  // Contact details in sidebar
  contactDetails: "flex flex-col gap-3",
  contactItem: "flex items-center gap-2.5 text-sm text-gray-700 hover:text-[var(--accent)] transition-colors",
  
  // Main content area
  mainContent: "py-8 px-10 flex flex-col gap-8",
  contentSection: "flex flex-col gap-5",
  
  // Section titles with icon
  sectionTitleWrapper: "flex items-center gap-2.5 mb-4",
  sectionTitle: "text-xl font-bold text-gray-800 pb-2 border-b-2 border-[var(--accent)]",
  
  // Summary styling
  summaryBanner: "bg-[var(--accent-light)] p-6 rounded-xl mb-2",
  summarySectionTitle: "flex items-center gap-2.5 mb-3 text-[var(--accent)]",
  summaryText: "text-gray-700 leading-relaxed",
  
  // Contact information
  contactInformation: {
    container: "flex flex-col gap-1",
    name: "text-2xl font-bold text-gray-800",
    title: "text-[var(--accent)] font-medium",
    contactsContainer: "hidden", // Hide the default contact items as we're using custom ones
    contactItem: "hidden",
    icon: "hidden",
    showIcons: false
  },

  // Socials with horizontal layout and icon treatment
  socials: {
    container: "flex flex-col gap-2.5",
    socialItem: "w-full",
    iconWrapper: "bg-[var(--accent)] w-4 h-4 mr-2", 
    link: "flex items-center text-sm text-gray-700 hover:text-[var(--accent)] transition-colors",
    linkText: "truncate",
    showIcons: true
  },
  
  // Skills with modern bars
  skills: {
    container: "space-y-4",
    skillGroup: "mb-4",
    groupName: "text-sm font-medium text-gray-800 mb-2",
    skillsList: "space-y-2.5",
    skill: "relative pl-3 flex justify-between text-sm before:content-[''] before:absolute before:left-0 before:top-[calc(50%_-_3px)] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--accent)]"
  },
  
  // Education with condensed layout
  education: {
    container: "space-y-4",
    entry: "pb-3 last:pb-0",
    entryHeader: "flex flex-col",
    degree: "text-sm font-bold text-gray-800",
    institution: "text-xs text-[var(--accent)]",
    location: "text-xs text-gray-600 mt-0.5",
    dateLocation: "text-xs text-gray-500 mt-1",
    description: "text-xs text-gray-700 mt-1",
    dateRight: false
  },
  
  // Experience with modern timeline layout
  experience: {
    container: "space-y-7",
    jobEntry: "relative pl-8 pb-6 border-l-2 border-gray-200 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[var(--accent)] before:rounded-full before:left-[-9px] before:top-1 before:shadow-sm last:border-0 last:pb-0",
    jobHeader: "flex flex-wrap justify-between",
    jobTitle: "text-lg font-bold text-gray-800",
    company: "text-[var(--accent)] font-semibold",
    location: "text-sm text-gray-600",
    dateLocation: "text-sm text-gray-600 bg-[var(--accent-light)] px-3 py-1 rounded-full font-medium text-[var(--accent)] inline-block mt-2",
    description: "mt-2 text-gray-700 leading-relaxed",
    dateRight: false
  },
  
  // Projects with card layout
  projects: {
    container: "grid grid-cols-1 md:grid-cols-2 gap-6",
    project: "rounded-xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full",
    title: "text-lg font-semibold text-gray-800 mb-1",
    skills: "flex flex-wrap gap-1.5 mt-auto pt-3",
    skill: "text-xs px-2.5 py-1 bg-[var(--accent-light)] text-[var(--accent)] rounded-full",
    description: "text-sm text-gray-700 mt-2 flex-grow",
    urlLink: "text-[var(--accent)] hover:underline text-sm inline-flex items-center gap-1 mt-2 font-medium"
  },
  
  // Training with simplified layout
  training: {
    container: "space-y-5",
    entry: "flex gap-4",
    entryHeader: "flex-grow",
    course: "font-semibold text-gray-800",
    institution: "text-[var(--accent)] text-sm",
    date: "text-xs text-gray-600 mt-1",
    description: "text-sm text-gray-700 mt-1",
    dateRight: false
  },
  
  // Hobbies with subtle tags
  hobbies: {
    container: "flex flex-wrap gap-2",
    hobbyItem: "text-xs bg-[var(--accent-light)] text-[var(--accent)] rounded-full px-3 py-1 font-medium"
  },
};