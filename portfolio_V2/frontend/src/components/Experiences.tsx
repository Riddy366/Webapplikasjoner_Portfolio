import Experience from "./Experience";

export default function Experiences() {
  const experiences = [
    {
      title: "Title1",
      description: "Desc1",
    },
    {
      title: "Title2",
      description: "Desc2",
    },
    {
      title: "Title3",
      description: "Desc3",
    },
  ];

  return (
    <>
    {/* Ser om det finnes erfaringer, hvis ikke forteller vi i 
    grensesnittet det finnes ingen erfaringer */}
      <h2>Experiences</h2>
      {experiences.length === 0 ? (
        <p>Ingen erfaringer</p>
      ) : (
        // Hvis erfaringer finnes så mapper vi ut objektet
        experiences.map((experience, index) => (
          <Experience
            key={index}
            title={experience.title}
            description={experience.description}
          />
        ))
      )}
    </>
  );
}
