import styles from "./page.module.css";
export function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topTitleBox}>
        <h1>Blog</h1>
        <div className={styles.topSubTitleBox}>
          <p>개발하면서 탐구한 것을 소소하게 기록하는 공간입니다.</p>
          <p>
            시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수
            있습니다🧐
          </p>
        </div>
        <div className={styles.searchBox}>
          <input></input>
        </div>
        <div className={styles.bookBox}>
          <div className={styles.book}>
            <div className={styles.bookLineFirst}></div>
            <div className={styles.bookLineSecond}></div>
            <div className={styles.face}>BOOK!</div>
          </div>
          <div className={styles.book}>
            <div className={styles.bookLineFirst}></div>
            <div className={styles.bookLineSecond}></div>
            <div className={styles.face}>BOOK!</div>
          </div>
          <div className={styles.book}>
            <div className={styles.bookLineFirst}></div>
            <div className={styles.bookLineSecond}></div>
            <div className={styles.face}>BOOK!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Buttom() {
  return (
    <div className={styles.bottom}>
      <div className={styles.topTitleBox}>
        <h1>All Posts</h1>
      </div>
      <div className={styles.postList}>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
            <div className={styles.date}>
              <span>23.0..29</span>
              <span>10 ago</span>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <h2>블로그에 RSS, JSON Feed 추가하기</h2>
          <p>안녕하세요 제 블로그 글입니다.</p>
          <div className={styles.postInfo}>
            <div className={styles.tags}>
              <span>css</span>
              <span>nextjs</span>
            </div>
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
      <Buttom />
    </>
  );
}
