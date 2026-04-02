import { Button } from "@/components/ui/button";
import {
  PiChartLineUpFill,
  PiCubeTransparentFill,
  PiFlowerLotusFill,
  PiGlobeHemisphereWestFill,
  PiHandshakeFill,
  PiHouseFill
} from "react-icons/pi";

import Link from "next/link";

export const services = [
  {
    title: "London Residential",
    slug: "london-residential",
    description:
      "Sophisticated renovations and new-build homes in the heart of the capital, blending heritage character with modern luxury.",
    icon: PiHouseFill
  },
  {
    title: "Feasibility Studies",
    slug: "feasibility-studies",
    description:
      "Deep-dive technical assessments and planning strategy to unlock the true potential and value of your site before you build.",
    icon: PiChartLineUpFill
  },
  {
    title: "Wellness & Retreat",
    slug: "wellness-retreats",
    description:
      "Designing restorative spaces that prioritize health, mindfulness, and a seamless connection to the natural environment.",
    icon: PiFlowerLotusFill
  },
  {
    title: "International Projects",
    slug: "international-projects",
    description:
      "Visionary concepts and remote design consultancy for global clients seeking our signature aesthetic abroad.",
    icon: PiGlobeHemisphereWestFill
  },
  {
    title: "3D Scanning & BIM",
    slug: "3d-scanning-bim",
    description:
      "Utilizing cutting-edge lidar technology to create perfect digital twins of existing structures for absolute design precision.",
    icon: PiCubeTransparentFill
  },
  {
    title: "Property Advisory",
    slug: "property-advisory",
    description:
      "Strategic guidance for investors and portfolio holders, aligning architectural vision with commercial viability.",
    icon: PiHandshakeFill
  }
];

export default function Services() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`relative flex h-[450px] flex-col justify-between overflow-hidden bg-white p-8 transition-all duration-500 lg:p-12`}
              >
                <div className="relative z-10">
                  <div className={`mb-8`}>
                    <Icon size={42} className="text-charcoal/70" />
                  </div>

                  <h3 className="mb-4 font-serif text-2xl leading-snug lg:text-3xl">
                    {service.title}
                  </h3>

                  <p
                    className={`text-charcoal/60 text-base leading-relaxed font-light`}
                  >
                    {service.description}
                  </p>
                </div>

                <div>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant={"outline"}>Explore Service</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
