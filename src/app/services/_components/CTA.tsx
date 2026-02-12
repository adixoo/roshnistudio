import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-accent py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center text-white lg:px-12">
        <h2 className="mb-8 font-serif text-4xl lg:text-6xl">
          Ready to bring clarity to your project?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white/80">
          We are currently accepting new commissions for the upcoming season.
          Schedule a consultation with our lead architect.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button variant={"secondary"}>Schedule Consultation</Button>
          </Link>
          <a
            className="border border-white/40 px-10 py-4 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white/10"
            href="#"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
