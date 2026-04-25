import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { SiteImage } from "@/components/site-image";
import { StropGallery } from "@/components/strop-gallery";
import { RollingText } from "@/components/rolling-text";
import { StropySidebar } from "@/components/stropy-sidebar";
import { createPageMetadata } from "@/lib/metadata";
import { HeroReveal } from "@/components/hero-reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/stropy/${slug}`,
  });
}

export default async function StropDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="strop-detail-page">
      <section className="page-hero">
        <div className="page-hero-media">
          <SiteImage
            src={service.images[0]}
            alt={service.title}
            fill
            priority
            className="page-hero-image"
            sizes="100vw"
          />
        </div>
        <div className="container">
          <HeroReveal>
            <h1>
              {service.title}
            </h1>
          </HeroReveal>
        </div>
      </section>

      <div className="container">
        <div className="stropy-layout">
          <StropySidebar />

          <div className="stropy-content">
            <section className="strop-info">
              <h2 className="section-title">{service.title}</h2>
              <p className="strop-description">{service.fullDescription}</p>
              
              <StropGallery images={service.images} title={service.title} />

              <div className="cta-container">
                <a
                  href={`/galeria?filter=${service.filter}`}
                  className="gallery-btn rolling-button"
                >
                  <RollingText primary="Viac realizácií" secondary="Pozrieť kategóriu" />
                </a>
              </div>
              
              <div className="strop-advantages">
                <h3>Výhody Napínacích stropov</h3>
                <div className="advantages-list">
                  {[
                    "Ukryje všetky inštalácie a nedokonalosti hrubej stavby (napr. káble, nerovnosti, praskliny)",
                    "Môže mať aj farebné vyhotovenia a v kombinácii s osvetlením vytvorí moderné vzhľady",
                    "Nežltne neovísa a nie je ho možné jednoducho poškodiť",
                    "Je zdraviu nezávadný, časom nepraská, je vodovzdorný a nepodporuje horenie",
                    "Opticky zväčšuje priestor",
                  ].map((item) => (
                    <div key={item} className="advantage-item">
                      <span className="check">✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}
