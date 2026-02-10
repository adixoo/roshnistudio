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
        <section className="mx-auto max-w-7xl px-4 pt-0">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="group relative aspect-[1.1/1] cursor-pointer overflow-hidden">
              <img
                alt="Snowstone Residence"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocU3uEUTVzlu9zceiw_h1kiQc5WT-ymYUaDwfPqE66R18iIUWQZfL7Mpk61o4VjGJ8DgTD5DHV0QQ5EjQcawnArcUU-33GKUQCjxueZ3NZ38wrSOmHxwBaI-mTBxjSr6rTNdHI23gtDSqvXd2uMFfaUMJoYHOEEYciEP_ZGG2SB-08vR3s8RK0prpQ50Ktt2dlZ-QSaN8C4xjTgl9guyFelYVyG7bjz00xwK96robtm2BuoacgXKkkA1hy-vSAieTscAcgphvpA"
              />
              <div className="project-overlay absolute inset-0 flex flex-col justify-end p-8 text-white md:p-12">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-widest uppercase md:text-3xl">
                      Snowstone Residence
                    </h3>
                    <p className="mt-1 text-sm opacity-90">
                      Teton County, Wyoming
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl font-light">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative aspect-[1.1/1] cursor-pointer overflow-hidden">
              <img
                alt="Shooting Star Sanctuary"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNZbUPL7ApunBwWULen7z8JrZaoBUbDVETF6eSd41cL-RHg0jOCoAnIvS6PGzB9b63MBpIDvzDxfoysUhbEQjP5tJxuzGf3wouezAYh2WjjZCooJqLjJgxEUnrydNGmuAmzByXCmSjJMARBTjDerRZR8aPsNt44HQLU67z4xxUaCsKGIH-rK00UloBw60o8uuqoVgVwuVUtelLBcnZxuhy66hmAoIAFTC9R-_WTCnnT6sQQq8YU42LyqX3vweOIBS8PGKG0oF2PA"
              />
              <div className="project-overlay absolute inset-0 flex flex-col justify-end p-8 text-white md:p-12">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-widest uppercase md:text-3xl">
                      Shooting Star Sanctuary
                    </h3>
                    <p className="mt-1 text-sm opacity-90">
                      Teton Village, Wyoming
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl font-light">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative aspect-[1.1/1] cursor-pointer overflow-hidden">
              <img
                alt="Aegean Retreat"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FYE0plTuNPzR1rBnkIocgZ-x6aHgAAx_o9IBE5HsewXn7CshixCZuhNDpNUBASyf1SNxRUQu8Pby0ieV5vSVvR--f3_NHbEoZMonDNcm3Tl7EJAsC_zkCMoBZUQEkzlMBK-COXrq6sV1kHt4BZScV1b7jSgx9M5eCEI9L6A6bcR69cq-7C2z6j5vs79dpdmmcWyHgFHBVoPJcJ25hd_q85MT7xijuX6VkKELyKUrKukqMYFom7ELu4Dzf-L81vgrCyzbkm7zlw"
              />
              <div className="project-overlay absolute inset-0 flex flex-col justify-end p-8 text-white md:p-12">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-widest uppercase md:text-3xl">
                      Aegean Retreat
                    </h3>
                    <p className="mt-1 text-sm opacity-90">Cyclades, Greece</p>
                  </div>
                  <span className="material-symbols-outlined text-3xl font-light">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative aspect-[1.1/1] cursor-pointer overflow-hidden">
              <img
                alt="Cotswold House"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDcT_WjoiBVliZ5-eOPBjm36fBwRZrnyaxSnoYpUkb_Ycvc33jg8Ypinm0Z7ZbuLlH63Vu5eosbB0veJp1etroFq6bMkS_mGFdZvf8cOGqIfHVzRiOcXZBuCyIm2yscwtIcI2TnHfb52uoj7gqeoXDopsMSICQLzuiU5XC8j3hq0Pz6FEFAydo18IyHmqrpxmElIp4BUAKOu8jecAFizphbJyBS-zc-lHppl5v7Flbt5Ykuc8G0nL8S594mLR9PVmnblaxd5iHA"
              />
              <div className="project-overlay absolute inset-0 flex flex-col justify-end p-8 text-white md:p-12">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-widest uppercase md:text-3xl">
                      Cotswold House
                    </h3>
                    <p className="mt-1 text-sm opacity-90">
                      Gloucestershire, UK
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl font-light">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="bg-[#F5F1E8] px-6 py-32 text-center md:px-12">
            <div className="mx-auto max-w-4xl border-y border-black/5 py-24">
              <h2 className="font-display mb-10 text-4xl italic md:text-6xl">
                Have a project in mind?
              </h2>
              <a
                className="font-display border-primary inline-block border-b pb-2 text-sm tracking-[0.3em] uppercase transition-opacity hover:opacity-50"
                href="mailto:studio@kylemills.com"
              >
                Inquire for Collaboration
              </a>
            </div>
          </section>
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
