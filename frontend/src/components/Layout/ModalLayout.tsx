import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type PropTypes = {
  children: React.ReactNode;
  button: React.JSX.Element;
  title: string;
  onSubmit?: () => void;
  open: boolean;
  setOpen: (value: boolean) => void;
};

function ModalLayout({ children, button, open, setOpen, title }: PropTypes) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default ModalLayout;
