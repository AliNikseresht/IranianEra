import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "Iranian Era",
  description: "Iranian Era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div>
          <main>
            <ClientProvider>
              <Navbar />
              {children}
            </ClientProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
