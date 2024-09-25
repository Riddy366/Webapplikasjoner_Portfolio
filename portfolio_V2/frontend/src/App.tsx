import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Form from "./components/Form";
import CreateProject from "./components/CreateProject";
import "./style.css";

function App() {
  const [projects, setProjects] = useState<
    {
      title: string;
      description: string;
      createdAt: string;
      category: string;
    }[]
  >([]);

  const handleAddProject = (project: {
    title: string;
    description: string;
    createdAt: string;
    category: string;
  }) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  const handleRemoveProject = (index: number) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header student="Halgeir Geirson" degree="Bachelor IT" points={500} />
      <Experiences />
      <Contact email="student@hiof.no" />
      <CreateProject onAddProject={handleAddProject} />
      <Projects projects={projects} onRemoveProject={handleRemoveProject} />
      <Form />
    </>
  );
}

export default App;
