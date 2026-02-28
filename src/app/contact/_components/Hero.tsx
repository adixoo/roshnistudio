"use client";

import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.event && e.data.event.indexOf("calendly") === 0) {
        setIsLoading(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="py-8 pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-2">
        {/* Left Side: Content */}
        <div className="pt-12">
          <Badge>Inquiry & Consultations</Badge>
          <h1 className="text-charcoal mt-8 font-serif text-5xl leading-[1.1] md:text-6xl">
            Let&apos;s discuss your <br /> next project.
          </h1>
          <p className="text-charcoal/80 mt-6 max-w-md text-lg leading-relaxed">
            Ready to bring your vision to life? Whether you&apos;re looking for
            a feasibility study or a full residential design, we&apos;ve made it
            easy to start. Book a meeting directly via our calendar or send us
            an enquiry below to discuss your project.
          </p>
        </div>

        {/* Right Side: Calendly Widget */}
        <div className="relative min-h-[600px] overflow-hidden bg-white">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white">
              <Loader2 className="text-charcoal/50 mb-4 h-8 w-8 animate-spin" />
              <p className="text-charcoal/60 animate-pulse text-sm">
                Loading calendly...
              </p>
            </div>
          )}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/muskianand89/30min?text_color=181b1f&primary_color=ebcb90"
            style={{ minWidth: "320px", height: "100%" }}
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
