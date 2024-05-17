import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CreatePost() {
  const { userId } = auth();
  async function handleCreatePost(formData) {
    "use server";

    const content = formData.get("content");

    const result = await db.query(
      `SELECT id FROM profile WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows[0].id;
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES (${profileId}, '${content}')`
    );
    revalidatePath("/feed");
    redirect("/feed");
  }
  return (
    <div>
      <form className="form" action={handleCreatePost}>
      {/* <h1>New Post</h1> */}
      <h2>Create new post:</h2>
        <textarea name="content" placeholder="New post"></textarea>
        <button className="comment-button">Submit</button>
      </form>
    </div>
  );
}
