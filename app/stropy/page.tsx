import { RollingText } from "@/components/rolling-text";
import { SiteImage } from "@/components/site-image";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Typy napínacích stropov",
  description:
    "Prehľad typov napínacích stropov: saténové, lesklé, matné, s fototlačou a translucentné riešenia pre moderný interiér.",
  path: "/stropy",
});

export default function StropyPage() {
  return (
    <main>
      <section className="hero-services page-hero">
        <div className="page-hero-media">
          <SiteImage
            src="/assets/images/Translucentne stropy/IMG_0486-1.jpeg"
            alt="Typy napínacích stropov"
            className="page-hero-image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <h1 data-text="Stropy" className="animate">
            Stropy
          </h1>
        </div>
      </section>

      <section className="services-detailed">
        <div className="container">
          <div className="service-list">
            {SERVICES.map((service) => (
              <div key={service.id} className="service-detail" id={service.id}>
                <h2 className="service-category-title" data-text={service.title}>
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="service-preview">
                  <div className="service-preview-image">
                    <SiteImage
                      src={service.images[0]}
                      alt={service.title}
                      fill
                      className="service-preview-media"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  <div className="service-preview-image">
                    <SiteImage
                      src={service.images[1]}
                      alt={`${service.title} detail`}
                      fill
                      className="service-preview-media"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>
                <div className="service-actions">
                  <Link
                    href={`/stropy/${service.slug}`}
                    className="details-btn rolling-button"
                  >
                    <RollingText primary="Zobraziť detail" secondary="Viac o strope" />
                  </Link>
                  <a
                    href={`/galeria?filter=${service.filter}`}
                    className="gallery-btn rolling-button"
                  >
                    <RollingText primary="Zobraziť galériu" secondary="Pozrieť realizácie" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
