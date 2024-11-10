import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/about.css"; // Ensure this file exists

export default function About() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <h1 className="title">About Me</h1>
        <Image
          className="profileImage"
          alt="hero"
          src="/images/profile.jpeg"
          width={300}
          height={300}
        />
        <div className="textContent">
          <h1 className="subtitle">Frontend Developer</h1>
          <p className="description">
            I'm a web developer who crafts elegant digital experiences. My expertise lies in HTML, CSS, JavaScript, and TypeScript. I'm passionate about creating responsive, user-friendly websites that leave a lasting impression.
          </p>
          <div className="socialIcons">
            <a href="https://github.com/alihaidernoorani" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/alihaidernoorani/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="icon" />
            </a>
            <a href="https://x.com/alihaider_211" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} className="icon" />
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}

interface SkillProps {
  name: string;
  percent: number;
}

const skillsData = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 85 },
  { name: 'TypeScript', percent: 80 },
  { name: 'Next.js', percent: 85 },
  { name: 'Tailwind', percent: 80 },
];

function Skills() {
  return (
    <div className="skillsContainer">
      <h2 className="skillsTitle">My Skills</h2>
      <div className="skillsList">
        {skillsData.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ name, percent }: SkillProps) {
  return (
    <div className="skillBarContainer">
      <h3 className="skillName">{name}</h3>
      <div className="skillBarBackground">
        <div className="skillBarFill" style={{ width: `${percent}%` }}></div>
      </div>
      <p className="skillPercent">{percent}% Proficiency</p>
    </div>
  );
}
