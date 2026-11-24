import React from 'react';
import { X, Sparkles, Award, ShieldCheck, Heart, Diamond } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#080808]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0F0F10] border border-[#D4AF70]/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 z-20 p-2 rounded-full bg-[#080808]/80 border border-[#D4AF70]/20 text-[#E8DDC9] hover:text-[#D4AF70] transition-colors cursor-pointer"
          aria-label={t.story.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Logo */}
        <div className="relative pt-12 pb-6 px-6 sm:px-12 text-center border-b border-[#D4AF70]/15 bg-gradient-to-b from-[#141416] to-[#0F0F10]">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.story.kicker}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#F8F5EF] mb-2">
            {t.story.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#E8DDC9]/70 font-light max-w-lg mx-auto">
            {t.story.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-12 space-y-8 text-sm sm:text-base text-[#E8DDC9]/85 font-light leading-relaxed max-h-[70vh] overflow-y-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-serif-luxury text-[#F3E0B5] font-normal">
              {t.story.s1Title}
            </h3>
            <p>{t.story.s1Text}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#141416] border border-[#D4AF70]/15 text-center">
              <Award className="w-6 h-6 text-[#D4AF70] mx-auto mb-2" />
              <h4 className="text-xs uppercase tracking-wider font-medium text-[#F8F5EF] mb-1">
                {t.story.pillar1Title}
              </h4>
              <p className="text-[11px] text-[#E8DDC9]/60">{t.story.pillar1Desc}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#141416] border border-[#D4AF70]/15 text-center">
              <Diamond className="w-6 h-6 text-[#D4AF70] mx-auto mb-2" />
              <h4 className="text-xs uppercase tracking-wider font-medium text-[#F8F5EF] mb-1">
                {t.story.pillar2Title}
              </h4>
              <p className="text-[11px] text-[#E8DDC9]/60">{t.story.pillar2Desc}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#141416] border border-[#D4AF70]/15 text-center">
              <ShieldCheck className="w-6 h-6 text-[#D4AF70] mx-auto mb-2" />
              <h4 className="text-xs uppercase tracking-wider font-medium text-[#F8F5EF] mb-1">
                {t.story.pillar3Title}
              </h4>
              <p className="text-[11px] text-[#E8DDC9]/60">{t.story.pillar3Desc}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif-luxury text-[#F3E0B5] font-normal">
              {t.story.s2Title}
            </h3>
            <p>{t.story.s2Text}</p>
          </div>

          <div className="pt-6 border-t border-[#D4AF70]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#D4AF70] font-light">
              <Heart className="w-4 h-4 text-[#D4AF70]" />
              <span>{t.story.tagline}</span>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF70] to-[#A47C3B] text-[#080808] font-semibold text-xs uppercase tracking-widest hover:brightness-110 cursor-pointer"
            >
              {t.story.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
