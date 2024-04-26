import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { StateProvider } from "@/StateProvider/StateProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Buddy",
  description: "Learning companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <StateProvider> */}
        {children}
        <Toaster />
        {/* </StateProvider> */}
      </body>
    </html>
  );
}
