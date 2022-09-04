import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 bg-blue-200">
      <ul className="space-y-4">
        <li>
          <Link href="page1">Page1</Link>
        </li>
        <li>
          <Link href="page2">Page2</Link>
        </li>
      </ul>
    </div>
  );
}
