export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <h6 className="text-primary mb-4 text-sm font-medium tracking-[0.2em] uppercase">
            Specialized Expertise
          </h6>
          <h1 className="font-display mb-8 text-5xl leading-tight lg:text-7xl">
            Architectural services shaped around clarity, quality, and long-term
            value.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We deliver design solutions that bridge the gap between visionary
            aesthetics and practical excellence. From high-end residential to
            wellness-focused retreats, our approach is defined by precision and
            purpose.
          </p>
        </div>
      </div>
      <div className="bg-secondary/5 absolute top-0 right-0 h-full w-1/3 translate-x-24 -skew-x-12 transform" />
    </section>
  );
}
