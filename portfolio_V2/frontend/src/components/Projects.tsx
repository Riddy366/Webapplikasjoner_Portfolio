import React from "react";

interface Project {
  title: string;
  description: string;
  createdAt: string;
  category: string;
}

interface ProjectsProps {
  projects: Project[];
  onRemoveProject: (index: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onRemoveProject }) => {
  return (
    <div>
      <h2>Prosjekter</h2>
      {projects.length === 0 ? (
        <p>Ingen prosjekter lagt til.</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Kategori:</strong> {project.category}
            </p>
            <p>
              <strong>Opprettet:</strong> {project.createdAt}
            </p>
            <button
              onClick={() => onRemoveProject(index)}
              className="remove-button"
            >
              Fjern Prosjekt
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;
