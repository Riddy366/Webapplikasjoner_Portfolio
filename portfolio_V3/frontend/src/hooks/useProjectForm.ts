import { useState } from "react";
import { FORM_FIELDS } from "../configs/error";

const useProjectForm = () => {
  // UseState for formen
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [category, setCategory] = useState("");

  const submitProject = (onAddProject: (project: any) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();

      // Sjekker om alle feltene er fylt
      if (!title || !description || !createdAt || !category) {
        alert(FORM_FIELDS); // error config
        return;
      }
      // Om feltene er fylt så legger den til prosjektet
      onAddProject({ title, description, createdAt, category });

      // Reset form
      setTitle("");
      setDescription("");
      setCreatedAt("");
      setCategory("");
    };
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    createdAt,
    setCreatedAt,
    category,
    setCategory,
    submitProject,
  };
};
export default useProjectForm;
