import {
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiLinkedinLogo,
  PiMapPin,
  PiTwitterLogo,
  PiWhatsappLogo
} from "react-icons/pi";
export default function FormComponent() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 lg:grid-cols-3">
      <div className="col-span-3 h-90 bg-white shadow"></div>
      <Contact />
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

function Contact() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 shadow">
        <h3 className="mb-8 border-b border-slate-100 pb-4 font-serif text-2xl dark:border-slate-800">
          Quick Contact
        </h3>

        <div className="space-y-10">
          {/* WhatsApp */}
          <a
            className="group flex items-start space-x-4"
            href="https://wa.me/191062685255"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-primary group-hover:bg-primary rounded-full bg-slate-50 p-3 transition-all group-hover:text-white dark:bg-slate-800">
              <PiWhatsappLogo size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                WhatsApp
              </p>
              <p className="text-sm font-medium">+1 910-626-85255</p>
            </div>
          </a>

          {/* Email */}
          <a
            className="group flex items-start space-x-4"
            href="mailto:contact@hello.com"
          >
            <div className="text-primary group-hover:bg-primary rounded-full bg-slate-50 p-3 transition-all group-hover:text-white dark:bg-slate-800">
              <PiEnvelopeSimple size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                Email Hub
              </p>
              <p className="text-sm font-medium">contact@hello.com</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="text-primary rounded-full bg-slate-50 p-3 dark:bg-slate-800">
              <PiMapPin size={20} />
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

        {/* Social */}
        <div className="mt-12 border-t border-slate-100 pt-10 dark:border-slate-800">
          <p className="mb-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Follow Our Journey
          </p>

          <div className="flex space-x-6">
            <a
              className="hover:text-primary text-slate-400 transition-colors"
              href="#"
            >
              <PiFacebookLogo size={20} />
            </a>

            <a
              className="hover:text-primary text-slate-400 transition-colors"
              href="#"
            >
              <PiTwitterLogo size={20} />
            </a>

            <a
              className="hover:text-primary text-slate-400 transition-colors"
              href="#"
            >
              <PiLinkedinLogo size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
