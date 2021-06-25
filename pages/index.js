import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/create-and-mount-component">
            Create and mount a new button
          </Link>
        </li>
      </ul>
    </div>
  );
}
