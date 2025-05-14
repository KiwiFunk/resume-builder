export const styles = {
  // Core layout with Scandinavian principles of light, space and natural elements
  container: "font-sans bg-white max-w-5xl mx-auto text-slate-800",
  
  // Header with clean, asymmetric layout
  header: "flex flex-col md:flex-row items-start justify-between gap-8 mb-12 pt-8 relative",
  headerMain: "flex-1",
  headerSide: "md:w-1/3 w-full",
  headerAccent: "absolute top-0 left-0 w-1/3 h-1 bg-slate-800",
  
  summary: "mt-5 mb-6 max-w-xl",
  summaryText: "text-slate-600 leading-relaxed text-sm",
  
  // Two-column layout 
  mainContent: "flex flex-col md:flex-row gap-10 md:gap-16",
  leftColumn: "md:w-1/3 space-y-8",
  rightColumn: "md:w-2/3 space-y-12",
  
  // Section styling with clean typography
  section: "mb-8",
  sectionTitle: "text-sm uppercase tracking-widest text-slate-400 font-normal mb-5",
  
  // Contact information with understated elegance
  contactInformation: {
    container: "font-sans",
    name: "text-3xl font-light text-slate-900 tracking-wide",
    title: "text-lg text-slate-500 mt-1 mb-2 font-light",
    contactsContainer: "flex flex-wrap gap-6 mt-4 text-sm text-slate-600",
    contactItem: "flex items-center gap-2",
    icon: "text-slate-400",
    showIcons: true
  },
  
  // Minimal socials
  socials: {
    container: "flex flex-col space-y-1",
    socialItem: "mb-1",
    iconWrapper: "text-slate-400 mr-2 w-4 h-4",
    link: "text-slate-600 hover:text-slate-900 transition-colors text-sm flex items-center",
    linkText: "border-b border-slate-200",
    showIcons: true
  },
  
  // Skills with distinctive Scandinavian grid layout
  skills: {
    container: "space-y-6",
    skillGroup: "mb-4",
    groupName: "text-xs uppercase tracking-wider text-slate-500 mb-2",
    skillsList: "grid grid-cols-2 gap-x-4 gap-y-1",
    skill: "text-slate-700 text-sm relative flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-slate-300 before:rounded-full"
  },
  
  // Experience with clean typography
  experience: {
    container: "space-y-8",
    jobEntry: "mb-7 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0",
    jobHeader: "flex flex-col mb-2",
    jobTitle: "font-medium text-slate-900",
    company: "text-slate-700 text-sm",
    location: "text-slate-500 text-xs mt-1",
    dateLocation: "text-slate-500 text-xs mt-1",
    description: "mt-3 text-slate-700 text-sm leading-relaxed",
    dateRight: true,
    dateFormatting: { year: "numeric" }
  },
  
  // Education with consistent styling
  education: {
    container: "space-y-4",
    entry: "mb-5 last:mb-0",
    entryHeader: "flex flex-col",
    degree: "font-medium text-slate-900",
    institution: "text-slate-700 text-sm",
    location: "text-slate-500 text-xs mt-0.5",
    dateLocation: "text-slate-500 text-xs mt-1",
    description: "mt-2 text-slate-700 text-sm",
    dateRight: true,
    dateFormatting: { year: "numeric" }
  },
  
  // Projects with clean layout
  projects: {
    container: "space-y-6",
    project: "mb-6 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0",
    title: "font-medium text-slate-900",
    skills: "flex flex-wrap gap-2 mt-2",
    skill: "text-xs text-slate-500",
    description: "mt-2 text-slate-700 text-sm leading-relaxed",
    urlLink: "text-slate-500 hover:text-slate-800 text-xs mt-1 inline-block transition-colors" 
  },
  
  // Training with minimalist approach
  training: {
    container: "space-y-4",
    entry: "mb-4",
    entryHeader: "flex flex-col",
    course: "font-medium text-slate-900",
    institution: "text-slate-700 text-sm",
    date: "text-slate-500 text-xs mt-1",
    description: "mt-2 text-slate-700 text-sm",
    dateRight: true,
    dateFormatting: { year: "numeric" }
  },
  
  // Hobbies with distinctive bullets
  hobbies: {
    container: "text-slate-700",
    hobbyItem: "mb-1.5 text-sm relative flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-slate-300 before:rounded-full",
    prefixItems: false
  },
};