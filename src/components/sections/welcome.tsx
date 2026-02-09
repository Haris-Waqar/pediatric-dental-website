"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { welcomeContent } from "@/lib/constants";
import heroWave from "../../../public/images/hero-wave.webp";
import toothPink from "../../../public/images/tooth-pink.webp";
import ladybugRed from "../../../public/images/ladybug-red.webp";
import dentistTeam from "../../../public/images/dentist-team.jpg";
import orangeWave from "../../../public/images/orange-wave.png";
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
    color: "bg-blue-400",
    icon: "🦷",
  },
  {
    title: "Cleanings & Exams",
    color: "bg-green-400",
    icon: "🦷",
  },
  {
    title: "Sedation Dentistry",
    color: "bg-purple-600",
    icon: "🦷",
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

      <div className="relative z-[3] px-6 lg:px-[96px]">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="text-center lg:text-right mb-12">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#6c4b8c] font-heading leading-tight">
              Welcome to <span className="text-[#6c4b8c]">Brooks Pediatric Dentistry & Orthodontics</span> in San Antonio, TX!
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center mb-16">
            {/* Team Image - Left */}
            <div className="flex justify-center lg:justify-start relative">
              <div className="relative h-[250px] w-[310px] overflow-hidden rounded-[46%] bg-white shadow-[0_20px_36px_rgba(0,0,0,0.12)] sm:h-[300px] sm:w-[360px] lg:h-[320px] lg:w-[400px]">
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
              <div className="text-[15px] leading-7 text-[#3d2a55] font-content">
                <p className="mb-4">
                  At <strong className="font-semibold">Brooks Pediatric Dentistry & Orthodontics</strong>, we go beyond just caring for teeth — we build confidence, trust, and lifelong healthy habits in every child we see. As your local pediatric dentist in San Antonio, we specialize in compassionate, kid-friendly care tailored to each child's unique dental needs.
                </p>
                <p className="mb-4">
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
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className={`${service.color} rounded-2xl p-8 h-[200px] flex flex-col items-center justify-center text-white shadow-lg`}>
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-center font-heading leading-tight">
                        {service.title.includes("&") ? (
                          <>
                            {service.title.split(" & ")[0]}
                            <br />
                            & {service.title.split(" & ")[1]}
                          </>
                        ) : (
                          service.title
                        )}
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
    </section>
  );
}
