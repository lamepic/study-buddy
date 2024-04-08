import { Button } from "./ui/button";
import Logo from "./Logo";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="container mx-auto mt-4">
      <div className="flex items-center justify-between">
        <Logo />
        <Button className="rounded-xl px-8" asChild>
          <Link href="/auth/login">Log in</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
