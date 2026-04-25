export const siteConfig = {
  name: "Stropy na mieru",
  legalName: "Rudolf Majerčák - STROPYNAMIERU",
  description:
    "Profesionálne napínacie stropy v Banskej Bystrici a okolí. Matné, lesklé, saténové aj translucentné riešenia na mieru.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stropynamieru.sk",
  locale: "sk_SK",
  country: "SK",
  phoneDisplay: "+421 940 588 803",
  phoneHref: "+421940588803",
  email: "stropynamieru@gmail.com",
  address: {
    streetAddress: "Limbová 7",
    postalCode: "97409",
    addressLocality: "Banská Bystrica",
    addressCountry: "SK",
  },
  sameAs: [
    "https://www.facebook.com/people/Stropy-na-mieru/100083050156481/",
    "https://share.google/SzDGndyCDmy52TPET",
  ],
  keywords: [
    "napínacie stropy",
    "stropy na mieru",
    "napínacie stropy Banská Bystrica",
    "matné stropy",
    "lesklé stropy",
    "saténové stropy",
    "translucentné stropy",
    "stropy s fototlačou",
  ],
} as const;

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/galeria", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/cenova-ponuka", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/kontakt", priority: 0.85, changeFrequency: "monthly" as const },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function assetUrl(path: string) {
  return encodeURI(path);
}
