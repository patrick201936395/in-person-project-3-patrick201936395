const showOnly = "all";

const portfolio = {
    owner: {
        name: "Patrick Ruan",
        title: "Student at UC Berkeley School of Information",
        email: "patrick.ruan@berkeley.edu",
        location: "Berkeley, CA",
        bio: "Hi, I'm Patrick. I'm a student at the UC Berkeley School of Information. Outside of class, I enjoy building small side projects, exploring new tools, and learning about product design and user experience."
    },

    skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals",
        "Python & Data Analysis",
        "Git & GitHub"
    ],

    projects: [
        {
            title: "Personal Portfolio",
            description: "A responsive portfolio site built with semantic HTML, Flexbox, and CSS Grid.",
            technologies: ["HTML", "CSS", "Flexbox", "Grid"],
            completionDate: "2025-09-15",
            featured: true
        },
        {
            title: "Data Explorer",
            description: "A Python notebook project analyzing public datasets with pandas.",
            technologies: ["Python", "pandas"],
            completionDate: "2025-06-01",
            featured: false
        },
        {
            title: "Contact Form",
            description: "An accessible contact form with labeled inputs and validation.",
            technologies: ["HTML", "Forms"],
            completionDate: "2025-03-01",
            featured: false
        },
        {
            title: "UX Case Study",
            description: "A design exploration focused on product usability and user research.",
            technologies: ["UX", "Design"],
            completionDate: "2024-12-01",
            featured: false
        }
    ],

    availability: {
        freelance: false,
        fullTime: false,
        partTime: true
    }
};

console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First skill:", portfolio.skills[0]);
console.log("First project:", portfolio.projects[0]);

console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);

console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

let latestTitle = portfolio.projects[0].title;
let latestDate = portfolio.projects[0].completionDate;

for (let i = 1; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].completionDate > latestDate) {
        latestTitle = portfolio.projects[i].title;
        latestDate = portfolio.projects[i].completionDate;
    }
}

console.log("Most recent project: " + latestTitle);

let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);
