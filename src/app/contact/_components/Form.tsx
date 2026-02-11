export default function FormComponent() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 py-20 lg:grid-cols-3">
      <div className="col-span-3 h-90 bg-white shadow"></div>
      <div className="space-y-8">
        <div className="bg-white p-8 shadow">
          <h3 className="mb-8 border-b border-slate-100 pb-4 font-serif text-2xl dark:border-slate-800">
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
      <div className="col-span-2">
        <div className="bg-white p-8 shadow">
          <h3 className="mb-6 border-b border-slate-100 pb-4 font-serif text-2xl dark:border-slate-800">
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
    </section>
  );
}
