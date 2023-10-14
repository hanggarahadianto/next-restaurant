import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  Twitter,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="px-8 py-4 shadow-l bg-orange-50">
      <div className="b grid grid-cols-2">
        <div className="w-96 px-8 py-4 order-b-2 border-gray-100">
          <img src="/images/avika.png" className="w-20 h-12" />
          <p className="py-8">
            Avika's powers the world’s best restaurants, using technology to
            imagine the future of hospitality.
          </p>
          <div className="grid gap-2 grid-cols-4 cursor-pointer">
            <Twitter className="w-16 h-10" />
            <FacebookIcon className="w-16 h-10" />
            <InstagramIcon className="w-16 h-10" />
            <YoutubeIcon className="w-16 h-10" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-2 font-bold px-8 py-4 cursor-pointer mt-5">
            <span>About</span>
            <span>Career</span>
            <span>Newsroom</span>
            <span>Mobile App</span>
          </div>

          <div className="flex gap-y-4 mt-10">
            <div className="">
              <p>Discover Book</p>
              <p>Nearby Restaurant</p>
              <p>Stories</p>
              <p>Guide</p>
              <p>The Hit List</p>
              <p>Events</p>
            </div>
            <div className="ml-40">
              <span className="font-semibold">Contact Us</span>
              <p>Admin Officer : +628534938535</p>
              <p>Email Officer : avika@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
