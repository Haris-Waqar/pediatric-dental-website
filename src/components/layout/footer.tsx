import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import logo from "../../../public/images/logo.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e6dcec] text-[#6c4b8c] pb-16">
      <div className="px-6 lg:px-12">
        <div className="mx-auto pt-12 grid max-w-6xl lg:grid-cols-[1.1fr_1fr_1fr_1fr_1fr] gap-10 justify-items-center">
          {/* Logo + Address */}
          <div className="space-y-6 text-left">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logo}
                alt="Brooks Pediatric Dentistry logo"
                width={140}
                height={58}

              />
            </Link>
            <div className="text-[14px] leading-7">
              <p className="font-semibold">Address:</p>
              <p>{siteConfig.address.address},</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
            </div>
            <div className="text-[14px] leading-7">
              <p className="font-semibold">Office Hours:</p>
              <p>Mon - Fri: 8:00am – 5:00pm</p>
              <p>Saturday: 9:00am - 1:00pm</p>
            </div>
            <div className="text-[14px] leading-7">
              <p className="font-semibold">Phone Number:</p>
              <p>{siteConfig.phone}</p>
            </div>
            <div className="text-[14px] leading-7">
              <p className="font-semibold">Email:</p>
              <p>info@brookspd.com</p>
            </div>
            <div className="flex items-center gap-3 text-[#6c4b8c]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#6c4b8c] text-xs">
                f
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#6c4b8c] text-xs">
                ig
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#6c4b8c] text-xs">
                yt
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#6c4b8c] text-xs">
                g
              </span>
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-3 text-[14px] text-left">
            <p className="font-semibold">Home</p>
            <p className="font-semibold">About</p>
            <p className="font-semibold">Services</p>
            <p className="font-semibold">Patient Information</p>
            <p className="font-semibold">Blog</p>
            <p className="font-semibold">Contact</p>
          </div>

          {/* Column 2 */}
          <div className="space-y-3 text-[14px] text-left">
            <p className="font-semibold">Preventive &amp; General Dentistry</p>
            <p>Kids First Teeth Cleaning</p>
            <p>Dental Sealants</p>
            <p>Fluoride Treatments</p>
            <p>Space Maintainers</p>
            <p>Exams &amp; Cleaning</p>
            <p className="pt-4 font-semibold">Orthodontics</p>
            <p>FOREVERSMILE</p>
            <p>Orthodontic Emergencies</p>
            <p>Orthodontics for Adults and Parents</p>
            <p>Invisalign for Adults</p>
            <p>Invisalign for Teens</p>
            <p>Metal Braces</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-3 text-[14px] text-left">
            <p className="font-semibold">Restorative Dentistry</p>
            <p>Dental Fillings</p>
            <p>Pulpotomy</p>
            <p>Crowns</p>
            <p>Cavity Treatment</p>
            <p>Root Canals</p>
            <p>Dental Extractions</p>
            <p className="pt-4 font-semibold">Additional Services</p>
            <p>Emergency Services</p>
            <p>Mouthguards</p>
            <p>Special Needs Dentistry</p>
          </div>

          {/* Column 4 */}
          <div className="space-y-3 text-[14px] text-left">
            <p className="font-semibold">Sedation Dentistry</p>
            <p>General Anesthesia</p>
            <p>Oral Sedation</p>
            <p>Laughing Gas</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-[#b7a3c9] pt-6 text-[12px] text-[#6c4b8c]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p>&copy; {currentYear} All rights reserved.</p>
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            <p className="text-[11px]">Powered by Lasso</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
