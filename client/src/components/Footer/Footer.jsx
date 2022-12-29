import styles from "./index.module.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin-logo.png";
import portafolio from "../../assets/domain.png";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.site_footer}>
        <div className={styles.copyright}>
          <p>
            Page created by ArceDaniel
            <br />
            &copy; 2023. All Rights Reserved.
          </p>
        </div>
        <div className={styles.redes_sociales}>
          <a
            href="https://www.linkedin.com/in/jonathandanielarce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/ArceDaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://arcedaniel.github.io/Portafolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portafolio} alt="portafolio" />
          </a>
        </div>
      </div>
    </div>
  );
}
