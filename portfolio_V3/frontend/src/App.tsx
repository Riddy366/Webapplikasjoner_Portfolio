import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Form from "./components/ContactForm";
import "./style.css";
import { API_URL, PROJECT_PATH } from "./configs/apiurl";
import { ADDING_PROJECT, FETCH_PROJECT, NETWORK_ERROR, UPLOAD_PROJECT } from "./configs/error";
import Skills from "./components/Skills";

const App = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL} ${PROJECT_PATH}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      {console.error(FETCH_PROJECT, error);} // error config
    }
  };

  const handleAddProject = async (project) => {
    try {
      const response = await fetch(`${PROJECT_PATH}`, { // apiurl config
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      if (!response.ok) throw new Error(NETWORK_ERROR); // error config
      setProjects(await response.json());
    } catch (error) {
      console.error(ADDING_PROJECT, error);
      alert(UPLOAD_PROJECT + error.message); // error config
    }
  };

  const handleRemoveProject = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Routes>
      {/* Layout renderer felles elementene */}
      <Route path="/" element={<Layout />}>
        {/* Forsiden viser prosjekter + form */}
        <Route
          index
          element={
            <>
              <CreateProject onAddProject={handleAddProject} />
              <Projects
                projects={projects}
                onRemoveProject={handleRemoveProject}
              />
            </>
          }
        />

        {/* Routes */}
        <Route path="experiences" element={<Experiences />} />
        <Route
          path="contact"
          element={
            <>
              <Contact email="student@hiof.no" />
              <Form />
            </>
          }
        />
        <Route path="skills" element={<Skills/>}/>
      </Route>
    </Routes>
  );
};

export default App;
