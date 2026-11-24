import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/collections';
import { useLanguage } from '../context/LanguageContext';

interface CollectionsSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4AF70]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF70]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.collections.kicker}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-4 text-balance">
            {t.collections.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDC9]/70 font-light max-w-xl mx-auto leading-relaxed">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Asymmetrical Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS_DATA.map((cat, index) => {
            const isWide = index === 0 || index === 3;
            const categoryKey = cat.id as keyof typeof t.collections.items;
            const itemTranslation = t.collections.items[categoryKey] || {
              name: cat.name,
              subtitle: cat.subtitle,
              quote: cat.featuredQuote,
            };

            return (
              <div
                key={cat.id}
                className={`group relative overflow-hidden rounded-2xl bg-[#0F0F10] border border-[#D4AF70]/20 luxury-card-hover cursor-pointer ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {/* Image Container with Luxury Scrim & Zoom */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={itemTranslation.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-[0.92]"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#080808]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#F3E0B5]/80 font-light bg-[#080808]/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF70]/20">
                      {cat.count} {t.collections.creationsCount}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#D4AF70]/40 flex items-center justify-center bg-[#080808]/60 backdrop-blur-sm text-[#D4AF70] group-hover:bg-[#D4AF70] group-hover:text-[#080808] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-[-90deg]" />
                    </div>
                  </div>

                  {/* Bottom Text and Action */}
                  <div className="space-y-2 pointer-events-auto">
                    <p className="text-xs text-[#D4AF70] font-light italic hidden sm:block">
                      {itemTranslation.quote}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#F8F5EF] tracking-wide">
                      {itemTranslation.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E8DDC9]/75 font-light line-clamp-2 max-w-md">
                      {itemTranslation.subtitle}
                    </p>

                    <div className="pt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCategory(cat.id);
                        }}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F3E0B5] group-hover:text-[#FFF1D0] transition-colors py-1 relative cursor-pointer"
                      >
                        <span>{t.collections.explore}</span>
                        <span className="w-4 h-[1px] bg-[#D4AF70] transition-all duration-300 group-hover:w-8" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
