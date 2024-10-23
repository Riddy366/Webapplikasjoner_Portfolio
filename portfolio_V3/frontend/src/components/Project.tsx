type ProjectProps = {
  title: string;
  description: string;
  category: string,
  createdAt: string;
  projectStatus: string;
};

export default function Projecs({
  title,
  description,
  category,
  createdAt,
  projectStatus
}: ProjectProps) {
  return (
    <>
      {/* Standard stil for prosjekt kortene */}
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{category}</p>
        <small>{createdAt}</small>
        <p>{projectStatus}</p>
      </div>
    </>
  );
}
