import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gentleCareContent, affordableCareContent, emergencyContent } from "@/lib/constants";
import orangeWave from "../../../public/images/orange-wave.png";
import ladybug from "../../../public/images/ladybug-red.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";
import toothPink from "../../../public/images/tooth-pink.webp";

export function FeatureGentle() {
  return (
    <section className="relative overflow-hidden bg-[#F59A3B] pb-[140px] pt-[120px] text-[#2b1f12]">
      <div className="absolute top-0 left-0 right-0 z-[2] w-full pointer-events-none">
        <Image
          src={orangeWave}
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto scale-y-[-1]"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[2] w-full pointer-events-none">
        <Image
          src={orangeWave}
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="relative z-[3] px-6 lg:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2b1f12] font-heading">
              {gentleCareContent.title}
            </h2>
            <div className="mt-4 space-y-4 text-[13px] leading-6 text-[#2b1f12]">
              {gentleCareContent.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Button
              className="mt-6 h-[34px] rounded-full bg-[#4aa3e5] px-6 text-xs font-semibold text-white hover:bg-[#2f8ed8]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full bg-white shadow-[0_16px_30px_rgba(0,0,0,0.18)] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
              <Image
                src="/images/dentist-team.jpg"
                alt="Gentle pediatric dental care"
                fill
                className="object-cover"
                priority
              />
              <Image
                src={toothBlue}
                alt=""
                width={64}
                height={64}
                className="absolute -left-6 top-4"
              />
            </div>
            <Image
              src={ladybug}
              alt=""
              width={54}
              height={54}
              className="absolute right-2 -bottom-6"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="relative rounded-[18px] bg-white p-6 shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
            <h3 className="text-[16px] font-semibold text-[#6c4b8c] font-heading">
              {affordableCareContent.title}
            </h3>
            <p className="mt-3 text-[12px] leading-5 text-[#4b3a29]">
              {affordableCareContent.description}
            </p>
            <Button
              className="mt-5 h-[32px] rounded-full bg-[#ec008c] px-5 text-xs font-semibold text-white hover:bg-[#d9007f]"
              asChild
            >
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <div className="relative rounded-[18px] bg-white p-6 shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
            <Image
              src={toothPink}
              alt=""
              width={48}
              height={48}
              className="absolute -right-3 -top-3"
            />
            <h3 className="text-[16px] font-semibold text-[#e31a1a] font-heading">
              {emergencyContent.title}
            </h3>
            <p className="mt-3 text-[12px] leading-5 text-[#4b3a29]">
              {emergencyContent.description}
            </p>
            <Button
              className="mt-5 h-[32px] rounded-full bg-[#ec008c] px-5 text-xs font-semibold text-white hover:bg-[#d9007f]"
              asChild
            >
              <Link href="/contact">Contact Us!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
