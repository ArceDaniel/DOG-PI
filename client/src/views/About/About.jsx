import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin-logo.png";
import portafolio from "../../assets/domain.png";
import email from "../../assets/mail.png";
import style from "./index.module.css";
export default function About() {
  return (
    <>
      <div className={style.container}>
        <div className={style.about}>
          <div className={style.aboutInfo}>
            <h1>PI-Dogs</h1>
            <p>
              This project was created as part of my fullstack developer
              education at{" "}
              <a
                href="https://www.soyhenry.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Henry bootcamp
              </a>
              . In order to map all the different breeds, this app consumes data
              from{" "}
              <a
                href="https://thedogapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the dogs API
              </a>
              . It is also possible to create a new dog breed, entering a name,
              weight, height, life span and temperaments.
            </p>
            <p>
              Any feedback you can provide will be greatly appreciated. Thank
              you, and don't forget to create your own breed!
            </p>
          </div>
          <h1 className={style.TechTitle}>Used technologies:</h1>
          <div className={style.techContainer}>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt=""
              />
              <h1>Javascript</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt=""
              />
              <h1>HTML</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt=""
              />
              <h1>CSS</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt=""
              />
              <h1>React</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt=""
              />
              <h1>Redux</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt=""
              />
              <h1>Express</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt=""
              />
              <h1>PostgreSQL</h1>
            </div>
          </div>
          <h1 className={style.TechTitle}>Contact: </h1>
          <div className={style.redes_sociales}>
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
              href="mailto:jonathandanielarce9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} alt="email" />
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
    </>
  );
}
