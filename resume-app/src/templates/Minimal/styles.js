export const styles = {
  container: "font-sans text-gray-800 max-w-4xl mx-auto bg-white",
  header: "flex flex-col md:flex-row justify-between items-start mb-10 pt-6",
  contactContainer: "mb-4 md:mb-0",
  socialsContainer: "flex gap-4",
  
  content: "space-y-8",
  
  section: "mb-10",
  sectionTitle: "text-lg font-semibold uppercase tracking-wider mb-5 text-gray-900",
  summaryText: "text-gray-700 leading-relaxed",
  
  // Component-specific styles for Minimal template
  skills: {
    container: "space-y-4",
    skillGroup: "mb-6",
    groupName: "font-medium text-gray-900 mb-2 uppercase text-sm tracking-wider",
    skillsList: "flex flex-wrap gap-x-6 gap-y-2",
    skill: "text-gray-700 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-gray-300 before:rounded-full"
  },
  
  experience: {
    container: "space-y-8",
    jobEntry: "mb-6",
    jobHeader: "flex flex-col",
    jobTitle: "font-semibold text-gray-900",
    company: "text-gray-800",
    dateLocation: "text-sm text-gray-500 mt-1",
    description: "mt-3 text-gray-700"
  },
  
  education: {
    container: "space-y-6",
    entry: "border-l-2 border-gray-200 pl-4 mb-6",
    degree: "font-semibold text-gray-900",
    institution: "text-gray-800",
    dateLocation: "text-sm text-gray-500 mt-1",
  },
  
  projects: {
    container: "space-y-6",
    project: "mb-6",
    title: "font-semibold text-gray-900",
    skills: "flex flex-wrap gap-x-3 gap-y-1 mt-2 mb-2",
    skill: "text-xs text-gray-600",
    description: "text-gray-700 mt-2",
  },
  
  training: {
    container: "space-y-4",
    entry: "mb-4",
    course: "font-semibold text-gray-900",
    institution: "text-gray-800 text-sm",
    date: "text-sm text-gray-500 mt-1",
    description: "text-gray-700 mt-2",
  },
  
  hobbies: {
    container: "text-gray-700",
  }
};