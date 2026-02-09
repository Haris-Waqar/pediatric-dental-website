import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gentleCareContent } from "@/lib/constants";
import orangeWave from "../../../public/images/orange-wave.png";
import ladybug from "../../../public/images/ladybug-red.webp";
import toothBlue from "../../../public/images/tooth-blue.webp";

export function FeatureGentle() {
  return (
    <section className="relative overflow-hidden bg-[#ff9c46] pb-[120px] pt-[120px] text-[#2b1f12]">
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

      <div className="relative z-[3] px-[5%]">
        <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal text-[#2b1f12] font-heading">
              {gentleCareContent.title}
            </h2>
            <div className="mt-6 space-y-6 text-[18px] leading-7 text-[#2b1f12]">
              {gentleCareContent.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Button
              className="mt-8 rounded-[1.2rem] bg-[#00aeef] px-[2.5rem] pt-[1.25rem] pb-[1rem] text-[1.11rem] font-semibold text-white hover:bg-[#0096d1]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full bg-white shadow-[0_16px_30px_rgba(0,0,0,0.18)] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
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

      </div>
    </section>
  );
}
