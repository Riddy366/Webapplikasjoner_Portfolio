document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const prosjekterSection = document.getElementById('prosjekter');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;

    addProjectToDOM(title, description, status);

    form.reset();
  });

  function addProjectToDOM(title, description, status) {
    const projectTitle = document.createElement('h3');
    const projectLink = document.createElement('a');
    
    projectLink.href = '#'; // Placeholder link for prosjekt
    projectLink.textContent = title;
    projectLink.className = 'project-link';

    projectTitle.appendChild(projectLink);

    // Henter Description fra Form og legger inn i HTML
    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    projectDescription.className = 'project-description';

    // Henter Status fra Form og legger inn i HTML
    const projectStatus = document.createElement('p');
    projectStatus.textContent = `Status: ${status}`;
        projectStatus.className = 'project-status';

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectStatus);

    prosjekterSection.appendChild(projectDiv);
  }
});
