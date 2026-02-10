import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <header className="pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <Badge> roshni studio profile</Badge>
            <h1 className="text-charcoal font-serif text-5xl leading-[1.1] md:text-7xl">
              A considered studio for thoughtful clients and meaningful places.
            </h1>
            <p className="text-charcoal/70 max-w-lg text-lg leading-relaxed md:text-xl">
              We believe in the power of architecture to shape a better way of
              living. Our practice is focused on long-term resonance over
              short-term trends.
            </p>
            {/* <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl italic">400+</span>
                  <span className="text-[10px] leading-none tracking-widest uppercase">
                    Projects
                    <br />
                    Delivered
                  </span>
                </div>
                <div className="bg-primary/20 dark:bg-accent-cream/20 h-10 w-px" />
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl italic">15+</span>
                  <span className="text-[10px] leading-none tracking-widest uppercase">
                    Years of
                    <br />
                    Excellence
                  </span>
                </div>
              </div> */}
          </div>
          <div className="group relative">
            <img
              alt="Kyle Mills Portrait"
              className="h-[600px] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIv1ZBNImPlj-JWeJg0_o0-ZVvWi5KZ4HQY5ZnUthuJCOtxcUiu7R6t1LXmsnlyPs068lZ6GqxU2MrWGnHapY553QqC89bvsDLZBLqQFxBkbuoTVNisHGrfFcY2lyhK6uae5pur2bkBltgl43m5zXu7UY0EU_FCh_5cl9VWZEj2vLT7l4Z__N8sb-eUSEqQ1gGavXn6uuO3qhav2rU9NAe_Ge6dH-ASLKVVtOoUr9VZdmB5j7UqNYdOJJJmI34qsacV1MWMcP3eQ"
            />
            <div className="bg-secondary border-primary/10 absolute -bottom-6 -left-6 hidden border p-8 font-serif lg:block">
              <p className="font-display text-charcoal text-2xl italic">
                &quot;Architecture is the art of <br />
                how we live together.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
