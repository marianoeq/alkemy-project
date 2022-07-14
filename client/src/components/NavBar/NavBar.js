import react from "react";
import styles from "./NavBar.module.css"
export default function NavBar() {
  return (
   <header>
    <div className={styles.siteTitle}>
        <h1>Track expense</h1>
    </div>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Register expense</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Log in/sign up</a></li>
        </ul>
    </nav>
   </header>
  );
}
