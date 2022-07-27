import styles from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
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
            {!isLoading && !user && (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </li>
          <li>
            {!isLoading && user && (
              <button onClick={() => logout()}>Log Out</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
