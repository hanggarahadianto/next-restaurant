"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.data.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <Link href={"/api/auth/signin"}>
      <Button className="bg-green-600">
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </Link>
  );
};

export default SigninButton;
