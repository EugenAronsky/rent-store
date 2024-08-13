import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselWithDots } from "@/components/ui/custom/carousel-with-dots";
import useTelegram from "@/hooks/useTelegram";
import { MapPinned, PenBox, PhoneCall, Pin } from "lucide-react";
import { useEffect } from "react";

const Recommendations = () => {
  const { webApp } = useTelegram();
  useEffect(() => {
    webApp.MainButton.setText("Apply Filters");
    webApp.MainButton.show();
  }, []);
  return (
    <main className="flex flex-col w-full h-full bg-telegram-white items-center gap-3">
      <h1 className="text-telegram-black font-bold text-xl bg-telegram-white fixed py-3 w-full text-center z-10">
        Relevant Apartments
      </h1>
      <section className="flex flex-col w-full h-fit mt-[52px] p-3 gap-3 bg-telegram-secondary-white">
        {Array.from({ length: 3 }).map(() => (
          <Card className="bg-white shadow-black/30 shadow-lg">
            <CardHeader className="p-3">
              <CarouselWithDots />
              <CardTitle className="!mt-3 flex justify-between text-lg">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17"
                    )
                  }
                  className="flex gap-2 text-telegram-link items-center underline underline-offset-4"
                >
                  <MapPinned size={22} />
                  <p>Уша 13 Кирьят Моцкин</p>
                </button>
                4300 ₪
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 py-1">
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-black fill-red-500" />
                <p>4 комнаты</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-black fill-red-500" />
                <p>1/1 этаж</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-black fill-red-500" />
                <p>вход с 1.10</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} className="stroke-black fill-red-500" />
                <p>меблирована</p>
              </span>
            </CardContent>
            <CardFooter className="flex gap-3 p-3">
              <Button
                className="flex gap-2 items-center justify-center w-full"
                onClick={() => window.open("tel:+972535242201")}
              >
                Позвонить
                <PhoneCall size={18} />
              </Button>
              <Button className="flex gap-2 items-center w-full">
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
