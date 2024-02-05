"use client";
import { deleteUser } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const ClientRemoveForm = ({ initialState }: any) => {
  const [state, formAction] = useFormState(deleteUser, initialState);
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" value={initialState.email} />
      <p aria-live="polite" className="sr-only">
        {state?.email}
      </p>
      <button type="submit">Remove</button>
    </form>
  );
};

export { ClientRemoveForm };
