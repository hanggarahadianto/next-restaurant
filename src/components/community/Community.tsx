import { ThickArrowDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Community() {
  return (
    <main className="flex justify-center px-16 py-12 mb-12 w-full">
      <div className="grid grid-cols-2 bg-purple-200 w-11/12 rounded-lg shadow-lg">
        <div className="px-16 py-12">
          <p className="text-4xl font-bold">Stay Up to Date</p>
          <p className="text-lg mt-8">
            Get updates on all of our events and be the first to get notified
            when we habve new restaurant.
          </p>
        </div>
        <div className="px-16 py-12">
          <div className="flex">
            <p className="text-purple-900 font-semibold text-2xl mr-1">
              Sign Up Our Restaurant
            </p>
            <ThickArrowDownIcon className="text-purple-900 mt-2 font-bold text-2xl" />
          </div>

          <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
            <Input type="email" placeholder="Email" />
            <Button className="bg-blue-400 hover:bg-blue-500" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
