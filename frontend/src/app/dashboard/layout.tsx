import React from "react";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"] });

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(nunito.className, "bg-[#F9FAFB]")}>{children}</body>
    </html>
  );
}

export default Layout;
