import React, { useState } from 'react';
import { Send, MapPin, Clock, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { DEMO_WHATSAPP_NUMBER, DISPLAY_WHATSAPP_NUMBER } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jewelryInterest: 'Bague Solitaire',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const getWhatsAppDirectUrl = () => {
    let text = '';
    if (language === 'ar') {
      text = encodeURIComponent(
        `مرحباً دار إكلات بريسيو ✨،\n\nأود التواصل مع مستشار حول مجوهراتكم (الاهتمام : ${formData.jewelryInterest || 'عام'}).\n\nشكراً لتواصلكم معي عبر هذا الرقم.`
      );
    } else {
      text = encodeURIComponent(
        `Bonjour Éclat Précieux ✨,\n\nJe souhaiterais entrer en contact avec un conseiller joaillier pour échanger sur vos créations (Intérêt : ${formData.jewelryInterest || 'Général'}).\n\nMerci de bien vouloir me recontacter.`
      );
    }
    return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0B] relative overflow-hidden border-t border-[#D4AF70]/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF70]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.kicker}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-4 text-balance">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-[#E8DDC9]/70 font-light max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2 Columns: Contact Information + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct WhatsApp + Fictional Showroom Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#141416] to-[#0F0F10] border border-[#D4AF70]/30 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-4">
                <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
              </div>

              <h3 className="text-xl font-serif-luxury text-[#F8F5EF] mb-2">
                {t.contact.whatsappTitle}
              </h3>
              <div className="text-sm font-mono text-[#D4AF70] mb-2 font-medium">
                {DISPLAY_WHATSAPP_NUMBER}
              </div>
              <p className="text-xs sm:text-sm text-[#E8DDC9]/75 font-light leading-relaxed mb-6">
                {t.contact.whatsappDesc}
              </p>

              <a
                href={getWhatsAppDirectUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FFF1D0] via-[#D4AF70] to-[#A47C3B] text-[#080808] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,112,0.4)] hover:scale-[1.02] shimmer-effect"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#080808]" />
                <span>{t.contact.whatsappBtn}</span>
              </a>
            </div>

            {/* Showroom & Hours Details (Explicitly identified as Demo) */}
            <div className="p-8 rounded-3xl bg-[#0F0F10] border border-[#D4AF70]/15 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF70] font-medium mb-0.5">
                    {t.contact.showroomTitle}
                  </div>
                  <div className="text-sm text-[#F8F5EF] font-light">
                    {t.contact.showroomCity}
                  </div>
                  <div className="text-[10px] text-[#E8DDC9]/50 font-light italic mt-0.5">
                    {t.contact.showroomDemo}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF70] font-medium mb-0.5">
                    {t.contact.hoursTitle}
                  </div>
                  <div className="text-sm text-[#F8F5EF] font-light">
                    {t.contact.hoursVal}
                  </div>
                  <div className="text-[10px] text-[#E8DDC9]/50 font-light mt-0.5">
                    {t.contact.hoursNote}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF70] font-medium mb-0.5">
                    {t.contact.phoneTitle}
                  </div>
                  <div className="text-sm text-[#F8F5EF] font-light tabular-nums">
                    {DISPLAY_WHATSAPP_NUMBER}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF70] font-medium mb-0.5">
                    {t.contact.mailTitle}
                  </div>
                  <div className="text-sm text-[#F8F5EF] font-light">
                    contact@eclatprecieux-demo.ma
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7 bg-[#0F0F10] border border-[#D4AF70]/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-serif-luxury text-[#F8F5EF] mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#E8DDC9]/70 font-light mb-8">
              {t.contact.formSubtitle}
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#141416] border border-[#D4AF70]/40 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#D4AF70]/10 border border-[#D4AF70] flex items-center justify-center text-[#D4AF70] mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#D4AF70]" />
                </div>
                <h4 className="text-xl font-serif-luxury text-[#F8F5EF]">
                  {t.contact.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#E8DDC9]/80 font-light max-w-md mx-auto">
                  {t.contact.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', jewelryInterest: 'Bague Solitaire', message: '' });
                  }}
                  className="px-6 py-2 rounded-full border border-[#D4AF70]/40 text-xs text-[#D4AF70] hover:bg-[#D4AF70]/10 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8DDC9]/80 mb-2 font-medium">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-[#F8F5EF] text-sm placeholder-[#E8DDC9]/30 focus:outline-none focus:border-[#D4AF70] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8DDC9]/80 mb-2 font-medium">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-[#F8F5EF] text-sm placeholder-[#E8DDC9]/30 focus:outline-none focus:border-[#D4AF70] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8DDC9]/80 mb-2 font-medium">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-[#F8F5EF] text-sm placeholder-[#E8DDC9]/30 focus:outline-none focus:border-[#D4AF70] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8DDC9]/80 mb-2 font-medium">
                      {t.contact.interestLabel}
                    </label>
                    <select
                      value={formData.jewelryInterest}
                      onChange={(e) => setFormData({ ...formData, jewelryInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-[#F8F5EF] text-sm focus:outline-none focus:border-[#D4AF70] transition-colors"
                    >
                      <option value="Bague Solitaire">{t.products.names['bague-solitaire'].name} — 1 790 {t.products.currency}</option>
                      <option value="Bague Éternité">{t.products.names['bague-eternite'].name} — 1 490 {t.products.currency}</option>
                      <option value="Collier Lumière">{t.products.names['collier-lumiere'].name} — 1 250 {t.products.currency}</option>
                      <option value="Bracelet Royal">{t.products.names['bracelet-royal'].name} — 890 {t.products.currency}</option>
                      <option value="Boucles Étoilées">{t.products.names['boucles-etoilees'].name} — 690 {t.products.currency}</option>
                      <option value="Collier Élégance">{t.products.names['collier-elegance'].name} — 1 390 {t.products.currency}</option>
                      <option value="Bracelet Prestige">{t.products.names['bracelet-prestige'].name} — 990 {t.products.currency}</option>
                      <option value="Parure Impériale">{t.products.names['parure-imperiale'].name} — 2 490 {t.products.currency}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8DDC9]/80 mb-2 font-medium">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-[#F8F5EF] text-sm placeholder-[#E8DDC9]/30 focus:outline-none focus:border-[#D4AF70] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#FFF1D0] via-[#D4AF70] to-[#A47C3B] text-[#080808] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,112,0.4)] disabled:opacity-60 cursor-pointer shimmer-effect"
                >
                  <Send className="w-4 h-4 text-[#080808] rtl:rotate-180" />
                  <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
