import { TagMaping, Tags } from "@/types/tags";

export const getMenuByRestaurantId = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/menu/getbyRestaurantId/${id}`
  );
  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }
  const menuData = await response.json();
  //   console.log(tagData);
  return menuData.data;
};
