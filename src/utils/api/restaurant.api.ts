import { Restaurant } from "@/types/restaurant";

const api_URL = "http://localhost:5000/restaurant/getById";

export const restaurantDetails = async (id: string) => {
  const response = await fetch(`${api_URL}/${id}`);

  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }
  const restaurantDataID: Restaurant[] = await response.json();
  // console.log(restaurantDataID);
  return restaurantDataID;
};

export const getRestaurantData = async () => {
  const res = await fetch("http://localhost:5000/restaurant/get", {
    method: "GET",
    // mode: "no-cors",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const dataRestaurant = await res.json();
  // console.log(dataRestaurant);
  return dataRestaurant.data;
};
