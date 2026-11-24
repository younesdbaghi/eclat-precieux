import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LuxuryExperienceProps {
  onOpenStory: () => void;
}

export const LuxuryExperience: React.FC<LuxuryExperienceProps> = ({ onOpenStory }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0B] relative overflow-hidden border-y border-[#D4AF70]/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#D4AF70]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Grande Photographie d'Art Joaillier */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border border-[#D4AF70]/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#080808]">
                <img
                  src="/src/assets/images/editorial_craftsmanship_luxury_1794500240007.jpg"
                  alt="Haute joaillerie et savoir-faire artisanal Éclat Précieux"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                />
              </div>

              {/* Luxury Frame Accent */}
              <div className="absolute inset-0 border border-[#D4AF70]/30 rounded-3xl pointer-events-none m-3 hidden sm:block" />

              {/* Floating Atelier Stamp Badge */}
              <div className="absolute bottom-6 right-6 rtl:right-auto rtl:left-6 bg-[#080808]/90 backdrop-blur-md border border-[#D4AF70]/40 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#D4AF70]/40 flex items-center justify-center text-[#D4AF70]">
                  <Sparkles className="w-5 h-5 text-[#D4AF70]" />
                </div>
                <div>
                  <div className="text-[10px] tracking-widest uppercase text-[#D4AF70] font-medium">
                    {t.experience.badgeTitle}
                  </div>
                  <div className="text-xs text-[#F8F5EF] font-light">
                    {t.experience.badgeSubtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Action */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70]">
              <span className="w-6 h-[1px] bg-[#D4AF70]" />
              <span>{t.experience.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] leading-[1.15] tracking-tight text-balance">
              {t.experience.title}
            </h2>

            <p className="text-base sm:text-lg text-[#E8DDC9]/80 font-light leading-relaxed">
              {t.experience.text}
            </p>

            <div className="space-y-4 pt-2 border-t border-[#D4AF70]/15">
              <div className="flex items-start gap-4">
                <span className="text-[#D4AF70] font-serif-luxury text-xl font-bold">I.</span>
                <p className="text-xs sm:text-sm text-[#E8DDC9]/70 font-light">
                  <strong className="text-[#F8F5EF] font-medium">{t.experience.point1Title} </strong>
                  {t.experience.point1Text}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[#D4AF70] font-serif-luxury text-xl font-bold">II.</span>
                <p className="text-xs sm:text-sm text-[#E8DDC9]/70 font-light">
                  <strong className="text-[#F8F5EF] font-medium">{t.experience.point2Title} </strong>
                  {t.experience.point2Text}
                </p>
              </div>
            </div>

            {/* Notre Histoire Button */}
            <div className="pt-4">
              <button
                onClick={onOpenStory}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D4AF70] text-[#D4AF70] hover:bg-[#D4AF70] hover:text-[#080808] font-medium text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-md shadow-[#D4AF70]/10 cursor-pointer group"
              >
                <span>{t.experience.storyBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
