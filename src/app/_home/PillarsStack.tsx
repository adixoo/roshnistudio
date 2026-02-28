"use client";

import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";

const PILLARS = [
  {
    id: "01",
    category: "Residential thinking",
    title: "Everything begins with the logic of a home.",
    description:
      "Even when designing retreats, wellness spaces, or international developments, we apply the sensitivity of residential architecture — proportion, human scale, natural light, and spatial clarity.\n\nHomes teach us how people truly live. How they move. Where they pause. How privacy and connection coexist.\n\nThis residential foundation allows larger or more complex projects to retain intimacy, comfort, and emotional intelligence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WW4IaRIULv4qaDWu-yXRZ1YaKeO0WAXyy3haGr8btKG2AKxK7hnaJw7DFh48ViWbn2yG7CLVic15r0iZ8Ir9Q0wf8otDrSKke4guqyryunIBs0gLCMBHHuYihXX11pbjaUrgwxEpUDQ7PMcfjdTS-OesRcKYrdCmdWHjY7G8_N-fR0Oows_t_O4usn-M3yMa19O0dJkusyN4fFFzSec9pkly2xWe_ySW0AZjZ-A-yZIX_7AX8ys7GynnCpaqIBzlUbaGjBxuNw",
    alt: "Residential architecture details"
  },
  {
    id: "02",
    category: "Neuroarchitecture & Wellbeing",
    title: "We design for the nervous system, not just the eye.",
    description:
      "Informed by principles of neuroarchitecture, our spaces are shaped to reduce stress, support focus, and enhance emotional balance. Spatial legibility, natural light, rhythm, and material texture all influence how a space is experienced physiologically.\n\nArchitecture has the power to calm or overwhelm. We choose calm.\n\nThe result is environments that feel intuitive, grounded, and restorative — designed not only for immediate beauty, but for long-term wellbeing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ",
    alt: "Neuroarchitecture principles"
  },
  {
    id: "03",
    category: "Materiality & Atmosphere",
    title: "Materials are never decorative decisions. They shape atmosphere.",
    description:
      "We work with restrained palettes and tactile surfaces that feel natural, balanced, and enduring. Texture, tone, weight, and light are carefully considered to create environments that feel composed rather than imposed.\n\nAtmosphere emerges from proportion, shadow, detail, and restraint. Our aim is not spectacle. It is depth.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy4XgAdyTxHQp0xdfSZ0Rd7WTb_r3-bffMjX7P8i5kjjg8nsMH6hlSjDDQbC8gGyhz5iF_0OujGAdAxvRANsWGjtJn_2VpWPK9xYY6SfO7pnHHlQS9F7jk5TKdnMz1akn7mWgA0moX0AyRwNk-3Gb-Q3Xj1Ljk_KCYiZR32fxJH68dv9FQrJxBKC0qsqffgjwxySV7VZL4z6kNykT61bIPX2k5L9-Eaon967xfv3yde04ui40bpU4Iv40UPGtO9KEzDxH6B9zjdQ",
    alt: "Tactile materials and textures"
  },
  {
    id: "04",
    category: "Clarity & Continuity",
    title: "Good architecture provides clarity — in both design and process.",
    description:
      "From early feasibility to construction, we guide each project with a clear architectural direction and thoughtful coordination. This continuity ensures that the original intent remains intact from concept through completion.\n\nCalm design requires a calm process.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ",
    alt: "Blueprint and architectural process"
  }
];

export default function PillarsStack() {
  return (
    <section className="bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div>
          <ScrollStack
            itemDistance={40}
            itemScale={0}
            baseScale={1}
            itemStackDistance={0}
            stackPosition="0%"
          >
            {PILLARS.map((pillar) => (
              <ScrollStackItem
                key={pillar.id}
                itemClassName="bg-charcoal text-white overflow-hidden h-dvh"
              >
                <div className="grid h-full md:grid-cols-[1.2fr_1fr]">
                  {/* Left Content */}
                  <div className="flex flex-col justify-between p-8 md:p-16">
                    <div>
                      <div className="mb-8 flex items-center gap-4">
                        <span className="text-5xl opacity-20">{pillar.id}</span>
                        <div className="h-px w-8 bg-white/20" />
                        <span className="text-[10px] font-light tracking-[0.2em] text-white/40 uppercase">
                          {pillar.category}
                        </span>
                      </div>

                      <h3 className="mb-12 font-serif text-4xl leading-[1.1] md:text-5xl">
                        {pillar.title}
                      </h3>

                      <div className="space-y-0">
                        <div className="border-t border-white/10 py-10">
                          <span className="mb-4 block text-[10px] tracking-[0.2em] text-white/40 uppercase">
                            Philosophy
                          </span>
                          <div className="max-w-xl space-y-4">
                            {pillar.description.split("\n\n").map((para, i) => (
                              <p
                                key={i}
                                className="text-base leading-relaxed font-light opacity-80"
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="bg-sand-950 relative h-full overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale-50 transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black/30" />

                    {/* Architectural Coordinates or Label */}
                    <div className="absolute right-8 bottom-8 flex flex-col items-end gap-2 font-mono text-[10px] tracking-widest text-white/40 uppercase">
                      <span>Roshni Studio</span>
                      <span>© 2026</span>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
