import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="py-32 pt-40 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <Badge>Contact roshni studio</Badge>
          <h1 className="text-charcoal mt-8 font-serif text-5xl leading-tight md:text-7xl">
            Let&apos;s shape what&apos;s next.
          </h1>
          {/* <p className="max-w-md text-lg leading-relaxed text-slate-400">
            Ready to transform your space? Whether you have a clear vision or
            need creative guidance, we&apos;re here to bring intentional design
            into your life.
          </p> */}
        </div>
        {/* <div className="relative h-80 w-full overflow-hidden rounded-lg md:w-1/2">
          <img
            alt="Modern minimal studio space"
            className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-all duration-700 hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqU2qMiLa0QpS8ypjGN5zJ-TpUl39twpzgW-1FrtlGtw016z8DMYiZ3g8HBd_dLBPRwBpUBTbQXEGu6niEOWXporNADB1J1Tu3tF7q-tvcoefxRgNGIrGP-uk0Xly2VhTwCnT9Ek3X7j2bC8ZRhxffLX6ZU2SntB2u1unJ0jr3dg2npXRtfegtQd6D6hyEN_lhc06FjqXsfVjREo6bHeFeDw67arJfMR9h1YvsF7Dz8UnOVZvios6RMeK0ZpdszrRQAZw2UMIUTA"
          />
          <div className="from-background-dark absolute inset-0 bg-gradient-to-t to-transparent" />
        </div> */}
      </div>
    </section>
  );
}
