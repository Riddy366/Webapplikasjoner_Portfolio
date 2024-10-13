type ExperienceProps = {
  title: string;
  description: string;
};

export default function Experience({ title, description }: ExperienceProps) {
  return (
    // Standard kode for hvordan kortene til erfaringene skal være
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
