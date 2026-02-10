import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { serviceAreaContent, actionCards } from "@/lib/constants";
import { Calendar, FileText, MapPin } from "lucide-react";
import heroWave from "../../../public/images/hero-wave.webp";
import heroBackground from "../../../public/images/hero-background.webp";
import ladybugSmall from "../../../public/images/ladybug-red.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";

export function ServiceAreaMap() {
  return (
    <section id="map" className="relative bg-white pb-20 pt-[120px]">
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

      <div className="relative z-[3] px-6 lg:px-12">
        <div className="bg-white mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex justify-center">
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

          <div className="text-center lg:text-left">
            <h2 className="text-[37.5px] font-bold text-[#ec008c] font-heading">
              {serviceAreaContent.title}
            </h2>
            <p className="mt-4 text-[16.5px] leading-6 text-[#3d2a55] mx-auto lg:mx-0 font-content">
              {serviceAreaContent.description}
            </p>
            <Button
              className="mt-6 h-[58px] rounded-[1.2rem] bg-[#ec008c] px-8 text-[18.75px] font-semibold text-white hover:bg-[#d9007f]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-[160px] hidden max-w-[1180px] gap-6 lg:grid lg:grid-cols-3">
          {actionCards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="flex h-[277px] w-[370px] items-center justify-center rounded-[28px] px-6 text-center text-white shadow-[0_18px_34px_rgba(0,0,0,0.18)]"
              style={{
                background:
                  card.icon === "calendar"
                    ? "#7C51A1"
                    : card.icon === "file-text"
                      ? "#ec008c"
                      : "#4aa3e5",
              }}
            >
              <div>
                <div className="mb-4 flex items-center justify-center">
                  {card.icon === "calendar" && <Calendar className="h-[90px] w-[90px]" />}
                  {card.icon === "file-text" && <FileText className="h-[90px] w-[90px]" />}
                  {card.icon === "map-pin" && <MapPin className="h-[90px] w-[90px]" />}
                </div>
                <h3 className="whitespace-pre-line text-[37.5px] leading-snug font-semibold font-heading">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
