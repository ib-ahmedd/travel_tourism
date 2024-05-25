import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";

export const metadata = {
  title: "Travel & Tourism",
  description: "A perfect holiday experience with memories to cherish",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="w-full overflow-x-hidden" lang="en">
      <body className="font-open-sans w-full overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

interface RootLayoutProps {
  children: React.ReactNode;
}
