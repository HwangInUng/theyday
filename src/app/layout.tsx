import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";

export const metadata: Metadata = {
  title: {
    template: "%s | admin",
    default: "admin",
  },
  description: "cake-admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNavigation />
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
