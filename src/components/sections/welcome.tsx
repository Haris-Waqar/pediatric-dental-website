"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { welcomeContent } from "@/lib/constants";
import heroWave from "../../../public/images/hero-wave.webp";
import toothPink from "../../../public/images/tooth-pink.webp";
import ladybugRed from "../../../public/images/ladybug-red.webp";
import dentistTeam from "../../../public/images/dentist-team.jpg";
import orangeWave from "../../../public/images/orange-wave.png";
import serviceChildren from "../../../public/images/service-children.svg";
import serviceCleanings from "../../../public/images/service-cleanings.svg";
import serviceSedation from "../../../public/images/service-sedation.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Children's Dentistry",
    color: "bg-[#00aeef]",
    icon: serviceChildren,
  },
  {
    title: "Cleanings & Exams",
    color: "bg-[#a6ce39]",
    icon: serviceCleanings,
  },
  {
    title: "Sedation Dentistry",
    color: "bg-[#7c51a1]",
    icon: serviceSedation,
  },
  {
    title: "Orthodontics",
    color: "bg-[#ec008c]",
    icon: serviceChildren,
  },
];

export function Welcome() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative bg-white pb-20 pt-[100px] overflow-hidden">
      {/* Top Wave Background */}
      <div className="absolute top-0 left-0 right-0 z-0 w-full pointer-events-none">
        <Image
          src={heroWave}
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto scale-y-[-1] opacity-30"
          priority
        />
      </div>

      {/* Bottom Orange Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 z-0 w-full pointer-events-none">
        <Image
          src={orangeWave}
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto scale-y-[-1]"
          priority
        />
      </div>

      {/* Pink Tooth Icon - Top Right */}
      <div className="absolute top-[0px]  right-[10%] z-[2] hidden lg:block pointer-events-none">
        <Image
          src={toothPink}
          alt=""
          width={100}
          height={100}
          className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
        />
      </div>

      <div className="relative z-[3] px-[5%]">
        <div className="mx-auto max-w-[80rem]">
          {/* Title */}
          <div className="text-left mb-12">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal text-[#7c51a1] font-heading leading-tight">
              {welcomeContent.title}
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center mb-16">
            {/* Team Image - Left */}
            <div className="flex justify-center lg:justify-start relative">
              <div className="relative h-[260px] w-[320px] overflow-hidden rounded-[46%] bg-white shadow-[0_20px_36px_rgba(0,0,0,0.12)] sm:h-[320px] sm:w-[380px] lg:h-[360px] lg:w-[420px]">
                <Image
                  src={dentistTeam}
                  alt="Brooks Pediatric Dentistry team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Ladybug - Bottom Right of Image */}
              <div className="absolute -bottom-4 -right-4 hidden lg:block z-10">
                <Image
                  src={ladybugRed}
                  alt=""
                  width={64}
                  height={64}
                  className="w-[50px] h-[50px] lg:w-[64px] lg:h-[64px]"
                />
              </div>
            </div>

            {/* Text Content - Right */}
            <div className="text-left space-y-4">
              <div
                className="text-[18px] leading-7 text-[#3d2a55] font-content"
                dangerouslySetInnerHTML={{ __html: welcomeContent.description }}
              />
            </div>
          </div>

          {/* Service Carousel */}
          <div className="mt-16 relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className={`${service.color} rounded-[2.5rem] p-10 h-[240px] flex flex-col items-center justify-center text-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]`}>
                      <Image
                        src={service.icon}
                        alt=""
                        width={96}
                        height={96}
                        className="w-24 h-24 mb-6"
                      />
                      <h3 className="text-[28px] font-normal text-center font-heading leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 bg-white border-2 border-[#7c51a1] text-[#7c51a1] hover:bg-[#7c51a1] hover:text-white" />
              <CarouselNext className="-right-4 bg-white border-2 border-[#7c51a1] text-[#7c51a1] hover:bg-[#7c51a1] hover:text-white" />
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-[#7c51a1]" : "bg-[#7c51a1]/30 border border-[#7c51a1]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
