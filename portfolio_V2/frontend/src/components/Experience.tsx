type ExperienceProps = {
  title: string;
  description: string;
  createdAt: string;
};

export default function Experience({
  title,
  description,
  createdAt,
}: ExperienceProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{createdAt}</small>
    </div>
  );
}
