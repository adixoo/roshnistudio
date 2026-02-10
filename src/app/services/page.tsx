export default function ServicesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <nav className="bg-background-light/90 dark:bg-background-dark/90 border-primary/10 fixed z-50 w-full border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 rotate-45 transform items-center justify-center text-white">
              <span className="font-display -rotate-45 transform text-lg font-bold">
                K
              </span>
            </div>
            <span className="font-display text-xl font-semibold tracking-wider uppercase">
              Kyle Mills
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium tracking-widest uppercase md:flex">
            <a className="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              About
            </a>
            <a className="text-primary border-primary border-b" href="#">
              Services
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Projects
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contact
            </a>
            <a
              className="bg-primary hover:bg-opacity-90 px-6 py-2 text-white transition-all"
              href="#"
            >
              Let&apos;s Talk
            </a>
          </div>
          <button className="text-primary md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
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
      <footer className="bg-background-light pt-24 pb-12 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-4">
            <div className="col-span-1 lg:col-span-1">
              <div className="mb-8 flex items-center gap-2">
                <div className="bg-primary flex h-8 w-8 rotate-45 transform items-center justify-center text-white">
                  <span className="font-display -rotate-45 transform text-lg font-bold">
                    K
                  </span>
                </div>
                <span className="font-display text-xl font-semibold tracking-wider uppercase">
                  Kyle Mills
                </span>
              </div>
              <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                A boutique architectural practice dedicated to creating spaces
                that endure through time, design, and quality.
              </p>
            </div>
            <div>
              <h4 className="font-display mb-8 text-lg">Contact Details</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li>Kyle Mills Studio</li>
                <li>+44 (0) 20 7946 0123</li>
                <li>studio@kylemills.co.uk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-8 text-lg">Get In Touch</h4>
              <p className="mb-6 text-slate-500 dark:text-slate-400">
                Let&apos;s bring your vision to life—get in touch to start
                designing a space that&apos;s uniquely yours.
              </p>
            </div>
            <div>
              <h4 className="font-display mb-8 text-lg">Our Location</h4>
              <p className="text-slate-500 dark:text-slate-400">
                123 Design Mews,
                <br />
                Kensington, London,
                <br />
                W8 4PT, UK
              </p>
            </div>
          </div>
          <div className="border-primary/10 flex flex-col items-center justify-between gap-6 border-t pt-12 text-sm tracking-wider text-slate-400 md:flex-row">
            <p>
              Copyright © 2024 Kyle Mills Architecture | Designed by Excellence
            </p>
            <div className="flex gap-8">
              <a className="hover:text-primary transition-colors" href="#">
                Facebook
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Instagram
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                LinkedIn
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </footer>
      <button className="text-primary border-primary/20 fixed right-8 bottom-8 z-50 flex items-center justify-center rounded-full border bg-white p-4 shadow-2xl dark:bg-zinc-800">
        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block">
          light_mode
        </span>
      </button>
    </div>
  );
}
