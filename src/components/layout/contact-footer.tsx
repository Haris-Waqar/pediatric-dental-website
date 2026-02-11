import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import purpleWave from "../../../public/images/purple-wave.webp";
import ladybugRed from "../../../public/images/pink-tooth.webp";

export function ContactFooter() {
  return (
    <section className="relative bg-white text-[#3d2a55] pb-[5rem] lg:pb-[8rem] md:pt-[5rem]">
      <div className="px-[10%] pb-[5rem]">
        <div className="mx-auto grid max-w-[88rem] lg:grid-cols-[1fr_1.35fr] gap-20 items-center">
          <div className="space-y-6 text-left">
            <h2 className="heading-style-h2 text-[#ec008c] font-normal">
              Contact Us!
            </h2>
            <div className="text-size-medium leading-7 font-content text-[#3d2a55]">
              <p className="font-semibold underline underline-offset-4">
                {siteConfig.address.address},
              </p>
              <p className="font-semibold underline underline-offset-4">
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
              <p className="mt-2">Office Hours: Mon – Fri: 8am – 5pm</p>
              <p>Ph: <strong className="underline underline-offset-4">{siteConfig.phone}</strong></p>
            </div>
            <div className="flex justify-start">
              <Button variant="cta" size="lg" className="shadow-md" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[16px] border border-[#e6dcec] shadow-[0_16px_32px_rgba(0,0,0,0.16)]">
              <iframe
                title="Brooks Pediatric Dentistry and Orthodontics map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.1192907249!2d-98.457672!3d29.351276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cfaa6b8d17a2f%3A0x3e7b992e7c7aa5dd!2sBrooks%20Pediatric%20Dentistry%20and%20Orthodontics!5e0!3m2!1sen!2sus!4v1739060000000!5m2!1sen!2sus"
   
                loading="lazy"
                className="block w-full h-[321px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Image
              src={ladybugRed}
              alt=""
              width={130}
              height={130}
              className="absolute -right-6 -bottom-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[130px] lg:h-[130px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[5] w-full pointer-events-none overflow-hidden h-[12rem]">
        <Image
          src={purpleWave}
          alt=""  
          fill
          className="object-fill mt-[4rem]"
          priority
        />
      </div>
    </section>
  );
}
