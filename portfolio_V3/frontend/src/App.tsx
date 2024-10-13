import { useState, useEffect } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import "./style.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import {Route, Routes } from "react-router-dom";

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
    // Bruk navigasjonsbar til å rotue til andre komponentene
    <>
      <Header
        student="Ridwan Abukar"
        degree="Informasjonssystemer"
        points={500}
      />
      <Routes>
        {/* Router til hjemmeside når logo blir trykket på */}
        <Route
          path="/"
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

        <Route path="erfaringer" element={<Experiences />} />

        <Route
          path="kontakt"
          element={
            <>
              <Contact email={"student@hiof.no"} />
              <Form />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
