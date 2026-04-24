import { GalleryPage } from "@/components/gallery-page";
import { SiteImage } from "@/components/site-image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Galéria realizovaných projektov",
  description:
    "Pozrite si galériu hotových realizácií napínacích stropov od Stropy na mieru v Banskej Bystrici a okolí.",
  path: "/galeria",
});

export default async function GaleriaPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  return (
    <main>
      <section className="hero-portfolio page-hero">
        <div className="page-hero-media">
          <SiteImage
            src="/assets/images/Translucentne stropy/IMG_0486-1.jpeg"
            alt="Galéria napínacích stropov"
            className="page-hero-image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <h1 data-text="Galéria" className="animate">
            Galéria
          </h1>
        </div>
      </section>
      <GalleryPage initialFilter={params.filter} />
    </main>
  );
}
