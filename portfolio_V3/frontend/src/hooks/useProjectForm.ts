import { useState } from "react";
import { FORM_FIELDS } from "../configs/error";

const useProjectForm = () => {
  // UseState for formen
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [category, setCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("---");

  const submitProject = (onAddProject: (project: any) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();

      // Standard status er "Yes" om brukeren ikke velger noe
      const status = selectedOption === "---" ? "Yes" : selectedOption;

      // Sjekker om alle feltene er fylt
      if (!title || !description || !createdAt || !category) {
        alert(FORM_FIELDS); // error config
        return;
      }

      // Om feltene er fylt så legger den til prosjektet
      onAddProject({ title, description, createdAt, category, status });

      // Reset form
      setTitle("");
      setDescription("");
      setCreatedAt("");
      setCategory("");
      setSelectedOption("---");
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
    selectedOption,
    setSelectedOption
  };
};
export default useProjectForm;
