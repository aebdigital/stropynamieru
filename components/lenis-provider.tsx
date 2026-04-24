"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = [
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main li",
  "main blockquote",
  "main .hero-trust-item",
  "main .hero-actions",
  "main .hero-testimonial",
  "main .hero-stats",
  "main .service-card",
  "main .benefit-card",
  "main .service-detail",
  "main .gallery-item",
  "main .gallery-all-projects",
  "main .review-card",
  "main .contact-item",
  "main .contact-form",
  "main .pricing-form",
  "main .filter-btn",
  "main .portfolio-item",
  "main .strop-info h2",
  "main .strop-description",
  "main .strop-gallery-item",
  "main .about-header",
  "main .about-text",
  "main .about-image",
  "main .services-header",
  "main .why-choose-header",
  "main .benefit-item",
  "footer .footer-top",
  "footer .footer-section",
  "footer .footer-bottom",
].join(",");

function setupRevealAnimations() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
  ).filter(
    (element) =>
      !element.closest(".lightbox") &&
      !element.closest(".cookie-banner") &&
      !element.closest(".cookie-modal"),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    },
  );

  elements.forEach((element, index) => {
    element.dataset.revealReady = "true";
    element.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 70, 420)}ms`);

    if (element.getBoundingClientRect().top <= window.innerHeight * 0.92) {
      element.classList.add("is-revealed");
    } else {
      element.classList.remove("is-revealed");
    }

    observer.observe(element);
  });

  return () => observer.disconnect();
}

export function LenisProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let frameId = 0;

    const onFrame = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(onFrame);
    };

    frameId = window.requestAnimationFrame(onFrame);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    let cleanupReveal: ReturnType<typeof setupRevealAnimations> | undefined;

    const timeoutId = window.setTimeout(() => {
      cleanupReveal = setupRevealAnimations();
    }, 60);

    return () => {
      window.clearTimeout(timeoutId);
      cleanupReveal?.();
    };
  }, [pathname]);

  return null;
}
