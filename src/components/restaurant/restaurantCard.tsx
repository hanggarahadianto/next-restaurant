"use client";

import React from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const RestaurantCard: React.FC<RestaurantProps> = (data: RestaurantProps) => {
  const limitedContent = data.content.split(" ").slice(0, 40).join(" ");

  return (
    <div>
      <Link href={`/restaurants/${data.ID}`}>
        <div className="md:max-w-md md:mx-auto md:h-96 shadow-md rounded-xl overflow-hidden relative">
          {/* <CldImage src={data.image} alt={data.name} width="960" height="600" /> */}

          <Image src={data.image} alt={data.name} width="960" height="600" />
          {/* <img
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            src={data.image}
            alt={data.name}
          /> */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
              <div className="flex items-center">
                <StarFilledIcon className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-gray-800">****</span>
              </div>
            </div>
            <p className="abosulute bottom-4 right-4 p-2 z-30">
              {limitedContent}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
