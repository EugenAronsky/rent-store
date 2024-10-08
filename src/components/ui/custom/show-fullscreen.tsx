import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { X } from "lucide-react";
import useTelegram from "@/hooks/useTelegram";

const ShowFullscreen = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { webApp } = useTelegram();

  useEffect(() => {
    open && webApp.MainButton.hide();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onClick={() => setOpen(false)}
        className="w-full h-full bg-black border-0 p-0 flex items-center *:w-full *:h-fit *:object-contain"
      >
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <DialogClose className="absolute w-fit top-3 left-3 *:!ring-offset-background *:!ring-0 *:!ring-offset-0 *:!outline-none ">
          <X className="stroke-white" />
        </DialogClose>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ShowFullscreen;
