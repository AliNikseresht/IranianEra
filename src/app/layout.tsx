import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/components/ui/ClientProvider";
import ClientLayout from "../components/layout/ClientLayout";

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
        <main>
          <ClientProvider>
            <ClientLayout>{children}</ClientLayout>
          </ClientProvider>
        </main>
      </body>
    </html>
  );
}
