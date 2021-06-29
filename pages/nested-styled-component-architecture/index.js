import Link from 'next/link';

const links = ['control', 'simpler'];

export default function Home() {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/nested-styled-component-architecture/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
