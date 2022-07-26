import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Footer/Footer.module.css";
import {
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <p className={styles["footer-paragraph"]}>Mariano Quiroga 💻 © 2022 </p>

        <div className={styles["footer-icons"]}>
          <a
            href="https://twitter.com/eqmariano19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/mariano-quiroga-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
}
