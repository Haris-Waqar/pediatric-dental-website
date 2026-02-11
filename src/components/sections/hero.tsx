import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/constants";
import heroBackground from "../../../public/images/hero-background.webp";
import heroWave from "../../../public/images/white-wave.webp";
import heroImg from "../../../public/images/hero-img.jpg";
import ladybugSmall from "../../../public/images/ladybug-red.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";
import toothPink from "../../../public/images/tooth-pink.webp";


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#7C51A1] pb-[180px]  pt-[10rem]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative Elements Layer */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Red Ladybug - Mobile: lower left corner | Desktop: far left */}
        <div className="absolute left-[1%] bottom-[58%] lg:bottom-auto lg:top-[28%] lg:left-[6%]">
          <Image
            src={ladybugSmall}
            alt=""
            width={92}
            height={92}
            className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[88px] lg:h-[88px]"
          />
        </div>
        {/* Blue Tooth - Mobile: top right | Desktop: above center/heading */}
        <div className="absolute right-[4%] top-[8%] lg:right-auto lg:left-[35%] lg:top-[18%]">
          <Image
            src={toothBlue}
            alt=""
            width={110}
            height={120}
            className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] lg:w-[105px] lg:h-[105px]"
          />
        </div>
        {/* Pink Tooth/Insect - Mobile: bottom right near wave | Desktop: hidden (redundant with layout) */}
        <div className="absolute right-[6%] bottom-[20%] lg:hidden">
          <Image
            src={toothPink}
            alt=""
            width={100}
            height={100}
            className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px]"
          />
        </div>
      </div>

      {/* padding-global */}
      <div className="relative z-10 w-full px-[5vw] lg:px-[10vw]">
        {/* container-large */}
        <div className="mx-auto w-full max-w-[1280px]">
        {/* header3_component: grid-cols 1fr 1fr, col-gap 2rem, row-gap 4rem */}
        <div className="grid lg:grid-cols-2 gap-y-[4rem] gap-x-[2rem] items-center py-6 lg:py-10">
          {/* Content - Left Side */}
          <div className="text-center lg:order-1 relative z-10">
            <h1 className="heading-style-h1 text-white mb-6 font-heading">
              <strong>Top Pediatric Dentist in San Antonio</strong>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" className="shadow-lg w-full sm:w-auto" asChild>
                <Link href={heroContent.ctaHref}>{heroContent.ctaText}</Link>
              </Button>
            </div>
          </div>

          {/* Right Side Image — aspect-ratio: 3/2 matching reference */}
          <div className="relative lg:order-2 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[420px] sm:max-w-[540px] lg:max-w-none aspect-[16/9] lg:aspect-[3/2] rounded-[1.5rem] xs:rounded-[3.375rem] overflow-hidden border-[5px] border-[#a6ce39] mb-[2rem] lg:mb-0">
              <Image
                src={heroImg}
                alt="Pediatric dentist with child"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] w-full pointer-events-none overflow-hidden h-[12rem]">
        <Image
          src={heroWave}
          alt=""
          fill
          className="object-fill mt-[1rem]"
          style={{ clipPath: "inset(0 0 4px 0)" }}
          priority
        />
      </div>
    </section>
  );
}
