import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gentleCareContent, affordableCareContent, emergencyContent } from "@/lib/constants";
import toothBlue from "../../../public/images/tooth-blue.webp";
import toothPink from "../../../public/images/tooth-pink.webp";
import heroWave from "../../../public/images/hero-wave.webp";

export function FeatureGentle() {
  return (
    <section className="relative overflow-hidden bg-[#F49D46] pb-10 text-[#2b1f12]">
      <div className="relative z-[3] px-[5%]">
        <div className="mx-auto px-[5%] grid max-w-[1220px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] mb-20">
          <div >
            <h2 className="heading-style-h3 text-[#2b1f12]  leading-tight">
              <strong>{gentleCareContent.title}</strong>
            </h2>
            <div className="mt-4 text-size-medium leading-7 text-[#2b1f12]">
              {gentleCareContent.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Button variant="tertiary" size="lg" className="mt-6 self-center lg:self-start" asChild>
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
                className="absolute -left-8 top-6"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 mb-40 px-[5%] max-w-[1220px] header1_cards-wrapper">
          {/* Affordable Care */}
          <div className="header1_card">
            <h3 className="heading-style-h3 text-[#7c51a1]">
              <strong>Affordable Pediatric Dental Care for Every Family</strong>
            </h3>
            <p className="text-size-medium">
              Every child deserves access to high-quality dental care. That's why we accept most major insurance plans, including Medicaid, and support HSA/FSA payment options. We also offer flexible financing to help your family stay on budget.
            </p>
            <Button variant="default" size="default" className="mt-auto" asChild>
              <Link href="/financial">Learn More</Link>
            </Button>
            {/* Decorative image - placeholder for now */}
            <Image
              src={toothBlue}
              alt=""
              width={64}
              height={64}
              className="absolute -right-4 -top-4"
            />
          </div>
          {/* Emergency Care */}
          <div className="header1_card z-[1]">
            <h3 className="heading-style-h3 text-color-red">
              <strong>{emergencyContent.title}</strong>
            </h3>
            <p className="text-size-medium">
              Dental emergencies can happen anytime. If you're asking, "Is there a pediatric dentist near me for urgent care?", our emergency pediatric dental team in San Antonio is ready to help. Call us right away, and we'll guide you through next steps and prepare for your arrival.
            </p>
            <Button variant="default" size="default" className="mt-auto" asChild>
              <Link href="/contact">Contact Us!</Link>
            </Button>
            {/* Decorative images - placeholders for now */}
            <Image
              src={toothPink}
              alt=""
              width={48}
              height={48}
              className="absolute -right-3 -top-3"
            />
            <Image
              src={toothBlue}
              alt=""
              width={48}
              height={48}
              className="absolute -right-8 top-8"
            />
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
          priority
        />
      </div>
    </section>
  );
}
