import Project from "./Project";

export default function Projects() {
  return (
    <>
      <h2>Prosject</h2>
      <Project
        title={"Prosjekt1"}
        description={"Desc1"}
        createdAt={"dato idag"}
      />
      <Project
        title={"Prosjekt2"}
        description={"Desc2"}
        createdAt={"dato idag"}
      />
      <Project
        title={"Prosjekt3"}
        description={"Desc3"}
        createdAt={"dato idag"}
      />
    </>
  );
}
