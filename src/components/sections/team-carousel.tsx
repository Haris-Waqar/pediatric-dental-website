"use client";


import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, FileText, MapPin } from "lucide-react";

export function TeamCarousel() {
  const cards = [
    {
      title: "Children's\nDentistry",
      color: "#4aa3e5",
      icon: <Calendar className="h-10 w-10" />,
    },
    {
      title: "Cleanings &\nExams",
      color: "#a6ce39",
      icon: <FileText className="h-10 w-10" />,
    },
    {
      title: "Sedation\nDentistry",
      color: "#7C51A1",
      icon: <MapPin className="h-10 w-10" />,
    },
  ];

  return (
    <section className="bg-white pb-16">
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-6">
              {cards.map((card) => (
                <CarouselItem
                  key={card.title}
                  className="pl-6 md:basis-1/3"
                >
                  <div
                    className="rounded-[22px] px-8 py-8 text-center text-white shadow-[0_14px_28px_rgba(0,0,0,0.14)]"
                    style={{ background: card.color }}
                  >
                    <div className="mb-4 flex justify-center">{card.icon}</div>
                    <p className="whitespace-pre-line text-lg font-semibold">
                      {card.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1/2 top-[110%] -translate-x-[70px] border-[#7C51A1] text-[#7C51A1] hover:bg-[#7C51A1] hover:text-white" />
            <CarouselNext className="left-1/2 top-[110%] translate-x-[70px] border-[#7C51A1] text-[#7C51A1] hover:bg-[#7C51A1] hover:text-white" />
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#7C51A1]" />
            <span className="h-2 w-2 rounded-full bg-[#7C51A1]/40" />
            <span className="h-2 w-2 rounded-full bg-[#7C51A1]/40" />
            <span className="h-2 w-2 rounded-full bg-[#7C51A1]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
