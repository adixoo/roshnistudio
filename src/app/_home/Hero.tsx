import ConsultationOverlay from "@/components/ConsultationOverlay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PiCaretDoubleDown } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="bg-primary-foreground relative flex h-dvh items-center overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img
          alt="Cinematic architectural shot"
          className="h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHzytVmeze-_VWmR3VHWoc9aqF_ckxpVuUE3C6BL_le9mE3IQ8kEUW64rSNLa9pkzqdQXALSqx0shXQ0wnJE8Z1-6yDxEFN2HLZORntNJqStgGyB3EC5mn84EzL5GdRsFNy6HwxmLKHzm1I-XL_8o2fa7iYfJy2kse5ImXZHUXaubU1sTPpsPYzbzBG8pWkiXB5dihFktPGoiFLR4uB6CWs-cOCR6HkGxqfxoLnAYCBBq_EUgVosV9OfOgqyo9nNSGOV_k1b6-g"
        />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="max-w-4xl">
          <Badge>Residential &amp; Wellness Studio</Badge>
          {/* <span className="bg-primary-foreground text-primary px-3 py-2 text-xs font-bold tracking-[0.4em] uppercase"></span> */}

          <h1 className="mt-8 mb-12 font-serif text-5xl leading-[1.1] font-light text-white md:text-7xl">
            Architecture Design guided by{" "}
            <span className="font-medium italic">Human Biology</span>, not
            trends.
          </h1>
          <ConsultationOverlay layoutId="hero">
            <Button>Book A Consultation</Button>
          </ConsultationOverlay>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <PiCaretDoubleDown className="text-3xl text-white/30" />
      </div>
    </section>
  );
}
