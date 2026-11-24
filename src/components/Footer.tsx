import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Sparkles } from 'lucide-react';
import { DEMO_WHATSAPP_NUMBER, DISPLAY_WHATSAPP_NUMBER } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenStory: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStory, onSelectCategory }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] text-[#E8DDC9]/80 border-t border-[#D4AF70]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle gold line ornament */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#D4AF70]/10">
          {/* Brand & Description (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#accueil" className="inline-block">
              <img
                src="/public/assets/aistudio/Logo_de_joaillerie__clat_Pr_cieux-removebg-preview_2dfffd83.png"
                alt="Éclat Précieux — Haute Joaillerie"
                className="h-14 w-auto object-contain drop-shadow-[0_2px_15px_rgba(212,175,112,0.3)]"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#E8DDC9]/70 font-light leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141416] border border-[#D4AF70]/20 hover:border-[#D4AF70] text-[#D4AF70] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141416] border border-[#D4AF70]/20 hover:border-[#D4AF70] text-[#D4AF70] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${DEMO_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141416] border border-[#D4AF70]/20 hover:border-[#D4AF70] text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF70] font-semibold">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#accueil" className="hover:text-[#D4AF70] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF70] transition-colors">
                  {t.nav.collections}
                </a>
              </li>
              <li>
                <a href="#bijoux" className="hover:text-[#D4AF70] transition-colors">
                  {t.nav.jewelry}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenStory}
                  className="hover:text-[#D4AF70] transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#D4AF70] transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF70] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Collections Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF70] font-semibold">
              {t.footer.collectionsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button
                  onClick={() => onSelectCategory('bagues')}
                  className="hover:text-[#D4AF70] transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.products.filters.bagues}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('colliers')}
                  className="hover:text-[#D4AF70] transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.products.filters.colliers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('bracelets')}
                  className="hover:text-[#D4AF70] transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.products.filters.bracelets}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('boucles')}
                  className="hover:text-[#D4AF70] transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.products.filters.boucles}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('tous')}
                  className="hover:text-[#D4AF70] transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {t.products.filters.all}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Showroom */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF70] font-semibold">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs font-light text-[#E8DDC9]/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF70] shrink-0 mt-0.5" />
                <span>{t.footer.showroomCity}</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{DISPLAY_WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF70] shrink-0" />
                <span>contact@eclatprecieux-demo.ma</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141416] border border-[#D4AF70]/20 text-[10px] text-[#D4AF70]">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.footer.shippingBadge}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Mention */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8DDC9]/50 font-light text-center sm:text-left rtl:sm:text-right">
          <div>
            &copy; {new Date().getFullYear()} Éclat Précieux &bull; {t.footer.copyright}
          </div>

          <div className="text-[#D4AF70]/80 tracking-wide font-normal">
            {t.footer.demoMention}
          </div>
        </div>
      </div>
    </footer>
  );
};
