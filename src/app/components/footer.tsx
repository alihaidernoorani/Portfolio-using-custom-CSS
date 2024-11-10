import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/footer.css"; 

export default function Footer() {
  return (
    <div className="footerContainer">
      <ul className="socialIcons">
        <li>
          <a href="https://github.com/alihaidernoorani" target="_blank" rel="noopener noreferrer">
            <FaGithub size={36} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alihaidernoorani/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={36} />
          </a>
        </li>
        <li>
          <a href="https://x.com/alihaider_211" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={36} />
          </a>
        </li>
      </ul>
    </div>
  );
}
