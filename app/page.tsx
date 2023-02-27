import styles from "../styles/index.module.css";
import * as Lang from "../lang/lang";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <div className={styles.main}>
        <h1 className={styles.mainText}>{Lang["ko_KR"].nothing}</h1>
      </div>
    </div>
  );
}
