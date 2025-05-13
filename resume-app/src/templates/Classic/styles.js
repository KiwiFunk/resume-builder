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

  },

  experience: {

  }

  // Add other component styles
};