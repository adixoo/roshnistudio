export default function Projects() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-primary dark:text-sand-100 font-body transition-colors duration-300">
      <main className="pt-32 pb-24">
        <section className="mb-20 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <span className="mb-6 block text-xs tracking-[0.3em] uppercase opacity-60">
              Archive 2024 — Portfolio Hub
            </span>
            <h1 className="font-display -ml-1 text-6xl leading-[0.9] font-light md:text-9xl">
              Selected <br /> Architecture
            </h1>
            <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-lg text-lg leading-relaxed font-light opacity-80 md:text-xl">
                A curation of spaces defined by their relationship to light,
                context, and the human ritual. Modern architecture specializing
                in residential and wellness design.
              </p>
              <div className="flex items-center space-x-4 text-xs tracking-widest uppercase">
                <span className="opacity-50">Filter by category:</span>
                <span className="border-primary dark:border-sand-100 cursor-pointer border-b pb-1">
                  All Projects
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-24 md:grid-cols-12 md:gap-y-48">
            <div className="editorial-container group cursor-pointer md:col-span-8">
              <div className="aspect-[4/5] overflow-hidden bg-zinc-200 md:aspect-[16/10] dark:bg-zinc-800">
                <img
                  alt="Modern UK residential property with floor to ceiling windows"
                  className="editorial-image h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocU3uEUTVzlu9zceiw_h1kiQc5WT-ymYUaDwfPqE66R18iIUWQZfL7Mpk61o4VjGJ8DgTD5DHV0QQ5EjQcawnArcUU-33GKUQCjxueZ3NZ38wrSOmHxwBaI-mTBxjSr6rTNdHI23gtDSqvXd2uMFfaUMJoYHOEEYciEP_ZGG2SB-08vR3s8RK0prpQ50Ktt2dlZ-QSaN8C4xjTgl9guyFelYVyG7bjz00xwK96robtm2BuoacgXKkkA1hy-vSAieTscAcgphvpA"
                />
              </div>
              <div className="mt-8 flex items-start justify-between">
                <div>
                  <span className="mb-2 block text-[10px] tracking-[0.4em] uppercase opacity-50">
                    01 / Residential
                  </span>
                  <h2 className="font-display text-3xl font-medium md:text-4xl">
                    UK Residential
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-70">
                    Quiet interventions in historical contexts. Exploring the
                    synthesis of contemporary form and traditional materiality
                    within the British landscape.
                  </p>
                </div>
                <span className="material-icons text-4xl transition-transform duration-500 group-hover:translate-x-2">
                  east
                </span>
              </div>
            </div>
            <div className="editorial-container group cursor-pointer md:col-span-6 md:col-start-7">
              <div className="aspect-square overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  alt="Serene spa interior with natural stone and soft lighting"
                  className="editorial-image h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNZbUPL7ApunBwWULen7z8JrZaoBUbDVETF6eSd41cL-RHg0jOCoAnIvS6PGzB9b63MBpIDvzDxfoysUhbEQjP5tJxuzGf3wouezAYh2WjjZCooJqLjJgxEUnrydNGmuAmzByXCmSjJMARBTjDerRZR8aPsNt44HQLU67z4xxUaCsKGIH-rK00UloBw60o8uuqoVgVwuVUtelLBcnZxuhy66hmAoIAFTC9R-_WTCnnT6sQQq8YU42LyqX3vweOIBS8PGKG0oF2PA"
                />
              </div>
              <div className="mt-8">
                <span className="mb-2 block text-[10px] tracking-[0.4em] uppercase opacity-50">
                  02 / Wellness
                </span>
                <h2 className="font-display text-3xl font-medium md:text-4xl">
                  Wellness &amp; Retreats
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">
                  Spaces designed for stillness. Architecture as a vessel for
                  restoration, focused on the sensory experience of water, heat,
                  and air.
                </p>
              </div>
            </div>
            <div className="editorial-container group cursor-pointer md:col-span-7">
              <div className="aspect-[16/11] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  alt="Coastal modern villa overlooking the ocean"
                  className="editorial-image h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FYE0plTuNPzR1rBnkIocgZ-x6aHgAAx_o9IBE5HsewXn7CshixCZuhNDpNUBASyf1SNxRUQu8Pby0ieV5vSVvR--f3_NHbEoZMonDNcm3Tl7EJAsC_zkCMoBZUQEkzlMBK-COXrq6sV1kHt4BZScV1b7jSgx9M5eCEI9L6A6bcR69cq-7C2z6j5vs79dpdmmcWyHgFHBVoPJcJ25hd_q85MT7xijuX6VkKELyKUrKukqMYFom7ELu4Dzf-L81vgrCyzbkm7zlw"
                />
              </div>
              <div className="mt-8">
                <span className="mb-2 block text-[10px] tracking-[0.4em] uppercase opacity-50">
                  03 / Global
                </span>
                <h2 className="font-display text-3xl font-medium md:text-4xl">
                  International Projects
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-70">
                  Adapting our design language to diverse climates. Projects
                  across the Mediterranean and High Desert, responding to local
                  topography and solar paths.
                </p>
              </div>
            </div>
            <div className="editorial-container group cursor-pointer md:col-span-4 md:col-start-9">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  alt="Architectural model and concept sketch"
                  className="editorial-image h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDcT_WjoiBVliZ5-eOPBjm36fBwRZrnyaxSnoYpUkb_Ycvc33jg8Ypinm0Z7ZbuLlH63Vu5eosbB0veJp1etroFq6bMkS_mGFdZvf8cOGqIfHVzRiOcXZBuCyIm2yscwtIcI2TnHfb52uoj7gqeoXDopsMSICQLzuiU5XC8j3hq0Pz6FEFAydo18IyHmqrpxmElIp4BUAKOu8jecAFizphbJyBS-zc-lHppl5v7Flbt5Ykuc8G0nL8S594mLR9PVmnblaxd5iHA"
                />
              </div>
              <div className="mt-8">
                <span className="mb-2 block text-[10px] tracking-[0.4em] uppercase opacity-50">
                  04 / Theory
                </span>
                <h2 className="font-display text-3xl font-medium md:text-4xl">
                  Concept Studies
                </h2>
                <p className="mt-4 text-sm leading-relaxed opacity-70">
                  The laboratory of the studio. Unbuilt works and speculative
                  research exploring the future of sustainable habitation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-48 px-6 text-center md:px-12">
          <div className="border-primary/10 dark:border-sand-100/10 mx-auto max-w-4xl border-y py-24">
            <h2 className="font-display mb-10 text-4xl italic md:text-6xl">
              Have a project in mind?
            </h2>
            <a
              className="border-primary dark:border-sand-100 inline-block border-b pb-2 text-lg tracking-widest uppercase transition-opacity hover:opacity-50"
              href="mailto:studio@kylemills.com"
            >
              Inquire for Collaboration
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
