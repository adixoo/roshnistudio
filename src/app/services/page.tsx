import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"));
const Services = dynamic(() => import("./_components/Services"));
const CTA = dynamic(() => import("./_components/CTA"));

export default function ServicesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}
