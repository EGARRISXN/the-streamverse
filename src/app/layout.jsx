import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/(Movies)/MovieSearchBar";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "StreamVerse",
  description: "Welcome to the StreamVerse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-[#110831] max-w-screen-xl mx-auto`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
