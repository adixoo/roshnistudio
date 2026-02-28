import { StudioInfo } from "@/constant/info";

const Footer = () => (
  <footer className="bg-sand-50 px-6 pt-24 pb-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-display mb-8 text-2xl tracking-widest uppercase">
            ROSHNI STUDIO
          </h2>
          {/* <p className="max-w-xs leading-relaxed opacity-60">
            A design practice dedicated to human-centric architecture and the
            pursuit of quiet beauty.
          </p> */}
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Contact
          </h3>
          <ul className="space-y-4 text-sm opacity-80">
            <li>
              <a
                className="nav-link relative"
                href={`mailto:${StudioInfo.Email}`}
              >
                {StudioInfo.Email}
              </a>
            </li>

            <li>
              <a
                className="nav-link relative"
                href={`tel:${StudioInfo.Phone.replace(/\s/g, "")}`}
              >
                {StudioInfo.Phone}
              </a>
            </li>

            <li>
              {StudioInfo.Hours} <br />
              {StudioInfo.WorkingDays}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Follow
          </h3>
          <div className="flex space-x-6 text-sm opacity-80">
            <a
              className="nav-link relative"
              href={StudioInfo.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              className="nav-link relative"
              href={StudioInfo.Pinterest}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
            <a
              className="nav-link relative"
              href={StudioInfo.Pinterest}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-primary/5 flex flex-col items-center justify-between space-y-4 border-t pt-12 text-[10px] tracking-widest uppercase opacity-40 md:flex-row md:space-y-0">
        <p>© 2026 Roshni Studio. All rights reserved.</p>
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
