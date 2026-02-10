export default function Contact() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-800 antialiased transition-colors duration-300 dark:text-slate-200">
      <section className="bg-background-dark px-8 py-24 text-white md:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <span className="text-primary mb-4 block text-xs font-bold tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h1 className="font-display mb-6 text-5xl leading-tight font-light md:text-7xl">
              Contact &amp; <br />
              <span className="italic">Consultations</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-slate-400">
              Ready to transform your space? Whether you have a clear vision or
              need creative guidance, we&apos;re here to bring intentional
              design into your life.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg md:w-1/2">
            <img
              alt="Modern minimal studio space"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-all duration-700 hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqU2qMiLa0QpS8ypjGN5zJ-TpUl39twpzgW-1FrtlGtw016z8DMYiZ3g8HBd_dLBPRwBpUBTbQXEGu6niEOWXporNADB1J1Tu3tF7q-tvcoefxRgNGIrGP-uk0Xly2VhTwCnT9Ek3X7j2bC8ZRhxffLX6ZU2SntB2u1unJ0jr3dg2npXRtfegtQd6D6hyEN_lhc06FjqXsfVjREo6bHeFeDw67arJfMR9h1YvsF7Dz8UnOVZvios6RMeK0ZpdszrRQAZw2UMIUTA"
            />
            <div className="from-background-dark absolute inset-0 bg-gradient-to-t to-transparent" />
          </div>
        </div>
      </section>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-4">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="font-display mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 text-2xl dark:border-slate-800">
              <span className="material-icons text-primary text-xl">event</span>
              Book a Consultation
            </h3>
            <p className="mb-6 text-sm text-slate-500 italic">
              Schedule a 30-minute discovery call to discuss your project
              requirements.
            </p>
            <div className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold">October 2024</span>
                <div className="flex space-x-2">
                  <button className="rounded p-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-icons text-sm">chevron_left</span>
                  </button>
                  <button className="rounded p-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-icons text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
              <div className="calendar-grid mb-2 text-center text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>
              <div className="calendar-grid gap-y-2 text-sm">
                <div className="py-2 text-slate-300">29</div>
                <div className="py-2 text-slate-300">30</div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  1
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  2
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  3
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  4
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  5
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  6
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  7
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  8
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  9
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  10
                </div>
                <div className="bg-primary rounded py-2 font-bold text-white">
                  11
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  12
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  13
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  14
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  15
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  16
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  17
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  18
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  19
                </div>
                <div className="hover:bg-primary/10 cursor-pointer rounded py-2">
                  20
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Available Times (GMT-5)
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="border-primary text-primary hover:bg-primary border px-3 py-2 text-xs font-medium transition-all hover:text-white">
                  09:00 AM
                </button>
                <button className="border-primary text-primary hover:bg-primary border px-3 py-2 text-xs font-medium transition-all hover:text-white">
                  11:30 AM
                </button>
                <button className="border-primary text-primary hover:bg-primary border px-3 py-2 text-xs font-medium transition-all hover:text-white">
                  02:00 PM
                </button>
                <button className="border-primary text-primary hover:bg-primary border px-3 py-2 text-xs font-medium transition-all hover:text-white">
                  04:30 PM
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="font-display mb-6 border-b border-slate-100 pb-4 text-2xl dark:border-slate-800">
              Project Enquiry
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Name
                  </label>
                  <input
                    className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Email Address
                  </label>
                  <input
                    className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Project Location
                  </label>
                  <input
                    className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                    placeholder="City, Country"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Project Type
                  </label>
                  <select className="focus:ring-primary w-full appearance-none border-none bg-slate-50 px-4 py-3 text-slate-500 transition-all focus:ring-1 dark:bg-slate-800">
                    <option>Residential Design</option>
                    <option>Wellness Studio</option>
                    <option>Furniture Customization</option>
                    <option>Commercial Office</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Estimated Budget
                </label>
                <select className="focus:ring-primary w-full appearance-none border-none bg-slate-50 px-4 py-3 text-slate-500 transition-all focus:ring-1 dark:bg-slate-800">
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Message / Vision
                </label>
                <textarea
                  className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                  placeholder="Tell us about your space..."
                  rows={4}
                  defaultValue={""}
                />
              </div>
              <button
                className="bg-primary hover:bg-opacity-90 shadow-primary/20 w-full py-4 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all"
                type="submit"
              >
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-8 lg:col-span-3">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="font-display mb-8 border-b border-slate-100 pb-4 text-2xl dark:border-slate-800">
              Quick Contact
            </h3>
            <div className="space-y-10">
              <a
                className="group flex items-start space-x-4"
                href="https://wa.me/191062685255"
              >
                <div className="text-primary group-hover:bg-primary rounded-full bg-slate-50 p-3 transition-all group-hover:text-white dark:bg-slate-800">
                  <span className="material-icons">chat</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium">+1 910-626-85255</p>
                </div>
              </a>
              <div className="flex items-start space-x-4">
                <div className="text-primary rounded-full bg-slate-50 p-3 dark:bg-slate-800">
                  <span className="material-icons">alternate_email</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    Email Hub
                  </p>
                  <p className="text-sm font-medium">contact@hello.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-primary rounded-full bg-slate-50 p-3 dark:bg-slate-800">
                  <span className="material-icons">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    Studio Location
                  </p>
                  <p className="text-sm leading-relaxed font-medium">
                    123 Fifth Avenue,
                    <br />
                    New York, NY 10160
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-slate-100 pt-10 dark:border-slate-800">
              <p className="mb-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Follow Our Journey
              </p>
              <div className="flex space-x-4">
                <a
                  className="hover:text-primary text-slate-400 transition-colors"
                  href="#"
                >
                  <span className="material-icons text-xl">facebook</span>
                </a>
                <a
                  className="hover:text-primary text-slate-400 transition-colors"
                  href="#"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a
                  className="hover:text-primary text-slate-400 transition-colors"
                  href="#"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="relative h-96 w-full overflow-hidden rounded-lg border border-white/10 shadow-xl grayscale transition-all duration-700 hover:grayscale-0">
          <img
            alt="Location Map Placeholder"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd6teMaFl3ZouQ5_U_IDk0c_7iBp3_QFwPJBPwTuf1Z53ztWwK2heQcibaMw9PlxGfucEjkB_7Tas_bu4vMTb89BMKpQS-tGz0Lk9XDF66B1oQcerK-A3fOuvr-IJVMNi3niBVvB3JhgrHslFy7AzxjGkKrZF8lek5d8J4grgWz6i46KEcWv1pxGEF_dYfLJjyw6ikymkuCJKlhWS7OVFY-g-_e9oOcqobx1kTZoxrqFw06KlCs-Vetr7pO0HzHVSnyPLiowJd8Q"
          />
          <div className="bg-primary/10 pointer-events-none absolute inset-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-background-dark border-primary/30 flex items-center space-x-3 border p-4 text-white shadow-2xl">
              <span className="material-icons text-primary">location_on</span>
              <span className="text-sm font-bold tracking-widest uppercase">
                The Studio
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
