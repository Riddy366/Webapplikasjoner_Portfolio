import React, { useEffect, useState } from "react";
import CreateProject from "./CreateProject"; // Importer CreateProject komponenten

const App = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(null); // Legg til state for å lagre det nye prosjektet

  const fetchProjects = async () => {
    const response = await fetch("http://localhost:3999/projects");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = async (project) => {
    const response = await fetch("http://localhost:3999/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    if (response.ok) {
      const createdProject = await response.json();
      setNewProject(createdProject); // Lagre det nye prosjektet
      setProjects((prevProjects) => [...prevProjects, createdProject]);
    } else {
      alert("Kunne ikke opprette prosjekt. Sjekk at alle felt er fylt ut.");
    }
  };

  return (
    <div>
      <h1>Prosjektliste</h1>
      <CreateProject onAddProject={handleAddProject} />

      <h2>Nyopprettet prosjekt:</h2>
      {newProject && (
        <pre>{JSON.stringify(newProject, null, 2)}</pre> // Vis det nye prosjektet i JSON-format
      )}

      <h2>Alle Prosjekter:</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Dato: {project.createdAt}</p>
            <p>Kategori: {project.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
