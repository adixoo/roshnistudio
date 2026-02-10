export default function CTA() {
  return (
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
  );
}
