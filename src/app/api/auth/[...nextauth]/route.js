import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utilities/db";
import bcrypt from "bcryptjs";

export const authConfig = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, request) {
        await connect();
        if (!credentials) return null;
        try {
          const user = await User.findOne({ username: credentials.username });

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("Username or Password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  databases: process.env.MONGODB_URI,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signin: "/signin",
    newUser: "/signup",
  },
  // callbacks: {
  //   signin: async ({ user }) => {
  //     if (user?.provider == "credentials") {
  //       return true;
  //     }
  //     try {
  //       const existingUser = await User.findOne({ username: user.username });

  //       if (!existingUser) {
  //         console.error("User not found during sign-in");
  //         return false;
  //       }

  //       return true;
  //     } catch (error) {
  //       console.error("Error during sign-in", error);
  //       return false;
  //     }
  //   },
  // },
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
