import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { FeatureGentle } from "@/components/sections/feature-gentle";
import { FeatureAffordable } from "@/components/sections/feature-affordable";
import { FeatureEmergency } from "@/components/sections/feature-emergency";
import { ServiceAreaMap } from "@/components/sections/service-area-map";
import { ActionCards } from "@/components/sections/action-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeatureGentle />
      {/* <FeatureAffordable /> */}
      {/* <FeatureEmergency /> */}
      <ServiceAreaMap />
      <ActionCards />
    </>
  );
}
