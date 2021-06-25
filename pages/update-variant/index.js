import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/update-variant/one">one</Link>
        </li>
        <li>
          <Link href="/update-variant/two">two</Link>
        </li>
        <li>
          <Link href="/update-variant/three">three</Link>
        </li>
        <li>
          <Link href="/update-variant/four">four</Link>
        </li>
      </ul>
    </div>
  );
}
