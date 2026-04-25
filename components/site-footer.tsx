"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/cookie-consent";
import { RollingText } from "@/components/rolling-text";
import { SiteImage } from "@/components/site-image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/stropy/satenove-stropy", label: "Saténové stropy" },
  { href: "/stropy/leskle-stropy", label: "Lesklé stropy" },
  { href: "/stropy/matne-stropy", label: "Matné stropy" },
  { href: "/stropy/stropy-s-fototlacou", label: "Stropy s fototlačou" },
  { href: "/stropy/translucentne-stropy", label: "Translucentné stropy" },
];

export function SiteFooter() {
  const { openSettings } = useCookieConsent();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="kontakt" className="relative text-white mt-auto overflow-hidden bg-zinc-950" style={{ backgroundColor: "#09090b" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/assets/images/Translucentne stropy/IMG_5048-1.jpeg"
            alt="Footer background"
            fill
            className="object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/90 to-zinc-950" />
        </div>

        <div className="relative z-10">
          {/* CTA Section */}
          <div 
            className="footer-container text-center" 
            style={{ 
              maxWidth: "80rem", 
              margin: "0 auto", 
              padding: "120px 24px 80px", 
              textAlign: "center" 
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none"
                style={{ marginBottom: "48px" }}
              >
                Pripravení na<br />
                <span className="text-[#dbe4ff]">nový strop?</span>
              </h2>
              <p 
                className="text-white/60 text-lg md:text-xl mb-8 tracking-tighter"
                style={{ 
                  maxWidth: "42rem", 
                  margin: "0 auto 32px", 
                  textAlign: "center" 
                }}
              >
                Kontaktujte nás a my Vám radi poradíme s výberom toho správneho riešenia pre Váš interiér.
              </p>
              <p 
                className="text-[#dbe4ff] text-3xl md:text-4xl font-black tracking-tighter"
                style={{ marginBottom: "32px" }}
              >
                {siteConfig.phoneDisplay}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link 
                  href="/cenova-ponuka" 
                  className="group inline-flex items-center justify-center bg-white text-zinc-950 text-xs font-black rounded-full hover:bg-[#dbe4ff] transition-all duration-500 shadow-xl uppercase tracking-tighter"
                  style={{ padding: "20px 40px", textDecoration: "none", display: "inline-flex" }}
                >
                   <RollingText primary="ZÍSKAŤ CENOVÚ PONUKU" secondary="POĎME NA TO" />
                </Link>
                <a 
                  href={`tel:${siteConfig.phoneHref}`}
                  className="group inline-flex items-center justify-center border border-white/20 text-white text-xs font-bold rounded-full hover:bg-white/10 transition-all duration-500 uppercase tracking-tighter"
                  style={{ padding: "20px 40px", textDecoration: "none", display: "inline-flex" }}
                >
                  <RollingText primary="ZAVOLAJTE NÁM" secondary="SME TU PRE VÁS" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Grid */}
          <div 
            className="footer-container border-t border-white/10"
            style={{ 
              maxWidth: "80rem", 
              margin: "0 auto", 
              padding: "80px 24px 60px",
              borderTop: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" style={{ display: "grid", gap: "48px" }}>
              {/* Logo & About */}
              <div className="space-y-6">
                <Link href="/" className="inline-block" style={{ display: "inline-block", marginBottom: "24px" }}>
                   <SiteImage
                    src="/assets/images/logo.png"
                    alt="Stropy na mieru"
                    width={180}
                    height={110}
                    className="brightness-0 invert opacity-90"
                  />
                </Link>
                <p 
                  className="text-white/40 text-sm leading-relaxed tracking-tighter max-w-xs"
                  style={{ marginBottom: "32px", textTransform: "none" }}
                >
                  Profesionálne napínacie stropy. Špecializujeme sa na čistú montáž a prémiové materiály s certifikátom kvality.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/30" style={{ marginBottom: "32px" }}>Navigácia</h4>
                <ul className="space-y-4 text-base text-white/60 tracking-tighter" style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "16px" }}>
                    <Link href="/" className="footer-link" style={{ color: "inherit", textDecoration: "none" }}>Domov</Link>
                  </li>
                  <li style={{ marginBottom: "16px" }}>
                    <Link href="/galeria" className="footer-link" style={{ color: "inherit", textDecoration: "none" }}>Galéria</Link>
                  </li>
                  <li style={{ marginBottom: "16px" }}>
                    <Link href="/cenova-ponuka" className="footer-link" style={{ color: "inherit", textDecoration: "none" }}>Cenová ponuka</Link>
                  </li>
                  <li style={{ marginBottom: "16px" }}>
                    <Link href="/kontakt" className="footer-link" style={{ color: "inherit", textDecoration: "none" }}>Kontakt</Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/30" style={{ marginBottom: "32px" }}>Služby</h4>
                <ul className="space-y-4 text-base text-white/60 tracking-tighter" style={{ listStyle: "none", padding: 0 }}>
                  {SERVICE_LINKS.map((link) => (
                    <li key={link.href} style={{ marginBottom: "16px" }}>
                      <Link href={link.href} className="footer-link" style={{ color: "inherit", textDecoration: "none" }}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/30" style={{ marginBottom: "32px" }}>Kontakt</h4>
                <ul className="space-y-4 text-base text-white/60 tracking-tighter" style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "16px" }}>
                    Sídlo: <span className="text-white/80">{siteConfig.address.addressLocality}</span>
                  </li>
                  <li style={{ marginBottom: "16px" }}>
                    Telefón: <a href={`tel:${siteConfig.phoneHref}`} className="footer-link" style={{ color: "inherit", textDecoration: "none" }}>{siteConfig.phoneDisplay}</a>
                  </li>
                  <li style={{ marginBottom: "16px" }}>
                    <a href={`mailto:${siteConfig.email}`} className="footer-link underline underline-offset-8 decoration-white/20 hover:decoration-[#dbe4ff]" style={{ color: "inherit" }}>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
                    <Link
                      href="/ochrana-osobnych-udajov"
                      className="footer-link text-xs uppercase tracking-widest text-white/40 pb-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      GDPR
                    </Link>
                    <button
                      type="button"
                      className="footer-link text-xs uppercase tracking-widest text-white/40 pb-1"
                      onClick={openSettings}
                      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "inherit" }}
                    >
                      Cookies
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div 
              className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-white/20 tracking-[0.3em] uppercase"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "64px", paddingTop: "32px" }}
            >
              <p>© {currentYear} {siteConfig.name} | VŠETKY PRÁVA VYHRADENÉ</p>
              <div className="flex items-center gap-2">
                <span>Tvorba stránky —</span>
                <a 
                  href="https://aebdigital.sk" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white/40 hover:text-[#dbe4ff] transition-colors border-b border-white/10 hover:border-[#dbe4ff]"
                  style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  AEB Digital
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

