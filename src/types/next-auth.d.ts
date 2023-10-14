import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      data: {
        id: number;
        name: string;
        email: string;
      };
      token;
      status;
    };
  }
}
