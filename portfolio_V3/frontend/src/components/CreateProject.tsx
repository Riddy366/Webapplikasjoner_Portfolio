import React from "react";
import useProjectForm from "../hooks/useProjectForm"; // Importer din custom hook
import { projectSchema } from "../schemas/projectSchema"; // Importer Zod-skjemaet
import { FORM_FIELDS } from "../configs/error";

type CreateProjectProps = {
  onAddProject: (project: {
    title: string;
    description: string;
    createdAt: string;
    category: string;
  }) => void;
};

const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
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
  } = useProjectForm(); // Bruker customHook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Data som skal valideres
    const formData = {
      title,
      description,
      createdAt,
      category,
    };

    // Validerer med Zod
    const projectValidationResult = projectSchema.safeParse(formData);

    if (!projectValidationResult.success) {
      // Hvis valideringen feiler, vis feilmeldinger
      console.error(projectValidationResult.error.format());
      alert(`Validation failed!, ${FORM_FIELDS}`);
      return;
    }

    // Hvis valideringen lykkes, kall `submitProject`
    submitProject(onAddProject)(e);
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
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
