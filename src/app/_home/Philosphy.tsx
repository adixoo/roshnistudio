"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Philosophy() {
  return (
    <section className="bg-sand-50 py-32" id="philosophy">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-24 md:grid-cols-2">
          {/* Image – Level 4 */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              alt="A vessel for mindfulness"
              className="aspect-4/5 w-full object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWEM7gVFoNtC0LUA0OIOirxvbGhW0GTxYJSXFBZU8_-rykAVwPKyKsL7LC1JiTgDMfqPMVBW0JIZy2nMPLOYsNk4KXbwf_Zo9uTl9Z88WTrulEYlFC-zaU570XUmpUAUP1sdXIff2Yr63YrZU6I0P7WBN8UzV-2uCAtSNzF26zViUk2D-qWkIZt6x_uUe3hwBjcUw_lcXPp0fpM-n4ntUWEds3T51GO3ePlTWUnFm2riIZ6N5Fn83nt2AwcriKMfVCRZ4i5HZ1w"
            />
          </motion.div>

          <div className="order-1 md:order-2">
            {/* Badge – soft intro (not dominant) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Badge variant="text">Our Belief</Badge>
            </motion.div>

            {/* Heading – Level 1 */}
            <motion.h2
              className="mb-8 font-serif text-5xl leading-tight md:text-6xl"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              A vessel for <br />
              mindfulness.
            </motion.h2>

            {/* Paragraph – Level 2 */}
            <motion.p
              className="text-charcoal/80 mb-8 leading-relaxed font-light"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              We believe a home is more than a structure; it is an instrument
              for wellbeing. Our practice is dedicated to creating spaces that
              act as a sanctuary for the soul, where light, air, and materiality
              converge to support the human spirit.
            </motion.p>

            {/* Divider – minimal, controlled */}
            <motion.div
              className="bg-primary mb-8 h-px w-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease }}
              viewport={{ once: true, amount: 0.3 }}
            />

            {/* Quote – Level 2 follow-up */}
            <motion.p
              className="text-charcoal/60 text-lg leading-relaxed font-light italic"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              &quot;Every line we draw is an invitation to slow down.&quot;
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
