const services = [
  {
    title: "London Residential",
    description:
      "Sophisticated renovations and new-build homes in the heart of the capital, blending heritage character with modern luxury.",
    icon: "home_pin"
  },
  {
    title: "Feasibility Studies",
    description:
      "Deep-dive technical assessments and planning strategy to unlock the true potential and value of your site before you build.",
    icon: "analytics"
  },
  {
    title: "Wellness & Retreat",
    description:
      "Designing restorative spaces that prioritize health, mindfulness, and a seamless connection to the natural environment.",
    icon: "spa",
    featured: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACA31WLf1Bx7GaYTStoxa5lFPsFwcHxnKme_UOg7YToh7WurQj0dVaX9Qr7Abj8h90e56DWKrbE-CJVwL3KECAvaFPKRpP5kjuJHHk3hMi5NNcdDDjFTN1vELyUdWd-xak9K0lADrMKsMvoihxIT2sc3OfJ7fIKsE3c8RMK8SVSwCh6iLU9a91nKtdYbjWbgSidXrSkLzxbOvGEIRT_ftwxFAbrLs6EKqVRBGMC5OOZ8_XCGa4W1jqMIHxgjABZr6lk1NOAjhyww"
  },
  {
    title: "Concept & International",
    description:
      "Visionary concepts and remote design consultancy for global clients seeking our signature aesthetic abroad.",
    icon: "public"
  },
  {
    title: "3D Scanning & BIM",
    description:
      "Utilizing cutting-edge lidar technology to create perfect digital twins of existing structures for absolute design precision.",
    icon: "view_in_ar"
  },
  {
    title: "Property Advisory",
    description:
      "Strategic guidance for investors and portfolio holders, aligning architectural vision with commercial viability.",
    icon: "real_estate_agent"
  }
];

export default function Services() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isFeatured = service.featured;

            return (
              <div
                key={index}
                className={`group relative flex h-[450px] flex-col justify-between overflow-hidden p-8 transition-all duration-500 lg:p-12 ${
                  isFeatured
                    ? "bg-secondary text-white"
                    : "border-primary/10 hover:border-primary/40 border bg-white dark:bg-zinc-900/50"
                }`}
              >
                {isFeatured && service.image && (
                  <div className="pointer-events-none absolute inset-0 opacity-20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <div
                    className={`mb-8 ${
                      isFeatured ? "text-primary" : "text-secondary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-5xl font-extralight">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="font-display mb-4 text-2xl">
                    {service.title}
                  </h3>

                  <p
                    className={`leading-relaxed ${
                      isFeatured
                        ? "text-slate-200"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                <a
                  href="#"
                  className={`relative z-10 flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4 ${
                    isFeatured ? "text-primary" : "text-primary"
                  }`}
                >
                  Explore Service
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
