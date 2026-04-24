"use client";

import Link from "next/link";
import { useState } from "react";
import { useCookieConsent } from "@/components/cookie-consent";
import { RollingText } from "@/components/rolling-text";
import { SiteImage } from "@/components/site-image";

const SERVICE_LINKS = [
  { href: "/stropy#satenovy", label: "Saténový napínací strop" },
  { href: "/stropy#vysoky-lesk", label: "Napínací strop s vysokým leskom" },
  { href: "/stropy#matny", label: "Matný napínací strop" },
  { href: "/stropy#fototlac", label: "Napínacie stropy s fototlačou" },
  { href: "/stropy#translucentne", label: "Translucentné stropy" },
];

export function SiteFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { openSettings } = useCookieConsent();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-cta-content">
              <h2>Pripravení na nový strop?</h2>
              <p>Kontaktujte nás a my Vám radi poradíme s riešením</p>
            </div>
            <div className="footer-cta-button">
              <Link href="/kontakt" className="footer-btn rolling-button">
                <RollingText primary="Kontaktovať nás" secondary="Poďme to prebrať" />
              </Link>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-content">
            <div className="footer-section footer-contact">
              <h3>Stropy na mieru</h3>
              <p>
                Limbová 7
                <br />
                97409 Banská Bystrica
                <br />
                Slovenská republika
              </p>
              <p>
                <strong>TEL:</strong> <a href="tel:+421940588803">+421 940 588 803</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:stropynamieru@gmail.com">stropynamieru@gmail.com</a>
              </p>

              <div className="footer-social">
                <a
                  href="https://www.facebook.com/people/Stropy-na-mieru/100083050156481/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="social-icon-link"
                >
                  <SiteImage
                    src="/assets/images/facebook-icon.png"
                    alt="Facebook"
                    className="social-icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://share.google/SzDGndyCDmy52TPET"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google"
                  className="social-icon-link"
                >
                  <SiteImage
                    src="/assets/images/google-icon.png"
                    alt="Google"
                    className="social-icon"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>

            <div className="footer-section footer-navigation">
              <div className="footer-nav-column">
                <h4>Navigácia</h4>
                <ul>
                  <li>
                    <Link href="/">Domov</Link>
                  </li>
                  <li>
                    <Link href="/stropy">Stropy</Link>
                  </li>
                  <li>
                    <Link href="/galeria">Galéria</Link>
                  </li>
                  <li>
                    <Link href="/cenova-ponuka">Cenová ponuka</Link>
                  </li>
                  <li>
                    <Link href="/kontakt">Kontakt</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-nav-column">
                <h4>Služby</h4>
                <ul>
                  {SERVICE_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-nav-column">
                <h4>Dôležité</h4>
                <ul>
                  <li>
                    <button
                      type="button"
                      className="gdpr-link footer-inline-button"
                      onClick={() => setPrivacyOpen(true)}
                    >
                      Ochrana osobných údajov
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="gdpr-link footer-inline-button"
                      onClick={openSettings}
                    >
                      Cookies
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-credit">
              <p>
                Tvorba stránky -{" "}
                <a href="https://aebdigital.sk" target="_blank" rel="noreferrer">
                  AEB Digital
                </a>
              </p>
            </div>
            <div className="footer-copyright">
              <p>&copy; {currentYear} Stropy na mieru. Všetky práva vyhradené.</p>
            </div>
          </div>
        </div>
      </footer>

      {privacyOpen ? (
        <>
          <div
            role="button"
            tabIndex={0}
            aria-label="Zatvoriť ochranu osobných údajov"
            onClick={() => setPrivacyOpen(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setPrivacyOpen(false);
              }
            }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
              zIndex: 9999,
            }}
          />

          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
              zIndex: 10000,
              width: "90%",
              maxWidth: "800px",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#666",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h3 style={{ marginTop: 0 }}>Ochrana osobných údajov</h3>
            <p>
              Rudolf Majerčák - STROPYNAMIERU, Limbová 7, 97409 Banská Bystrica,
              IČO: 54642655, DIČ: 1128227738.
            </p>
            <p>
              Spracúvané údaje z kontaktných formulárov používame výhradne na odpoveď
              na váš dopyt.
            </p>
            <p>
              Kontakt: <a href="mailto:stropynamieru@gmail.com">stropynamieru@gmail.com</a>,
              tel. <a href="tel:+421940588803">+421 940 588 803</a>
            </p>
            <p style={{ marginBottom: 0, fontStyle: "italic" }}>Účinnosť od 25. 7. 2025</p>
          </div>
        </>
      ) : null}
    </>
  );
}
