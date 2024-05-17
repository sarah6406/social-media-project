
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Form() {
  const { userId } = auth();
  async function handleUpdateProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");
    console.log(bio);
    await db.query(
      `UPDATE profile SET (username, bio) = ('${username}', '${bio}') WHERE clerk_id = '${userId}'`
    );
    redirect("/profile");
  }
  const result1 = await db.query(
    `SELECT username FROM profile WHERE clerk_id = '${userId}'`
  );
  const result2 = await db.query(
    `SELECT bio FROM profile WHERE clerk_id = '${userId}'`
  );
  console.log(result1);
  const currentUsername = result1.rows[0];
  console.log("this is the username:", currentUsername);
  const bio = result2.rows[0];
  console.log("this is the bio", bio);
  revalidatePath("/profile");
  return (
    <div>
      <p>Current User Name: {currentUsername.username}</p>
      <p>Bio: {bio.bio}</p>
      <form className="form" action={handleUpdateProfile}>
      <h2>Update Profile:</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="username..." />
        <label htmlFor="bio">Biography:</label>
        <textarea type="text" name="bio" placeholder="bio..." />
        <button type="submit" className="comment-button">
          Submit
        </button>
      </form>
   
    </div>
  );
}
