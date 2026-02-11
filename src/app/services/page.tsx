import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"));
const Services = dynamic(() => import("./_components/Services"));
const CTA = dynamic(() => import("./_components/CTA"));

export default function ServicesPage() {
  return (
    <div className="bg-sand-50">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}
