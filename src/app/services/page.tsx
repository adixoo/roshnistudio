export default function ServicesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h6 className="text-primary mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Specialized Expertise
            </h6>
            <h1 className="font-display mb-8 text-5xl leading-tight lg:text-7xl">
              Architectural services shaped around clarity, quality, and
              long-term value.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              We deliver design solutions that bridge the gap between visionary
              aesthetics and practical excellence. From high-end residential to
              wellness-focused retreats, our approach is defined by precision
              and purpose.
            </p>
          </div>
        </div>
        <div className="bg-secondary/5 absolute top-0 right-0 h-full w-1/3 translate-x-24 -skew-x-12 transform" />
      </section>
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group border-primary/10 hover:border-primary/40 flex h-[450px] flex-col justify-between border bg-white p-8 transition-all duration-500 lg:p-12 dark:bg-zinc-900/50">
              <div>
                <div className="text-secondary mb-8">
                  <span className="material-symbols-outlined text-5xl font-extralight">
                    home_pin
                  </span>
                </div>
                <h3 className="font-display mb-4 text-2xl">
                  London Residential
                </h3>
                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                  Sophisticated renovations and new-build homes in the heart of
                  the capital, blending heritage character with modern luxury.
                </p>
              </div>
              <a
                className="text-primary flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                href="#"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="group border-primary/10 hover:border-primary/40 flex h-[450px] flex-col justify-between border bg-white p-8 transition-all duration-500 lg:p-12 dark:bg-zinc-900/50">
              <div>
                <div className="text-secondary mb-8">
                  <span className="material-symbols-outlined text-5xl font-extralight">
                    analytics
                  </span>
                </div>
                <h3 className="font-display mb-4 text-2xl">
                  Feasibility Studies
                </h3>
                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                  Deep-dive technical assessments and planning strategy to
                  unlock the true potential and value of your site before you
                  build.
                </p>
              </div>
              <a
                className="text-primary flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                href="#"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="group bg-secondary relative flex h-[450px] flex-col justify-between overflow-hidden p-8 text-white transition-all duration-500 lg:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <img
                  alt="Spa and wellness architecture"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACA31WLf1Bx7GaYTStoxa5lFPsFwcHxnKme_UOg7YToh7WurQj0dVaX9Qr7Abj8h90e56DWKrbE-CJVwL3KECAvaFPKRpP5kjuJHHk3hMi5NNcdDDjFTN1vELyUdWd-xak9K0lADrMKsMvoihxIT2sc3OfJ7fIKsE3c8RMK8SVSwCh6iLU9a91nKtdYbjWbgSidXrSkLzxbOvGEIRT_ftwxFAbrLs6EKqVRBGMC5OOZ8_XCGa4W1jqMIHxgjABZr6lk1NOAjhyww"
                />
              </div>
              <div className="relative z-10">
                <div className="text-primary mb-8">
                  <span className="material-symbols-outlined text-5xl font-extralight">
                    spa
                  </span>
                </div>
                <h3 className="font-display mb-4 text-2xl">
                  Wellness &amp; Retreat
                </h3>
                <p className="leading-relaxed text-slate-200">
                  Designing restorative spaces that prioritize health,
                  mindfulness, and a seamless connection to the natural
                  environment.
                </p>
              </div>
              <a
                className="text-primary relative z-10 flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                href="#"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="group border-primary/10 hover:border-primary/40 flex h-[450px] flex-col justify-between border bg-white p-8 transition-all duration-500 lg:p-12 dark:bg-zinc-900/50">
              <div>
                <div className="text-secondary mb-8">
                  <span className="material-symbols-outlined text-5xl font-extralight">
                    public
                  </span>
                </div>
                <h3 className="font-display mb-4 text-2xl">
                  Concept &amp; International
                </h3>
                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                  Visionary concepts and remote design consultancy for global
                  clients seeking our signature aesthetic abroad.
                </p>
              </div>
              <a
                className="text-primary flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                href="#"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="group border-primary/10 hover:border-primary/40 flex h-[450px] flex-col justify-between border bg-white p-8 transition-all duration-500 lg:p-12 dark:bg-zinc-900/50">
              <div>
                <div className="text-secondary mb-8">
                  <span className="material-symbols-outlined text-5xl font-extralight">
                    view_in_ar
                  </span>
                </div>
                <h3 className="font-display mb-4 text-2xl">
                  3D Scanning &amp; BIM
                </h3>
                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                  Utilizing cutting-edge lidar technology to create perfect
                  digital twins of existing structures for absolute design
                  precision.
                </p>
              </div>
              <a
                className="text-primary flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                href="#"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="group border-primary/10 hover:border-primary/40 flex h-[450px] flex-col justify-between border bg-white p-8 transition-all duration-500 lg:p-12 dark:bg-zinc-900/50">
              <div>
                <div className="text-secondary mb-8">
                  <span className="material-symbols-outlined text-5xl font-extralight">
                    real_estate_agent
                  </span>
                </div>
                <h3 className="font-display mb-4 text-2xl">
                  Property Advisory
                </h3>
                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                  Strategic guidance for investors and portfolio holders,
                  aligning architectural vision with commercial viability.
                </p>
              </div>
              <a
                className="text-primary flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-all group-hover:gap-4"
                href="#"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center text-white lg:px-12">
          <h2 className="font-display mb-8 text-4xl lg:text-5xl">
            Ready to bring clarity to your project?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-white/80">
            We are currently accepting new commissions for the upcoming season.
            Schedule a consultation with our lead architect.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="text-primary bg-white px-10 py-4 text-sm font-medium tracking-widest uppercase transition-colors hover:bg-slate-100"
              href="#"
            >
              Book a Consultation
            </a>
            <a
              className="border border-white/40 px-10 py-4 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white/10"
              href="#"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
