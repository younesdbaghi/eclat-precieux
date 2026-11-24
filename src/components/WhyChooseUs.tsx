import React from 'react';
import { Crown, Sparkles, UserCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Crown,
      title: t.why.p1Title,
      description: t.why.p1Desc,
    },
    {
      icon: Sparkles,
      title: t.why.p2Title,
      description: t.why.p2Desc,
    },
    {
      icon: UserCheck,
      title: t.why.p3Title,
      description: t.why.p3Desc,
    },
    {
      icon: Truck,
      title: t.why.p4Title,
      description: t.why.p4Desc,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <span className="w-4 h-[1px] bg-[#D4AF70]" />
            <span>{t.why.kicker}</span>
            <span className="w-4 h-[1px] bg-[#D4AF70]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-4 text-balance">
            {t.why.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDC9]/70 font-light max-w-lg mx-auto">
            {t.why.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-8 rounded-2xl bg-[#0F0F10] border border-[#D4AF70]/15 hover:border-[#D4AF70]/40 transition-all duration-500 luxury-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-[#141416] border border-[#D4AF70]/30 flex items-center justify-center text-[#D4AF70] mb-6 group-hover:scale-110 group-hover:bg-[#D4AF70] group-hover:text-[#080808] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,112,0.1)]">
                    <Icon className="w-6 h-6 transition-colors" />
                  </div>

                  <div className="text-[10px] tracking-widest uppercase text-[#D4AF70]/60 font-light mb-2">
                    0{idx + 1} &bull; Éclat Précieux
                  </div>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#F8F5EF] mb-3 group-hover:text-[#F3E0B5] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E8DDC9]/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom golden accent line */}
                <div className="w-8 h-[1px] bg-[#D4AF70]/40 mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
