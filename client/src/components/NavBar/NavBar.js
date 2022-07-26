import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles["navbar-container"]}>
      <div className={styles["title-container"]}>
        <h1 className={styles["site-title"]}>Track Your Expenses</h1>
      </div>
      <nav>
        <ul>
          <li>
            <button>
              <a href="/">Main Page</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/formregisterexpense">Register expense</a>
            </button>
          </li>
          <li>
            <button>
              <a href="*">Log in/sign up</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
