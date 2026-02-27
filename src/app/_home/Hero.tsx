import ConsultationOverlay from "@/components/ConsultationOverlay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LoadingCarousel from "@/components/ui/loading-carousel";

export default function Hero() {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 pt-40 text-center">
        <div className="max-w-4xl">
          <Badge>Residential & Wellness Studio</Badge>

          <h1 className="mt-8 mb-12 font-serif text-5xl leading-[1.1] font-light md:text-7xl">
            Architecture Design guided by{" "}
            <span className="font-medium italic">Human Biology</span>, not
            trends.
          </h1>

          <ConsultationOverlay layoutId="hero">
            <Button>Book A Consultation</Button>
          </ConsultationOverlay>
        </div>
      </div>

      <div className="py-24">
        <LoadingCarousel
          backgroundTips={false}
          animateText={false}
          showNavigation
        />
      </div>
    </section>
  );
}
