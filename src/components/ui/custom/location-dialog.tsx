import useTelegram from "@/hooks/useTelegram";
import { useEffect, useState } from "react";
import google_map from "../../../assets/google-maps-icon-2048x2048-fxw1yxmx.png";
import waze from "../../../assets/icon-waze.png";
import moovit from "../../../assets/Moovit_Dude-primary.webp";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer";

const LocationDrawer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { webApp } = useTelegram();

  useEffect(() => {
    open && webApp.MainButton.hide();
  }, [open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent
        onClick={() => setOpen(false)}
        className="bg-telegram-white border-telegram-white outline-none ring-0 ring-offset-background"
      >
        <DrawerTitle className="hidden" />
        <DrawerDescription className="hidden" />
        <div className="flex gap-3 py-3  justify-center">
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
            className="flex bg-[#33ccff] items-center justify-center rounded-full w-16 h-16 overflow-hidden shadow-[0_1px_4px_2px] shadow-black/25"
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
      </DrawerContent>
    </Drawer>
  );
};

export default LocationDrawer;
