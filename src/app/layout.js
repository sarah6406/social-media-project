import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  // UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import "./globals.css";
import { db } from "@/lib/db";
// import Menu from "@/components/Menu";
// import Link from "next/link";
// import Image from "next/image";
import Header from "@/components/Header";
import Form from "@/components/Form";
import HeaderRadix from "@/components/HeaderRadix";

export const metadata = {
  title: "TheHappyHippyHub",
  description: "Next.js Social Media Application",
};
export default async function RootLayout({ children }) {
  const { userId } = auth(); // ie. user_897sdjdhgjfshd or null

  const profiles = await db.query(
    `SELECT * FROM profile WHERE clerk_id = '${userId}'`
  );

  // if the user is logged in AND they don't have an entry in the profiles table, add it
  if (profiles.rowCount === 0 && userId !== null) {
    // add them to our database
    await db.query(`INSERT INTO profile (clerk_id) VALUES ('${userId}')`);
  }
  const hasUsername = profiles.rows[0]?.username !== null ? true : false;

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <p>Please sign in!</p>
              <SignInButton />
            </SignedOut>
          </header>
          <main>
            <SignedOut>{children}</SignedOut>
            <SignedIn>
              <Header />
              <HeaderRadix />
              {/* {hasUsername && children} */}
              {!hasUsername && <Form />}

              <div className="sections">
                {/* <Menu className="left-side-bar" /> */}
                <div className="main-container">{children}</div>
              </div>
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
