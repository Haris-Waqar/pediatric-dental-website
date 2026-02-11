import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import logo from "../../../public/images/logo.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e6dcec] text-[#6c4b8c] pb-16">
      <div className="footer-inner px-[5%] ">
        <div className="footer-grid pt-12 mx-auto w-full max-w-[80rem]">
          {/* Logo + Contact + Social (first on mobile, left on desktop) */}
          <div className="footer-top space-y-6 text-left">
            <Link href="/" className="footer3_logo-link inline-flex items-center">
              <Image
                src={logo}
                alt="Brooks Pediatric Dentistry logo"
                width={140}
                height={58}
                className="footer_logo"
              />
            </Link>
            <div className="footer-contact-block">
              <p className="footer-contact-label">Address:</p>
              <p className="footer-contact-value">{siteConfig.address.address},</p>
              <p className="footer-contact-value">
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
            </div>
            <div className="footer-contact-block">
              <p className="footer-contact-label">Office Hours:</p>
              <p className="footer-contact-value">Mon - Fri: 8:00am – 5:00pm</p>
              <p className="footer-contact-value">Saturday: 9:00am - 1:00pm</p>
            </div>
            <div className="footer-contact-block">
              <p className="footer-contact-label">Phone Number:</p>
              <p className="footer-contact-value">{siteConfig.phone}</p>
            </div>
            <div className="footer-contact-block">
              <p className="footer-contact-label">Email:</p>
              <p className="footer-contact-value">info@brookspd.com</p>
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

          {/* Links: on mobile 2-col grid (Col1 | Col2, Col3 | Col4) */}
          <div className="footer-links">
            {/* Column 1 - Main nav */}
            <div className="footer-links-col space-y-0 text-left">
              <Link href="/" className="footer3_link text-weight-bold">Home</Link>
              <Link href="/about" className="footer3_link text-weight-bold">About</Link>
              <Link href="/services" className="footer3_link text-weight-bold">Services</Link>
              <Link href="/patient-information" className="footer3_link text-weight-bold">Patient Information</Link>
              <Link href="/blog" className="footer3_link text-weight-bold">Blog</Link>
              <Link href="/contact" className="footer3_link text-weight-bold">Contact</Link>
            </div>

            {/* Column 2 - Preventive + Orthodontics */}
            <div className="footer-links-col space-y-0 text-left">
              <Link href="/services" className="footer3_link text-weight-bold">Preventive &amp; General Dentistry</Link>
              <Link href="/services" className="footer3_link">Kids First Teeth Cleaning</Link>
              <Link href="/services" className="footer3_link">Dental Sealants</Link>
              <Link href="/services" className="footer3_link">Fluoride Treatments</Link>
              <Link href="/services" className="footer3_link">Space Maintainers</Link>
              <Link href="/services" className="footer3_link">Exams &amp; Cleaning</Link>
              <Link href="/services#orthodontics" className="footer3_link text-weight-bold">Orthodontics</Link>
              <Link href="/services" className="footer3_link">FOREVERSMILE</Link>
              <Link href="/services" className="footer3_link">Orthodontic Emergencies</Link>
              <Link href="/services" className="footer3_link">Orthodontics for Adults and Parents</Link>
              <Link href="/services" className="footer3_link">Invisalign for Adults</Link>
              <Link href="/services" className="footer3_link">Invisalign for Teens</Link>
              <Link href="/services" className="footer3_link">Metal Braces</Link>
            </div>

            {/* Column 3 - Restorative + Additional */}
            <div className="footer-links-col space-y-0 text-left">
              <Link href="/services" className="footer3_link text-weight-bold">Restorative Dentistry</Link>
              <Link href="/services" className="footer3_link">Dental Fillings</Link>
              <Link href="/services" className="footer3_link">Pulpotomy</Link>
              <Link href="/services" className="footer3_link">Crowns</Link>
              <Link href="/services" className="footer3_link">Cavity Treatment</Link>
              <Link href="/services" className="footer3_link">Root Canals</Link>
              <Link href="/services" className="footer3_link">Dental Extractions</Link>
              <Link href="/services" className="footer3_link text-weight-bold">Additional Services</Link>
              <Link href="/services" className="footer3_link">Emergency Services</Link>
              <Link href="/services" className="footer3_link">Mouthguards</Link>
              <Link href="/services" className="footer3_link">Special Needs Dentistry</Link>
            </div>

            {/* Column 4 - Sedation */}
            <div className="footer-links-col space-y-0 text-left">
              <Link href="/services" className="footer3_link text-weight-bold">Sedation Dentistry</Link>
              <Link href="/services" className="footer3_link">General Anesthesia</Link>
              <Link href="/services" className="footer3_link">Oral Sedation</Link>
              <Link href="/services" className="footer3_link">Laughing Gas</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom mx-auto mt-12 max-w-6xl border-t border-[#b7a3c9] pt-6 text-[12px] text-[#6c4b8c]">
          <div className="footer-bottom-inner flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="order-2 flex w-full justify-between md:order-1 md:contents">
              <p className="md:order-1">&copy; {currentYear} All rights reserved.</p>
              <p className="md:order-3 text-[11px]">Powered by Lasso</p>
            </div>
            <Link href="/privacy" className="order-first underline underline-offset-4 md:order-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
