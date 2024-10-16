type ProjectProps = {
  title: string;
  description: string;
  createdAt: string;
  projectStatus: string;
};

export default function Projecs({
  title,
  description,
  createdAt,
  projectStatus
}: ProjectProps) {
  return (
    <>
    {/* Standard stil for prosjekt kortene */}
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <small>{createdAt}</small>
        <p>Public:{projectStatus}</p>
      </div>
    </>
  );
}
