import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/create-and-mount-component/one">one</Link>
        </li>
        <li>
          <Link href="/create-and-mount-component/two">two</Link>
        </li>
        <li>
          <Link href="/create-and-mount-component/three">three</Link>
        </li>
      </ul>
    </div>
  );
}
