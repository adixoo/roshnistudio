export default function Projects() {
  return (
    <section className="bg-white py-32" id="projects">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-5xl">Selected Works</h2>
            <p className="text-primary-forborder-primary-foreground/50 max-w-md">
              A curation of projects defined by their relationship to light,
              site, and serenity.
            </p>
          </div>
          <a
            className="border-gold hover:text-gold border-b pb-2 text-xs font-bold tracking-[0.3em] uppercase transition-colors"
            href="#"
          >
            View All Projects
          </a>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="group space-y-6">
            <div className="overflow-hidden">
              <img
                alt="The Glass House"
                className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHzytVmeze-_VWmR3VHWoc9aqF_ckxpVuUE3C6BL_le9mE3IQ8kEUW64rSNLa9pkzqdQXALSqx0shXQ0wnJE8Z1-6yDxEFN2HLZORntNJqStgGyB3EC5mn84EzL5GdRsFNy6HwxmLKHzm1I-XL_8o2fa7iYfJy2kse5ImXZHUXaubU1sTPpsPYzbzBG8pWkiXB5dihFktPGoiFLR4uB6CWs-cOCR6HkGxqfxoLnAYCBBq_EUgVosV9OfOgqyo9nNSGOV_k1b6-g"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h4 className="text-xl">The Glass House</h4>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                Connecticut
              </span>
            </div>
          </div>
          <div className="group mt-12 space-y-6">
            <div className="overflow-hidden">
              <img
                alt="Zen Courtyard"
                className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASfkIgVi6ODUwolqWjOYFy_2XzjlyfVyYJECkdeXcg7zZbrRFsOp2_N8Fq6Kl1P2ZuoHlmpzO0A_iWre1a7wiotv64UVz-_btd9qB-98eU2iHdsxIpkdZkYvzUjR82NncGsnqIuZhMhINNiZYUhm3krSvX4vNZD6s_ItD7G_XxivjTOMh4QurGaMQXj95bEpr_O8hILX6kouZujfdwKZOjkvnzJB92n_FQ3NcNiuQVZw8vA2A1QWxrT6P2NeAQvfwPJc0b7s1TzQ"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h4 className="text-xl">Zen Courtyard</h4>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                Kyoto
              </span>
            </div>
          </div>
          <div className="group space-y-6">
            <div className="overflow-hidden">
              <img
                alt="Monolith Residence"
                className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy4XgAdyTxHQp0xdfSZ0Rd7WTb_r3-bffMjX7P8i5kjjg8nsMH6hlSjDDQbC8gGyhz5iF_0OujGAdAxvRANsWGjtJn_2VpWPK9xYY6SfO7pnHHlQS9F7jk5TKdnMz1akn7mWgA0moX0AyRwNk-3Gb-Q3Xj1Ljk_KCYiZR32fxJH68dv9FQrJxBKC0qsqffgjwxySV7VZL4z6kNykT61bIPX2k5L9-Eaon967xfv3yde04ui40bpU4Iv40UPGtO9KEzDxH6B9zjdQ"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h4 className="text-xl">Monolith Residence</h4>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                Malibu
              </span>
            </div>
          </div>
          <div className="group mt-12 space-y-6">
            <div className="overflow-hidden">
              <img
                alt="The Library Pavilion"
                className="aspect-[4/3] w-full scale-100 object-cover grayscale transition-all duration-700 group-hover:scale-105 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_WW4IaRIULv4qaDWu-yXRZ1YaKeO0WAXyy3haGr8btKG2AKxK7hnaJw7DFh48ViWbn2yG7CLVic15r0iZ8Ir9Q0wf8otDrSKke4guqyryunIBs0gLCMBHHuYihXX11pbjaUrgwxEpUDQ7PMcfjdTS-OesRcKYrdCmdWHjY7G8_N-fR0Oows_t_O4usn-M3yMa19O0dJkusyN4fFFzSec9pkly2xWe_ySW0AZjZ-A-yZIX_7AX8ys7GynnCpaqIBzlUbaGjBxuNw"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h4 className="text-xl">The Library Pavilion</h4>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                Oxfordshire
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
