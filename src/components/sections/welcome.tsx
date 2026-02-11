"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroWave from "../../../public/images/hero-wave.webp";
import toothPink from "../../../public/images/tooth-pink.webp";
import ladybugSmall from "../../../public/images/ladybug-red.webp";
import dentistTeam from "../../../public/images/dentist-team.jpg";
import orangeWave from "../../../public/images/orange-wave.webp";
import welcomeBg from "../../../public/images/welcome-bg.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  { title: "Children's Dentistry", color: "bg-[#4db8e8]", icon: "/images/tooth-children-dentistry.svg", href: "/services/preventive-general-dentistry" },
  { title: "Cleanings & Exams", color: "bg-[#8dc63f]", icon: "/images/tooth-cleanings-exams.svg", href: "/services/preventive-general-dentistry/exams-cleaning" },
  { title: "Sedation Dentistry", color: "bg-[#6c4b8c]", icon: "/images/tooth-sedation-dentistry.svg", href: "/services/sedation-dentistry" },
  { title: "Orthodontics", color: "bg-[#f5821f]", icon: "/images/tooth-children-dentistry.svg", href: "/services/orthodontics" },
  { title: "Dental Emergencies", color: "bg-[#ec008c]", icon: "/images/tooth-cleanings-exams.svg", href: "/services/other/emergency-dentist" },
  { title: "Special Needs", color: "bg-[#e31a1a]", icon: "/images/tooth-sedation-dentistry.svg", href: "/services/other/special-needs-dentistry" },
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
    <section className="relative bg-white  overflow-hidden">
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
      <div className="absolute top-[0px]  right-[5%] z-[2] hidden lg:block pointer-events-none">
        <Image
          src={toothPink}
          alt=""
          width={100}
          height={100}
          className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
        />
      </div>

      <div className="relative z-[3]">
        <div className="mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center mb-16 px-[7%]">
            {/* Team Image - Left */}
            <div className="flex justify-center ">
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
                  src={ladybugSmall}
                  alt=""
                  width={92}
                  height={92}
                  className="absolute -right-8 bottom-8"
                />
              </div>
            </div>

            {/* Text Content - Right */}
            <div 
              className="text-left relative bg-cover bg-center bg-no-repeat p-6 lg:p-8 rounded-lg"
              style={{ backgroundImage: `url(${welcomeBg.src})` }}
            >
              <h2 className="heading-style-h3 font-normal text-[#6c4b8c]  leading-tight">
                Welcome to <span className="text-[#6c4b8c]">Brooks Pediatric Dentistry & Orthodontics</span> in San Antonio, TX!
              </h2>
              <div className="mt-4 text-size-medium leading-7 text-[#3d2a55]">
                <p>
                  At <strong >Brooks Pediatric Dentistry & Orthodontics</strong>, we go beyond just caring for teeth — we build confidence, trust, and lifelong healthy habits in every child we see. As your local pediatric dentist in San Antonio, we specialize in compassionate, kid-friendly care tailored to each child's unique dental needs. Whether it's your child's first visit or you're searching for a Kids Dentist Near Me, we're proud to serve families with expert pediatric care and gentle orthodontics right here in Brooks City Base and surrounding neighborhoods.
                </p>
              </div>
            </div>
          </div>

          {/* Service Carousel - Brooks team5_item + testimonial9_slide styles */}
          <div className="mt-16 relative md:px-[12rem] px-8">
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
                  <CarouselItem
                    key={index}
                    className="px-6 basis-full md:basis-1/2 lg:basis-1/3 shrink-0"
                    role="group"
                    aria-label={`${index + 1} of ${services.length}`}
                  >
                    <Link href={service.href} className="block h-full">
                      <div
                        className={`${service.color} rounded-[2.5rem] p-[2.5rem] text-center flex flex-col items-center justify-center text-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]`}
                      >
                        <div className="mb-4">
                          <Image
                            src={service.icon}
                            alt=""
                            width={96}
                            height={96}
                            className="team5_image"
                          />
                        </div>
                        <div>
                          <h3 className="heading-style-h3 font-normal text-color-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Carousel Nav: arrows + dots, positioned well below cards */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="size-10 flex items-center justify-center rounded-full border-2 border-[#6c4b8c] bg-white text-[#6c4b8c] hover:bg-[#6c4b8c] hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-5" />
              </button>
              <div className="flex items-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    className={`size-2.5 rounded-full transition-all ${
                      index === current ? "bg-[#6c4b8c]" : "bg-[#6c4b8c]/30 border border-[#6c4b8c]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="size-10 flex items-center justify-center rounded-full border-2 border-[#6c4b8c] bg-white text-[#6c4b8c] hover:bg-[#6c4b8c] hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Orange Wave */}
      <div className="relative w-full pointer-events-none mt-20 h-[12rem] overflow-hidden">
        <Image
          src={orangeWave}
          alt=""
          fill
          className="object-fill "
          priority
        />
      </div>
    </section>
  );
}
