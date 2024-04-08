import Link from "next/link";
import Icon from "../Icon";
import { Button } from "../ui/button";
import Footer from "../Footer";

type PropType = {
  children: React.ReactNode;
  currentPageName: string;
  pageName: string;
  pageLink: string;
};

function AuthLayout({
  children,
  currentPageName,
  pageName,
  pageLink,
}: PropType) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="px-12 mt-5">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Icon name="x" className="cursor-pointer" />
            </Link>
            <Button className="rounded-xl px-8" asChild>
              <Link href={pageLink}>{pageName}</Link>
            </Button>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center min-h-[70vh]">
          <div className="space-y-10 w-full grid place-items-center">
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
