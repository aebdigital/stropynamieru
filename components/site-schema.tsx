import { absoluteUrl, siteConfig } from "@/lib/site";

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "sk-SK",
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      image: absoluteUrl("/opengraph-image"),
      logo: absoluteUrl("/assets/images/logo.png"),
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Banská Bystrica",
        },
        {
          "@type": "AdministrativeArea",
          name: "Banskobystrický kraj",
        },
      ],
      serviceType: [
        "Napínacie stropy",
        "Lesklé stropy",
        "Matné stropy",
        "Saténové stropy",
        "Translucentné stropy",
        "Stropy s fototlačou",
      ],
      priceRange: "$$",
      sameAs: siteConfig.sameAs,
    },
  ],
};

export function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
