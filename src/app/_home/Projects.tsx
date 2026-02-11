"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "The Glass House",
    location: "Connecticut",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABHzytVmeze-_VWmR3VHWoc9aqF_ckxpVuUE3C6BL_le9mE3IQ8kEUW64rSNLa9pkzqdQXALSqx0shXQ0wnJE8Z1-6yDxEFN2HLZORntNJqStgGyB3EC5mn84EzL5GdRsFNy6HwxmLKHzm1I-XL_8o2fa7iYfJy2kse5ImXZHUXaubU1sTPpsPYzbzBG8pWkiXB5dihFktPGoiFLR4uB6CWs-cOCR6HkGxqfxoLnAYCBBq_EUgVosV9OfOgqyo9nNSGOV_k1b6-g"
  },
  {
    title: "Zen Courtyard",
    location: "Kyoto",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ"
  },
  {
    title: "Monolith Residence",
    location: "Malibu",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy4XgAdyTxHQp0xdfSZ0Rd7WTb_r3-bffMjX7P8i5kjjg8nsMH6hlSjDDQbC8gGyhz5iF_0OujGAdAxvRANsWGjtJn_2VpWPK9xYY6SfO7pnHHlQS9F7jk5TKdnMz1akn7mWgA0moX0AyRwNk-3Gb-Q3Xj1Ljk_KCYiZR32fxJH68dv9FQrJxBKC0qsqffgjwxySV7VZL4z6kNykT61bIPX2k5L9-Eaon967xfv3yde04ui40bpU4Iv40UPGtO9KEzDxH6B9zjdQ"
  },
  {
    title: "The Library Pavilion",
    location: "Oxfordshire",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WW4IaRIULv4qaDWu-yXRZ1YaKeO0WAXyy3haGr8btKG2AKxK7hnaJw7DFh48ViWbn2yG7CLVic15r0iZ8Ir9Q0wf8otDrSKke4guqyryunIBs0gLCMBHHuYihXX11pbjaUrgwxEpUDQ7PMcfjdTS-OesRcKYrdCmdWHjY7G8_N-fR0Oows_t_O4usn-M3yMa19O0dJkusyN4fFFzSec9pkly2xWe_ySW0AZjZ-A-yZIX_7AX8ys7GynnCpaqIBzlUbaGjBxuNw"
  }
];

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  return (
    <section className="bg-white py-32" id="projects">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            {/* Heading – Level 1 */}
            <motion.h2
              className="mb-4 font-serif text-5xl"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Selected Works
            </motion.h2>

            {/* Paragraph – Level 2 */}
            <motion.p
              className="text-primary-foreground/80 max-w-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              A curation of projects defined by their relationship to light,
              site, and serenity.
            </motion.p>
          </div>

          {/* Button – subtle pop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href="/projects">
              <Button
                variant="outline"
                className="hover:bg-charcoal/70 text-white"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => {
            const delay = index * 0.1; // 0ms, 100ms, 200ms, 300ms

            return (
              <motion.div
                key={project.title}
                className={`group space-y-6 ${index % 2 === 1 ? "mt-12" : ""}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay, ease }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 60, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: delay + 0.05,
                    ease
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                  />
                </motion.div>

                {/* Title + Location */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: delay + 0.15,
                    ease
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-xl md:text-2xl">{project.title}</h4>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                    {project.location}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
