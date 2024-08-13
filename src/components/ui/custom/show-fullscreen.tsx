import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../dialog";
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
        <DialogClose className="absolute top-3 left-3">
          <X className="stroke-white" />
        </DialogClose>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ShowFullscreen;
