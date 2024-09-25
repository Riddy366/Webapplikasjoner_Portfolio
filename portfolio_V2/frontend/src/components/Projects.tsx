import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      title: "Prosjekt1",
      description: "Desc1",
      createdAt: "dato idag",
    },
    {
      title: "Prosjekt2",
      description: "Desc2",
      createdAt: "dato idag",
    },
    {
      title: "Prosjekt3",
      description: "Desc3",
      createdAt: "dato idag",
    },
  ];

  return (
    <>
      <h2>Prosjekter</h2>
      {projects.length === 0 ? (
        <p>Ingen prosjekter</p>
      ) : (
        projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            createdAt={project.createdAt}
          />
        ))
      )}
    </>
  );
}
