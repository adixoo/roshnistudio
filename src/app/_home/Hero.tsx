export default function Hero() {
  return (
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
          <span className="text-primary bg-primary-foreground px-3 py-2 text-xs font-bold tracking-[0.4em] uppercase">
            Residential &amp; Wellness Studio
          </span>
          <h1 className="mt-8 mb-12 font-serif text-6xl leading-[1.1] font-light text-white md:text-8xl">
            {/* Architecture for living, wellbeing, and{" "}
            <span className="italic">long-term calm.</span> */}
            Architecture Design guided by{" "}
            <span className="font-medium italic">Human Biology</span>, not
            trends.
          </h1>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <span className="material-symbols-outlined text-3xl">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
}
