export default function BasicLayout(props) {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-32 bg-yellow-50">
        <div>sidebar</div>
      </div>
      <div className="w-full">
        <div className="h-16 bg-blue-100">topbar</div>
        <div className="m-4">{props.children}</div>
      </div>
    </div>
  );
}
