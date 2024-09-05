"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const is404Page =
    pathname.startsWith("/404") || pathname.startsWith("/not-found");

  return (
    <div className="p-4">
      {!is404Page && <Navbar />}
      {children}
      {!is404Page && <Footer />}
    </div>
  );
}
