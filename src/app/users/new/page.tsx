import { db } from "@/services/db";
import "bootstrap/dist/css/bootstrap.min.css";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const createUserScheme = z.object({
  name: z.string(),
  email: z.string().email(),
});

export default function NewUserPage() {
  const addNewUser = async (data: FormData) => {
    "use server";
    const createUser = createUserScheme.parse({
      name: data.get("name"),
      email: data.get("email"),
    });

    const user = await db.user.create({
      data: createUser,
    });

    if (user) {
      revalidatePath("/");
      redirect("/");
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form className="row" action={addNewUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="name"
            className="form-control"
            id="name"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
