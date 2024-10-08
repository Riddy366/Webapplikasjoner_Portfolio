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

// Samler prosjektene i hver sin kategori og teller antall prosjekter pr kategori
const Projects: React.FC<ProjectsProps> = ({ projects, onRemoveProject }) => {
  const categoryCounts = projects.reduce(
    (counts: { [key: string]: number }, project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
      return counts;
    },
    {}
  );

  return (
    <div>
      <h2>Prosjekter</h2>

      {/* Summering per kategori */}
      <h3>Totaler per kategori</h3>
      {!projects.length ? (
        <p>Ingen prosjekter.</p>
      ) : (
        <ul>
          {Object.keys(categoryCounts).map((category) => (
            <li key={category}>
              {category}: {categoryCounts[category]} prosjekter
            </li>
          ))}
        </ul>
      )}

      {/* Liste over prosjekter */}
      {projects.map((project, index) => (
        <div key={index} className="card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Kategori:</strong> {project.category}
          </p>
          <p>
            <strong>Opprettet:</strong> {project.createdAt}
          </p>
          <button onClick={() => onRemoveProject(index)}>Fjern Prosjekt</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
