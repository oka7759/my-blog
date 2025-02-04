import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      {" "}
      <section className={styles.top}>
        <div className={styles.titleBox}>
          <h1>
            transition의 벤더 프리픽스가 필요할까? (feat. -webkit-box,
            -ms-flexbox, -o-transition, -ms-transition)
          </h1>
          <div className={styles.date}>
            <span>2024.07.10</span>
            <span>5분</span>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.content}>1</div>
        <div className={styles.side}>
          <div className={styles.bar}>
            <div>
              <p> on bar</p>
              <ul>
                <li>1. 누구</li>
                <li>2. 누구</li>
                <li>3. 누구</li>
                <li>4. 누구</li>
              </ul>
            </div>
            <div className={styles.btns}>
              <button>1</button>
              <button>1</button>
              <button>1</button>
              <button>1</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
