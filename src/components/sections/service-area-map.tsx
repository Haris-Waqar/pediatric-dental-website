import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { serviceAreaContent, actionCards } from "@/lib/constants";
import { Calendar, FileText, MapPin } from "lucide-react";
import heroWave from "../../../public/images/hero-wave.webp";
import heroBackground from "../../../public/images/hero-background.webp";
import ladybugSmall from "../../../public/images/ladybug-red.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";

const actionCardsSlice = actionCards.slice(0, 3);

export function ServiceAreaMap() {
  return (
    <section id="map" className="relative bg-white pb-20 ">
      <div className="absolute top-0 left-0 right-0 z-[2] w-full pointer-events-none">
        <Image
          src={heroWave}
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto scale-y-[-1]"
          priority
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3/4 z-[1]">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-[3] px-[5%]">
        <div className="bg-white px-[5%] max-w-[88rem] mx-auto header21_component mb-[8rem]">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div
                className="relative h-[280px] w-[280px] overflow-hidden bg-white shadow-[0_18px_36px_rgba(0,0,0,0.12)] sm:h-[360px] sm:w-[360px] lg:h-[460px] lg:w-[460px]"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              >
                <Image
                  src="/images/dentist-team.jpg"
                  alt="Our pediatric dental team"
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
                className="absolute -left-10 bottom-6"
              />
              <Image
                src={toothBlue}
                alt=""
                width={110}
                height={120}
                className="absolute -right-8 top-6"
              />
            </div>
          </div>

          <div className="text-left order-1 lg:order-2">
            <h2 className="heading-style-h3 text-[#ec008c] ">
              {serviceAreaContent.title}
            </h2> 
            <p className="mt-4 text-size-medium leading-7 text-[#3d2a55] mx-auto lg:mx-0 font-content">
              {serviceAreaContent.description}
            </p>
            <Button variant="default" size="lg" className="mt-6" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Action cards: single column on mobile, grid on desktop */}
        <div className="mx-auto mt-[5rem] max-w-[1000px] px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {actionCardsSlice.map((card, index) => {
            const colorClass =
              index === 0
                ? "" // purple (default)
                : index === 1
                  ? "is--pink"
                  : "is--blue";
            return (
              <Link key={card.title} href={card.href} className="block w-full">
                <div
                  className={`team5_item flex w-full lg:mx-0 mx-auto items-center justify-center text-white lg:shadow-[0_18px_34px_rgba(0,0,0,0.18)] ${colorClass}`}
                >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    {card.icon === "calendar" && <Calendar className="team5_image" />}
                    {card.icon === "file-text" && <FileText className="team5_image" />}
                    {card.icon === "map-pin" && <MapPin className="team5_image" />}
                  </div>
                  <div>
                    <h3 className="heading-style-h3 font-normal text-color-white whitespace-pre-line leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
