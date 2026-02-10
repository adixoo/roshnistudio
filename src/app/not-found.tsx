export default function NotFound() {
  return (
    <div className="bg-sand-100 flex min-h-screen flex-col">
      <main className="flex flex-grow items-center justify-center px-8">
        <div className="relative w-full max-w-4xl py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <div className="border-charcoal grid h-full w-full grid-cols-6 grid-rows-6 border-t border-l">
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
              <div className="border-charcoal border-r border-b" />
            </div>
          </div>
          <div className="relative z-10">
            <h1 className="text-charcoal/5 mb-0 font-serif text-[8rem] leading-none font-light md:text-[12rem]">
              404
            </h1>
            <h2 className="mt-[-2rem] mb-8 font-serif text-4xl md:mt-[-4rem] md:text-6xl">
              This path has not <br className="hidden md:block" /> been built
              yet.
            </h2>
            <p className="text-charcoal/60 mx-auto mb-10 max-w-xl text-lg leading-relaxed font-light md:text-xl">
              The space you are looking for does not exist or has been relocated
              to another site. Perhaps it is a prompt for a new direction.
            </p>
            <p className="text-primary mb-16 font-serif text-xl tracking-wide italic">
              &quot;In every lost path, there is a moment for reflection.&quot;
            </p>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
              <a
                className="group text-charcoal hover:text-gold flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors"
                href="index.html"
              >
                <span className="bg-gold h-px w-6 transition-all group-hover:w-10" />
                <span>Return to Sanctuary</span>
              </a>
              <a
                className="group text-charcoal hover:text-gold flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors"
                href="index.html#projects"
              >
                <span className="bg-gold h-px w-6 transition-all group-hover:w-10" />
                <span>View Selected Works</span>
              </a>
              <a
                className="group text-charcoal hover:text-gold flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors"
                href="index.html#contact"
              >
                <span className="bg-gold h-px w-6 transition-all group-hover:w-10" />
                <span>Contact the Studio</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
