import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function IndividualPostPage({ params }) {
  const { userId } = auth();

  //selecting all comments where post id is equal to /feed/[id]
  const allComments = await db.query(
    `SELECT * FROM comments WHERE post_id = ${params.id}`
  );
  //getting comment from form and inserting into comments table
  async function handleComments(formData) {
    "use server";
    const content = formData.get("comment");
    console.log(content);
    await db.query(
      `INSERT INTO comments (post_id, content) VALUES (${params.id}, ${content}')` //how do i get profile_id
    );
    // console.log(content.content);

    revalidatePath(`/feed/${params.id}`);
    // redirect(`/feed/${params.id}`);
  }
  //selectng posts where the id of post = /feed/[id]
  const result = await db.query(`SELECT * FROM posts WHERE id = ${params.id}`);
  //   console.log(result.rows[0].content);
  const comment = result.rows[0];
  //selecting username from the profile to be appended to the comments
  const result1 = await db.query(
    `SELECT username FROM profile WHERE clerk_id = '${userId}'`
  );

  //   console.log(result1.rows[0]);
  const name = result1.rows[0].username;
  //   console.log(name);

  return (
    <div>
      <div>
        {/* <p>{content}</p> */}
        <p>Post #{comment.id}</p>
        <p>Post: {comment.content}</p>
        <form className="form" action={handleComments}>
          <label htmlFor="comment">Comment:</label>
          <input type="text" name="comment" placeholder="comment..." />
          <button type="submit" className="comment-button">
            Submit
          </button>
        </form>
      </div>
      <div>
        <h2>Comments:</h2>
        {allComments.rows.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                <strong>{name}</strong> says...
              </p>
              <p>{comment.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
