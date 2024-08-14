import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselWithDots } from "@/components/ui/custom/carousel-with-dots";
import LocationDialog from "@/components/ui/custom/location-dialog";
import useTelegram from "@/hooks/useTelegram";
import { MapPinned, PenBox, PhoneCall, Pin } from "lucide-react";
import { useEffect } from "react";

const Recommendations = () => {
  const { webApp } = useTelegram();

  useEffect(() => {
    webApp.MainButton.setText("Apply Filters");
    // webApp.MainButton.show();
  }, []);

  return (
    <main className="flex flex-col w-full h-full bg-telegram-white items-center gap-3">
      <h1 className="text-telegram-black font-bold text-xl bg-telegram-white fixed py-3 w-full text-center z-10 shadow-telegram-black/30 shadow-md">
        Relevant Apartments
      </h1>
      <section className="flex flex-col w-full h-fit mt-[52px] p-3 gap-3 bg-telegram-secondary-white">
        {Array.from({ length: 3 }).map(() => (
          <Card className="bg-telegram-white border-telegram-white shadow-telegram-black/30 shadow-lg">
            <CardHeader className="p-3">
              <CarouselWithDots />
              <CardTitle className="!mt-3 flex justify-between text-base text-telegram-black items-center">
                <LocationDialog>
                  <div className="flex gap-2 bg-telegram-primary active:text-telegram-primary active:bg-telegram-secondary-white transition-all text-telegram-primary-text items-center px-2 py-1 rounded-md">
                    <MapPinned size={20} />
                    <p>Уша 13 Кирьят Моцкин</p>
                  </div>
                </LocationDialog>
                4300 ₪
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 py-1 text-telegram-black">
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-telegram-black fill-red-500" />
                <p>4 комнаты</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-telegram-black fill-red-500" />
                <p>1/1 этаж</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-telegram-black fill-red-500" />
                <p>вход с 1.10</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-telegram-black fill-red-500" />
                <p>меблирована</p>
              </span>
            </CardContent>
            <CardFooter className="flex gap-3 p-3">
              <Button
                className="flex active:bg-telegram-secondary-white active:text-telegram-black transition-all gap-2 items-center justify-center w-full bg-telegram-black text-telegram-white hover:bg-telegram-black"
                onClick={() => webApp.openLink(new URL("tel:13421312321").href)}
              >
                Позвонить
                <PhoneCall size={18} />
              </Button>
              <Button className="flex active:bg-telegram-secondary-white active:text-telegram-black transition-all gap-2 items-center w-full bg-telegram-black text-telegram-white hover:bg-telegram-black">
                <a href="https://t.me/sergioboiko?text=Квартира по адресу — Уша 13 Кирьят Моцкин ещё реливантна?">
                  Написать
                </a>
                <PenBox size={18} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Recommendations;
