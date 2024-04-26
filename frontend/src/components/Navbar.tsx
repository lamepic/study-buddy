"use client";

import { Button } from "./ui/button";
import Logo from "./Logo";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import useSWR from "swr";
import { getUser } from "@/services/user";

function Navbar() {
  const { data, error, isLoading } = useSWR("user", getUser);

  return (
    <nav className="container mx-auto mt-4">
      <div className="flex items-center justify-between">
        <Logo />
        {!data ? (
          <Button className="rounded-md px-8" asChild>
            <Link href="/auth/login">Log in</Link>
          </Button>
        ) : (
          <ProfileMenu />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
