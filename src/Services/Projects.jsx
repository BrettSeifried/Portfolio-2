import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="expanded-info">
      {/* Project 1 */}
      <h3>Project 1</h3>
      <p>Project 1 short description</p>
      <img src="project1.png" alt="Project 1" className="project-img" />
      <p>Project 1 expanded description</p>
      <a href="https://deployed-site1.com">Deployed Site</a> |{" "}
      <a href="https://github.com/project1">GitHub</a>
      {/* Project 2 */}
      <h3>Project 2</h3>
      <p>Project 2 short description</p>
      <img src="project2.png" alt="Project 2" className="project-img" />
      <p>Project 2 expanded description</p>
      <a href="https://deployed-site2.com">Deployed Site</a> |{" "}
      <a href="https://github.com/project2">GitHub</a>
      {/* Project 3 */}
      <h3>Project 3</h3>
      <p>Project 3 short description</p>
      <img src="project3.png" alt="Project 3" className="project-img" />
      <p>Project 3 expanded description</p>
      <a href="https://deployed-site3.com">Deployed Site</a> |{" "}
      <a href="https://github.com/project3">GitHub</a>
    </div>
  );
};

export default Projects;
