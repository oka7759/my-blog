import styles from "./page.module.css";
export function Left() {
  return (
    <div className={styles.left}>
      <div className={styles.leftBox}>
        <div className={styles.book}>
          <div className={styles.bookFace}>Book</div>
          <div className={styles.lineFirst}></div>
          <div className={styles.lineLast}></div>
        </div>
      </div>
    </div>
  );
}
export function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.number}>1.</div>
      <div className={styles.content}>
        <div className={styles.title}>
          M1 터미널 아키텍처 설정 (arm64, x86_64){" "}
        </div>
        <div className={styles.body}>
          <div className={styles.tags}>
            <span>infra</span>

            <span>infra</span>
            <span>infra</span>
          </div>
          <div className={styles.dateBox}>
            <span className={styles.date}>22.04.28</span>
            <span>3d ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Right() {
  return (
    <div className={styles.right}>
      <div className={styles.description}>
        <h1>안 해본 사람은 있어도 한 번만 하는 사람은 없다.</h1>
        <div className={styles.dateWrap}>
          <span className={styles.date}>23.01.28</span>
          <span className={styles.count}>10개</span>
        </div>
      </div>
      <div className={styles.articleList}>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className={styles.wrap}>
      <Left />
      <Right />
    </div>
  );
}
