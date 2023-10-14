// import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// async function refreshToken(token: JWT): Promise<JWT> {
//   const res = await fetch(Backend_URL + "/auth/refresh", {
//     method: "POST",
//     headers: {
//       authorization: `Refresh ${token.backendTokens.refreshToken}`,
//     },
//   });
//   console.log("refreshed");

//   const response = await res.json();

//   return {
//     ...token,
//     backendTokens: response,
//   };
// }

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const res = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res.body);
        if (res.status == 400) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        console.log(user.data.email);
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
