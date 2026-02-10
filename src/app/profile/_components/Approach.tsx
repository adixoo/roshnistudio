import { Badge } from "@/components/ui/badge";

export default function Approach() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl space-y-4">
            <Badge variant={"text"}>Our approach</Badge>
            <h2 className="text-charcoal dark:text-accent-cream font-serif text-4xl md:text-6xl">
              How We Work
            </h2>
          </div>
          <p className="text-charcoal/80 max-w-md text-sm leading-relaxed tracking-wider">
            Our process is iterative, transparent, and deeply collaborative. We
            believe the best results come from a shared vision.
          </p>
        </div>
        <div className="relative grid gap-12 md:grid-cols-4">
          <div className="group relative">
            <div className="font-display pointer-events-none absolute -top-16 -left-4 text-[120px] opacity-5">
              01
            </div>
            <div className="space-y-6 pt-4">
              <div className="bg-primary dark:bg-accent-cream dark:text-primary relative flex h-12 w-12 items-center justify-center text-white">
                <span className="material-icons-outlined">psychology</span>
              </div>
              <h4 className="font-display text-xl font-bold">1. Listen</h4>
              <p className="text-primary/70 dark:text-accent-cream/70 text-sm leading-relaxed">
                Every project begins with understanding. We dive deep into your
                rituals, needs, and aspirations for the space.
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="font-display pointer-events-none absolute -top-16 -left-4 text-[120px] opacity-5">
              02
            </div>
            <div className="space-y-6 pt-4">
              <div className="bg-charcoal text-primary flex h-12 w-12 items-center justify-center">
                <span className="material-icons-outlined">science</span>
              </div>
              <h4 className="font-display text-xl font-bold">2. Test</h4>
              <p className="text-primary/70 dark:text-accent-cream/70 text-sm leading-relaxed">
                We explore multiple directions through sketching, modeling, and
                light studies to find the perfect resonance.
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="font-display pointer-events-none absolute -top-16 -left-4 text-[120px] opacity-5">
              03
            </div>
            <div className="space-y-6 pt-4">
              <div className="bg-primary dark:bg-accent-cream dark:text-primary flex h-12 w-12 items-center justify-center text-white">
                <span className="material-icons-outlined">architecture</span>
              </div>
              <h4 className="font-display text-xl font-bold">3. Design</h4>
              <h4 className="font-display text-xl font-bold" />
              <p className="text-primary/70 dark:text-accent-cream/70 text-sm leading-relaxed">
                Refining the chosen concept into a detailed architectural
                language, focusing on materiality and craft.
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="font-display pointer-events-none absolute -top-16 -left-4 text-[120px] opacity-5">
              04
            </div>
            <div className="space-y-6 pt-4">
              <div className="bg-primary dark:bg-accent-cream dark:text-primary flex h-12 w-12 items-center justify-center text-white">
                <span className="material-icons-outlined">home_work</span>
              </div>
              <h4 className="font-display text-xl font-bold">4. Deliver</h4>
              <p className="text-primary/70 dark:text-accent-cream/70 text-sm leading-relaxed">
                Meticulous oversight during construction ensures that the
                initial vision is realized to the highest standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
