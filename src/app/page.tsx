export default function Home() {
  return (
    <>
      <section className="bg-primary-foreground relative flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img
            alt="Cinematic architectural shot"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHzytVmeze-_VWmR3VHWoc9aqF_ckxpVuUE3C6BL_le9mE3IQ8kEUW64rSNLa9pkzqdQXALSqx0shXQ0wnJE8Z1-6yDxEFN2HLZORntNJqStgGyB3EC5mn84EzL5GdRsFNy6HwxmLKHzm1I-XL_8o2fa7iYfJy2kse5ImXZHUXaubU1sTPpsPYzbzBG8pWkiXB5dihFktPGoiFLR4uB6CWs-cOCR6HkGxqfxoLnAYCBBq_EUgVosV9OfOgqyo9nNSGOV_k1b6-g"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <span className="text-gold mb-8 block text-xs font-bold tracking-[0.4em] uppercase">
              Residential &amp; Wellness Studio
            </span>
            <h1 className="mb-12 font-serif text-6xl leading-[1.1] font-light text-white md:text-8xl">
              Architecture for living, wellbeing, and{" "}
              <span className="italic">long-term calm.</span>
            </h1>
            <div className="flex items-center space-x-6">
              <div className="bg-gold h-px w-20" />
              <p className="text-lg font-light tracking-wide text-white/70">
                Design guided by human biology, not trends.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
          <span className="material-symbols-outlined text-3xl">
            keyboard_double_arrow_down
          </span>
        </div>
      </section>
      <section className="bg-sand-50 py-32" id="philosophy">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid items-center gap-24 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                alt="A vessel for mindfulness"
                className="aspect-[4/5] w-full object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWEM7gVFoNtC0LUA0OIOirxvbGhW0GTxYJSXFBZU8_-rykAVwPKyKsL7LC1JiTgDMfqPMVBW0JIZy2nMPLOYsNk4KXbwf_Zo9uTl9Z88WTrulEYlFC-zaU570XUmpUAUP1sdXIff2Yr63YrZU6I0P7WBN8UzV-2uCAtSNzF26zViUk2D-qWkIZt6x_uUe3hwBjcUw_lcXPp0fpM-n4ntUWEds3T51GO3ePlTWUnFm2riIZ6N5Fn83nt2AwcriKMfVCRZ4i5HZ1w"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary-forborder-primary-foreground/40 mb-6 block text-[10px] font-bold tracking-[0.3em] uppercase">
                Our Belief
              </span>
              <h2 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
                A vessel for <br />
                mindfulness.
              </h2>
              <p className="text-primary-forborder-primary-foreground/80 mb-8 text-xl leading-relaxed font-light">
                We believe a home is more than a structure; it is an instrument
                for wellbeing. Our practice is dedicated to creating spaces that
                act as a sanctuary for the soul, where light, air, and
                materiality converge to support the human spirit.
              </p>
              <p className="text-primary-forborder-primary-foreground/60 text-lg leading-relaxed font-light italic">
                Every line we draw is an invitation to slow down.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-32" id="pillars">
        <div className="mx-auto max-w-7xl space-y-48 px-8">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-gold mb-4 block text-xs font-bold tracking-widest uppercase">
                01 / Biological
              </span>
              <h2 className="mb-8 text-4xl md:text-5xl">Neuroarchitecture</h2>
              <p className="text-primary-forborder-primary-foreground/70 mb-6 text-lg leading-relaxed">
                Utilizing the principles of neuroscience to design spaces that
                reduce cortisol levels and promote cognitive focus. We analyze
                spatial proportions and lighting patterns to align with your
                circadian rhythm.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <img
                alt="Light filtering through windows"
                className="aspect-video w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ"
              />
            </div>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <img
                alt="Tactile materials"
                className="aspect-[3/4] w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy4XgAdyTxHQp0xdfSZ0Rd7WTb_r3-bffMjX7P8i5kjjg8nsMH6hlSjDDQbC8gGyhz5iF_0OujGAdAxvRANsWGjtJn_2VpWPK9xYY6SfO7pnHHlQS9F7jk5TKdnMz1akn7mWgA0moX0AyRwNk-3Gb-Q3Xj1Ljk_KCYiZR32fxJH68dv9FQrJxBKC0qsqffgjwxySV7VZL4z6kNykT61bIPX2k5L9-Eaon967xfv3yde04ui40bpU4Iv40UPGtO9KEzDxH6B9zjdQ"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <span className="text-gold mb-4 block text-xs font-bold tracking-widest uppercase">
                02 / Sensorial
              </span>
              <h2 className="mb-8 text-4xl md:text-5xl">
                Materiality &amp; Atmosphere
              </h2>
              <p className="text-primary-forborder-primary-foreground/70 mb-6 text-lg leading-relaxed">
                We prioritize raw, honest materials that age with grace. Stone,
                timber, and lime plaster are selected for their haptic qualities
                and their ability to improve indoor air quality naturally.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-gold mb-4 block text-xs font-bold tracking-widest uppercase">
                03 / Lifestyle
              </span>
              <h2 className="mb-8 text-4xl md:text-5xl">
                Residential Thinking
              </h2>
              <p className="text-primary-forborder-primary-foreground/70 mb-6 text-lg leading-relaxed">
                A home is a curated sequence of rituals. From the acoustic
                privacy of a workspace to the restorative warmth of a bedroom,
                we design for the quiet moments that define your life.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <img
                alt="Serene bedroom"
                className="aspect-video w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_WW4IaRIULv4qaDWu-yXRZ1YaKeO0WAXyy3haGr8btKG2AKxK7hnaJw7DFh48ViWbn2yG7CLVic15r0iZ8Ir9Q0wf8otDrSKke4guqyryunIBs0gLCMBHHuYihXX11pbjaUrgwxEpUDQ7PMcfjdTS-OesRcKYrdCmdWHjY7G8_N-fR0Oows_t_O4usn-M3yMa19O0dJkusyN4fFFzSec9pkly2xWe_ySW0AZjZ-A-yZIX_7AX8ys7GynnCpaqIBzlUbaGjBxuNw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sand-50 border-primary-foreground/5 border-y py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl space-y-4">
              <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
                Expertise
              </span>
              <h2 className="font-display text-4xl">Specialized Services</h2>
            </div>
            <p className="text-primary-foreground/60 max-w-sm text-sm leading-relaxed">
              From concept to completion, we provide comprehensive architectural
              solutions tailored to high-end residential and commercial
              wellness.
            </p>
          </div>
          <div className="border-charcoal/10 dark:border-sand/10 grid grid-cols-1 gap-0 border md:grid-cols-3">
            <div className="border-charcoal/10 dark:border-sand/10 dark:hover:bg-charcoal group border-b p-10 transition-all duration-300 hover:bg-white md:border-r md:border-b-0">
              <span className="text-primary/40 group-hover:text-primary font-display text-4xl transition-colors">
                01.
              </span>
              <h3 className="font-display mt-6 mb-4 text-xl">
                Residential Design
              </h3>
              <p className="text-charcoal/60 dark:text-sand/60 mb-8 text-sm leading-relaxed">
                Bespoke private residences designed to reflect the unique
                lifestyle and aspirations of our clients, with a focus on
                sustainable luxury.
              </p>
              <ul className="text-charcoal/40 dark:text-sand/40 space-y-2 text-xs tracking-widest uppercase">
                <li>• New Builds</li>
                <li>• Major Renovations</li>
                <li>• Interior Architecture</li>
              </ul>
            </div>
            <div className="border-charcoal/10 dark:border-sand/10 dark:hover:bg-charcoal group border-b p-10 transition-all duration-300 hover:bg-white md:border-r md:border-b-0">
              <span className="text-primary/40 group-hover:text-primary font-display text-4xl transition-colors">
                02.
              </span>
              <h3 className="font-display mt-6 mb-4 text-xl">
                Wellness Environments
              </h3>
              <p className="text-charcoal/60 dark:text-sand/60 mb-8 text-sm leading-relaxed">
                Creating restorative spaces including private spas, meditation
                retreats, and boutique hospitality concepts that prioritize
                health.
              </p>
              <ul className="text-charcoal/40 dark:text-sand/40 space-y-2 text-xs tracking-widest uppercase">
                <li>• Spa Design</li>
                <li>• Lighting Bio-optimization</li>
                <li>• Acoustic Planning</li>
              </ul>
            </div>
            <div className="dark:hover:bg-charcoal group p-10 transition-all duration-300 hover:bg-white">
              <span className="text-primary/40 group-hover:text-primary font-display text-4xl transition-colors">
                03.
              </span>
              <h3 className="font-display mt-6 mb-4 text-xl">
                Feasibility Studies
              </h3>
              <p className="text-charcoal/60 dark:text-sand/60 mb-8 text-sm leading-relaxed">
                Detailed analysis of potential sites, zoning, and project
                constraints to ensure a solid foundation for your architectural
                vision.
              </p>
              <ul className="text-charcoal/40 dark:text-sand/40 space-y-2 text-xs tracking-widest uppercase">
                <li>• Site Analysis</li>
                <li>• Zoning Compliance</li>
                <li>• Budgeting &amp; Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32" id="projects">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 text-5xl">Selected Works</h2>
              <p className="text-primary-forborder-primary-foreground/50 max-w-md">
                A curation of projects defined by their relationship to light,
                site, and serenity.
              </p>
            </div>
            <a
              className="border-gold hover:text-gold border-b pb-2 text-xs font-bold tracking-[0.3em] uppercase transition-colors"
              href="#"
            >
              View All Projects
            </a>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="group space-y-6">
              <div className="overflow-hidden">
                <img
                  alt="The Glass House"
                  className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHzytVmeze-_VWmR3VHWoc9aqF_ckxpVuUE3C6BL_le9mE3IQ8kEUW64rSNLa9pkzqdQXALSqx0shXQ0wnJE8Z1-6yDxEFN2HLZORntNJqStgGyB3EC5mn84EzL5GdRsFNy6HwxmLKHzm1I-XL_8o2fa7iYfJy2kse5ImXZHUXaubU1sTPpsPYzbzBG8pWkiXB5dihFktPGoiFLR4uB6CWs-cOCR6HkGxqfxoLnAYCBBq_EUgVosV9OfOgqyo9nNSGOV_k1b6-g"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl">The Glass House</h4>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                  Connecticut
                </span>
              </div>
            </div>
            <div className="group mt-12 space-y-6">
              <div className="overflow-hidden">
                <img
                  alt="Zen Courtyard"
                  className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl">Zen Courtyard</h4>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                  Kyoto
                </span>
              </div>
            </div>
            <div className="group space-y-6">
              <div className="overflow-hidden">
                <img
                  alt="Monolith Residence"
                  className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy4XgAdyTxHQp0xdfSZ0Rd7WTb_r3-bffMjX7P8i5kjjg8nsMH6hlSjDDQbC8gGyhz5iF_0OujGAdAxvRANsWGjtJn_2VpWPK9xYY6SfO7pnHHlQS9F7jk5TKdnMz1akn7mWgA0moX0AyRwNk-3Gb-Q3Xj1Ljk_KCYiZR32fxJH68dv9FQrJxBKC0qsqffgjwxySV7VZL4z6kNykT61bIPX2k5L9-Eaon967xfv3yde04ui40bpU4Iv40UPGtO9KEzDxH6B9zjdQ"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl">Monolith Residence</h4>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                  Malibu
                </span>
              </div>
            </div>
            <div className="group mt-12 space-y-6">
              <div className="overflow-hidden">
                <img
                  alt="The Library Pavilion"
                  className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_WW4IaRIULv4qaDWu-yXRZ1YaKeO0WAXyy3haGr8btKG2AKxK7hnaJw7DFh48ViWbn2yG7CLVic15r0iZ8Ir9Q0wf8otDrSKke4guqyryunIBs0gLCMBHHuYihXX11pbjaUrgwxEpUDQ7PMcfjdTS-OesRcKYrdCmdWHjY7G8_N-fR0Oows_t_O4usn-M3yMa19O0dJkusyN4fFFzSec9pkly2xWe_ySW0AZjZ-A-yZIX_7AX8ys7GynnCpaqIBzlUbaGjBxuNw"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl">The Library Pavilion</h4>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                  Oxfordshire
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-primary/5 bg-sand-50 border-y px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-display mb-8 text-4xl leading-snug italic md:text-5xl">
            Design is not just what it looks like and feels like. Design is how
            it works for the soul.
          </blockquote>
          <cite className="text-sm font-medium tracking-widest uppercase not-italic opacity-60">
            — Kyle Mills, Principal Architect
          </cite>
        </div>
      </section>

      <section className="bg-sand-50 px-8 py-24" id="contact">
        <div className="bg-accent relative mx-auto max-w-7xl overflow-hidden p-16 text-center md:p-32 md:text-left">
          <div className="relative z-10 grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl text-white md:text-7xl">
                Ready to evolve <br />
                your space?
              </h2>
              <p className="mb-10 max-w-md text-lg font-light text-white/60">
                Begin the conversation about your next architectural project. We
                work globally with clients who value intention and atmosphere.
              </p>
              <a
                className="bg-gold text-primary-forborder-primary-foreground inline-block px-10 py-5 text-xs font-bold tracking-widest uppercase shadow-xl transition-all hover:bg-white"
                href="#"
              >
                Book a Consultation
              </a>
            </div>
            <div className="hidden md:block">
              <img
                alt="Architectural detail"
                className="h-80 w-full object-cover opacity-30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWEM7gVFoNtC0LUA0OIOirxvbGhW0GTxYJSXFBZU8_-rykAVwPKyKsL7LC1JiTgDMfqPMVBW0JIZy2nMPLOYsNk4KXbwf_Zo9uTl9Z88WTrulEYlFC-zaU570XUmpUAUP1sdXIff2Yr63YrZU6I0P7WBN8UzV-2uCAtSNzF26zViUk2D-qWkIZt6x_uUe3hwBjcUw_lcXPp0fpM-n4ntUWEds3T51GO3ePlTWUnFm2riIZ6N5Fn83nt2AwcriKMfVCRZ4i5HZ1w"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
            <div className="grid h-full w-full grid-cols-12">
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
              <div className="border-r border-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
