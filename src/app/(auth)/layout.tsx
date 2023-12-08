import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import poppins from "@/theme/font";

export const metadata: Metadata = {
  title: "Snap | Sign In",
  description: "Sign in to Snap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <div className="h-screen w-screen">{children}</div>
      </body>
    </html>
  );
}
