import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/constants";
import heroBackground from "../../../public/images/hero-background.webp";
import heroWave from "../../../public/images/hero-wave.webp";
import heroImg from "../../../public/images/hero-img.jpg";
import ladybugSmall from "../../../public/images/ladybug-red.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";
import toothPink from "../../../public/images/tooth-pink.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#7c51a1] pb-[220px] pt-10 lg:pt-20 lg:pb-[160px]">
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
        {/* Red Ladybug - Left side near heading */}
        <div className="absolute left-[8%] top-[20%] hidden lg:block">
          <Image
            src={ladybugSmall}
            alt=""
            width={92}
            height={92}
            className="w-[60px] h-[60px] lg:w-[92px] lg:h-[92px]"
          />
        </div>
        {/* Blue Tooth - Above heading */}
        <div className="absolute left-[40%] top-[12%] hidden lg:block">
          <Image
            src={toothBlue}
            alt=""
            width={110}
            height={120}
            className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
          />
        </div>
        
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-[5%]">
        <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20 min-h-[500px] lg:min-h-[640px] py-6 lg:py-12">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-10">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.2] font-normal text-white mb-8 font-heading whitespace-normal">
              <strong className="font-normal">
                Top Pediatric Dentist<br className="hidden lg:block" />
              </strong>
              in San Antonio
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-[1.2rem] bg-[#f5821f] hover:bg-[#e87713] text-white text-[1.11rem] font-semibold font-content shadow-lg transition-all px-[2.5rem] pt-[1.25rem] pb-[1rem] min-w-[10rem] h-auto"
                asChild
              >
                <Link href={heroContent.ctaHref}>{heroContent.ctaText}</Link>
              </Button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px] aspect-[3/2] rounded-[3.375rem] overflow-hidden shadow-[0_16px_30px_rgba(0,0,0,0.18)] border-[5px] border-[#a6ce39]">
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

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] w-full pointer-events-none overflow-hidden h-[210px]" >
        <Image
          src={heroWave}
          alt=""
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
