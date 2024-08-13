import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import pic1 from "../../../assets/photo_1_2024-08-13_23-59-04.jpg";
import pic2 from "../../../assets/photo_2_2024-08-13_23-59-04.jpg";
import pic3 from "../../../assets/photo_3_2024-08-13_23-59-04.jpg";
import pic4 from "../../../assets/photo_4_2024-08-13_23-59-04.jpg";
import pic5 from "../../../assets/photo_5_2024-08-13_23-59-04.jpg";

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
      <CarouselContent className="*:w-full">
        <CarouselItem className="aspect-square">
          <img className="object-cover w-full h-full" src={pic1} />
        </CarouselItem>{" "}
        <CarouselItem className="aspect-square">
          <img className="object-cover w-full h-full" src={pic2} />
        </CarouselItem>{" "}
        <CarouselItem className="aspect-square">
          <img className="object-cover w-full h-full" src={pic3} />
        </CarouselItem>{" "}
        <CarouselItem className="aspect-square">
          <img className="object-cover w-full h-full" src={pic4} />
        </CarouselItem>{" "}
        <CarouselItem className="aspect-square">
          <img className="object-cover w-full h-full" src={pic5} />
        </CarouselItem>
      </CarouselContent>

      <div className="w-full flex justify-center gap-2 py-2 absolute bottom-0 *:rounded-full">
        {api &&
          api
            .slideNodes()
            .map((_, index) => (
              <button
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-1.5 w-1.5 bg-telegram-hint opacity-80",
                  index === current && "bg-telegram-primary-text opacity-100"
                )}
              />
            ))}
      </div>
    </Carousel>
  );
}
