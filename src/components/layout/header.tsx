"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import logo from "../../../public/images/logo.webp";

type MainNavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const mainNav: MainNavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Meet the Team", href: "/about" },
      { label: "Kids Dentist in San Antonio", href: "/kids-dentist-in-san-antonio" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Preventive & General Dentistry", href: "/services/preventive-general-dentistry" },
      { label: "Restorative Dentistry", href: "/services/restorative-dentistry" },
      { label: "Orthodontics", href: "/services/orthodontics" },
      { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
      { label: "Additional Services", href: "/services/other" },
    ],
  },
  {
    label: "Patient Information",
    href: "/patient-information",
    children: [
      { label: "Patient Information", href: "/patient-information" },
      { label: "Financial Information", href: "/financial" },
    ],
  },
  {
    label: "Referrals",
    href: "/referrals",
    children: [
      { label: "Doctor Referrals", href: "/doctor-referrals" },
      { label: "Refer a Friend", href: "/refer-a-friend" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00aeef]">
      <div className="w-full px-[5%] min-h-[90px] py-2">
        <div className="flex h-[78px] items-center justify-between gap-6">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center min-w-[150px]">
              <Image
                src={logo}
                alt="Brooks Pediatric Dentistry logo"
                width={155}
                height={85}
                priority
                className="h-auto w-auto max-h-[85px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-0">
                  {mainNav.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-[#ec008c] focus:bg-transparent focus:text-[#ec008c] data-[state=open]:bg-transparent data-[state=open]:text-[#ec008c] px-3 py-2 text-[15px] font-semibold tracking-tight h-auto font-heading transition-colors [&_svg]:text-current [&_svg]:transition-colors">
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[260px] gap-1 p-4">
                              {item.children.map((child, index) => (
                                <li key={child.label}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        "block select-none rounded-md px-4 py-2.5 leading-tight no-underline outline-none transition-colors font-content",
                                        index === 0 
                                          ? "text-base font-bold text-black font-heading" 
                                          : "text-sm font-semibold text-black hover:bg-[#00aeef]/10 hover:text-[#00aeef] focus:bg-[#00aeef]/10 focus:text-[#00aeef]"
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "bg-transparent text-white hover:bg-transparent hover:text-[#ec008c] focus:bg-transparent focus:text-[#ec008c] px-3 py-2 text-[15px] font-semibold tracking-tight h-auto font-heading transition-colors"
                            )}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Button
              size="sm"
              className="rounded-[1.2rem] bg-[#ec008c] px-[1.75rem] pt-[0.9rem] pb-[0.7rem] h-auto text-[1rem] font-semibold text-white hover:bg-[#d1007d] shadow-md border-0 font-content"
              asChild
            >
              <Link href="https://flexbook.me/brookspd/website" target="_blank">
                Schedule Appointment
              </Link>
            </Button>
            <Button
              size="sm"
              className="rounded-[1.2rem] bg-[#f5821f] px-[1.75rem] pt-[0.9rem] pb-[0.7rem] h-auto text-[1rem] font-semibold text-white hover:bg-[#e07025] shadow-md border-0 font-content"
              asChild
            >
              <a href="tel:2108019715">210-801-9715</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-auto text-white hover:bg-white/10"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
    </header>
  );
}
