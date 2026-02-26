import { Badge } from "@/components/ui/badge";

export default function Philosophy() {
  return (
    <section className="bg-sand-50 py-32" id="philosophy">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-24 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              alt="A vessel for mindfulness"
              className="aspect-4/5 w-full object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWEM7gVFoNtC0LUA0OIOirxvbGhW0GTxYJSXFBZU8_-rykAVwPKyKsL7LC1JiTgDMfqPMVBW0JIZy2nMPLOYsNk4KXbwf_Zo9uTl9Z88WTrulEYlFC-zaU570XUmpUAUP1sdXIff2Yr63YrZU6I0P7WBN8UzV-2uCAtSNzF26zViUk2D-qWkIZt6x_uUe3hwBjcUw_lcXPp0fpM-n4ntUWEds3T51GO3ePlTWUnFm2riIZ6N5Fn83nt2AwcriKMfVCRZ4i5HZ1w"
            />
          </div>
          <div className="order-1 md:order-2">
            <Badge variant={"text"}>Our Belief</Badge>
            <h2 className="mt-6 mb-8 font-serif text-4xl leading-[1.1] md:text-5xl">
              A vessel for <br />
              mindfulness.
            </h2>
            <p className="text-charcoal/80 mb-8 leading-relaxed font-light">
              We believe a home is more than a structure; it is an instrument
              for wellbeing. Our practice is dedicated to creating spaces that
              act as a sanctuary for the soul, where light, air, and materiality
              converge to support the human spirit.
            </p>
            <div className="bg-primary mb-8 h-px w-24" />

            <p className="text-charcoal/60 text-lg leading-relaxed font-light italic">
              &quot;Every line we draw is an invitation to slow down.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
