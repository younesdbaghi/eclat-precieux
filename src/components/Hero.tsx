import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck, Gem, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Cinematic Image with Luxury Scrim Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/src/assets/images/hero_luxury_jewelry_1794500237915.jpg"
            alt="Collection Haute Joaillerie Éclat Précieux"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
          />
        </motion.div>

        {/* Multi-layered radial and linear gradients for deep contrast and golden atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/40" />
        <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-[#080808]/40 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,112,0.12),transparent_70%)] pointer-events-none" />
      </div>

      {/* Floating subtle ambient particles/glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4AF70]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#A47C3B]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center flex flex-col items-center">
        {/* Diamond Emblem & Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF70]/30 bg-[#080808]/60 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,112,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF70]" />
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#F3E0B5] font-medium">
            {t.hero.kicker}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF70]" />
        </motion.div>

        {/* Brand Logo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <img
            src="/public/assets/aistudio/Logo_de_joaillerie__clat_Pr_cieux-removebg-preview_2dfffd83.png"
            alt="Éclat Précieux"
            className="w-48 sm:w-64 md:w-72 h-auto mx-auto object-contain drop-shadow-[0_4px_30px_rgba(212,175,112,0.35)]"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-normal tracking-tight text-[#F8F5EF] leading-[1.15] max-w-4xl mb-6 text-balance"
        >
          {t.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-[#E8DDC9]/90 font-light max-w-2xl leading-relaxed mb-10 tracking-wide text-balance"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Main Button */}
          <a
            href="#collections"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FFF1D0] via-[#D4AF70] to-[#A47C3B] text-[#080808] font-medium tracking-[0.15em] text-xs uppercase transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,112,0.5)] hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 group shimmer-effect"
          >
            <span>{t.hero.ctaCollection}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </a>

          {/* Secondary Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF70]/60 text-[#F8F5EF] hover:text-[#D4AF70] hover:border-[#D4AF70] hover:bg-[#D4AF70]/10 font-light tracking-[0.15em] text-xs uppercase transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          >
            <span>{t.hero.ctaContact}</span>
          </a>
        </motion.div>

        {/* Luxury Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 pt-8 border-t border-[#D4AF70]/20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-xs tracking-wider text-[#E8DDC9]/75 uppercase"
        >
          <div className="flex items-center justify-center gap-2">
            <Gem className="w-4 h-4 text-[#D4AF70]" />
            <span>{t.hero.trust1}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-[#D4AF70]" />
            <span>{t.hero.trust2}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF70]" />
            <span>{t.hero.trust3}</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.a
        href="#collections"
        aria-label="Faire défiler vers les collections"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 text-[#D4AF70]/70 hover:text-[#D4AF70] transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};
