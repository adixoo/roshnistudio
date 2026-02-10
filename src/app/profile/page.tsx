export default function Profile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-primary dark:text-accent-cream transition-colors duration-300">
      <header className="px-6 pt-40 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <span className="bg-primary inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                Kyle Mills Studio Profile
              </span>
              <h1 className="text-charcoal font-serif text-5xl leading-[1.1] md:text-7xl">
                A considered studio for thoughtful clients and meaningful
                places.
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
      <section className="bg-accent px-6 py-32">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
            &quot;We don&apos;t just design buildings; we craft the spatial
            framework for your life&apos;s most meaningful moments.&quot;
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-white/70 italic">
            Based in the heart of modern architecture, our studio combines
            technical precision with a deep sensitivity to landscape, light, and
            materiality.
          </p>
        </div>
      </section>
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl space-y-4">
              <h3 className="text-primary dark:text-accent-cream/50 text-[10px] font-bold tracking-[0.3em] uppercase">
                Our Approach
              </h3>
              <h2 className="text-charcoal dark:text-accent-cream font-serif text-4xl md:text-6xl">
                How We Work
              </h2>
            </div>
            <p className="text-charcoal/70 dark:text-accent-cream/70 max-w-md text-sm leading-relaxed tracking-wider uppercase">
              Our process is iterative, transparent, and deeply collaborative.
              We believe the best results come from a shared vision.
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
                  Every project begins with understanding. We dive deep into
                  your rituals, needs, and aspirations for the space.
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
                  We explore multiple directions through sketching, modeling,
                  and light studies to find the perfect resonance.
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
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-accent text-accent-cream flex flex-col justify-center p-12 md:p-20">
              <h3 className="font-display mb-6 text-4xl italic">
                Meaningful Places
              </h3>
              <p className="mb-8 text-lg leading-relaxed opacity-70">
                Our studio specializes in residential and wellness design. We
                believe that the environments we inhabit profoundly influence
                our mental and physical well-being.
              </p>
              <a className="group inline-flex items-center gap-2" href="#">
                <span className="border-accent-cream border-b pb-1 text-sm font-bold tracking-widest uppercase">
                  View Projects
                </span>
                <span className="material-icons-outlined transition-transform group-hover:translate-x-2">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Interior Detail"
                className="h-full min-h-[300px] w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjcGtDafGeWp6__e1d8TCnGwTDh69hu0OVDTlpIHfu7lPYVbPFElvUiceRMTbKTvOBenPFWN-yMUKjNOzxMdU03wEVGFAw2RFCseijyM1BxL3hNkybowcN40yLHKrZp6jqMCWuU4Ltj8nyCSZ0jGrgBtj9DYsOFY3cUtbgX17S5WF0M_0DK6B3Ly548w5XEs6D2wFmvHne47KXbEnGjInnfzOn9V0Xn9nYR185Qx8mqf25LUJ9goFth4ym8QtFYyFf9KG9JkWB7g"
              />
              <img
                alt="Studio Space"
                className="h-full min-h-[300px] w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLvQGeT9l7nqDVpmP6_zFJ37r40jJGlO5GS4p4_E4JEh6deW-G1Fxvi8NMD1R1TEi4XLfUgv1oe7FGz3joVPYm3QG9G2t58djvjAyQj__qs2gm3bHXQ4TnZSlZFq9ccxz78rhTk5O75DvJvSqzWcLcEInUWflTxZzaVz2Q9RxzZZAR0I2Wj6Qvjj39PkODJvw1-JrbDEPeq6OtAoiaC-YFwomEYcOAwlC9q8_tUn_2SAn1kbXig9ejHlWxWf9ktu1cgTKMqZqAPA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <button
        className="bg-primary dark:bg-accent-cream dark:text-primary fixed right-8 bottom-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-2xl transition-transform hover:scale-110"
        // onclick="document.documentElement.classList.toggle('dark')"
      >
        <span className="material-icons-outlined dark:hidden">dark_mode</span>
        <span className="material-icons-outlined hidden dark:block">
          light_mode
        </span>
      </button> */}
    </div>
  );
}
