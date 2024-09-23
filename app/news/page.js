import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/article-1">Article 1</Link>
        </li>
        <li>
          <Link href="/news/article-2">Article 2</Link>
        </li>
        <li>
          <Link href="/news/article-3">Article 3</Link>
        </li>
      </ul>
    </>
  );
}
