import { useState, useEffect } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import "./style.css";
import Form from "./components/Form";

const App = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3999/projects");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleAddProject = async (project) => {
    try {
      const response = await fetch("http://localhost:3999/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      setProjects(await response.json());
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Kunne ikke opprette prosjekt: " + error.message);
    }
  };

  const handleRemoveProject = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Header student="Ridwan Abukar" degree="Informasjonssystemer" points={500} />
      <Experiences />
      <Contact email="student@hiof.no" />
      <CreateProject onAddProject={handleAddProject} />
      <Projects projects={projects} onRemoveProject={handleRemoveProject} />
      <Form />
    </>
  );
}

export default App;
