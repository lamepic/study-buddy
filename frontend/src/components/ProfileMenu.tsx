import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "./Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" alt="profile" />
          <AvatarFallback>
            <Icon name="user" className="" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="space-x-2">
          <Icon name="user" size={15} />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <Icon name="log-out" size={15} />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileMenu;
