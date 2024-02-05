import { db } from "@/services/db";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function SinglePostPage({ params }: { params: Params }) {
  console.log(params);
  const posts = await db.post.findMany({
    where: {
      authorId: +params.id,
    },
  });
  console.log("Posts by id", posts);

  return (
    <div>
      <h1>{params.id}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
