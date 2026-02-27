"use client";

import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";

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
    alt: "Tactile materials"
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
                  <div className="flex flex-col justify-between p-16">
                    <div>
                      <h3 className="mb-12 font-serif text-4xl leading-[1.1] md:text-6xl">
                        {pillar.title}
                      </h3>

                      <div className="space-y-0">
                        <div className="border-t border-white/10 py-6">
                          <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                            Location
                          </span>
                          <span className="text-lg font-light md:text-xl">
                            Remote / On-site
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 py-6">
                          <div>
                            <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                              ID
                            </span>
                            <span className="text-lg font-light md:text-xl">
                              {pillar.id}
                            </span>
                          </div>
                          <div>
                            <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                              Pillar
                            </span>
                            <span className="text-lg font-light md:text-xl">
                              {pillar.category}
                            </span>
                          </div>
                          <div className="hidden md:block">
                            <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                              Status
                            </span>
                            <span className="text-sand-200 text-lg font-light md:text-xl">
                              Active
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-b border-white/10 py-8">
                          <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                            Approach
                          </span>
                          <p className="max-w-md text-base leading-relaxed font-light opacity-70 md:text-lg">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <button className="hover:bg-sand-50 bg-white px-10 py-4 text-sm font-medium tracking-tight text-black transition-all active:scale-95">
                        View Project
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="bg-sand-950 relative h-full overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black/20" />

                    {/* Floating Label ala image */}
                    {/* <div className="absolute top-8 right-8 border border-white/10 bg-white/10 px-4 py-1 font-mono text-[10px] tracking-widest text-white uppercase backdrop-blur-md">
                      Studio
                    </div> */}
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
