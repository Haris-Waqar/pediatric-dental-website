"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, MapPin, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-[350px] p-0">
        <SheetHeader className="p-4 border-b bg-[#7C51A1] text-white">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white">
              <div className="flex flex-col">
                <span className="text-lg font-bold">Brooks</span>
                <span className="text-sm opacity-80 -mt-1">Pediatric Dentistry</span>
              </div>
            </SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:bg-white/20 hover:text-black"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-7 w-7 shrink-0" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100%-80px)]">
          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  {item.children ? (
                    <AccordionItem value={item.label} className="border-b-0">
                      <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-[#7C51A1] hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div className="flex flex-col bg-gray-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="px-8 py-3 text-sm text-gray-600 hover:text-[#7C51A1] hover:bg-[#7C51A1]/5"
                              onClick={() => onOpenChange(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div className="border-b border-gray-100">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-[#7C51A1]"
                        onClick={() => onOpenChange(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </Accordion>
          </div>

          {/* Contact Info and CTAs */}
          <div className="border-t p-4 space-y-4 bg-gray-50">
            <div className="space-y-2 text-sm text-gray-600">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-[#7C51A1]"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {siteConfig.address.address}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="default" size="default" className="w-full" asChild>
                <Link href="/contact" onClick={() => onOpenChange(false)}>
                  Schedule Appointment
                </Link>
              </Button>
              <Button variant="secondary" size="default" className="w-full" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
