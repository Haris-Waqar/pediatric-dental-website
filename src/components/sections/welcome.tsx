"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { welcomeContent } from "@/lib/constants";
import heroWave from "../../../public/images/hero-wave.webp";
import toothPink from "../../../public/images/tooth-pink.webp";
import dentistTeam from "../../../public/images/dentist-team.jpg";
import orangeWave from "../../../public/images/orange-wave.webp";
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
    color: "bg-[#4db8e8]",
    icon: "/images/tooth-children-dentistry.svg",
  },
  {
    title: "Cleanings & Exams",
    color: "bg-[#8dc63f]",
    icon: "/images/tooth-cleanings-exams.svg",
  },
  {
    title: "Sedation Dentistry",
    color: "bg-[#6c4b8c]",
    icon: "/images/tooth-sedation-dentistry.svg",
  },
  {
    title: "Orthodontics",
    color: "bg-[#f5821f]",
    icon: "/images/tooth-children-dentistry.svg",
  },
  {
    title: "Dental Emergencies",
    color: "bg-[#ec008c]",
    icon: "/images/tooth-cleanings-exams.svg",
  },
  {
    title: "Special Needs Dentistry",
    color: "bg-[#e31a1a]",
    icon: "/images/tooth-sedation-dentistry.svg",
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
    <section className="relative bg-white pt-[100px] overflow-hidden">
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

      <div className="relative z-[3] px-6 lg:px-[96px]">
        <div className="mx-auto max-w-6xl">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center mb-16">
            {/* Team Image - Left */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="relative w-[320px] h-[295px] sm:w-[420px] sm:h-[387px] lg:w-[562px] lg:h-[517px] overflow-hidden rounded-[50%] bg-white shadow-[0_16px_30px_rgba(0,0,0,0.18)]">
                  <Image
                    src={dentistTeam}
                    alt="Brooks Pediatric Dentistry team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Image
                  src={toothPink}
                  alt=""
                  width={80}
                  height={80}
                  className="absolute -left-8 -top-8"
                />
              </div>
            </div>

            {/* Text Content - Right */}
            <div className="text-left">
              <h2 className="text-[37.5px] font-bold text-[#6c4b8c] font-heading leading-tight">
                Welcome to <span className="text-[#6c4b8c]">Brooks Pediatric Dentistry & Orthodontics</span> in San Antonio, TX!
              </h2>
              <div className="mt-4 space-y-4 text-[16.85px] leading-7 text-[#3d2a55]">
                <p>
                  At <strong className="font-semibold">Brooks Pediatric Dentistry & Orthodontics</strong>, we go beyond just caring for teeth — we build confidence, trust, and lifelong healthy habits in every child we see. As your local pediatric dentist in San Antonio, we specialize in compassionate, kid-friendly care tailored to each child's unique dental needs.
                </p>
                <p>
                  Whether it's your child's first visit or you're searching for a Kids Dentist Near Me, we're proud to serve families with expert pediatric care and gentle orthodontics right here in Brooks City Base and surrounding neighborhoods.
                </p>
              </div>
            </div>
          </div>

          {/* Service Carousel */}
          <div className="mt-16 relative px-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className={`${service.color} rounded-[2.5rem] p-[2.5rem] w-full lg:w-[334px] h-[277px] flex flex-col items-center justify-center text-white shadow-lg`}>
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={90}
                        height={90}
                        className="mb-4"
                      />
                      <h3 className="text-[37.5px] font-bold text-center font-heading leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white border-2 border-[#6c4b8c] text-[#6c4b8c] hover:bg-[#6c4b8c] hover:text-white" />
              <CarouselNext className="right-0 bg-white border-2 border-[#6c4b8c] text-[#6c4b8c] hover:bg-[#6c4b8c] hover:text-white" />
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-[#6c4b8c]" : "bg-[#6c4b8c]/30 border border-[#6c4b8c]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Orange Wave - normal flow so it always sits below carousel */}
      <div className="w-full pointer-events-none mt-20">
        <Image
          src={orangeWave}
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
