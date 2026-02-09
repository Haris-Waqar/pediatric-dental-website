import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import purpleWave from "../../../public/images/purple-wave.svg";
import ladybugRed from "../../../public/images/pink-tooth.webp";

export function ContactFooter() {
  return (
    <section className="relative bg-white text-[#3d2a55] py-20 lg:py-24 pb-[460px]">
      <div className="px-6 lg:px-16 mb-16">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1fr_1.35fr] gap-20 items-start">
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-[44px] font-heading text-[#ec008c]">
              Contact Us!
            </h3>
            <div className="text-[16px] leading-7 font-content text-[#3d2a55]">
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
            <div className="flex justify-center lg:justify-start">
              <Button
                className="h-[58px] rounded-[1.2rem] bg-[#f5821f] px-10 text-[18px] font-semibold text-white shadow-sm hover:bg-[#e87713]"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[16px] border border-[#e6dcec] shadow-[0_16px_32px_rgba(0,0,0,0.16)]">
              <iframe
                title="Brooks Pediatric Dentistry and Orthodontics map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.1192907249!2d-98.457672!3d29.351276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cfaa6b8d17a2f%3A0x3e7b992e7c7aa5dd!2sBrooks%20Pediatric%20Dentistry%20and%20Orthodontics!5e0!3m2!1sen!2sus!4v1739060000000!5m2!1sen!2sus"
                width="100%"
                height="380"
                loading="lazy"
                className="block w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Image
              src={ladybugRed}
              alt=""
                width={130}
                height={130}
              className="absolute -right-6 -bottom-6"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[2] h-[180px] w-full pointer-events-none overflow-hidden">
        <Image
          src={purpleWave}
          alt=""
          width={1440}
          height={180}
          className="w-full h-full object-cover translate-y-[60px]"
          priority
        />
      </div>
    </section>
  );
}
