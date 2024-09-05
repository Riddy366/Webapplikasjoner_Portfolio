document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const prosjekterSection = document.getElementById("prosjekter");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    // const id = document.getElementById("id").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;



    const newProject = {
      title: title,
      description: description,
      status: status,
    };

    try {
      const response = await fetch("http://localhost:3999", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      // Sjekk om responsen er OK
      if (response.ok) {
        const newProject = await response.json(); // Les responsen som JSON
        console.log("Prosjekt lagret på serveren:", newProject);
      } else {
        console.error(`Serveren returnerte en feil: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Feil ved lagring av prosjekt:", error);
    }

    form.reset();
  });

  function addProjectToDOM(title, description, status) {
    const projectTitle = document.createElement("h3");
    const projectLink = document.createElement("a");

    projectLink.href = "#";
    projectLink.textContent = title;
    projectLink.className = "project-link";

    projectTitle.appendChild(projectLink);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = description;
    projectDescription.className = "project-description";

    const projectStatus = document.createElement("p");
    projectStatus.textContent = `Status: ${status}`;
    projectStatus.className = "project-status";

    const projectDiv = document.createElement("div");
    projectDiv.className = "project-item";
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectStatus);

    prosjekterSection.appendChild(projectDiv);
  }
});
