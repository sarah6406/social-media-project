// import Image from "next/image";
import Link from "next/link";
import "./header.css";
import { UserButton } from "@clerk/nextjs";


export default function Header() {
  return (
    <Link className="header" href="/">
         
      {/* <Image
        src="/assets/happyhippylogo.png"
        alt="logo"
        width={50}
        height={50}
      /> */}
       <UserButton />
    
      <h1>TheHappyHippyHub</h1>
     
    </Link>
  );
}
