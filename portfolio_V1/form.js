document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const prosjekterSection = document.getElementById('prosjekter');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;

    addProjectToDOM(title);

    form.reset();
  });

  function addProjectToDOM(title) {
    const projectTitle = document.createElement('h3');
    const projectLink = document.createElement('a');
    
    projectLink.href = '#'; // Placeholder link
    projectLink.textContent = title;
    projectLink.className = 'project-link';

    projectTitle.appendChild(projectLink);

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    projectDiv.appendChild(projectTitle);

    prosjekterSection.appendChild(projectDiv);
  }
});
