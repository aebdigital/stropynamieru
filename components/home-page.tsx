"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { RollingText } from "@/components/rolling-text";
import { SiteImage } from "@/components/site-image";
import { motion } from "framer-motion";

type HeroSlide = {
  src: string;
  alt: string;
};

type HeroTestimonial = {
  text: string;
  name: string;
  initials: string;
};

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type GalleryCard = {
  title: string;
  image: string;
  alt: string;
  href: string;
};

type Review = {
  initials: string;
  name: string;
  text: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/assets/images/S vysokym leskom/IMG_0320-1.jpeg",
    alt: "Lesklé napínacie stropy",
  },
  {
    src: "/assets/images/Matny napinaci strop/IMG_2199-1.jpeg",
    alt: "Matné napínacie stropy",
  },
  {
    src: "/assets/images/Napinacie stropy s fototlacou/d68f4ee9-43ae-4f9e-81d1-e4e6d1c44fd2-1.jpeg",
    alt: "Napínacie stropy s fototlačou",
  },
  {
    src: "/assets/images/Translucentne stropy/IMG_0486-1.jpeg",
    alt: "Translucentné napínacie stropy",
  },
  {
    src: "/assets/images/Translucentne stropy/IMG_5048-1.jpeg",
    alt: "Translucentné napínacie stropy",
  },
  {
    src: "/assets/images/Translucentne stropy/IMG_6547-1.jpeg",
    alt: "Translucentné napínacie stropy",
  },
  {
    src: "/assets/images/Translucentne stropy/IMG_9909-1.jpeg",
    alt: "Translucentné napínacie stropy",
  },
];

const HERO_TESTIMONIALS: HeroTestimonial[] = [
  {
    text: "Profesionálny prístup, odborné poradenstvo, rýchla a kvalitná realizácia. Môžem len odporúčať.",
    name: "Marian Kikta",
    initials: "MK",
  },
  {
    text: "Môžem len odporučiť. S prácou aj komunikáciou sme boli spokojní. Šikovní a rýchli chlapci. A zachvíľu aj hotový a hlavne bez bordelu. Strop vyzerá perfektne. Ďakujeme…",
    name: "Lucia Karabová",
    initials: "LK",
  },
  {
    text: "Boli sme veľmi spokojní, stropy sú krásne. Komunikácia s majiteľom bola super, vždy bol k dispozícii, vo veľa veciach nám poradil a našiel vhodné riešenie. Všetko bolo vyriešené k našej spokojnosti, určite odporúčame.",
    name: "Tereza Vacková",
    initials: "TV",
  },
  {
    text: "Odporúčam spoluprácu všetkými 10. Profesionalita, kvalita, dôslednosť, ľudský prístup, dodržiavanie termínov a potrebná dávka flexibility, ktorou veľa firiem v dnešnej dobe už nedisponuje. Výsledný efekt stojí za to. Ďakujem",
    name: "Peter Šulek",
    initials: "PŠ",
  },
  {
    text: "Perfektný prístup od komunikácie po realizáciu. Sme nadmieru spokojní a určite odporúčame aj ostatným. Rýchle, krásne, TOP.. jedno veľké ďakujeme a prajeme veľa ďalších spokojných zákazníkov…..",
    name: "Tatiana Kundľová",
    initials: "TK",
  },
  {
    text: "Ďakujem za profesionálnu prácu, som nadmieru spokojná. Pán je ochotný, dobre sa s ním komunikuje a takisto som bola prekvapená rýchlosťou zhotovenia. Odporúčam každému.",
    name: "Andrea Zbortek",
    initials: "AZ",
  },
  {
    text: "Chcem poďakovať za perfektne odvedenú prácu, profesionálny prístup k zákazníkovi, odporúčam každému túto firmu, kto uvažuje o tomto type stropu. Vyzerá to perfektne a aj čo sa týka údržby to sa nedá porovnať s klasickým sadrokartonom.",
    name: "Mino Šimutka",
    initials: "MŠ",
  },
  {
    text: "Pán Majerčák bol v prípravnej fáze a rovnako tak pri realizácii slušný, pohotový a kreatívny, komunikácia korektná, založená na vzájomnej dôvere. Práca na mieste profesionálna a pozitívnej recenzie hodná. Sme spokojní, odporúčame",
    name: "Peter Zifcak",
    initials: "PZ",
  },
  {
    text: "Profesionálny prístup, vysoká schopnosť improvizácie čo si pri firmách veľmi cením a v konečnom dôsledku dokonalý look nášho bazéna. Určite odporúčam.",
    name: "Radovan",
    initials: "R",
  },
  {
    text: "Výborný prístup majstrov. S výslednou prácou sme nad mieru spokojní. Určite by som túto firmu odporučil každému všetkými 10.",
    name: "Zdenko Ťurek",
    initials: "ZŤ",
  },
];

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Saténové stropy",
    description:
      "Elegantné riešenie s jemným saténovým povrchom. Dokonale skrýva nerovnosti pôvodného stropu a vytvára príjemnú atmosféru v miestnosti.",
    image: "/assets/images/Satenove stropy/IMG_0146-1.jpeg",
    href: "/stropy/satenove-stropy",
  },
  {
    title: "Lesklé stropy",
    description:
      "Luxusné lesklé stropy, ktoré opticky zväčšujú priestor a odrážajú svetlo. Ideálne pre moderne zariadené interiéry.",
    image: "/assets/images/S vysokym leskom/IMG_0320-1.jpeg",
    href: "/stropy/leskle-stropy",
  },
  {
    title: "Matné stropy",
    description:
      "Klasické matné prevedenie s nenápadným vzhľadom. Vhodné pre tradičné interiéry, kde nechcete príliš výrazný efekt.",
    image: "/assets/images/Matny napinaci strop/IMG_1900-1.jpeg",
    href: "/stropy/matne-stropy",
  },
  {
    title: "Stropy s fototlačou",
    description:
      "Jedinečné riešenie s vlastnou grafickou úpravou. Môžete si vybrať z našich vzorov alebo navrhnúť vlastný dizajn.",
    image: "/assets/images/Napinacie stropy s fototlacou/IMG_0951-1.jpeg",
    href: "/stropy/stropy-s-fototlacou",
  },
  {
    title: "Translucentné stropy",
    description:
      "Priehľadné alebo polpriehľadné stropy umožňujúce zaujímavé svetelné efekty. Ideálne v kombinácii s LED osvetlením.",
    image: "/assets/images/Translucentne stropy/IMG_0486-1.jpeg",
    href: "/stropy/translucentne-stropy",
  },
];

