import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"));
const Approach = dynamic(() => import("./_components/Approach"));
const Quote = dynamic(() => import("./_components/Quote"));
const CTA = dynamic(() => import("./_components/CTA"));

export default function Profile() {
  return (
    <div className="bg-sand-50">
      <Hero />
      <Quote />
      <Approach />
      <CTA />

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
