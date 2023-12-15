import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import '../styles/Resume.css';
// import myresume from '../assets/Resume-1.pdf';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Coding Skills</h1>
      <div className="skills">
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} className="icon" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCss3} className="icon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} className="icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faNodeJs} className="icon" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} className="icon" />
          <p>React</p>
        </div>
      </div>
      <div className="download-section">
        <h2>Download Resume</h2>
        <a href="../assets/Resume-1.pdf" download>
          Click here to download my resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
