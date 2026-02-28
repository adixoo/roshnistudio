import { PiQuotesFill } from "react-icons/pi";

const TESTIMONIALS = [
  {
    quote:
      "Impeccable detailing and a calm, considered process from concept to site.",
    client: "Private Client",
    location: "Residential Villa, Switzerland"
  },
  {
    quote:
      "A profound understanding of how light influences emotion. Our home feels like a sanctuary.",
    client: "Wellness Director",
    location: "Boutique Retreat, Oxfordshire"
  },
  {
    quote:
      "Working with Kyle Mills was a masterclass in intentionality. Every corner serves a purpose.",
    client: "Estate Developer",
    location: "Coastal Compound, Malibu"
  },
  {
    quote:
      "An architectural partner who listens as much as they design. The result exceeded our vision.",
    client: "Private Client",
    location: "Heritage Renovation, London"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-sand-50 overflow-hidden py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-8">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="bg-primary mx-auto h-px w-24" />
        </div>

        {/* Staggered Grid */}
        <div className="grid gap-x-16 md:grid-cols-2">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                // index % 2 !== 0 targets the 2nd column (1, 3, etc.)
                // We add top margin to the right column and bottom margin to the left
                index % 2 !== 0 ? "mb-12 md:mt-32 md:mb-0" : "mb-12 md:mb-32"
              }`}
            >
              {/* Phosphor Filled Icon */}
              <PiQuotesFill
                className="text-primary mb-6 text-4xl opacity-60"
                aria-hidden="true"
              />

              <blockquote className="text-charcoal/90 mb-8 font-serif text-xl leading-snug md:text-2xl">
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="border-primary mt-auto border-l-2 pl-6">
                <p className="text-charcoal text-sm font-bold tracking-widest uppercase">
                  {item.client}
                </p>
                <p className="text-charcoal/60 text-xs font-light tracking-wider uppercase">
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
