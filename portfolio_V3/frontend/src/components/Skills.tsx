import "../style.css";
type SkillProps = {
  skillName?: string; // Kan fjernes hvis ikke nødvendig
  image?: string; // Kan fjernes hvis ikke nødvendig
};

export default function Skills(props: SkillProps) {
  const allSkills = [
    {
      skillName: "html",
      image: "/bilder/html.png",
    },
    {
      skillName: "css",
      image: "/bilder/css.png",
    },
    {
      skillName: "javascript",
      image: "/bilder/javascript.png",
    },
    {
      skillName: "react",
      image: "/bilder/react.png",
    },
  ];

  return (
    <>
      <h2>Skills</h2>
      {allSkills.map((skill, index) => (
        <div key={index}>
          <img className="skillList" src={skill.image} alt={skill.skillName} />
          <p>{skill.skillName}</p>
        </div>
      ))}
    </>
  );
}
