let welcomeMessage = `Welcome to ${portfolio.owner.name}'s portfolio!`;
console.log(welcomeMessage);

let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;

document.write(headerHTML);

let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);

let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

let techNames = [];
let techCounts = [];

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];

    let matches = false;
    for (let t = 0; t < project.technologies.length; t++) {
        if (project.technologies[t] === showOnly) {
            matches = true;
        }
    }

    let tagsHtml = "";
    for (let j = 0; j < project.technologies.length; j++) {
        tagsHtml += "<span class='tag'>" + project.technologies[j] + "</span>";

        let foundIndex = -1;
        for (let k = 0; k < techNames.length; k++) {
            if (techNames[k] === project.technologies[j]) {
                foundIndex = k;
            }
        }

        if (foundIndex === -1) {
            techNames.push(project.technologies[j]);
            techCounts.push(1);
        } else {
            techCounts[foundIndex] = techCounts[foundIndex] + 1;
        }
    }

    if (showOnly === "all" || matches) {
        projectsHTML = projectsHTML + `
            <article class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="tech">Technologies: ${tagsHtml}</p>
                <p class="date">Completed: ${project.completionDate}</p>
            </article>
        `;
    }
}

projectsHTML = projectsHTML + '</div>';

for (let i = 0; i < techNames.length; i++) {
    projectsHTML = projectsHTML + `<p class="tech">${techCounts[i]} projects use ${techNames[i]}</p>`;
}

projectsHTML = projectsHTML + '</section>';
document.write(projectsHTML);
