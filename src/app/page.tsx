import Link from "next/link";
import { db } from "@/services/db";
import "bootstrap/dist/css/bootstrap.min.css";
import { SubmitButton } from "@/components/Button";
import { ClientRemoveForm } from "@/components/ClientRemoveForm";
import { deleteUser } from "@/actions";

export default async function Home() {
  const users = await db.user.findMany();
  console.log(users);
  return (
    <main>
      <Link href="/users/new">Create user page</Link>
      <ul>
        {users.map((user) => (
          <form key={user.id} action={deleteUser}>
            <input type="text" value={user.email} name="email" />
            <SubmitButton>Remove user</SubmitButton>
          </form>
        ))}
      </ul>
      <div>SERVER ACTIONS WITH CLIENT ACTIONS</div>
      <ul>
        {users.map((user) => (
          <ClientRemoveForm initialState={user} key={user.id} />
        ))}
      </ul>
    </main>
  );
}
