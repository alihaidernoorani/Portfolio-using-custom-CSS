import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import "../styles/heroSection.css";

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="container">
        <div className="textContainer">
          <h1 className="title">Hi, I'm Ali Haider</h1>
          <p className="description">
            I'm a <span className="highlight">Frontend Developer</span>
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
        <div className="imageContainer">
          <Image
            src="/images/profile.jpeg"
            alt="Ali Haider's profile picture"
            width={300}
            height={300}
            className="profileImage"
          />
        </div>
      </div>
    </section>
  );
}
