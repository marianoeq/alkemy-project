
import styles from "./NavBar.module.css"


export default function NavBar() {
  return (
   <header>
    <div className={styles.siteTitle}>
        <h1>Track expense</h1>
    </div>
    <nav>
        <ul>
            <li><a href="/">Main Page</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="/formregister">Register expense</a></li>
            <li><a href="#">Log in/sign up</a></li>
        </ul>
    </nav>
   </header>
  );
}
