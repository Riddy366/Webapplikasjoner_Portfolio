import Project from "./Project";

export default function Projects() {
    const projects = [
        {
            title: "Prosjekt2",
            description: "Desc2",
            createdAt: "dato idag"
        },
        {
            title: "Prosjekt2",
            description: "Desc2",
            createdAt: "dato idag"
        },
        {
            title: "Prosjekt3",
            description: "Desc3",
            createdAt: "dato idag"
        }
    ]
  return (
    <>
      <h2>Prosject</h2>
      {projects.map((projects, index) => (
      <Project key={index} title={projects.title} description={projects.description} createdAt={projects.createdAt}/>
    ))}
    </>
  );
}
