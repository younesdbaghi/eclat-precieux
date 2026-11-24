import React, { useState } from 'react';
import { X, ShoppingBag, Check, Shield, Gem, Award, Truck } from 'lucide-react';
import { Product, DEMO_WHATSAPP_NUMBER } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const [selectedRingSize, setSelectedRingSize] = useState('52');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const ringSizes = ['48', '50', '52', '54', '56', '58'];
  const prodTrans = t.products.names[product.id] || {
    name: product.name,
    description: product.description,
    badge: product.badge,
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, product.category === 'bagues' ? selectedRingSize : undefined);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getDirectWhatsAppUrl = () => {
    let msg = '';
    if (language === 'ar') {
      msg = `مرحباً دار إكلات بريسيو ✨،\n\nأرغب في طلب هذه القطعة الفاخرة :\n- *${prodTrans.name}*\n- السعر : ${product.price.toLocaleString('fr-FR')} ${t.products.currency}\n`;
      if (product.category === 'bagues') {
        msg += `- مقاس الخاتم : ${selectedRingSize}\n`;
      }
      msg += `- الكمية : ${quantity}\n\nيرجى تأكيد التوفر وإجراءات التوصيل لعنواني بالمغرب. شكراً لكم.`;
    } else {
      msg = `Bonjour Éclat Précieux ✨,\n\nJe souhaite commander :\n- *${product.name}*\n- Prix : ${product.price.toLocaleString('fr-FR')} DH\n`;
      if (product.category === 'bagues') {
        msg += `- Taille de doigt : ${selectedRingSize}\n`;
      }
      msg += `- Quantité : ${quantity}\n\nPouvez-vous me confirmer la disponibilité et les modalités de livraison à mon adresse ?`;
    }
    return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#080808]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0F0F10] border border-[#D4AF70]/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2 rounded-full bg-[#080808]/70 border border-[#D4AF70]/20 text-[#E8DDC9] hover:text-[#D4AF70] transition-colors cursor-pointer"
          aria-label="Fermer la vue détaillée"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image Showcase */}
          <div className="relative h-80 sm:h-96 md:h-full min-h-[380px] bg-[#080808] overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={prodTrans.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.9]"
            />
            {prodTrans.badge && (
              <span className="absolute top-4 left-4 rtl:left-auto rtl:right-4 text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-[#080808]/80 text-[#D4AF70] border border-[#D4AF70]/40 backdrop-blur-sm">
                {prodTrans.badge}
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-transparent md:hidden" />
          </div>

          {/* Right: Product Details & Purchase Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF70] font-light mb-1">
                {t.products.kicker} &bull; {t.products.filters[product.category] || product.category}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-2">
                {prodTrans.name}
              </h2>
              <div className="text-xl sm:text-2xl font-serif-luxury text-[#F3E0B5] font-semibold tabular-nums mb-4">
                {product.price.toLocaleString('fr-FR')} {t.products.currency}
                <span className="text-xs text-[#E8DDC9]/50 font-sans font-light mx-2">
                  {t.products.freeShipping}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#E8DDC9]/80 font-light leading-relaxed mb-6">
                {prodTrans.description}
              </p>

              {/* Ring size selector if category is bagues */}
              {product.category === 'bagues' && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#E8DDC9]/80 uppercase tracking-wider text-[11px]">
                      {t.products.ringSizeLabel}
                    </span>
                    <span className="text-[#D4AF70] text-[11px] font-medium">
                      {selectedRingSize}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ringSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedRingSize(size)}
                        className={`w-9 h-9 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          selectedRingSize === size
                            ? 'bg-[#D4AF70] text-[#080808] font-bold shadow-md shadow-[#D4AF70]/30'
                            : 'bg-[#18181B] text-[#E8DDC9] border border-[#D4AF70]/20 hover:border-[#D4AF70]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              <div className="p-4 rounded-xl bg-[#141416] border border-[#D4AF70]/15 space-y-2 mb-6">
                <div className="text-[11px] uppercase tracking-wider text-[#D4AF70] font-medium flex items-center gap-1.5 mb-2">
                  <Gem className="w-3.5 h-3.5" />
                  <span>{t.products.specTitle}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#E8DDC9]/80">
                  <div>
                    <span className="text-[#E8DDC9]/40 block">{t.products.metal}</span>
                    <span className="font-light">{product.details.material}</span>
                  </div>
                  <div>
                    <span className="text-[#E8DDC9]/40 block">{t.products.weight}</span>
                    <span className="font-light">{product.details.weight}</span>
                  </div>
                  <div>
                    <span className="text-[#E8DDC9]/40 block">{t.products.stones}</span>
                    <span className="font-light">{product.details.stone}</span>
                  </div>
                  {product.details.carat && (
                    <div>
                      <span className="text-[#E8DDC9]/40 block">{t.products.carats}</span>
                      <span className="font-light">{product.details.carat}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2 border-t border-[#D4AF70]/20">
              <div className="flex items-center gap-3">
                {/* Quantity selector */}
                <div className="flex items-center rounded-full border border-[#D4AF70]/30 bg-[#141416] px-3 py-1.5 shrink-0">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-[#E8DDC9] hover:text-[#D4AF70] px-2 text-sm"
                  >
                    -
                  </button>
                  <span className="text-xs text-[#F8F5EF] font-medium px-2 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-[#E8DDC9] hover:text-[#D4AF70] px-2 text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 rounded-full border border-[#D4AF70] text-[#D4AF70] hover:bg-[#D4AF70]/10 transition-all font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{t.products.addedToCart}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.products.addToCart}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Order CTA (Key Conversion Goal) with uniform WhatsAppIcon */}
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FFF1D0] via-[#D4AF70] to-[#A47C3B] text-[#080808] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,112,0.4)] hover:scale-[1.01] active:scale-[0.99] shimmer-effect"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#080808]" />
                <span>{t.products.orderWhatsApp}</span>
              </a>

              {/* Guarantee badges */}
              <div className="flex items-center justify-between text-[10px] text-[#E8DDC9]/60 pt-2 font-light">
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#D4AF70]" /> {t.products.certifiedHallmark}
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#D4AF70]" /> {t.products.freeBox}
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-[#D4AF70]" /> {t.products.moroccoDelivery}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
