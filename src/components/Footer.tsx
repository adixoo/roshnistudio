const Footer = () => (
  <footer className="bg-sand-50 px-6 pt-24 pb-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-display mb-8 text-2xl tracking-widest uppercase">
            KYLE MILLS
          </h2>
          <p className="max-w-xs text-sm leading-relaxed opacity-60">
            A design practice dedicated to human-centric architecture and the
            pursuit of quiet beauty.
          </p>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Contact
          </h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li>
              <a
                className="hover:underline"
                href="mailto:hello@kylemills.design"
              >
                hello@kylemills.design
              </a>
            </li>
            <li>+1 (910) 626-85255</li>
            <li>123 Fifth Avenue, New York, NY</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Follow
          </h4>
          <div className="flex space-x-6 opacity-80">
            <a className="transition-opacity hover:opacity-60" href="#">
              Instagram
            </a>
            <a className="transition-opacity hover:opacity-60" href="#">
              LinkedIn
            </a>
            <a className="transition-opacity hover:opacity-60" href="#">
              Journal
            </a>
          </div>
        </div>
      </div>
      <div className="border-primary/5 flex flex-col items-center justify-between space-y-4 border-t pt-12 text-[10px] tracking-widest uppercase opacity-40 md:flex-row md:space-y-0">
        <p>© 2024 Kyle Mills Design. All rights reserved.</p>
        <div className="flex space-x-8">
          <a className="hover:opacity-100" href="#">
            Privacy Policy
          </a>
          <a className="hover:opacity-100" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
