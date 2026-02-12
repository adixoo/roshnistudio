export default function FormComponent() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:gap-16">
      <div className="flex h-90 items-center justify-center bg-white shadow lg:col-span-3">
        Calendly link
      </div>
      <Contact />
      <div className="lg:col-span-2">
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

import {
  PiEnvelopeSimpleFill,
  PiMapPinFill,
  PiPhoneFill
} from "react-icons/pi";

import { StudioInfo } from "@/constant/info";

const contactItems = [
  {
    label: "Telephone",
    value: StudioInfo.Phone,
    href: `tel:${StudioInfo.Phone.replace(/\s+/g, "")}`,
    Icon: PiPhoneFill
  },
  {
    label: "Email",
    value: StudioInfo.Email,
    href: `mailto:${StudioInfo.Email}`,
    Icon: PiEnvelopeSimpleFill
  },
  {
    label: "Working Hours",
    value: `${StudioInfo.WorkingDays} | ${StudioInfo.Hours}`,
    Icon: PiMapPinFill
  }
];

const socialItems = [
  { label: "Instagram", href: StudioInfo.Instagram },
  { label: "Pinterest", href: StudioInfo.Pinterest }
];

function Contact() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 shadow">
        <h3 className="mb-8 border-b border-slate-100 pb-4 font-serif text-2xl dark:border-slate-800">
          Quick Contact
        </h3>

        <div className="space-y-10">
          {contactItems.map(({ label, value, href, Icon }) => {
            const isLink = Boolean(href);

            const content = (
              <>
                <div className="text-primary group-hover:bg-primary bg-primary/10 p-3 transition-all group-hover:text-white">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    {label}
                  </p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </>
            );

            if (isLink) {
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-4"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={label} className="flex items-start space-x-4">
                {content}
              </div>
            );
          })}
        </div>

        {/* Social */}
        <div className="mt-12 border-t border-slate-100 pt-10 dark:border-slate-800">
          <p className="mb-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Follow Our Journey
          </p>

          <div className="flex space-x-6 text-sm font-medium">
            {socialItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/80 nav-link relative"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
