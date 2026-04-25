"use client";

import { useEffect, useMemo, useState } from "react";
import { RollingText } from "@/components/rolling-text";
import { SiteImage } from "@/components/site-image";

type FilterKey =
  | "stropy-satexove"
  | "stropy-leskle"
  | "stropy-matne"
  | "stropy-fototlac"
  | "stropy-translucentne";

type GalleryItem = {
  category: FilterKey;
  src: string;
  alt: string;
};

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: "stropy-satexove", label: "Saténové stropy" },
  { key: "stropy-leskle", label: "Lesklé stropy" },
  { key: "stropy-matne", label: "Matné stropy" },
  { key: "stropy-fototlac", label: "Stropy s fototlačou" },
  { key: "stropy-translucentne", label: "Translucentné stropy" },
];

const ITEMS: GalleryItem[] = [
  { category: "stropy-satexove", src: "/assets/images/Satenove stropy/IMG_0146-1.jpeg", alt: "Saténový napínací strop" },
  { category: "stropy-satexove", src: "/assets/images/Satenove stropy/IMG_2236-1.jpeg", alt: "Saténový napínací strop" },
  { category: "stropy-satexove", src: "/assets/images/Satenove stropy/IMG_7502-1.jpeg", alt: "Saténový napínací strop" },
  { category: "stropy-satexove", src: "/assets/images/Satenove stropy/IMG_75201-1.jpeg", alt: "Saténový napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/IMG_0320-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/IMG_0808-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/IMG_2018-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/IMG_5630-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/IMG_8126-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/IMG_9854-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/11zon_resized1-1.jpg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/1a2c96b7-13de-4deb-a4e7-5fcf29b91766-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/4bb19666-d5f2-4cae-ad85-924a8c6ec45d-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/c2c762d1-a03d-46e7-9ac8-2aef93c52bff-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-leskle", src: "/assets/images/S vysokym leskom/fab2c987-45bc-4849-86f5-bc20f1bfd621-1.jpeg", alt: "Lesklý napínací strop" },
  { category: "stropy-matne", src: "/assets/images/Matny napinaci strop/IMG_03961-1.jpeg", alt: "Matný napínací strop" },
  { category: "stropy-matne", src: "/assets/images/Matny napinaci strop/IMG_06381-1.jpeg", alt: "Matný napínací strop" },
  { category: "stropy-matne", src: "/assets/images/Matny napinaci strop/IMG_1900-1.jpeg", alt: "Matný napínací strop" },
  { category: "stropy-matne", src: "/assets/images/Matny napinaci strop/IMG_2199-1.jpeg", alt: "Matný napínací strop" },
  { category: "stropy-matne", src: "/assets/images/Matny napinaci strop/IMG_5320-1.jpeg", alt: "Matný napínací strop" },
  { category: "stropy-matne", src: "/assets/images/Matny napinaci strop/IMG_03961-1 (1).jpeg", alt: "Matný napínací strop" },
  { category: "stropy-fototlac", src: "/assets/images/Napinacie stropy s fototlacou/IMG_0951-1.jpeg", alt: "Strop s fototlačou" },
  { category: "stropy-fototlac", src: "/assets/images/Napinacie stropy s fototlacou/IMG_1662-1.jpeg", alt: "Strop s fototlačou" },
  { category: "stropy-fototlac", src: "/assets/images/Napinacie stropy s fototlacou/IMG_9500-1-scaled-2.jpeg", alt: "Strop s fototlačou" },
  { category: "stropy-fototlac", src: "/assets/images/Napinacie stropy s fototlacou/Resized_20240828_205852-1.jpeg", alt: "Strop s fototlačou" },
  { category: "stropy-fototlac", src: "/assets/images/Napinacie stropy s fototlacou/d68f4ee9-43ae-4f9e-81d1-e4e6d1c44fd2-1.jpeg", alt: "Strop s fototlačou" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_0486-1.jpeg", alt: "Translucentný strop" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_0539-1.jpeg", alt: "Translucentný strop" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_5048-1.jpeg", alt: "Translucentný strop" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_6540-1.jpeg", alt: "Translucentný strop" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_6547-1.jpeg", alt: "Translucentný strop" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_9909-1.jpeg", alt: "Translucentný strop" },
  { category: "stropy-translucentne", src: "/assets/images/Translucentne stropy/IMG_9913-1.jpeg", alt: "Translucentný strop" },
];

type Props = {
  initialFilter?: string;
};

import { AnimatePresence, motion } from "framer-motion";

export function GalleryPage({ initialFilter }: Props) {
  const startingFilter =
    initialFilter && FILTERS.some((item) => item.key === initialFilter)
      ? (initialFilter as FilterKey)
      : "stropy-satexove";

  const [activeFilter, setActiveFilter] = useState<FilterKey>(startingFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () => ITEMS.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) {
        return;
      }
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? 0 : (prev + 1) % visibleItems.length,
        );
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + visibleItems.length) % visibleItems.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, visibleItems.length]);

  const lightboxItem =
    lightboxIndex === null ? null : visibleItems[Math.max(0, lightboxIndex)];

  return (
    <>
      <section className="portfolio-filters">
        <div className="container">
          <div className="filter-buttons">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`filter-btn rolling-button ${activeFilter === filter.key ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                <RollingText primary={filter.label} />
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {ITEMS.map((item) => {
              const visible = item.category === activeFilter;
              const visibleIndex = visible
                ? visibleItems.findIndex((entry) => entry.src === item.src)
                : -1;

              return (
                <div
                  key={item.src}
                  className={`portfolio-item ${visible ? "visible" : "hidden"}`}
                  data-category={item.category}
                >
                  <SiteImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="portfolio-media"
                    sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    onClick={() => {
                      if (visibleIndex >= 0) {
                        setLightboxIndex(visibleIndex);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && lightboxItem && (
          <motion.div 
            className="lightbox active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(null)}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setLightboxIndex(null)}
              >
                &times;
              </button>
              
              <button
                type="button"
                className="lightbox-nav lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev === null
                      ? 0
                      : (prev - 1 + visibleItems.length) % visibleItems.length,
                  );
                }}
              >
                &#8249;
              </button>

              <div className="lightbox-image-frame overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxItem.src}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.23, 1, 0.32, 1] 
                    }}
                    className="w-full h-full relative"
                  >
                    <SiteImage
                      id="lightbox-image"
                      className="lightbox-image"
                      src={lightboxItem.src}
                      alt={lightboxItem.alt}
                      fill
                      sizes="90vw"
                      priority
                      onClick={() =>
                        setLightboxIndex((prev) =>
                          prev === null ? 0 : (prev + 1) % visibleItems.length,
                        )
                      }
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                className="lightbox-nav lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % visibleItems.length,
                  );
                }}
              >
                &#8250;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

