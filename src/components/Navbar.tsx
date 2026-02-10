import Link from "next/link";

const NAV_LINKS = [
  { label: "The Studio", href: "/profile" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" }
];

export default function Header() {
  return (
    <nav className="bg-primary-foreground/90 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-8 text-white">
        <Link
          className="font-serif text-xl tracking-[0.3em] uppercase"
          href="/"
        >
          ROSHNI STUDIO
        </Link>

        <div className="flex items-center gap-12">
          <nav className="hidden space-x-6 text-xs font-medium tracking-[0.2em] uppercase md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link relative"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium uppercase transition-all hover:bg-white"
            href="/contact"
          >
            let&apos;s talk
          </Link>

          <button className="md:hidden">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
