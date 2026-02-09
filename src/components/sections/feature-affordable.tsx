import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { affordableCareContent } from "@/lib/constants";
import { Check, CreditCard } from "lucide-react";

export function FeatureAffordable() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Order changes on mobile/desktop */}
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#4CAF50]">{affordableCareContent.title}</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {affordableCareContent.description}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {affordableCareContent.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#388E3C] text-white"
                asChild
              >
                <Link href="/patient-info/insurance">Insurance Info</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600/4CAF50/ffffff?text=Affordable+Care"
                alt="Affordable dental care"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#7C51A1] text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <CreditCard className="h-10 w-10" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4CAF50]/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
