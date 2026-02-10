export default function Expertise() {
  return (
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
            solutions tailored to high-end residential and commercial wellness.
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
  );
}
