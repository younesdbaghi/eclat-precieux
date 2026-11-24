import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { DEMO_REVIEWS } from '../data/reviews';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsCarousel: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? DEMO_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === DEMO_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextReview, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = DEMO_REVIEWS[currentIndex];
  const commentText = language === 'ar' && current.commentAr ? current.commentAr : current.comment;
  const authorName = language === 'ar' && current.nameAr ? current.nameAr : current.name;
  const cityName = language === 'ar' && current.cityAr ? current.cityAr : current.city;
  const productPurchased =
    language === 'ar' && current.productPurchasedAr
      ? current.productPurchasedAr
      : current.productPurchased;

  return (
    <section id="avis" className="py-24 sm:py-32 bg-[#0A0A0B] relative overflow-hidden border-t border-[#D4AF70]/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF70]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF70]/20 bg-[#141416] text-[11px] text-[#D4AF70] uppercase tracking-widest mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>{t.reviews.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-3 text-balance">
            {t.reviews.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#E8DDC9]/60 font-light max-w-md mx-auto">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative bg-[#0F0F10] border border-[#D4AF70]/25 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon watermark */}
          <Quote className="absolute top-8 right-8 rtl:right-auto rtl:left-8 sm:top-10 sm:right-12 rtl:sm:left-12 w-16 h-16 sm:w-24 sm:h-24 text-[#D4AF70]/10 pointer-events-none" />

          {/* Review Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5 mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#D4AF70] text-[#D4AF70] drop-shadow-[0_0_8px_rgba(212,175,112,0.5)]"
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif-luxury text-[#F8F5EF] font-light leading-relaxed mb-8 italic">
              « {commentText} »
            </blockquote>

            {/* Customer Information & Verified Demo Tag */}
            <div className="flex flex-col items-center">
              <div className="text-base font-serif-luxury font-medium text-[#F3E0B5] tracking-wide">
                {authorName}
              </div>
              <div className="text-xs text-[#E8DDC9]/70 font-light">
                {cityName} &bull; <span className="text-[#D4AF70]">{productPurchased}</span>
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-[#D4AF70]/70 font-light border-t border-[#D4AF70]/20 pt-2">
                {t.reviews.demoTag} ({current.date})
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between absolute inset-y-0 left-4 right-4 pointer-events-none">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-[#141416]/90 border border-[#D4AF70]/30 text-[#E8DDC9] hover:text-[#D4AF70] hover:border-[#D4AF70] hover:scale-105 transition-all pointer-events-auto cursor-pointer"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-[#141416]/90 border border-[#D4AF70]/30 text-[#E8DDC9] hover:text-[#D4AF70] hover:border-[#D4AF70] hover:scale-105 transition-all pointer-events-auto cursor-pointer"
              aria-label="Avis suivant"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-4">
            {DEMO_REVIEWS.map((rev, idx) => (
              <button
                key={rev.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#D4AF70]' : 'w-2 bg-[#D4AF70]/20 hover:bg-[#D4AF70]/50'
                }`}
                aria-label={`Aller à l'avis ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
