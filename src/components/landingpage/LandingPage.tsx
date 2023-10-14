import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function LandingPage() {
  return (
    <div className="relative bg-blue-200 w-full h-[35rem] grid grid-cols-10 shadow-blue-200 shadow-md">
      <div className="col-span-4">
        <div className="px-16 py-12 mt-20">
          <p className="text-5xl font-bold ">
            Discover The Best Restaurant Here
          </p>
          <div className="mt-20">
            <Button className="bg-blue-400 hover:bg-blue-500 h-16 hover:text-gray-200">
              <p>Get Started</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="">
          <Image
            className="absolute -right-5 bottom-1"
            src="/images/landingpage-image.png"
            height={750}
            width={750}
            alt="landingpage"
          />
        </div>
      </div>
      <div className="bg-orange-400 w-96 cols-span-2" />
    </div>
  );
}
