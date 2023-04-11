import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  // Add your project details here
  const projects = [
    {
      title: "Project 1",
      img: "project1-image.jpg",
      blurb: "This is a short blurb for Project 1.",
      gif: "project1-gif.gif",
      description: "This is a three-sentence description for Project 1.",
      siteLink: "https://example.com/project1",
      githubLink: "https://github.com/user/project1",
    },
    {
      title: "Project 2",
      img: "project2-image.jpg",
      blurb: "This is a short blurb for Project 2.",
      gif: "project2-gif.gif",
      description: "This is a three-sentence description for Project 2.",
      siteLink: "https://example.com/project2",
      githubLink: "https://github.com/user/project2",
    },
    // Add more projects here...
  ];

  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  const renderProjectCards = () => {
    const sortedProjects = projects.sort((a, b) => {
      const aIndex = projects.indexOf(a);
      const bIndex = projects.indexOf(b);
      const aIsExpanded = aIndex === expandedProjectIndex;
      const bIsExpanded = bIndex === expandedProjectIndex;

      if (aIsExpanded) return 1;
      if (bIsExpanded) return -1;
      return 0;
    });

    return sortedProjects.map((project, index) => {
      const originalIndex = projects.indexOf(project);
      return (
        <ProjectCard
          key={originalIndex}
          {...project}
          expanded={originalIndex === expandedProjectIndex}
          onExpand={() => handleExpand(originalIndex)}
        />
      );
    });
  };

  return (
    <div id="projects" className="expanded-info">
      <div className="project-grid">{renderProjectCards()}</div>
    </div>
  );
};

export default Projects;
