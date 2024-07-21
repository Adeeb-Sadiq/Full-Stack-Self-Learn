"use client"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession()
  

  if(session) {
    return <>
    <div className="flex flex-col items-center">
      <div>Signed in as {session.user.email}</div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
    </>
  }

  return (
    <>
    <div className="flex flex-col items-center">
      <div>Not signed in</div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>

    </>
  );
}
