import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mindsestate - Your Trusted Real Estate Partner in Ahmedabad",
  description: "Find your perfect home in Ahmedabad with personalized assistance and expert market insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar Component */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
