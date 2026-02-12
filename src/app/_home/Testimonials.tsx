const TESTIMONIALS = [
  {
    quote:
      "Impeccable detailing and a calm, considered process from concept to site.",
    client: "Private Client",
    location: "Residential Villa, Switzerland",
    italic: false
  },
  {
    quote:
      "A profound understanding of how light influences emotion. Our home feels like a sanctuary.",
    client: "Wellness Director",
    location: "Boutique Retreat, Oxfordshire",
    italic: true
  },
  {
    quote:
      "Working with Kyle Mills was a masterclass in intentionality. Every corner serves a purpose.",
    client: "Estate Developer",
    location: "Coastal Compound, Malibu",
    italic: false
  },
  {
    quote:
      "An architectural partner who listens as much as they design. The result exceeded our vision.",
    client: "Private Client",
    location: "Heritage Renovation, London",
    italic: true
  }
];

export default function Testimonials() {
  return (
    <section className="bg-sand-50 overflow-hidden py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-8">
        {/* Header Section */}
        <div className="mb-16 flex items-center gap-6">
          <span className="text-gold text-xs font-bold tracking-widest whitespace-nowrap uppercase">
            Client Testimonials
          </span>
          <div className="bg-gold h-px w-full opacity-30" />
        </div>

        {/* Staggered Grid */}
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2 md:gap-y-0">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                // This applies the "downward" shift to the 2nd and 4th items
                index % 2 !== 0 ? "md:mt-32" : "md:mb-32"
              }`}
            >
              <span
                className="material-symbols-outlined text-gold mb-6 text-4xl opacity-40"
                aria-hidden="true"
              >
                format_quote
              </span>

              <blockquote
                className={`text-charcoal/90 mb-8 font-serif text-3xl leading-snug md:text-4xl ${
                  item.italic ? "italic" : ""
                }`}
              >
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="border-gold mt-auto border-l pl-6">
                <p className="text-charcoal text-sm font-bold tracking-widest uppercase">
                  {item.client}
                </p>
                <p className="text-charcoal/60 text-xs font-light tracking-wider">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
