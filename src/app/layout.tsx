import type { Metadata } from "next";
import "./globals.css";
import SideNavigation from "@/components/sideNav/SideNavigation";

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
        <div className="flex w-screen h-screen">
          <SideNavigation />
          <div className="flex-grow bg-neutral-50">{children}</div>
        </div>
      </body>
    </html>
  );
}
