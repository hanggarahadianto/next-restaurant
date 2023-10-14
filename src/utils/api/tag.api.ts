import { TagMaping, Tags } from "@/types/tags";

export const getTagByRestaurantId = async (id: string) => {
  const response = await fetch(
    `http://localhost:5000/tag/getbyRestaurantId/${id}`
  );
  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }
  const tagData = await response.json();
  //   console.log(tagData);
  return tagData.data;
};
