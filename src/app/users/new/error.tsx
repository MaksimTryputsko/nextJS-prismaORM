"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div>
      <h1>We have any problems with creating user.</h1>
      <button onClick={reset}>Back</button>
    </div>
  );
}
