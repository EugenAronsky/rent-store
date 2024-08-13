import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselWithDots } from "@/components/ui/custom/carousel-with-dots";
import { MapPinned, PenBox, PhoneCall, Pin } from "lucide-react";

const Recommendations = () => {
  return (
    <main className="flex flex-col w-full h-full bg-telegram-white items-center gap-3">
      <h1 className="text-telegram-black font-bold text-xl bg-telegram-white fixed py-3 w-full text-center z-10">
        Relevant Apartments
      </h1>
      <section className="flex flex-col w-full h-fit mt-[52px] bg-red-400 p-3 gap-3">
        {Array.from({ length: 3 }).map(() => (
          <Card>
            <CardHeader className="p-3">
              <CarouselWithDots />
              <CardTitle className="!mt-3 flex justify-between text-xl">
                <a
                  href="https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll="
                  className="flex gap-2 text-telegram-link items-center underline underline-offset-4"
                >
                  <MapPinned />
                  <p>Уша 13 Кирьят Моцкин</p>
                </a>
                4300 ₪
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 py-1.5 grid grid-cols-2">
              <span className="flex gap-2 items-center">
                <Pin size={18} />
                <p>4 комнаты</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} />
                <p>1/1 этаж</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} />
                <p>вход с 1.10</p>
              </span>
              <span className="flex gap-2 items-center">
                <Pin size={18} />
                <p>меблирована</p>
              </span>
            </CardContent>
            <CardFooter className="flex gap-3 p-3">
              <Button className="flex gap-2 items-center w-full">
                <a href="tel:0535242201">Позвонить</a>
                <PhoneCall size={18} />
              </Button>
              <Button className="flex gap-2 items-center w-full">
                <a href="https://t.me/@sergioboiko">Написать</a>
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
