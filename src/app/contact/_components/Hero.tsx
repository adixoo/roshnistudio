import { Badge } from "@/components/ui/badge";
import Script from "next/script";

export default function Hero() {
  return (
    <section className="py-24 pt-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:flex-row">
        {/* Left Side: Content */}
        <div className="w-full pt-12 md:w-1/2">
          <Badge>Inquiry & Consultations</Badge>
          <h1 className="text-charcoal mt-8 font-serif text-5xl md:text-6xl">
            Let&apos;s discuss your <br /> next project.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
            Ready to bring your vision to life? Whether you&apos;re looking for
            a feasibility study or a full residential design, we&apos;ve made it
            easy to start. Book a meeting directly via our calendar or send us
            an enquiry below to discuss your project.
          </p>
        </div>

        {/* Right Side: Calendly Widget */}
        <div className="min-h-[600px] w-full overflow-hidden border border-slate-100 bg-slate-50 md:w-1/2">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/muskianand89/30min?text_color=181818&primary_color=00ff7d"
            style={{ minWidth: "320px", height: "600px" }}
          ></div>

          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}
