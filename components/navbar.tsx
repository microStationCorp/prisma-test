import Link from "next/link";

export default function Navbar() {
  return (
    <div className="space-x-4">
      <Link className="capitalize" href="/">
        home
      </Link>
      <Link className="capitalize" href="/new_user">
        new user
      </Link>
      <Link className="capitalize" href="/new_todo">
        new todo
      </Link>
    </div>
  );
}
