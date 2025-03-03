import { PostData, Series } from "@/types";
import styles from "./page.module.css";
import Link from "next/link";
import AllPost from "./components/AllPost";
export function SeriesItem({ id, title }: Series) {
  return (
    <Link href={`/library/${id}`} className={styles.book} key={id}>
      <div className={styles.bookLineFirst}></div>
      <div className={styles.bookLineSecond}></div>
      <div className={styles.face}>{title}</div>
    </Link>
  );
}

async function AllPostPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}all?page=0&size=10`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allPosts: any = await response.json();
  const posts: PostData[] = allPosts.content;

  return (
    <div className={styles.bottom}>
      <div className={styles.topTitleBox}>
        <h1>All Posts</h1>
      </div>
      <div className={styles.postList}>
        <AllPost posts={posts} />
      </div>
    </div>
  );
}

async function AllSeries() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allSeries: Series[] = await response.json();

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
          {allSeries.map((series: Series) => {
            return <SeriesItem key={series.id} {...series} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <AllSeries />
      <AllPostPage />
    </>
  );
}
