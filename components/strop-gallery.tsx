"use client";

import { useState, useEffect } from "react";
import { SiteImage } from "./site-image";
import { AnimatePresence, motion } from "framer-motion";

interface StropGalleryProps {
  images: string[];
  title: string;
}

export function StropGallery({ images, title }: StropGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, images.length]);

  const lightboxItem = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <>
      <div className="strop-gallery-grid">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="strop-gallery-item" 
            onClick={() => setLightboxIndex(idx)}
            style={{ cursor: "pointer" }}
          >
            <SiteImage
              src={img}
              alt={`${title} ${idx + 1}`}
              fill
              className="gallery-image"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

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
                  setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
                }}
              >
                &#8249;
              </button>

              <div className="lightbox-image-frame overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxItem}
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
                      className="lightbox-image"
                      src={lightboxItem}
                      alt={`${title} lightbox`}
                      fill
                      sizes="90vw"
                      priority
                      onClick={() =>
                        setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
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
                  setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
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
