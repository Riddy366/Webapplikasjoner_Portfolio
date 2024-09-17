import Experience from "./Experience";

export default function Experiences() {

  const experiences = [
    {
      title: "Title1",
      description: "Desc1"
    },
    {
      title: "Title2",
      description: "Desc2"
    },
    {
      title: "Title3",
      description: "Desc3"
    },
  ]
  return (
    <>
      <h2>Experiences</h2>
      {experiences.map((experiences, index) => (
        <Experience key={index} title={experiences.title} description={experiences.description} />    
      ))}
    </>
  );
}
