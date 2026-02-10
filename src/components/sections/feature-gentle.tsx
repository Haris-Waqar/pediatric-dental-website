import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gentleCareContent, affordableCareContent, emergencyContent } from "@/lib/constants";
import toothBlue from "../../../public/images/tooth-blue.webp";
import toothPink from "../../../public/images/tooth-pink.webp";
import heroWave from "../../../public/images/hero-wave.webp";

export function FeatureGentle() {
  return (
    <section className="relative overflow-hidden bg-[#F49D46] pb-[140px]  text-[#2b1f12]">
      <div className="relative z-[3] px-6 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] mb-20">
          <div className="text-center lg:text-left">
            <h2 className="text-[37.5px] font-bold text-[#2b1f12] font-heading leading-tight">
              {gentleCareContent.title}
            </h2>
            <div className="mt-4 space-y-4 text-[16.85px] leading-7 text-[#2b1f12]">
              {gentleCareContent.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Button
              className="mt-6 h-[58px] rounded-[1.2rem] bg-[#4aa3e5] px-8 text-[18.75px] font-semibold text-white hover:bg-[#2f8ed8]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-[320px] h-[295px] sm:w-[420px] sm:h-[387px] lg:w-[562px] lg:h-[517px] overflow-hidden rounded-[50%] bg-white shadow-[0_16px_30px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/dentist-team.jpg"
                  alt="Gentle pediatric dental care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <Image
                src={toothBlue}
                alt=""
                width={80}
                height={80}
                className="absolute -left-8 -top-8"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 mb-40 grid max-w-[1220px] gap-12 md:grid-cols-2">
          {/* Affordable Care */}
          <div className="relative rounded-[3.1875rem] bg-white p-[45px] shadow-[0_16px_30px_rgba(0,0,0,0.12)] lg:min-w-[573px] lg:min-h-[475px] flex flex-col">
            <Image
              src={toothBlue}
              alt=""
              width={64}
              height={64}
              className="absolute -right-4 -top-4"
            />
            <h3 className="text-[37.5px] font-semibold text-[#6c4b8c] font-heading leading-tight">
              {affordableCareContent.title}
            </h3>
            <p className="mt-10 text-[16.85px] leading-7 text-[#4b3a29]">
              {affordableCareContent.description}
            </p>
            <Button
              className="mt-10 h-[58px] rounded-[1.2rem] bg-[#ec008c] px-8 text-[18.75px] font-semibold text-white hover:bg-[#d9007f] self-start"
              asChild
            >
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          {/* Emergency Care */}
          <div className="relative rounded-[3.1875rem] bg-white p-[45px] shadow-[0_16px_30px_rgba(0,0,0,0.12)] lg:min-w-[573px] lg:min-h-[475px] flex flex-col">
            <Image
              src={toothPink}
              alt=""
              width={48}
              height={48}
              className="absolute -right-3 -top-3"
            />
            <h3 className="text-[37.5px] font-semibold text-[#e31a1a] font-heading leading-tight">
              {emergencyContent.title}
            </h3>
            <p className="mt-10 text-[16.85px] leading-7 text-[#4b3a29]">
              {emergencyContent.description}
            </p>
            <Button
              className="mt-10 h-[58px] rounded-[1.2rem] bg-[#ec008c] px-8 text-[18.75px] font-semibold text-white hover:bg-[#d9007f] self-start"
              asChild
            >
              <Link href="/contact">Contact Us!</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] w-full pointer-events-none overflow-hidden h-[210px]">
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
