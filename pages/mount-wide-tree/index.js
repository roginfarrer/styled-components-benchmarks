import Link from 'next/link';

const links = [
  'control',
  'dynamic-props',
  'static-styles',
  'static-styles-function-syntax',
  'themed',
  'new-themed',
];

export default function Home() {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/mount-wide-tree/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
