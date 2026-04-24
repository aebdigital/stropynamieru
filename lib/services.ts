export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  filter: string;
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "satenovy",
    slug: "satenove-stropy",
    title: "Saténové stropy",
    description: "Saténové napínacie stropy majú veľmi krásny a bohatý vzhľad.",
    fullDescription: "Saténové napínacie stropy majú veľmi krásny a bohatý vzhľad. Strečová látka bez zrnitej textúry pripomína hodváb a hodí sa do každého interiéru. Ich jemný odlesk vytvára v miestnosti príjemnú atmosféru bez prílišného zrkadlenia.",
    images: [
      "/assets/images/Satenove stropy/IMG_0146-1.jpeg",
      "/assets/images/Satenove stropy/IMG_2236-1.jpeg",
      "/assets/images/Satenove stropy/IMG_0146-1.jpeg", // Placeholder for 3rd image
    ],
    filter: "stropy-satexove",
  },
  {
    id: "vysoky-lesk",
    slug: "leskle-stropy",
    title: "Lesklé stropy",
    description: "Lesklé stropy patria medzi najpopulárnejšie úpravy.",
    fullDescription: "Lesklé stropy patria medzi najpopulárnejšie úpravy. Vysoký lesk opticky zväčšuje priestor a vytvára výrazný luxusný efekt. Sú ideálne do menších miestností alebo priestorov s nízkym stropom, ktoré potrebujú opticky prevzdušniť.",
    images: [
      "/assets/images/S vysokym leskom/IMG_0320-1.jpeg",
      "/assets/images/S vysokym leskom/IMG_8126-1.jpeg",
      "/assets/images/S vysokym leskom/IMG_0320-1.jpeg", // Placeholder
    ],
    filter: "stropy-leskle",
  },
  {
    id: "matny",
    slug: "matne-stropy",
    title: "Matné stropy",
    description: "Matný napínací strop pôsobí ako ideálne hladký maľovaný strop.",
    fullDescription: "Matný napínací strop pôsobí ako ideálne hladký maľovaný strop. Je cenovo dostupný, odolný voči vlhkosti a vhodný do každého priestoru. Je to klasická voľba pre tých, ktorí preferujú tradičný vzhľad s výhodami moderných materiálov.",
    images: [
      "/assets/images/Matny napinaci strop/IMG_1900-1.jpeg",
      "/assets/images/Matny napinaci strop/IMG_2199-1.jpeg",
      "/assets/images/Matny napinaci strop/IMG_1900-1.jpeg", // Placeholder
    ],
    filter: "stropy-matne",
  },
  {
    id: "fototlac",
    slug: "stropy-s-fototlacou",
    title: "Stropy s fototlačou",
    description: "Na PVC fóliu je možné aplikovať akýkoľvek vzor podľa vašich predstáv.",
    fullDescription: "Na PVC fóliu je možné aplikovať akýkoľvek vzor podľa vašich predstáv. Ideálne pre domácnosti aj firemné priestory. Či už ide o hviezdne nebo, prírodné motívy alebo abstraktné umenie, fototlač dodá vášmu interiéru unikátny charakter.",
    images: [
      "/assets/images/Napinacie stropy s fototlacou/IMG_0951-1.jpeg",
      "/assets/images/Napinacie stropy s fototlacou/IMG_1662-1.jpeg",
      "/assets/images/Napinacie stropy s fototlacou/IMG_0951-1.jpeg", // Placeholder
    ],
    filter: "stropy-fototlac",
  },
  {
    id: "translucentne",
    slug: "translucentne-stropy",
    title: "Translucentné stropy",
    description: "Translucentné stropy zabezpečujú výborný svetelný tok.",
    fullDescription: "Translucentné stropy zabezpečujú výborný svetelný tok a moderný interiérový efekt. Vhodné aj pre inteligentné ovládanie osvetlenia. Celá plocha stropu sa stáva svietidlom, čo vytvára rovnomerné a mäkké osvetlenie celej miestnosti.",
    images: [
      "/assets/images/Translucentne stropy/IMG_5048-1.jpeg",
      "/assets/images/Translucentne stropy/IMG_6540-1.jpeg",
      "/assets/images/Translucentne stropy/IMG_5048-1.jpeg", // Placeholder
    ],
    filter: "stropy-translucentne",
  },
];
