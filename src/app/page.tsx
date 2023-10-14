import Navbar from "@/components/navbar/Navbar";

import DashboardPage from "./dashboard/page";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="">
      <DashboardPage />
    </main>
  );
}
