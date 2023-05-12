import Question from "./Components/Question";
import styles from "./App.module.css";
export default function App2() {
  return (
    <>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
      <div className={styles.main}>
        <h1>hello world</h1>
        <p className={styles.contents}>hello world</p>
      </div>
    </>
  );
}
