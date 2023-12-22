import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import NavBar from "@/components/NavBar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utilities/SessionProvider";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "StreamVerse",
  description: "Welcome to the StreamVerse.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-[#110831] max-w-screen-xl mx-auto`}
      >
        <SessionProvider session={session}>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
