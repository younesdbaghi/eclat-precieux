import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { DEMO_WHATSAPP_NUMBER } from '../data/products';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LanguageDropdown } from './LanguageDropdown';

interface NavbarProps {
  onOpenStory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.collections, href: '#collections' },
    { label: t.nav.jewelry, href: '#bijoux' },
    { label: t.nav.about, onClick: onOpenStory },
    { label: t.nav.reviews, href: '#avis' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? 'مرحباً دار إكلات بريسيو، أود الاستفسار والتحدث مع مستشار في المجوهرات.'
      : 'Bonjour Éclat Précieux, je souhaite être conseillé(e) par un expert joaillier.'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#D4AF70]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand Logo & Wordmark */}
          <a
            href="#accueil"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Éclat Précieux Accueil"
          >
            <img
              src="/public/assets/aistudio/Logo_de_joaillerie__clat_Pr_cieux-removebg-preview_2dfffd83.png"
              alt="Logo Éclat Précieux"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#E8DDC9]/80">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 hover:text-[#D4AF70] transition-colors duration-300 whitespace-nowrap shrink-0 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-0 h-[1px] bg-[#D4AF70] transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="relative py-1 hover:text-[#D4AF70] transition-colors duration-300 whitespace-nowrap shrink-0 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-0 h-[1px] bg-[#D4AF70] transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
          </nav>

          {/* Zone 3: Language Dropdown + WhatsApp Concierge + Cart Trigger + Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Language Switcher Dropdown with Flags */}
            <LanguageDropdown />

            {/* WhatsApp direct concierge button with unified WhatsAppIcon */}
            <a
              href={`https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF70]/40 text-[#D4AF70] hover:bg-[#D4AF70]/10 hover:border-[#D4AF70] transition-all duration-300 text-xs tracking-wider"
              title="Conseiller joaillier sur WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="font-light">{t.nav.concierge}</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full text-[#F8F5EF] hover:text-[#D4AF70] transition-colors duration-300 cursor-pointer group"
              aria-label={`${t.nav.cart} (${totalItems})`}
            >
              <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 rtl:-left-0.5 rtl:right-auto flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-gradient-to-r from-[#D4AF70] to-[#A47C3B] text-[#080808] font-bold text-[10px] tabular-nums shadow-lg shadow-[#D4AF70]/30 animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E8DDC9] hover:text-[#D4AF70] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#080808]/90 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className="fixed top-0 right-0 rtl:right-auto rtl:left-0 bottom-0 w-full max-w-xs bg-[#0F0F10] border-l rtl:border-l-0 rtl:border-r border-[#D4AF70]/20 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF70]/15">
                <img
                  src="/public/assets/aistudio/Logo_de_joaillerie__clat_Pr_cieux-removebg-preview_2dfffd83.png"
                  alt="Éclat Précieux"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#E8DDC9]/70 hover:text-[#D4AF70]"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Language switch */}
              <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-[#141416] border border-[#D4AF70]/20">
                <span className="text-xs text-[#E8DDC9]/80 font-medium">Langue / اللغة :</span>
                <LanguageDropdown />
              </div>

              <nav className="mt-6 flex flex-col gap-4 text-sm uppercase tracking-[0.2em]">
                {navLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-[#E8DDC9] hover:text-[#D4AF70] border-b border-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        link.onClick?.();
                      }}
                      className="text-left rtl:text-right py-2 text-[#E8DDC9] hover:text-[#D4AF70] border-b border-white/5 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  )
                )}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D4AF70]/20 space-y-3">
              <a
                href={`https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#D4AF70] to-[#A47C3B] text-[#080808] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#D4AF70]/20"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#080808]" />
                <span>{t.nav.concierge} WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-[#E8DDC9]/50 font-light">
                Joaillerie d’exception · Casablanca & Maroc
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
