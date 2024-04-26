import Link from "next/link";
import { Button } from "../ui/button";
import Footer from "../Footer";
import { X } from "lucide-react";

type PropType = {
  children: React.ReactNode;
  currentPageName: string;
  nextPageName: string;
  nextPageLink: string;
};

function AuthLayout({
  children,
  currentPageName,
  nextPageName,
  nextPageLink,
}: PropType) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="px-12 mt-5">
          <div className="flex items-center justify-between">
            <Link href="/">
              <X className="cursor-pointer" />
            </Link>
            <Button className="rounded-xl px-8" asChild>
              <Link href={nextPageLink}>{nextPageName}</Link>
            </Button>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center min-h-[70vh]">
          <div className="space-y-10 w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-slate-800">
              {currentPageName}
            </h1>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
