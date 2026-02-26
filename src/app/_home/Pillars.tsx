import { Badge } from "@/components/ui/badge";

const PILLARS = [
  {
    id: "01",
    category: "Biological",
    title: "Neuroarchitecture",
    description:
      "Utilizing the principles of neuroscience to design spaces that reduce cortisol levels and promote cognitive focus. We analyze spatial proportions and lighting patterns to align with your circadian rhythm.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ",
    alt: "Light filtering through windows"
  },
  {
    id: "02",
    category: "Sensorial",
    title: "Materiality & Atmosphere",
    description:
      "We prioritize raw, honest materials that age with grace. Stone, timber, and lime plaster are selected for their haptic qualities and their ability to improve indoor air quality naturally.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy4XgAdyTxHQp0xdfSZ0Rd7WTb_r3-bffMjX7P8i5kjjg8nsMH6hlSjDDQbC8gGyhz5iF_0OujGAdAxvRANsWGjtJn_2VpWPK9xYY6SfO7pnHHlQS9F7jk5TKdnMz1akn7mWgA0moX0AyRwNk-3Gb-Q3Xj1Ljk_KCYiZR32fxJH68dv9FQrJxBKC0qsqffgjwxySV7VZL4z6kNykT61bIPX2k5L9-Eaon967xfv3yde04ui40bpU4Iv40UPGtO9KEzDxH6B9zjdQ",
    alt: "Tactile materials",
    isTall: true // Specific aspect ratio for this image
  },
  {
    id: "03",
    category: "Lifestyle",
    title: "Residential Thinking",
    description:
      "A home is a curated sequence of rituals. From the acoustic privacy of a workspace to the restorative warmth of a bedroom, we design for the quiet moments that define your life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WW4IaRIULv4qaDWu-yXRZ1YaKeO0WAXyy3haGr8btKG2AKxK7hnaJw7DFh48ViWbn2yG7CLVic15r0iZ8Ir9Q0wf8otDrSKke4guqyryunIBs0gLCMBHHuYihXX11pbjaUrgwxEpUDQ7PMcfjdTS-OesRcKYrdCmdWHjY7G8_N-fR0Oows_t_O4usn-M3yMa19O0dJkusyN4fFFzSec9pkly2xWe_ySW0AZjZ-A-yZIX_7AX8ys7GynnCpaqIBzlUbaGjBxuNw",
    alt: "Serene bedroom"
  }
];

export default function Pillars() {
  return (
    <section className="bg-white py-32" id="pillars">
      <div className="mx-auto max-w-7xl space-y-48 px-4">
        {PILLARS.map((pillar, index) => {
          // Determine if the layout should be reversed (even index = 0, 2, 4...)
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={pillar.id}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 md:max-w-[42%]">
                <Badge variant="text" className="mb-4">
                  {pillar.id} / {pillar.category}
                </Badge>
                <h2 className="mb-8 font-serif text-3xl leading-[1.1] md:text-5xl">
                  {pillar.title}
                </h2>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="bg-primary/40 mt-6 h-0.5 w-12"></div>
              </div>

              {/* Image Content */}
              <div className="flex-1 md:max-w-[50%]">
                <img
                  alt={pillar.alt}
                  src={pillar.image}
                  className={`w-full object-cover ${
                    pillar.isTall ? "aspect-[3/4]" : "aspect-video"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
