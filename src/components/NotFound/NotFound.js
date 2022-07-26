
import styles from "./NotFound.module.css";
export default function NotFound() {
  return (
    <>
      <div className={styles["notfound-container"]}>
        <h2 className={styles["notFound"]}>We couldn't find your page 😔</h2>
      </div>
    </>
  );
}
