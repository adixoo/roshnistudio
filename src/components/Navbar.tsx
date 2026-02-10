export default function Header() {
  return (
    <nav className="bg-primary-foreground/90 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-8 text-white">
        <a className="font-serif text-xl tracking-[0.3em] uppercase" href="#">
          KYLE MILLS
        </a>

        <div className="flex items-center gap-12">
          <nav className="hidden space-x-6 text-xs font-medium tracking-[0.2em] uppercase md:flex">
            <a className="nav-link relative" href="#">
              {" "}
              Projects{" "}
            </a>
            <a className="nav-link relative" href="#">
              {" "}
              The Studio{" "}
            </a>
            <a className="nav-link relative" href="#">
              {" "}
              Approach{" "}
            </a>
            <a className="nav-link relative" href="#">
              {" "}
              Contact{" "}
            </a>
          </nav>

          <a
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium uppercase transition-all hover:bg-white"
            href="#contact"
          >
            let&apos;s talk
          </a>
          <button className="md:hidden">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
