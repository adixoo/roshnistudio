import {
  PiArrowRightFill,
  PiChartLineUpFill,
  PiCubeTransparentFill,
  PiFlowerLotusFill,
  PiGlobeHemisphereWestFill,
  PiHandshakeFill,
  PiHouseFill
} from "react-icons/pi";

export const services = [
  {
    title: "London Residential",
    description:
      "Sophisticated renovations and new-build homes in the heart of the capital, blending heritage character with modern luxury.",
    icon: PiHouseFill
  },
  {
    title: "Feasibility Studies",
    description:
      "Deep-dive technical assessments and planning strategy to unlock the true potential and value of your site before you build.",
    icon: PiChartLineUpFill
  },
  {
    title: "Wellness & Retreat",
    description:
      "Designing restorative spaces that prioritize health, mindfulness, and a seamless connection to the natural environment.",
    icon: PiFlowerLotusFill
  },
  {
    title: "International Projects",
    description:
      "Visionary concepts and remote design consultancy for global clients seeking our signature aesthetic abroad.",
    icon: PiGlobeHemisphereWestFill
  },
  {
    title: "3D Scanning & BIM",
    description:
      "Utilizing cutting-edge lidar technology to create perfect digital twins of existing structures for absolute design precision.",
    icon: PiCubeTransparentFill
  },
  {
    title: "Property Advisory",
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
                className={`group relative flex h-[450px] flex-col justify-between overflow-hidden bg-white p-8 transition-all duration-500 lg:p-12`}
              >
                <div className="relative z-10">
                  <div className={`mb-8`}>
                    <Icon size={42} className="text-charcoal/70" />
                  </div>

                  <h3 className="mb-4 font-serif text-2xl">{service.title}</h3>

                  <p className={`text-charcoal/60 leading-relaxed`}>
                    {service.description}
                  </p>
                </div>

                <a
                  href="#"
                  className="text-primary relative z-10 flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                >
                  Explore Service
                  <PiArrowRightFill size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
