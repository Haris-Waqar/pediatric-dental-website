import type { Metadata } from "next";
import { Madimi_One, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ContactFooter } from "@/components/layout/contact-footer";
import { Footer } from "@/components/layout/footer";

const madimiOne = Madimi_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-madimi-one",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brooks Pediatric Dentistry | Top Pediatric Dentist in San Antonio",
  description:
    "Brooks Pediatric Dentistry provides compassionate, high-quality dental care for infants, children, teens, and patients with special needs in San Antonio, TX.",
  keywords: [
    "pediatric dentist",
    "San Antonio",
    "children's dentistry",
    "kids dentist",
    "baby dentist",
    "dental care for kids",
  ],
  openGraph: {
    title: "Brooks Pediatric Dentistry | Top Pediatric Dentist in San Antonio",
    description:
      "Compassionate dental care for children in San Antonio. Creating healthy smiles for happy kids.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${madimiOne.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <ContactFooter />
        <Footer />
      </body>
    </html>
  );
}