const GALLERY_CARDS: GalleryCard[] = [
  {
    title: "SATÉNOVÝ STROP",
    image: "/assets/images/Satenove stropy/IMG_0146-1.jpeg",
    alt: "Saténový napínací strop projekt",
    href: "/galeria?filter=stropy-satexove",
  },
  {
    title: "LESKLÝ STROP",
    image: "/assets/images/S vysokym leskom/IMG_0320-1.jpeg",
    alt: "Lesklý napínací strop projekt",
    href: "/galeria?filter=stropy-leskle",
  },
  {
    title: "MATNÝ STROP",
    image: "/assets/images/Matny napinaci strop/IMG_03961-1.jpeg",
    alt: "Matný napínací strop projekt",
    href: "/galeria?filter=stropy-matne",
  },
  {
    title: "STROP S FOTOTLAČOU",
    image: "/assets/images/Napinacie stropy s fototlacou/Resized_20240828_205852-1.jpeg",
    alt: "Napínací strop s fototlačou projekt",
    href: "/galeria?filter=stropy-fototlac",
  },
  {
    title: "TRANSLUCENTNÝ STROP",
    image: "/assets/images/Translucentne stropy/IMG_0486-1.jpeg",
    alt: "Translucentný napínací strop projekt",
    href: "/galeria?filter=stropy-translucentne",
  },
  {
    title: "LESKLÝ STROP",
    image: "/assets/images/S vysokym leskom/IMG_8126-1.jpeg",
    alt: "Lesklý napínací strop luxusný projekt",
    href: "/galeria?filter=stropy-leskle",
  },
  {
    title: "STROP S FOTOTLAČOU",
    image: "/assets/images/Napinacie stropy s fototlacou/d68f4ee9-43ae-4f9e-81d1-e4e6d1c44fd2-1.jpeg",
    alt: "Kreatívny strop s fototlačou projekt",
    href: "/galeria?filter=stropy-fototlac",
  },
];

