import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Posts() {
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profile.username
            FROM posts
            JOIN profile ON posts.profile_id = profile.id`);

  return (
    <div className="feed">
      <SignedIn>
        <div className="posts">
          <h2>Feed</h2>
          {posts.rows.map((post) => {
            return (
              <Link
                href={`feed/${post.id}`}
                key={post.id}
                className="post-block"
              >
                <h4>{post.username} says...</h4>
                <p>{post.content}</p>
                <button className="comment-button">Comment</button>
              </Link>
            );
          })}
        </div>
      </SignedIn>

      <SignedOut>
        <p>You need to sign in to add a post</p>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
