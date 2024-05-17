// "use client";
// import React from "react";
// import * as Form from "@radix-ui/react-form";
// // import "@/app/styles.css";
// export default function FormDemo () {
//   const { userId } = auth();
//   async function handleUpdateProfile(formData) {
//     "use server";
//     const username = formData.get("username");
//     const bio = formData.get("bio");
//     console.log(bio);
//     await db.query(
//       `UPDATE profile SET (username, bio) = ('${username}', '${bio}') WHERE clerk_id = '${userId}'`
//     );
//     redirect("/profile");
//   }
//   const result1 = await db.query(
//     `SELECT username FROM profile WHERE clerk_id = '${userId}'`
//   );
//   const result2 = await db.query(
//     `SELECT bio FROM profile WHERE clerk_id = '${userId}'`
//   );
//   console.log(result1);
//   const currentUsername = result1.rows[0];
//   console.log("this is the username:", currentUsername);
//   const bio = result2.rows[0];
//   console.log("this is the bio", bio);
//   revalidatePath("/profile");  
//   return (
//   <Form.Root action={handleUpdateProfile} className="FormRoot">
//     <Form.Field className="FormField" name="email">
//       <div
//         style={{
//           display: "flex",
//           alignItems: "baseline",
//           justifyContent: "space-between",
//         }}
//       >
//         <Form.Label className="FormLabel">Email</Form.Label>
//         <Form.Message className="FormMessage" match="valueMissing">
//           Please enter your email
//         </Form.Message>
//         <Form.Message className="FormMessage" match="typeMismatch">
//           Please provide a valid email
//         </Form.Message>
//       </div>
//       <Form.Control asChild>
//         <input className="Input" type="email" required />
//       </Form.Control>
//     </Form.Field>
//     <Form.Field className="FormField" name="question">
//       <div
//         style={{
//           display: "flex",
//           alignItems: "baseline",
//           justifyContent: "space-between",
//         }}
//       >
//         <Form.Label className="FormLabel">Question</Form.Label>
//         <Form.Message className="FormMessage" match="valueMissing">
//           Please enter a question
//         </Form.Message>
//       </div>
//       <Form.Control asChild>
//         <textarea className="Textarea" required />
//       </Form.Control>
//     </Form.Field>
//     <Form.Submit asChild>
//       <button className="Button" style={{ marginTop: 10 }}>
//         Post question
//       </button>
//     </Form.Submit>
//   </Form.Root>
// );
// }

