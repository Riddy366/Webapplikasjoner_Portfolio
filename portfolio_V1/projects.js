// Hent prosjekter fra JSON-filen
fetch('projects.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => addProjectsToHTML(data))
  .catch(error => console.error('Feil ved henting av prosjekter:', error));

// Legg til prosjekter i HTML
function addProjectsToHTML(projects) {
  const prosjectSection = document.getElementById('prosjekter');

  projects.forEach(project => {
    const article = document.createElement('article');

    const linkElement = document.createElement('a');
    linkElement.href = project.url || "#"; 
    linkElement.textContent = project.name; 
    linkElement.className = 'project-link'; // Legg til CSS-klasse

    const projectTitle = document.createElement('h3');
    projectTitle.appendChild(linkElement);

    const projectDescription = document.createElement('article')
    projectDescription.textContent = project.description
    projectDescription.className = 'project-description'

    const projectStatus = document.createElement('article');
    projectStatus.textContent = `Status: ${project.status}`
  
    article.appendChild(projectTitle);
    article.appendChild(projectDescription);
    article.appendChild(projectStatus)


    prosjectSection.appendChild(article);
  });
}
