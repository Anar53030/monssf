"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Facebook, Twitter, Instagram } from "lucide-react";

/**
 * SiteFooter
 * ----------
 * Modern footer matching the approved reference: brand blurb, quick
 * links, sports list, contact details and a bottom bar with social
 * icons. All links are locale-aware and point at existing routes.
 */
export default function SiteFooter() {
  const t = useTranslations("Footer");
  const th = useTranslations("Header");
  const params = useParams();
  const locale = (params.locale as string) ?? "mn";
  const lk = (path: string) => `/${locale}/${path}`;

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="МОСХ" width={72} height={72} />
          <p style={{ whiteSpace: "pre-line" }}>{t("brandDesc")}</p>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h4>{t("quickLinks")}</h4>
          <ul>
            <li><a href={lk("history")} className="noajax">{t("aboutUs")}</a></li>
            <li><a href={lk("national-universiade")} className="noajax">{t("events")}</a></li>
            <li><a href={lk("news")} className="noajax">{t("news")}</a></li>
            <li><a href={lk("contact")} className="noajax">{t("contact")}</a></li>
          </ul>
        </div>

        {/* Sports */}
        <div className="footer-links">
          <h4>{t("sports")}</h4>
          <ul>
            <li><a href={lk("futsal")} className="noajax">{th("futsal")}</a></li>
            <li><a href={lk("basketball")} className="noajax">{th("basketball")}</a></li>
            <li><a href={lk("volleyball")} className="noajax">{th("volleyball")}</a></li>
            <li><a href={lk("wrestling")} className="noajax">{th("wrestling")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h4>{t("contactUs")}</h4>
          <ul>
            <li><a href="mailto:monssf@mongolnet.mn">monssf@mongolnet.mn</a></li>
            <li><a href="tel:+97611311947">+976 11 311947</a></li>
            <li><a href="https://maps.google.com/?q=Спортын+төв+ордон,+Улаанбаатар,+Монгол" target="_blank" rel="noopener noreferrer">Спортын төв ордон, 304 тоот, Бага тойруу, Улаанбаатар</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("rights", { year: new Date().getFullYear() })}</p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/mongolianssf" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <Instagram size={16} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
