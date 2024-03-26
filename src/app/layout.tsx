import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/Navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({
  subsets:["latin"],
  weight:["100","200","300"],
  display:"swap",
  style:['italic','normal'],
  variable:"--font-poppins"
});

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: {
    template:"%s -MyShop",
    default:"MyShop"
  },
  description: "The first appearance in Cambodia.",
  keywords:['shop','ecommerce','sell'],
  openGraph:{
    title:{
      template:"%s -MyShop",
      default:"MyShop"
    },
    images:"https://i.pinimg.com/236x/7c/62/48/7c6248522a065c9b350b37568648c15d.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.variable}`}>
        <NextUILayout>
          <NavbarComponent />
          <Suspense fallback={<LoadingComponent/>}>
            {children}
          </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
