import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";

export const metadata = {
  title: "Travel & Tourism",
  description: "A perfect holiday experience with memories to cherish",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="overflow-x-hidden" lang="en">
      <body className="font-open-sans bg-slate-800">
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