import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";
import Head from "next/head";

export const metadata = {
  title: "Travel & Tourism",
  description: "A perfect holiday experience with memories to cherish",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="w-full overflow-x-hidden" lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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
