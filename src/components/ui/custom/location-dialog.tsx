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
import waze from "../../../assets/icon-waze.png";
import moovit from "../../../assets/Moovit_Dude-primary.webp";
import google_map from "../../../assets/google-maps-icon-2048x2048-fxw1yxmx.png";

const LocationDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { webApp } = useTelegram();

  useEffect(() => {
    open && webApp.MainButton.hide();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onClick={() => setOpen(false)}>
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="flex gap-3 justify-center">
          <button
            onClick={() =>
              webApp.openLink("https://maps.google.com/maps?q=New+York", {
                try_instant_view: true,
              })
            }
            className="flex items-center justify-center rounded-full w-16 h-16 overflow-hidden shadow-[0_1px_4px_2px] shadow-black/25"
          >
            <img src={google_map} />
          </button>
          <button
            onClick={() =>
              webApp.openLink(
                "https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17",
                {
                  try_instant_view: true,
                }
              )
            }
            className="flex items-center justify-center rounded-full w-16 h-16 overflow-hidden shadow-[0_1px_4px_2px] shadow-black/25"
          >
            <img src={waze} />
          </button>
          <button
            onClick={() =>
              webApp.openLink(
                "https://moovit.com/?to=Madison%20Square%20Park&tll=40.742191_-73.98803&metroId=121&lang=en",
                {
                  try_instant_view: true,
                }
              )
            }
            className="flex items-center justify-center rounded-full w-16 h-16 overflow-hidden shadow-[0_1px_4px_2px] shadow-black/25"
          >
            <img src={moovit} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationDialog;
