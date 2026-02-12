export default function Testimonials() {
  return (
    <section className="bg-sand-50 overflow-hidden py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex items-center gap-6">
          <span className="text-gold text-xs font-bold tracking-widest whitespace-nowrap uppercase">
            Client Testimonials
          </span>
          <div className="bg-gold h-px w-full opacity-30" />
        </div>
        <div className="grid gap-x-16 gap-y-24 md:grid-cols-2">
          <div className="flex flex-col">
            <span className="material-symbols-outlined text-gold mb-6 text-4xl opacity-40">
              format_quote
            </span>
            <blockquote className="text-charcoal/90 mb-8 font-serif text-3xl leading-snug md:text-4xl">
              &quot;Impeccable detailing and a calm, considered process from
              concept to site.&quot;
            </blockquote>
            <div className="border-gold mt-auto border-l pl-6">
              <p className="text-charcoal text-sm font-bold tracking-widest uppercase">
                Private Client
              </p>
              <p className="text-charcoal/60 text-xs font-light tracking-wider">
                Residential Villa, Switzerland
              </p>
            </div>
          </div>
          <div className="flex flex-col md:mt-16">
            <span className="material-symbols-outlined text-gold mb-6 text-4xl opacity-40">
              format_quote
            </span>
            <blockquote className="text-charcoal/90 mb-8 font-serif text-3xl leading-snug italic md:text-4xl">
              &quot;A profound understanding of how light influences emotion.
              Our home feels like a sanctuary.&quot;
            </blockquote>
            <div className="border-gold mt-auto border-l pl-6">
              <p className="text-charcoal text-sm font-bold tracking-widest uppercase">
                Wellness Director
              </p>
              <p className="text-charcoal/60 text-xs font-light tracking-wider">
                Boutique Retreat, Oxfordshire
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="material-symbols-outlined text-gold mb-6 text-4xl opacity-40">
              format_quote
            </span>
            <blockquote className="text-charcoal/90 mb-8 font-serif text-3xl leading-snug md:text-4xl">
              &quot;Working with Kyle Mills was a masterclass in intentionality.
              Every corner serves a purpose.&quot;
            </blockquote>
            <div className="border-gold mt-auto border-l pl-6">
              <p className="text-charcoal text-sm font-bold tracking-widest uppercase">
                Estate Developer
              </p>
              <p className="text-charcoal/60 text-xs font-light tracking-wider">
                Coastal Compound, Malibu
              </p>
            </div>
          </div>
          <div className="flex flex-col md:mt-16">
            <span className="material-symbols-outlined text-gold mb-6 text-4xl opacity-40">
              format_quote
            </span>
            <blockquote className="text-charcoal/90 mb-8 font-serif text-3xl leading-snug italic md:text-4xl">
              &quot;An architectural partner who listens as much as they design.
              The result exceeded our vision.&quot;
            </blockquote>
            <div className="border-gold mt-auto border-l pl-6">
              <p className="text-charcoal text-sm font-bold tracking-widest uppercase">
                Private Client
              </p>
              <p className="text-charcoal/60 text-xs font-light tracking-wider">
                Heritage Renovation, London
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
