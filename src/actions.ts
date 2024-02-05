"use server";

import { revalidatePath } from "next/cache";
import { db } from "./services/db";

export const deleteUser = async (data: FormData) => {
  const email = "email" in data ? data.email : data.get("email");
  console.log("this is emaul", email);
  
  const deletedUser = await db.user.delete({
    where: {
      email: email as string,
    },
  });
  if (deletedUser) {
    revalidatePath("/");
  }
};

//example
//https://github.com/vercel/next.js/blob/canary/examples/next-forms/app/delete-form.tsx
