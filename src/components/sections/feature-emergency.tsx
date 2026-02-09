import Link from "next/link";
import { Button } from "@/components/ui/button";
import { emergencyContent } from "@/lib/constants";
import { Phone, AlertCircle, Clock, Shield } from "lucide-react";

export function FeatureEmergency() {
  return (
    <section className="py-16 lg:py-24 bg-[#7C51A1] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <AlertCircle className="h-10 w-10" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {emergencyContent.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {emergencyContent.description}
          </p>

          {/* Emergency Features */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-6">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Same-Day Care</h3>
              <p className="text-sm text-white/80">Quick appointments for urgent needs</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Anytime</h3>
              <p className="text-sm text-white/80">Emergency line available</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <Shield className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-sm text-white/80">Specialized pediatric treatment</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#4CAF50] hover:bg-[#388E3C] text-white text-lg px-8"
              asChild
            >
              <a href={`tel:${emergencyContent.phone}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {emergencyContent.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#7C51A1] text-lg px-8"
              asChild
            >
              <Link href="/services/dental-emergencies">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
