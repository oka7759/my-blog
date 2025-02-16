import styles from "./page.module.css";
export function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topTitleBox}>
        <h1>Code</h1>
        <div className={styles.topSubTitleBox}>
          <p>개발하면서 실제 사용되었던 코드 조각들 입니다.</p>
          <p>
          간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 🍯
          </p>
        </div>
        <div className={styles.tagBar}>
          <div className={styles.tagBtn}>ALL <span>10</span></div>
          <div className={styles.tagBtn}>CSS <span>10</span></div>
          <div className={styles.tagBtn}>JavaScript <span>10</span></div>
        </div>
    
      </div>
    </div>
  );
}

export function Bottom() {
  return (
    <div className={styles.bottom}>
      <div className={styles.postList}>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>

            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>
       
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>

            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>
   
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>
  
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>

            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <div className={styles.postInfo}>
   
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Top />
      <Bottom />
    </>
  );
}
