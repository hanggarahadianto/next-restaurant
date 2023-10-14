import OrderForm from "@/components/form/OrderForm2";
import { Button } from "@/components/ui/button";

import { MenuMaping } from "@/types/menu";
import { TagMaping } from "@/types/tags";
import { getMenuByRestaurantId } from "@/utils/api/menu.api";
import { restaurantDetails } from "@/utils/api/restaurant.api";
import { getTagByRestaurantId } from "@/utils/api/tag.api";
import { PhoneCall } from "lucide-react";
import React, { FC } from "react";

interface RestaurantProps {
  params: {
    id: string;
  };
}

const RestaurantPage: FC<RestaurantProps> = async ({ params }) => {
  const restaurantData: any = await restaurantDetails(params.id);
  const tagData: TagMaping[] = await getTagByRestaurantId(params.id);
  const menuData: MenuMaping[] = await getMenuByRestaurantId(params.id);
  // console.log(tagData.Title);

  return (
    <div>
      <img
        className="w-full  h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        src={restaurantData.data.image}
        alt={restaurantData.data.name}
      />
      <div className="">
        <div className="flex justify-center content-center bg-red-50 px-8 py-4 ">
          <section className="mt-10 w-7/12 px-4 py-4 bg-slate-100 mr-20 rounded-lg shadow-2xl">
            <div className="border-b-2 border-b-gray-200 py-8">
              <p className="text-3xl font-bold">{restaurantData.data.name}</p>
            </div>

            {/* TAG-------------------------------------------- */}
            <div className="flex py-2">
              <p className="mt-3 mr-3 font-medium">Top Tags :</p>
              {tagData.map((Tag) => (
                <div key={Tag.ID}>
                  <div className="px-4 py-2 border-2 w-40 rounded-3xl flex justify-center content-center mr-2">
                    <p className="text-sm font-semibold">{Tag.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-4 w-11/12">
              <p>{restaurantData.data.content}</p>
            </div>

            {/* MENU */}
            <div className="border-b-2 border-gray-200 py-2">
              <p className="text-xl font-semibold">Popular Dishes</p>
            </div>

            <div className="flex mr-3 mt-5">
              {menuData.map((Menu) => (
                <div key={Menu.ID} className="">
                  <div className="px-4 py-2 border-2 w-40 rounded-3xl content-center mr-2 overflow-hidden ">
                    <img
                      src={Menu.image}
                      className="w-36 h-28 rounded-t-lg content-center object-cover"
                    />

                    <p className="text-sm font-semibold mt-3">{Menu.title}</p>
                    {/* <p>{Menu.content}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          <div className="w-80 bg-slate-100 mt-10 shadow-2xl">
            <div className="px-8 py-4 flex justify-center">
              <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
                <p className="font-semibold">Make Reservation</p>
              </div>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div className="bg-green-200"></div>
              {/* ------------------------- */}
              <OrderForm params={params} />

              {/* ------------------------- */}
            </div>
            <div className="">
              <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
                <p className="font-semibold">Delivery or Takeout</p>
              </div>

              <div className="px-4 py-2">
                <div className="px-4 py-2">Takeout</div>
                <Button className="bg-slate-100 hover:bg-slate-100 border-2 border-green-200">
                  <div className="flex ">
                    <PhoneCall className="text-black" />
                    <p className="text-red-800 ml-2">
                      {restaurantData.data.phone}
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
