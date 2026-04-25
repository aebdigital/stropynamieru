import { PricingForm } from "@/components/pricing-form";
import { SiteImage } from "@/components/site-image";
import { createPageMetadata } from "@/lib/metadata";
import { HeroReveal } from "@/components/hero-reveal";

export const metadata = createPageMetadata({
  title: "Cenová ponuka napínacích stropov",
  description:
    "Pošlite žiadosť o cenovú ponuku napínacích stropov a získajte nezáväzný odhad pre Banskú Bystricu a okolie.",
  path: "/cenova-ponuka",
});

export default function CenovaPonukaPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-media">
          <SiteImage
            src="/assets/images/Translucentne stropy/IMG_0486-1.jpeg"
            alt="Cenová ponuka napínacích stropov"
            className="page-hero-image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <HeroReveal>
            <h1>
              Cenová ponuka
            </h1>
          </HeroReveal>
        </div>
      </section>

      <section className="pricing-content">
        <div className="pricing-container">
          <PricingForm />
        </div>
      </section>
    </main>
  );
}
