import React, { useState } from "react";
import ModalLayout from "../Layout/ModalLayout";
import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const OpenModalButton = (
  <div className="space-x-2 flex items-center cursor-pointer">
    <User size={15} />
    <span>Profile</span>
  </div>
);

function ProfileModal() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="space-x-2 flex items-center cursor-pointer">
          <User size={15} />
          <span>Profile</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
        </DialogHeader>
        <div>profile</div>
      </DialogContent>
    </Dialog>
    // <ModalLayout
    //   button={OpenModalButton}
    //   open={open}
    //   setOpen={setOpen}
    //   title="Profile"
    // >
    //   <div>profile</div>
    // </ModalLayout>
  );
}

export default ProfileModal;
