"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Partner organisations — add, remove or update entries here as needed
const PARTNERS = [
  {
    href: "https://www.ausf.org/",
    src: "/images/Mongolian Student Sports Association.png",
    alt: "AUSF – Asian University Sports Federation",
  },
  {
    href: "http://www.meds.gov.mn",
    src: "/images/Mongolian Student Sports Association (1).png",
    alt: "Монгол Улсын Боловсрол, Шинжлэх Ухааны Яам",
  },
  {
    href: "http://fisu.net",
    src: "/images/Mongolian Student Sports Association (2).png",
    alt: "FISU – International University Sports Federation",
  },
  {
    href: "http://www.golomtbank.com/",
    src: "/images/Golomt Sports Association.png",
    alt: "Голомт банк",
  },
  {
    href: "https://ett.mn",
    src: "/images/Mongolian Student Sports Association (3).png",
    alt: "Эрдэнэс Тавантолгой",
  },
  {
    href: "https://sport.gov.mn/",
    src: "/images/Mokh Mongolian Student Sports.png",
    alt: "МОХ – Монголын Олимпийн Хороо",
  },
];

/**
 * LastWrapper — "Our Partners" section.
 * Static partner list (unchanged data) on the new partners-grid design.
 */
export default function LastWrapper() {
  const t = useTranslations("Home");

  return (
    <section className="section partners-section">
      <div className="container">
        <h2 className="section-title">{t("partnersTitle")}</h2>
        <ul className="partners-grid">
          {PARTNERS.map((partner) => (
            <li className="partner-logo" key={partner.src}>
              <a href={partner.href} target="_blank" rel="noopener noreferrer" className="noajax">
                <Image src={partner.src} alt={partner.alt} width={150} height={100} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
