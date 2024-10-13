type ProjectProps = {
  title: string;
  description: string;
  createdAt: string;
};

export default function Projecs({
  title,
  description,
  createdAt,
}: ProjectProps) {
  return (
    <>
    {/* Standard stil for prosjekt kortene */}
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <small>{createdAt}</small>
      </div>
    </>
  );
}
