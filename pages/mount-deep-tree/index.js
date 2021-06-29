import Link from 'next/link';

const links = [
  'control',
  'dynamic-props',
  'dynamic-inline-props',
  'static-styles',
  'static-styles-function-syntax',
  'themed',
];

export default function Home() {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/mount-deep-tree/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
