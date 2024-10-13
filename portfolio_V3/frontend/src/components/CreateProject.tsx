import useProjectForm from "../hooks/useProjectForm";

type CreateProjectProps = {
  onAddProject: (project: {
    title: string;
    description: string;
    createdAt: string;
    category: string;
  }) => void;
};

const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
  // custom hook for prosjektForm
  const {
    title,
    setTitle,
    description,
    setDescription,
    createdAt,
    setCreatedAt,
    category,
    setCategory,
    submitProject,
  } = useProjectForm();

  return (
    // Lager en form for å kunne opprette prosjekter
    <form
      onSubmit={submitProject(onAddProject)}
      className="create-project-form"
    >
      <label htmlFor="title">Project Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title..."
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
      />

      <label htmlFor="createdAt">Date:</label>
      <input
        type="date"
        id="createdAt"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category..."
      />

      <button type="submit">Create project</button>
    </form>
  );
};

export default CreateProject;
