// import Image from "next/image";
import Link from "next/link";
import "./menu.css"

export default function Menu() {
  return (
    <div className="left-side-bar">
      

      <Link className="nav" href="/">Home</Link>
      <Link className="nav" href="/profile">My Profile</Link>
      <Link className="nav" href="/create-post">New Post</Link>
      <Link className="nav" href="/feed">News Feed</Link>
    </div>
  );
}
