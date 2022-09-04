import Link from "next/link";

export default function BasicLayout(props) {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-32 bg-yellow-50 p-4">
        <div>
          <ul className="space-y-4">
            <li>
              <Link href="page1">Page1</Link>
            </li>
            <li>
              <Link href="page2">Page2</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="h-16 bg-blue-100">topbar</div>
        <div className="m-4">{props.children}</div>
      </div>
    </div>
  );
}
