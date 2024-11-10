import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/projects.css"; 

export default function Projects() {
  return (
    <section className="projectsSection">
      <div className="projectsContainer">
        <div className="projectsHeader">
          <h1 className="projectsTitle">My Projects</h1>
        </div>
        <div className="projectsGrid">
          <div className="projectCard">
            <div className="projectImageContainer">
              <Image
                width={300}
                height={300}
                alt="project"
                className="projectImage"
                src="/images/governor-sindh.jpg"
              />
            </div>
            <h2 className="projectName">Governor Sindh</h2>
            <p className="projectDescription">
              Created a clone of Governor Sindh Website
            </p>
            <a href="https://github.com/alihaidernoorani/Governor-Sindh-Website" target="_blank" rel="noopener noreferrer" className="projectLink">
                View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
