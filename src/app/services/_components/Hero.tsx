import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <Badge>Specialized Expertise</Badge>
          <h1 className="text-charcoal mt-8 mb-8 font-serif text-5xl leading-tight lg:text-7xl">
            Architectural services shaped around clarity, quality, and long-term
            value.
          </h1>
          <p className="text-charcoal/80 max-w-2xl text-lg leading-relaxed">
            We deliver design solutions that bridge the gap between visionary
            aesthetics and practical excellence. From high-end residential to
            wellness-focused retreats, our approach is defined by precision and
            purpose.
          </p>
        </div>
      </div>
      <div className="bg-primary/5 absolute top-0 right-0 h-full w-1/3 translate-x-24 -skew-x-12 transform" />
    </section>
  );
}
