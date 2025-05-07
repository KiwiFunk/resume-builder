let data = {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+1 234 567 8900",
    location: "Irvine, CA",
    summary: `A highly motivated and results-oriented professional with a strong background in software development and project management. 
    Proven ability to lead teams and deliver projects on time and within budget. 
    Excellent communication and interpersonal skills.`,
    // Store social media links in an array of objects
    socials: [
        {
            platform: "Website",
            url: "https://www.google.com/",
            inUse: true
        },  
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/",
            inUse: true
        },
        {
            platform: "GitHub",
            url: "https://github.com/",
            inUse: true
        },
        {
            platform: "ArtStation",
            url: "https://www.artstation.com/",
            inUse: true
        },
        {
            platform: "Twitter",
            url: "https://www.twitter.com/",
            inUse: false,
        },
        {
            platform: "StackOverflow",
            url: "https://stackoverflow.com/",
            inUse: true,
        },

    ],
    skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Django",
        "HTML",
        "CSS",
        "SQL",
        "Git",
        "Agile Methodologies"
    ],
    experience: [
        {
            title: "Software Engineer",
            company: "Tech Company",
            location: "Irvine, CA",
            startDate: "2020-01-01",
            endDate: "2024-12-31",
            description: `Developed and maintained web applications using React and Node.js! 
            Collaborated with cross-functional teams to define, design, and ship new features? 
            Participated in code reviews and contributed to team knowledge sharing.`
        },
        {
            title: "Project Manager",
            company: "Another Tech Company",
            location: "Los Angeles, CA",
            startDate: "2017-01-01",
            endDate: "2019-12-31",
            description: `Managed multiple software development projects from inception to completion. 
            Coordinated with stakeholders to gather requirements and ensure project success. 
            Led a team of developers and ensured adherence to best practices.`
        },
        {
            title: "Intern Software Engineer",
            company: "Internship Company",
            location: "Los Angeles, CA",
            startDate: "2016-06-01",
            endDate: "2016-12-31",
            description: `Assisted in the development of web applications using HTML, CSS, and JavaScript. 
            Collaborated with senior developers to learn best practices and improve coding skills.`
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of California, Irvine",
            location: "Irvine, CA",
            startDate: "2014-09-01",
            endDate: "2018-06-30"
        },
        {
            degree: "Master of Science in Software Engineering",
            institution: "Stanford University",
            location: "Stanford, CA",
            startDate: "2018-09-01",
            endDate: "2020-06-30"
        }
    ],
    training: [
        {
            title: "Full Stack Web Development Bootcamp",
            institution: "Coding Academy",
            startDate: "2020-01-01",
            endDate: "2020-06-30",
            description: `Completed a comprehensive bootcamp covering full stack web development, including HTML, CSS, JavaScript, React, Node.js, and MongoDB.`
        },
        {
            title: "Agile Project Management Certification",
            institution: "Project Management Institute",
            startDate: "2019-01-01",
            endDate: "2019-03-31",
            description: `Achieved certification in Agile Project Management methodologies and practices.`
        }
    ],
    projects: [
        {
            title: "Personal Portfolio Website",
            description: `Developed a personal portfolio website to showcase my projects and skills using React and CSS.`,
            url: "https://github.com/",
            skills: ["React", "CSS", "JavaScript"]
        },
        {
            title: "E-commerce Application",
            description: `Built a full-stack e-commerce application using MERN stack (MongoDB, Express.js, React, Node.js).`,
            url: "https://github.com/",
            skills: ["MERN", "JavaScript", "Node.js", "JWT Authentication"]
        },
        {
            title: "Task Management App",
            description: `Created a task management application using Django and React to help users manage their tasks efficiently.`,
            url: "https://github.com/",
            skills: ["Django", "React"]
        }
    ],
    hobbies: `In my free time, I enjoy hiking, photography, and playing video games. I love to practice coding challenges and contribute to open-source projects.
    I am working on a personal project to develop a mobile application that helps users track their fitness goals.`,

}

export default data;