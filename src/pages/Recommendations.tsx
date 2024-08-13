import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselWithDots } from "@/components/ui/custom/carousel-with-dots";
import { MapPinned, PenBox, PhoneCall } from "lucide-react";

const Recommendations = () => {
  return (
    <main className="flex flex-col w-full h-full bg-telegram-white items-center gap-3">
      <h1 className="text-telegram-black font-bold text-xl bg-telegram-white fixed py-3 w-full text-center z-10">
        Relevant Apartments
      </h1>
      <section className="w-full min-h-screen mt-[52px] bg-red-400 p-3">
        <Card className="*:p-3">
          <CardHeader>
            <CarouselWithDots />
            <CardTitle>4300 ₪</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="geo:37.786971,-122.399677"
              className="flex gap-2 text-telegram-link"
            >
              <MapPinned size={18} />
              <p>Уша 13 Кирьят Моцкин</p>{" "}
            </a>
            <p>4 комнаты</p>
            <p>1/1 этаж</p>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button className="flex gap-2 items-center w-full">
              <span>Позвонить</span>
              <PhoneCall size={18} />
            </Button>
            <Button className="flex gap-2 items-center w-full">
              <span>Написать</span>
              <PenBox size={18} />
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default Recommendations;
