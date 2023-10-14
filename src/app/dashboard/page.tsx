// "use client";

import LandingPage from "@/components/landingpage/LandingPage";
import RestaurantCard from "@/components/restaurant/restaurantCard";
import { RestaurantMaping } from "@/types/restaurant";
import { getRestaurantData } from "@/utils/api/restaurant.api";
import React from "react";
// import DasboardSection from "@/components/section/DasboardSection";

export default async function DashboardPage() {
  const restaurantData: RestaurantMaping[] = await getRestaurantData();
  return (
    <div>
      <LandingPage />
      {/* <DasboardSection /> */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 py-8">
        {restaurantData.map((Restaurant) => (
          <div key={Restaurant.ID}>
            <RestaurantCard
              ID={Restaurant.ID}
              name={Restaurant.name}
              content={Restaurant.content}
              image={Restaurant.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
