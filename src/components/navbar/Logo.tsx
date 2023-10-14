"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="hiddden md:block cursor-pointer"
        src="/images/avika.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