const REVIEWS: Review[] = [
  {
    initials: "MK",
    name: "Marian Kikta",
    text: "Profesionálny prístup, odborné poradenstvo, rýchla a kvalitná realizácia. Môžem len odporúčať.",
  },
  {
    initials: "LK",
    name: "Lucia Karabová",
    text: "Môžem len odporučiť. S prácou aj komunikáciou sme boli spokojní. Šikovní a rýchli chlapci. A zachvíľu aj hotový a hlavne bez bordelu. Strop vyzerá perfektne. Ďakujeme…",
  },
  {
    initials: "TV",
    name: "Tereza Vacková",
    text: "Boli sme veľmi spokojní, stropy sú krásne. Komunikácia s majiteľom bola super, vždy bol k dispozícii, vo veľa veciach nám poradil a našiel vhodné riešenie. Všetko bolo vyriešené k našej spokojnosti, určite odporúčame.",
  },
  {
    initials: "PŠ",
    name: "Peter Šulek",
    text: "Odporúčam spoluprácu všetkými 10. Profesionalita, kvalita, dôslednosť, ľudský prístup, dodržiavanie termínov a potrebná dávka flexibility, ktorou veľa firiem v dnešnej dobe už nedisponuje. Výsledný efekt stojí za to. Ďakujem",
  },
  {
    initials: "TK",
    name: "Tatiana Kundľová",
    text: "Perfektný prístup od komunikácie po realizáciu. Sme nadmieru spokojní a určite odporúčame aj ostatným. Rýchle, krásne, TOP.. jedno veľké ďakujeme a prajeme veľa ďalších spokojných zákazníkov…..",
  },
  {
    initials: "AZ",
    name: "Andrea Zbortek",
    text: "Ďakujem za profesionálnu prácu, som nadmieru spokojná. Pán je ochotný, dobre sa s ním komunikuje a takisto som bola prekvapená rýchlosťou zhotovenia. Odporúčam každému.",
  },
  {
    initials: "MŠ",
    name: "Mino Šimutka",
    text: "Chcem poďakovať za perfektne odvedenú prácu, profesionálny prístup k zákazníkovi, odporúčam každému túto firmu, kto uvažuje o tomto type stropu. Vyzerá to perfektne a aj čo sa týka údržby to sa nedá porovnať s klasickým sadrokartonom.",
  },
  {
    initials: "PZ",
    name: "Peter Zifcak",
    text: "Pán Majerčák bol v prípravnej fáze a rovnako tak pri realizácii slušný, pohotový a kreatívny, komunikácia korektná, založená na vzájomnej dôvere. Práca na mieste profesionálna a pozitívnej recenzie hodná. Sme spokojní, odporúčame",
  },
  {
    initials: "R",
    name: "Radovan",
    text: "Profesionálny prístup, vysoká schopnosť improvizácie čo si pri firmách veľmi cením a v konečnom dôsledku dokonalý look nášho bazéna. Určite odporúčam.",
  },
  {
    initials: "ZŤ",
    name: "Zdenko Ťurek",
    text: "Výborný prístup majstrov. S výslednou prácou sme nad mieru spokojní. Určite by som túto firmu odporučil každému všetkými 10.",
  },
];

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomePage() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [heroParallaxY, setHeroParallaxY] = useState(0);

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    const testimonialStart = window.setTimeout(() => {
      const testimonialTimer = window.setInterval(() => {
        setTestimonialIndex((prev) => (prev + 1) % HERO_TESTIMONIALS.length);
      }, 8000);

      return () => window.clearInterval(testimonialTimer);
    }, 3000);

    return () => {
      window.clearInterval(imageTimer);
      window.clearTimeout(testimonialStart);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;

      window.requestAnimationFrame(() => {
        setHeroParallaxY(-(window.scrollY * 0.15));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeTestimonial = useMemo(
    () => HERO_TESTIMONIALS[testimonialIndex],
    [testimonialIndex],
  );

  return (
    <main>
      <section id="home" className="hero">
        <div 
          className="hero-background"
          style={{
            transform: `translate3d(0, ${heroParallaxY}px, 0)`,
            willChange: "transform",
            height: "120vh",
            top: "-10vh",
            position: "absolute",
            width: "100%",
            left: 0
          }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`hero-bg-image ${index === heroImageIndex ? "active" : ""}`}
            >
              <SiteImage
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="hero-bg-media"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.p 
              className="hero-kicker"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              Napínacie stropy v Banskej Bystrici a okolí
            </motion.p>
            
            <motion.h1 
              className="hero-title"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              Čistý, presný a moderný strop bez kompromisov
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              Navrhujeme a montujeme napínacie stropy, ktoré opticky zväčšia
              priestor, skryjú nerovnosti a zostanú elegantné dlhé roky. Od
              prvého zamerania po finálnu montáž držíme čistú realizáciu,
              poctivý detail a materiály, ktoré sú overené praxou.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <Link href="/cenova-ponuka" className="cta-btn primary rolling-button">
                <RollingText primary="Kontakt" secondary="Poďme sa spojiť" />
              </Link>
              <Link href="#services" className="cta-btn secondary rolling-button">
                <RollingText primary="Napínacie stropy" secondary="Pozrieť typy" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">
                  100<span className="stat-plus">+</span>
                </div>
                <div className="stat-label">Spokojných zákazníkov</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">7</div>
                <div className="stat-label">rokov skúseností</div>
              </div>
            </div>

            <div className="hero-testimonial" id="hero-testimonial">
              <blockquote id="testimonial-text">
                {`"${activeTestimonial.text}"`}
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar" id="testimonial-avatar">
                  <span>{activeTestimonial.initials}</span>
                </div>
                <div className="author-info">
                  <span className="author-name" id="testimonial-name">
                    {activeTestimonial.name}
                  </span>
                  <div className="author-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-score">5.0</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJN7BseS49FUcRMcl-19q5D2w"
              target="_blank"
              rel="noreferrer"
              className="more-testimonials"
            >
              VIAC REFERENCIÍ
            </a>
          </motion.div>
        </div>
      </section>

      <div className="main-content-wrap">
        <section id="about" className="about section-overlap">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-header">
                <span className="about-label">— O nás</span>
                <h2 className="about-title" data-text="Stropy na mieru">
                  DOKONALÝ STROP PRE DOKONALÝ PRIESTOR
                </h2>
              </div>
              <div className="about-text">
                <p>
                  Sme skúsený tím s viac ako 7 rokmi praxe v oblasti interiérových
                  riešení. Používame moderné technológie a materiály, aby sme vám
                  ponúkli najlepšie riešenia. Našou prioritou je kvalita a
                  spokojnosť zákazníka.
                </p>
                <p>
                  Máme bohaté skúsenosti s opravou nekvalitných napínacích stropov,
                  kedy boli použité nekvalitné fólie a spojovacie profily z plastu
                  ktoré časom praskajú. Čínske fólie na prvý pocit zapáchajú,
                  nedosahujú stálosť farieb, ovísajú a často krát sa už pri montáži
                  trhajú. Majú negatívny až škodlivý vplyv na zdravie človeka.
                  Čínske fólie dosahujú úroveň kvality B až C.
                </p>
                <p>
                  Ako sa vyhnúť nekvalitným dodávateľom? V prvom rade ide o
                  preukázanie pôvodu materiálov. Preukázanie certifikátu kvality a
                  vzorkovníkov nielen fólií, ale aj kovania. Používame výhradne
                  kvalitný certifikovaný materiál, ktorý neškodí zdraviu,
                  nezapácha a spojovacie profily sú hlinikové a dostatočne pevné.
                </p>

                <Link href="/kontakt" className="about-btn rolling-button">
                  <span className="rolling-button__content">
                    <RollingText primary="Kontaktovať nás" secondary="Nezáväzný dopyt" />
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>

            <div className="about-right">
              <div className="about-image">
                <SiteImage
                  src="/assets/images/Translucentne stropy/IMG_0486-1.jpeg"
                  alt="Profesionálne napínacie stropy"
                  className="about-image-media"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="about-stats">
                <div className="stat-box stat-black">
                  <div className="stat-content">
                    <div className="stat-number">
                      100<span className="stat-plus">+</span>
                    </div>
                    <div className="stat-label">Spokojných zákazníkov</div>
                  </div>
                </div>
                <div className="stat-box stat-yellow">
                  <div className="stat-content">
                    <div className="stat-number">7</div>
                    <div className="stat-label">rokov skúseností</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title" data-text="Typy stropov">
              TYPY STROPOV
            </h2>
          </div>
          <div className="services-grid-container">
            <div className="services-grid">
              {SERVICE_CARDS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="service-card"
                >
                  <div className="service-card-media-wrap">
                    <SiteImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="service-card-media"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="service-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="service-arrow">
                    <ArrowIcon />
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-header">
              <h2 className="section-title" data-text="AKO PREBIEHA INŠTALÁCIA?">
                AKO PREBIEHA INŠTALÁCIA?
              </h2>
            </div>
            <div className="installation-row">
              <div className="installation-image-col">
                <div className="installation-image-wrap">
                  <SiteImage
                    src="/assets/images/Translucentne stropy/IMG_6547-1.jpeg"
                    alt="Montáž napínacieho stropu"
                    fill
                    className="installation-media"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="installation-content-col">
                <div className="benefit-card full-width">
                  <div style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                    <p style={{ marginBottom: "20px" }}>
                      Montáž napínacieho stropu začína obhliadkou miestnosti, kde sa
                      strop bude realizovať. Základom rýchlej a bezproblémovej
                      montáže je dôkladná príprava a správne zameranie miestnosti.
                      Pri prvom stretnutí si zákazník vyberie z nášho vzorkovníka
                      fóliu a my zvolíme vhodné kovanie pre uchytenie fólie. Do
                      napínacieho stropu je možné inštalovať akékoľvek svietidlo,
                      revízne dvierka, odsávanie alebo výduchy klimatizácie.
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      V prvom rade pred začatím montáže musíme zamerať požadovanú
                      výšku stropu. Presnú výšku zameriavame laserom pre dokonalý
                      efekt roviny. Ešte pred montážou stropu je možné strop
                      zatepliť. Rýchlosť inštalácie uchytávacieho kovania závisí do
                      akého podkladu sa inštaluje. V priemere sa kompletne inštaluje
                      strop s rozlohou 30 až 50 m². Pri montáži nie je nutné celkom
                      vypratať miestnosť. Často stačí nábytok umiestniť do stredu
                      miestnosti. Pri montáži nevzniká prach a neprebiehajú mokré
                      procesy na rozdiel od montáže sadrokartónu, kedy je potrebné
                      tmelenie, brúsenie a maľovanie.
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      Po inštalácii kovania prebieha uchytenie a montáž svietidiel
                      do pôvodného stropu. Na uchytenie sa používajú špeciálne
                      objímky. Keď je predpríprava dokončená, nasleduje uchytenie
                      samotného PVC stropu, ktorý sa nahrieva pre svoju vyššiu
                      pružnosť počas inštalácie. Následne sa prirodzeným
                      ochladzovaním fólia sťahuje až vytvorí dokonalú rovinu. Po
                      natiahnutí fólie sa inštalujú svietidlá do predpripravených
                      objímiek. Po inštalácii všetkých komponentov je montáž
                      napínacieho stropu ukončená.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title" data-text="GALÉRIA">
            GALÉRIA
          </h2>
          <div className="gallery-grid">
            {GALLERY_CARDS.map((item) => (
              <div key={`${item.title}-${item.image}`} className="gallery-item">
                <Link href={item.href} className="gallery-link">
                  <div className="gallery-image-container">
                    <SiteImage
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="gallery-media"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="gallery-overlay">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            <div className="gallery-item gallery-all-projects">
              <Link href="/galeria" className="gallery-all-link">
                <div className="gallery-all-content">
                  <h3>Celá galéria</h3>
                  <div className="gallery-all-icon">
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <div className="features-container">
            <div className="feature-item">
              <h3>Elegantný dizajn a variabilita povrchu</h3>
              <p>
                Napínacie stropy môžu byť matné s efektom omietky, lesklé so
                zrkadlovým efektom alebo saténové. K dispozícii sú aj farebné
                vyhotovenia a možnosť grafických prvkov, ktoré v kombinácii s
                osvetlením vytvoria jedinečnú atmosféru.
              </p>
            </div>
            <div className="feature-item">
              <h3>Praktickosť a jednoduchá údržba</h3>
              <p>
                Tieto stropy sú odolné proti žltnutiu, praskaniu a sú ľahko
                čistiteľné. Plátno z PVC má mimoriadnu pevnosť a v prípade
                zatopenia dokáže zadržať až 100 litrov vody na meter štvorcový,
                čo zaručí ochranu interiéru.
              </p>
            </div>
            <div className="feature-item">
              <h3>Rýchla a efektívna montáž</h3>
              <p>
                Montáž napínacieho stropu je omnoho rýchlejšia ako pri
                sadrokartóne. Výsledný strop je zdravý, ekologicky bezpečný a
                vhodný aj do nevykurovaných miestností.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <div className="container">
          <h2 className="section-title" data-text="RECENZIE">
            RECENZIE
          </h2>

          <div className="reviews-header">
            <div className="reviews-summary">
              <div className="reviews-rating">
                <div className="rating-number">5.0</div>
                <div className="rating-stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                </div>
              </div>
              <div className="reviews-google">
                <SiteImage
                  src="/assets/images/google-icon.png"
                  alt="Google"
                  className="google-logo"
                  width={32}
                  height={32}
                />
                <span>Google recenzie</span>
              </div>
            </div>
          </div>

          <div className="reviews-slider-container">
            <div className="reviews-slider">
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <div key={`${review.name}-${index}`} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        <span>{review.initials}</span>
                      </div>
                      <div className="reviewer-details">
                        <div className="reviewer-name">{review.name}</div>
                      </div>
                    </div>
                    <div className="review-rating">
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                    </div>
                  </div>
                  <div className="review-text">{`"${review.text}"`}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews-cta">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJN7BseS49FUcRMcl-19q5D2w"
              target="_blank"
              rel="noreferrer"
              className="reviews-btn rolling-button"
            >
              <span className="rolling-button__content">
                <RollingText
                  primary="Zobraziť všetky recenzie na Google"
                  secondary="Prejsť na Google profil"
                />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
