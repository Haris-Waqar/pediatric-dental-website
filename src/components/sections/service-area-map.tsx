import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { serviceAreaContent } from "@/lib/constants";
import heroWave from "../../../public/images/hero-wave.webp";
import heroBackground from "../../../public/images/hero-background.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";
import toothPink from "../../../public/images/tooth-pink.webp";

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
      <div className="absolute inset-0 z-[1]">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
      </div>

      <div className="relative z-[3] px-[5%]">
        <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex justify-center">
            <div className="relative h-[260px] w-[260px] overflow-hidden rounded-[44%] bg-white shadow-[0_18px_36px_rgba(0,0,0,0.12)] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]">
              <Image
                src="/images/dentist-team.jpg"
                alt="Our pediatric dental team"
                fill
                className="object-cover"
                priority
              />
              <Image
                src={toothBlue}
                alt=""
                width={70}
                height={70}
                className="absolute -left-2 bottom-6"
              />
              <Image
                src={toothPink}
                alt=""
                width={70}
                height={70}
                className="absolute -right-4 top-4"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal text-[#ec008c] font-heading">
              {serviceAreaContent.title}
            </h2>
            <p className="mt-6 text-[18px] leading-7 text-[#3d2a55] max-w-xl mx-auto lg:mx-0 font-content">
              {serviceAreaContent.description}
            </p>
            <Button
              className="mt-8 rounded-[1.2rem] bg-[#ec008c] px-[2.5rem] pt-[1.25rem] pb-[1rem] text-[1.11rem] font-semibold text-white hover:bg-[#d9007f]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
