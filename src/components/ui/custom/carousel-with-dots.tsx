import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";

export function CarouselWithDots() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="rounded-md overflow-hidden">
      <CarouselContent className="*:w-full *:bg-telegram-hint">
        <CarouselItem className="aspect-square">...</CarouselItem>
        <CarouselItem className="aspect-square">...</CarouselItem>
        <CarouselItem className="aspect-square">...</CarouselItem>
      </CarouselContent>
      <div className="w-full flex justify-center gap-2 py-2 absolute bottom-0 *:rounded-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 w-2 bg-telegram-black",
              index === current && "bg-telegram-link"
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
