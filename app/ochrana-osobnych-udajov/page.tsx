import { SiteImage } from "@/components/site-image";
import { HeroReveal } from "@/components/hero-reveal";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov spoločnosti Rudolf Majerčák - STROPYNAMIERU.",
  path: "/ochrana-osobnych-udajov",
});

export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      {/* Standard Hero Section used across all pages */}
      <section className="page-hero">
        <div className="page-hero-media">
          <SiteImage
            src="/assets/images/Translucentne stropy/IMG_5048-1.jpeg"
            alt="Ochrana osobných údajov"
            className="page-hero-image"
            fill
            priority
            sizes="100vw"
            style={{ filter: "brightness(0.3) grayscale(1)" }}
          />
        </div>
        <div className="container">
          <HeroReveal>
            <h1>
              Ochrana osobných <br />
              <span className="text-[#dbe4ff]">údajov</span>
            </h1>
          </HeroReveal>
        </div>
      </section>

      {/* Clean Main Content with forced inline styles to avoid conflicts */}
      <section style={{ padding: "80px 0", display: "flex", justifyContent: "center", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "700px", width: "100%", padding: "0 24px", color: "#111", lineHeight: "1.8" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            <section>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px", color: "#000", letterSpacing: "-0.02em" }}>Prevádzkovateľ</h2>
              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px", color: "#000" }}>{siteConfig.legalName}</p>
                <p style={{ color: "#444" }}>Sídlo: {siteConfig.address.streetAddress}, {siteConfig.address.postalCode} {siteConfig.address.addressLocality}</p>
                <p style={{ color: "#444" }}>IČO: 54642655</p>
                <p style={{ color: "#444" }}>DIČ: 1128227738</p>
              </div>
              <div style={{ color: "#444" }}>
                <p>E-mail: <a href={`mailto:${siteConfig.email}`} style={{ textDecoration: "underline", fontWeight: "bold", color: "#000" }}>{siteConfig.email}</a></p>
                <p>Tel.: <a href={`tel:${siteConfig.phoneHref}`} style={{ textDecoration: "underline", fontWeight: "bold", color: "#000" }}>{siteConfig.phoneDisplay}</a></p>
              </div>
              <p style={{ marginTop: "32px", color: "#666", fontStyle: "italic" }}>
                Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px", color: "#000", letterSpacing: "-0.02em" }}>I. Kontaktný formulár</h2>
              <p style={{ marginBottom: "20px", color: "#444" }}>
                Na stránke <span style={{ fontWeight: "bold", color: "#000" }}>{siteConfig.url.replace(/^https?:\/\//, "")}</span> prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:
              </p>
              <ul style={{ paddingLeft: "24px", marginBottom: "32px", color: "#444", listStyleType: "disc" }}>
                <li style={{ marginBottom: "8px" }}>Položiť otázku k našim produktom a službám</li>
                <li>Požiadať o cenovú ponuku</li>
              </ul>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#000" }}>Rozsah spracúvaných údajov</h3>
                  <ul style={{ paddingLeft: "24px", color: "#444", listStyleType: "disc" }}>
                    <li style={{ marginBottom: "6px" }}>Meno a priezvisko</li>
                    <li style={{ marginBottom: "6px" }}>E-mailová adresa</li>
                    <li>Telefónne číslo</li>
                  </ul>
                </div>
                
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#000" }}>Účel spracovania</h3>
                  <p style={{ color: "#444" }}>Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                  <div>
                    <h3 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px" }}>Právny základ</h3>
                    <p style={{ color: "#444", fontSize: "14px" }}>Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "8px" }}>Doba uchovávania</h3>
                    <p style={{ color: "#444", fontSize: "14px" }}>Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px", color: "#000", letterSpacing: "-0.02em" }}>II. Súbory cookies</h2>
              <p style={{ marginBottom: "24px", color: "#444" }}>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
              <ul style={{ marginBottom: "32px", color: "#444", listStyleType: "none", padding: 0 }}>
                <li style={{ paddingLeft: "20px", borderLeft: "2px solid #eee", marginBottom: "20px" }}>
                  <strong style={{ display: "block", fontSize: "18px", color: "#000", marginBottom: "2px" }}>Nevyhnutné cookies</strong>
                  Zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).
                </li>
                <li style={{ paddingLeft: "20px", borderLeft: "2px solid #eee" }}>
                  <strong style={{ display: "block", fontSize: "18px", color: "#000", marginBottom: "2px" }}>Štatistické (analytické) cookies</strong>
                  Pomáhajú nám pochopiť, ako návštevník stránku používa (nasadzujeme ich len so súhlasom používateľa).
                </li>
              </ul>
              <div style={{ backgroundColor: "#f9f9f9", padding: "24px", borderRadius: "12px" }}>
                <h3 style={{ fontWeight: "bold", color: "#000", marginBottom: "8px" }}>Správa súhlasov</h3>
                <p style={{ color: "#444", fontSize: "14px" }}>
                  Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
                </p>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px", color: "#000", letterSpacing: "-0.02em" }}>III. Práva dotknutej osoby</h2>
              <p style={{ marginBottom: "24px", color: "#444" }}>Podľa nariadenia GDPR máte nasledujúce práva:</p>
              <ul style={{ display: "grid", gap: "12px", marginBottom: "48px", color: "#444", listStyleType: "none", padding: 0 }}>
                {[
                  "Prístup k osobným údajom, ktoré spracúvame",
                  "Oprava nepresných alebo neúplných údajov",
                  "Vymazanie („právo zabudnutia“), ak na spracovanie už nie je právny základ",
                  "Obmedzenie spracovania",
                  "Prenosnosť údajov",
                  "Odvolanie súhlasu – stane sa účinným dňom odvolania",
                  "Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#ddd", fontWeight: "900", fontSize: "18px", lineHeight: "1" }}>0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: "1px solid #eee", paddingTop: "48px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px" }}>
                  <div>
                    <h3 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "12px" }}>Kontakt pre uplatnenie práv</h3>
                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#000", marginBottom: "2px" }}>{siteConfig.email}</p>
                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>{siteConfig.phoneDisplay}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <h3 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa", marginBottom: "12px" }}>Účinnosť dokumentu</h3>
                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>25. 4. 2025</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

