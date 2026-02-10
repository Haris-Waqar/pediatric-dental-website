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
    <section className="relative overflow-hidden bg-[#7C51A1] pb-[220px] pt-12 lg:pt-20 lg:pb-[160px]">
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
      <div className="relative z-10 px-6 lg:px-[400px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center min-h-[500px] lg:min-h-[650px] py-8 lg:py-12">
          {/* Content - Left Side */}
          <div className="text-center order-2 lg:order-1 relative z-10">
            <h1 className="text-[48px] sm:text-[60px] md:text-[60px] lg:text-[60px] leading-[1.1] font-bold text-white mb-8 font-heading whitespace-normal">
              Top Pediatric Dentist<br className="hidden lg:block" />
              in San Antonio
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-[58px] rounded-[1.2rem] bg-[#f5821f] hover:bg-[#e87713] text-white text-base px-8 font-semibold font-content shadow-lg transition-all"
                asChild
              >
                <Link href={heroContent.ctaHref}>{heroContent.ctaText}</Link>
              </Button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative order-1 lg:order-2 flex justify-end z-10">
            <div className="relative w-full  max-w-[400px] sm:max-w-[500px] lg:max-w-[620px] xl:max-w-[700px] aspect-[1.5/1] rounded-[2.75rem] overflow-hidden shadow-[0_16px_30px_rgba(0,0,0,0.18)] border-[5px] border-[#a6ce39]">
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
      <div className="absolute bottom-0 left-0 right-0 z-[5] w-full pointer-events-none overflow-hidden h-[210px]">
        <Image
          src={heroWave}
          alt=""
          fill
          className="object-fill"
          priority
        />
      </div>
    </section>
  );
}
