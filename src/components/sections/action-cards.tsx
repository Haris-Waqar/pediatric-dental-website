import Image from "next/image";
import Link from "next/link";
import { actionCards } from "@/lib/constants";
import actionAppointment from "../../../public/images/action-appointment.svg";
import actionForms from "../../../public/images/action-forms.svg";
import actionDirections from "../../../public/images/action-directions.svg";

const iconMap = {
  calendar: actionAppointment,
  "file-text": actionForms,
  "map-pin": actionDirections,
};

const colorMap = {
  calendar: "bg-[#7c51a1]",
  "file-text": "bg-[#ec008c]",
  "map-pin": "bg-[#00aeef]",
};

export function ActionCards() {
  return (
    <section className="relative bg-white py-16">
      <div className="px-[5%]">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {actionCards.map((card) => {
              const isExternal = card.href.startsWith("http");
              const icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={`${colorMap[card.icon as keyof typeof colorMap]} rounded-[2.5rem] p-10 text-center text-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-6 min-h-[240px]`}
                >
                  <Image src={icon} alt="" width={96} height={96} className="w-24 h-24" />
                  <h3 className="text-[28px] font-normal font-heading leading-tight">
                    {card.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
