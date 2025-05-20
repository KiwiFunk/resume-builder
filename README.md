# Resume Builder

Hey there! 👋 Welcome to my Resume Builder project! This is a tool I'm working on to allow anyone to easily create and maintain their resume, hopefully making it easier to tailor details to multiple different applications and automatically check for keyword matches, ATS compatibility etc without the usual headaches!


I built this application with Next.js to give you a smooth, modern experience as you design your perfect resume. Whether you're job hunting, upgrading your professional profile, or just want to have an updated resume on hand, hopefully it'll have you covered! Having a framework such as Next.js should make going full stack much easier if I decide to implement a proper user system, with persistant data across devices, and better encryption for personal information!

## ✨ What Makes This Resume Builder Special

I've tried to think of features that might be useful when creating a resume for a position that wants a PDF submission!

- **Choose Your Style**: Pick from a template that matches the job you are aiming for! Something more flashy, something more classy?
- **See Changes Instantly**: Watch your resume take shape right before your eyes with the real-time preview.
- **Perfect A4 Format**: Your resume will look exactly the same when printed as it does on screen - no more formatting headaches!
- **Make It Your Own**: 
  - Change accent colors to add a touch of uniqueness.
  - Adjust margins to fit your content perfectly and make the template of choice shine.
  - Switch templates, modify layout and change up the style without worrying about re-entering your data.
- **Works Everywhere**: Build your resume on your computer, tablet, or even your phone
- **Auto-fitting Magic**: The preview automatically scales to fit your screen, so you can always see your entire resume
- **Easy Data Entry**: Simple forms guide you through adding all your important information and keeps it centralized in one place.
- **Never Lose Your Work**: Everything saves automatically as you type. (Or at least it will when i implement this, but hey, it has a cool toast right now!)
- **Print-Ready Results**: Generate professional PDFs that are ready to submit to employers (This will be implemented using something like React-PDF)

## 🎨 Template Gallery

I've designed each template with different personalities and purposes in mind:

- **Modern**: A go-to clean and professional layout that works for almost any industry
- **Creative**: Perfect for design, marketing, or any field where showing personality matters
- **Classic**: A timeless, traditional layout that never goes out of style
- **Minimal**: Elegant simplicity with plenty of white space to let your achievements shine
- **Nordic**: Inspired by Scandinavian design principles - clean, functional, and distinctive
- **Meridian**: A contemporary design that balances professionalism with a touch of creativity

## 🛠️ Under the Hood

For the technically curious, here's what powers this project:

- **Frontend**: Built with Next.js for that snappy, app-like experience
- **Styling**: TailwindCSS makes everything look good without bloated CSS
- **State Management**: Pure React Hooks - no overcomplicated state libraries
- **Storage**: This makes uses of localStorage for now, making it nice and easy to use, with plans to scale up to full-stack.
- **Document Display**: Custom iframe setup that maintains perfect A4 proportions and keeps the document isolated from the main DOM.
- **Responsive Design**: Works beautifully no matter what device you're using

## 📁 How It's Organized

I've structured the project to be intuitive and maintainable:

- `/src/app` - The main Next.js pages and routes
- `/src/components` - All the building blocks that make up the interface
- `/src/templates` - Where the resume designs live
- `/src/utils` - Helper functions that make everything work smoothly
- `/src/hooks` - Custom React hooks for cleaner, more reusable code

## 🔑 Key Components

These are the main pieces that make everything work:

- **DocumentViewer**: My custom solution for wrapping its chiildren in an iframe; displaying your resume exactly as it will print
- **EditingToolbar**: The control center where you can customize how your resume looks
- **Resume Display**: The components that render each section of your resume
- **Template System**: A modular system making it effortless to add new templates and register them without messing with core code

## 👩‍💻 Want to Contribute?

### Adding Your Own Template

If you want to create your own template, it's pretty straightforward:

1. Make a new folder in `/src/templates` with your template name
2. Create index.js (for your template structure) and styles.js (for your styling)
3. Register your template in the main templates index file

I've designed the system to be modular, so you can focus on the design without worrying about the underlying functionality.

## 🚀 What's Coming Next

I have big plans for future enhancements:

- One-click PDF export functionality
- ATS (Applicant Tracking System) compatibility checker
- Support for multiple languages
- Cloud storage so you can access your resume from anywhere
- Multiple profiles for different job applications
- Ai assisted tools for creating summaries and spellcheck

---
