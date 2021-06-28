import Link from 'next/link';

const links = [
  'control',
  'css-syntax',
  'object-syntax',
  'no-props',
  'no-themed',
];

export default function Home() {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/update-variant/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
