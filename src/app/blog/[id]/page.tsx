import { PostData } from "@/types";
import styles from "./page.module.css";
import markdownToHtml from "@/app/lib/markdownToHtml";
import * as cheerio from "cheerio";
import markdownStyles from "./markdown-styles.module.css";
import { formatDate } from "@/util/formatData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${id}`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allPosts: PostData = await response.json();

  let content = await markdownToHtml(allPosts.content || "");
  const $ = cheerio.load(content);
  const headings: { id: string; text: string }[] = [];
  $("h3").each((i, el) => {
    const headingId = `heading-${i}`;
    $(el).attr("id", headingId);
    headings.push({ id: headingId, text: $(el).text() });
  });

  content = $.html();
  const date = formatDate(allPosts.createdAt);
  return (
    <>
      <section className={styles.top}>
        <div className={styles.titleBox}>
          <h1>{allPosts.title}</h1>
          <div className={styles.date}>
            <span>{date[0]}</span>
            <span>{date[1]}</span>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.content}>
          <div
            className={markdownStyles.markdown}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className={styles.side}>
          <div className={styles.bar}>
            <div>
              <p> on bar</p>
              <ul>
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
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
