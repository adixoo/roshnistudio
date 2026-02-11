"use client";

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

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Pillars() {
  return (
    <section className="bg-white py-32" id="pillars">
      <div className="mx-auto max-w-7xl space-y-48 px-4">
        {PILLARS.map((pillar, index) => {
          const isReversed = index % 2 !== 0;
          const baseDelay = index * 0.12; // structured stagger between sections

          return (
            <motion.div
              key={pillar.id}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: baseDelay, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Text Content */}
              <div className="flex-1 md:max-w-[42%]">
                {/* Category */}
                <motion.span
                  className="text-primary mb-4 block text-xs font-bold tracking-widest uppercase"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: baseDelay + 0.05,
                    ease
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {pillar.id} / {pillar.category}
                </motion.span>

                {/* Title – Level 1 */}
                <motion.h2
                  className="mb-8 font-serif text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: baseDelay + 0.1,
                    ease
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {pillar.title}
                </motion.h2>

                {/* Description – Level 2 */}
                <motion.p
                  className="text-primary-foreground/80 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: baseDelay + 0.18,
                    ease
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {pillar.description}
                </motion.p>

                {/* Divider */}
                <motion.div
                  className="bg-primary/40 mt-6 h-0.5 w-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: baseDelay + 0.25,
                    ease
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              </div>

              {/* Image – Level 4 */}
              <motion.div
                className="flex-1 md:max-w-[50%]"
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: baseDelay + 0.15,
                  ease
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  alt={pillar.alt}
                  src={pillar.image}
                  className={`w-full object-cover ${
                    pillar.isTall ? "aspect-[3/4]" : "aspect-video"
                  }`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
