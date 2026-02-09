import { NavItem, ServiceCard, TeamMember, ActionCard, ContactInfo, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Brooks Pediatric Dentistry",
  tagline: "Top Pediatric Dentist in San Antonio",
  phone: "210-801-9715",
  address: {
    address: "2302 SE Military Dr #101",
    city: "San Antonio",
    state: "TX",
    zip: "78223",
    phone: "210-801-9715",
    hours: [
      { days: "Mon - Fri", time: "8:00am – 5:00pm" },
      { days: "Saturday", time: "9:00am - 1:00pm" },
    ],
  },
  socialLinks: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
};

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Children's Dentistry", href: "/services/childrens-dentistry" },
      { label: "Cleanings & Exams", href: "/services/cleanings-exams" },
      { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
      { label: "Orthodontics", href: "/services/orthodontics" },
      { label: "Dental Emergencies", href: "/services/dental-emergencies" },
      { label: "Special Needs Dentistry", href: "/services/special-needs" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Meet the Team", href: "/about/team" },
      { label: "Office Tour", href: "/about/office-tour" },
      { label: "Our Philosophy", href: "/about/philosophy" },
    ],
  },
  {
    label: "Patient Info",
    href: "/patient-info",
    children: [
      { label: "New Patients", href: "/patient-info/new-patients" },
      { label: "Patient Forms", href: "/patient-info/forms" },
      { label: "Insurance & Payments", href: "/patient-info/insurance" },
      { label: "FAQs", href: "/patient-info/faqs" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const services: ServiceCard[] = [
  {
    title: "Children's Dentistry",
    description: "Comprehensive dental care designed specifically for infants, children, and teens.",
    image: "https://placehold.co/400x300/7C51A1/ffffff?text=Children's+Dentistry",
    href: "/services/childrens-dentistry",
  },
  {
    title: "Cleanings & Exams",
    description: "Regular checkups and professional cleanings to maintain your child's oral health.",
    image: "https://placehold.co/400x300/4CAF50/ffffff?text=Cleanings+%26+Exams",
    href: "/services/cleanings-exams",
  },
  {
    title: "Sedation Dentistry",
    description: "Safe and comfortable sedation options for anxious or special needs patients.",
    image: "https://placehold.co/400x300/7C51A1/ffffff?text=Sedation+Dentistry",
    href: "/services/sedation-dentistry",
  },
  {
    title: "Orthodontics",
    description: "Early orthodontic evaluation and treatment to guide proper dental development.",
    image: "https://placehold.co/400x300/4CAF50/ffffff?text=Orthodontics",
    href: "/services/orthodontics",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Chelsea Brooks",
    role: "Pediatric Dentist",
    image: "https://placehold.co/300x400/7C51A1/ffffff?text=Dr.+Brooks",
    bio: "Board-certified pediatric dentist dedicated to providing exceptional care for children.",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatric Dentist",
    image: "https://placehold.co/300x400/4CAF50/ffffff?text=Dr.+Johnson",
    bio: "Specializing in pediatric dentistry with a passion for making dental visits fun.",
  },
  {
    name: "Team Member",
    role: "Dental Hygienist",
    image: "https://placehold.co/300x400/7C51A1/ffffff?text=Team+Member",
    bio: "Experienced hygienist committed to gentle, thorough care for every patient.",
  },
];

export const actionCards: ActionCard[] = [
  {
    title: "Request an Appointment",
    description: "Schedule your child's next visit online",
    buttonText: "Schedule Now",
    href: "https://www.flexbook.me/brookspd/1",
    icon: "calendar",
  },
  {
    title: "Review Patient Forms",
    description: "Download and complete forms before your visit",
    buttonText: "View Forms",
    href: "/about/#forms",
    icon: "file-text",
  },
  {
    title: "Get Directions",
    description: "Find our office in San Antonio",
    buttonText: "View Map",
    href: "https://www.google.com/maps/place/Brooks+Pediatric+Dentistry+and+Orthodontics/@29.3540242,-98.4615189,18z/data=!4m6!3m5!1s0x865cf7f48c4b1fe9:0xccd59fdf47d8e4ab!8m2!3d29.3512763!4d-98.4576721!16s%2Fg%2F11p3hd0sbb?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
    icon: "map-pin",
  },
];

export const heroContent = {
  headline: "Top Pediatric Dentist in San Antonio",
  subheadline: "Creating Healthy Smiles for Happy Kids",
  ctaText: "Schedule an Appointment",
  ctaHref: "/contact",
};

export const welcomeContent = {
  title: "Welcome to Brooks Pediatric Dentistry & Orthodontics in San Antonio, TX!",
  description: `At <a href="/about"><strong>Brooks Pediatric Dentistry & Orthodontics</strong></a>, we go beyond just caring for teeth — we build confidence, trust, and lifelong healthy habits in every child we see. As your local pediatric dentist in San Antonio, we specialize in compassionate, kid-friendly care tailored to each child’s unique dental needs.<br/><br/>Whether it’s your child’s first visit or you’re searching for a Kids Dentist Near Me, we’re proud to serve families with expert pediatric care and gentle orthodontics right here in Brooks City Base and surrounding neighborhoods.`,
};

export const gentleCareContent = {
  title: "Gentle, Fun, and Focused on Kids",
  description: `We create an environment where children feel relaxed, safe, and even excited to visit the dentist. As a trusted provider of Brooks City Base pediatric dentistry, we help kids of all ages build positive dental habits through education and personalized care.

As a leading Brooks City Base kids dentist, our office was built just for kids—with bright colors, fun activities, and a caring team trained in pediatric dental techniques. We specialize in growing smiles and turning dental visits into positive experiences.

Looking for Brooks City Base children's dentistry? You're in the right place.`,
};

export const affordableCareContent = {
  title: "Affordable Care for Every Family",
  description: `We believe every child deserves access to quality dental care. That's why we work with most major insurance plans and offer flexible payment options to fit your family's budget. Our team will help you understand your benefits and maximize your coverage.`,
  features: [
    "Most major insurance plans accepted",
    "Flexible payment plans available",
    "Medicaid accepted",
    "No-interest financing options",
  ],
};

export const emergencyContent = {
  title: "Dental Emergencies? We're Here to Help",
  description: `Dental emergencies can happen at any time. Whether it's a knocked-out tooth, severe toothache, or dental trauma, our team is ready to provide prompt, compassionate care when your child needs it most. Contact us immediately for emergency dental situations.`,
  phone: "(210) 692-0439",
};

export const serviceAreaContent = {
  title: "Proudly Serving Brooks City Base and Beyond",
  description: `We’re proud to be a trusted pediatric dentist in San Antonio, providing care to families in Brooks City Base, Downtown San Antonio, South San Antonio, and neighborhoods near Corpus Christi Hwy. Conveniently located and always welcoming new smiles, we’re here to support your child’s dental health every step of the way.`,
  areas: [
    "Stone Oak",
    "Alamo Heights",
    "Shavano Park",
    "Hollywood Park",
    "Castle Hills",
    "Helotes",
  ],
};
