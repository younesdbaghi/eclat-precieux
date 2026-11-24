import React from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/instagram';
import { useLanguage } from '../context/LanguageContext';

export const InstagramSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>@eclatprecieux.ma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-4 text-balance">
            {t.instagram.title}
          </h2>

          <p className="text-sm sm:text-base text-[#E8DDC9]/70 font-light max-w-md mx-auto">
            {t.instagram.subtitle}
          </p>
        </div>

        {/* 6 Square Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0F0F10] border border-[#D4AF70]/15 luxury-card-hover cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] group-hover:brightness-100"
              />

              {/* Hover Dark Scrim & Details */}
              <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-center">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#D4AF70]" />
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#F3E0B5] font-medium mb-1">
                    <Heart className="w-3.5 h-3.5 fill-[#D4AF70] text-[#D4AF70]" />
                    <span>{post.likes}</span>
                  </div>
                  <p className="text-[10px] text-[#E8DDC9]/80 font-light line-clamp-3">
                    {post.caption}
                  </p>
                </div>

                <span className="text-[9px] uppercase tracking-wider text-[#D4AF70]">
                  {post.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Follow on Instagram Button */}
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D4AF70]/40 text-[#D4AF70] hover:bg-[#D4AF70]/10 hover:border-[#D4AF70] font-medium text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer group"
          >
            <Instagram className="w-4 h-4 text-[#D4AF70]" />
            <span>{t.instagram.followBtn}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF70]/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
