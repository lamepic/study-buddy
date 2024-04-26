"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Cookies from "js-cookie";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import ProfileModal from "./Modal/ProfileModal";
import { Dialog } from "./ui/dialog";
import { logout } from "@/services/auth";

function ProfileMenu() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    Cookies.remove("access_token");
    router.replace("/auth/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" alt="profile" />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <ProfileModal />
        </DropdownMenuItem> */}
        <DropdownMenuItem
          className="space-x-2 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut size={15} />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileMenu;
