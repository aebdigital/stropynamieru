import { ContactForm } from "@/components/contact-form";
import { SiteImage } from "@/components/site-image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Kontaktujte Stropy na mieru pre napínacie stropy v Banskej Bystrici. Telefonický kontakt, e-mail aj formulár pre rýchly dopyt.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main>
      <section className="hero-contact page-hero">
        <div className="page-hero-media">
          <SiteImage
            src="/assets/images/Translucentne stropy/IMG_0486-1.jpeg"
            alt="Kontakt Stropy na mieru"
            className="page-hero-image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <h1 data-text="Kontakt" className="animate">
            Kontakt
          </h1>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <SiteImage
                  src="/assets/images/icon-location.svg"
                  alt="Location"
                  className="contact-icon"
                  width={24}
                  height={24}
                />{" "}
                Adresa
              </h3>
              <p>
                Limbová 7
                <br />
                97409 Banská Bystrica
              </p>
            </div>

            <div className="contact-item">
              <h3>
                <SiteImage
                  src="/assets/images/icon-phone.svg"
                  alt="Phone"
                  className="contact-icon"
                  width={24}
                  height={24}
                />{" "}
                Telefón
              </h3>
              <p>
                <a href="tel:+421940588803">+421 940 588 803</a>
              </p>
            </div>

            <div className="contact-item">
              <h3>
                <SiteImage
                  src="/assets/images/icon-email.svg"
                  alt="Email"
                  className="contact-icon"
                  width={24}
                  height={24}
                />{" "}
                E-mail
              </h3>
              <p>
                <a href="mailto:stropynamieru@gmail.com">stropynamieru@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Napíšte nám</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
