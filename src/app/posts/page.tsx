import { db } from "@/services/db";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const posts = await db.post.findMany();

  const createPost = async (data: FormData) => {
    "use server";
    const createdPost = await db.post.create({
      data: {
        title: data.get("title") as string,
        authorId: 1,
      },
    });

    if (createdPost) {
      revalidatePath("/posts");
    }
  };

  return (
    <main>
      <div>
        All posts
        <div>
          {posts.map((post) => (
            <p key={post.id}>
              {post.title} <span>This is author id: {post.authorId}</span>
            </p>
          ))}
        </div>
      </div>
      <form action={createPost}>
        <input name="title" type="text" placeholder="title" />
        <button type="submit">Create Post</button>
      </form>
    </main>
  );
}
