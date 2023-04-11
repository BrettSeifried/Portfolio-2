import React, { useState } from "react";
import About from "./Services/About";
import Projects from "./Services/Projects";
import Contact from "./Services/Contact";
import "./App.css";

function App() {
  const [section, setSection] = useState("");

  const toggleInfo = (sectionName) => {
    setSection(section === sectionName ? "" : sectionName);
  };

  return (
    <div className="App">
      <h1 className="accent">Brett Seifried</h1>
      <div className="container">
        <div className="sidebar">
          <div
            className={`box ${section === "projects" ? "open" : ""}`}
            onClick={() => toggleInfo("projects")}
          >
            <h2>Projects</h2>
          </div>

          <div
            className={`box ${section === "about" ? "open" : ""}`}
            onClick={() => toggleInfo("about")}
          >
            <h2>About Me</h2>
          </div>

          <div
            className={`box ${section === "contact" ? "open" : ""}`}
            onClick={() => toggleInfo("contact")}
          >
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="main-content">
          {section === "projects" && <Projects />}
          {section === "about" && <About />}
          {section === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default App;
