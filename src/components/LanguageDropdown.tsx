import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage, LANGUAGE_OPTIONS, Language } from '../context/LanguageContext';

export const LanguageDropdown: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button with flag */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF70]/30 hover:border-[#D4AF70] bg-[#141416]/80 text-[#F8F5EF] text-xs font-medium transition-all duration-300 hover:bg-[#D4AF70]/10 cursor-pointer"
        aria-label="Sélectionner la langue / اختيار اللغة"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none select-none">{currentOption.flag}</span>
        <span className="uppercase tracking-wider font-semibold text-[11px] text-[#F3E0B5]">
          {currentOption.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#D4AF70] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 rtl:right-auto rtl:left-0 z-50 w-40 bg-[#0F0F10] border border-[#D4AF70]/30 rounded-2xl shadow-2xl p-1.5 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="text-[10px] uppercase tracking-widest text-[#D4AF70]/70 px-3 py-1.5 font-light">
            Langue / اللغة
          </div>
          {LANGUAGE_OPTIONS.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                onClick={() => handleSelect(opt.code)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#D4AF70]/15 text-[#F3E0B5]'
                    : 'text-[#E8DDC9]/80 hover:bg-white/5 hover:text-[#F8F5EF]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base select-none">{opt.flag}</span>
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF70]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
