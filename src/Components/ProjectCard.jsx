import React, { useState } from "react";

const ProjectCard = ({
  title,
  img,
  blurb,
  gif,
  description,
  siteLink,
  githubLink,
  expanded,
  onExpand,
}) => {
  return (
    <div
      className={`project-card ${expanded ? "expanded" : ""}`}
      onClick={onExpand}
    >
      <h3>{title}</h3>
      {expanded ? (
        <>
          <img src={gif} alt={`${title} gif`} />
          <p>{description}</p>
          <div className="links">
            <a href={siteLink} target="_blank" rel="noreferrer">
              Deployed Site
            </a>
            <a href={githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </>
      ) : (
        <>
          <img src={img} alt={`${title} thumbnail`} />
          <p>{blurb}</p>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
