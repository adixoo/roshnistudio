import CTA from "./_home/CTA";
import Expertise from "./_home/Expertise";
import Hero from "./_home/Hero";
import Philosophy from "./_home/Philosphy";
import Pillars from "./_home/Pillars";
import Projects from "./_home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Pillars />
      <Expertise />
      <Projects />

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
      <CTA />
    </>
  );
}
