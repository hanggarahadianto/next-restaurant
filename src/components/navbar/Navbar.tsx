"use client";

import { signOut, useSession } from "next-auth/react";
import SigninButton from "../auth/SigninButton";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex border-b bg-white w-full z-50">
      <div className="container flex mx-auto justify-between bg-white py-4">
        <Logo />

        {session?.user ? (
          <>
            <div className="flex">
              <p className="mr-20 text-gray-800">Welcome</p>
              <p className="text-gray-600">{session.user.data.name}</p>
            </div>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <SigninButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
