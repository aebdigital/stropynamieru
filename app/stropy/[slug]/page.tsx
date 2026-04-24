import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { SiteImage } from "@/components/site-image";
import { RollingText } from "@/components/rolling-text";
import { StropySidebar } from "@/components/stropy-sidebar";
import { createPageMetadata } from "@/lib/metadata";

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
            className="page-hero-image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <h1 data-text={service.title} className="animate">
            {service.title}
          </h1>
        </div>
      </section>

      <div className="container">
        <div className="stropy-layout">
          <StropySidebar />

          <div className="stropy-content">
            <section className="strop-info">
              <h2 className="section-title">{service.title}</h2>
              <p className="strop-description">{service.fullDescription}</p>
              
              <div className="strop-gallery-grid">
                {service.images.map((img, idx) => (
                  <div key={idx} className="strop-gallery-item">
                    <SiteImage
                      src={img}
                      alt={`${service.title} ${idx + 1}`}
                      fill
                      className="gallery-image"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>

              <div className="cta-container">
                <a
                  href={`/galeria?filter=${service.filter}`}
                  className="gallery-btn rolling-button"
                >
                  <RollingText primary="Viac realizácií" secondary="Pozrieť kategóriu" />
                </a>
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
