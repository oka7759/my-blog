import "./globals.css";
import "./reset.css";
import Link from "next/link";
import style from "@/app/layout.module.css";
import { QueryClient } from "@tanstack/react-query";

export function Header() {
  return (
    <nav className={style.nav}>
      <div className={style.menu}>
        <Link href="/">😆</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/code"}>Code Piece</Link>
        <Link href={"/library"}>Library</Link>
      </div>
      <div className={style.buttons}>
        <button className={style.search}>
          <span>Search</span>
          <div>⌘ K</div>
        </button>
        <button className={style.thema}>📀 </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className={style.snsbox}>
        <span>💻</span>
        <span>💻</span>
        <span>💻</span>
      </div>
      <div className={style.webinfo}>
        © 2022-2025 bepyan blog Powered by Next.js
      </div>
    </footer>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <Header />
          <main> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
