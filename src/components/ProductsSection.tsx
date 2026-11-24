import React, { useState } from 'react';
import { Eye, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { Product, PRODUCTS, DEMO_WHATSAPP_NUMBER } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { QuickViewModal } from './QuickViewModal';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductsSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'tous', label: t.products.filters.all },
    { id: 'bagues', label: t.products.filters.bagues },
    { id: 'colliers', label: t.products.filters.colliers },
    { id: 'bracelets', label: t.products.filters.bracelets },
    { id: 'boucles', label: t.products.filters.boucles },
  ];

  const filteredProducts =
    activeCategory === 'tous'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  const createDirectWhatsAppUrl = (product: Product) => {
    const prodTrans = t.products.names[product.id] || { name: product.name };
    let text = '';
    if (language === 'ar') {
      text = `مرحباً دار إكلات بريسيو ✨،\n\nأود طلب هذه القطعة الفاخرة :\n*${prodTrans.name}* (الرمز: ${product.id})\nالسعر : ${product.price.toLocaleString('fr-FR')} ${t.products.currency}\n\nهل هي متوفرة لتأكيد التوصيل؟ شكراً لكم.`;
    } else {
      text = `Bonjour Éclat Précieux ✨,\n\nJe suis intéressé(e) par votre création :\n*${product.name}* (Réf: ${product.id})\nPrix : ${product.price.toLocaleString('fr-FR')} DH\n\nEst-elle disponible pour une livraison ? Merci d'avance.`;
    }
    return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="bijoux" className="py-24 sm:py-32 bg-[#080808] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF70]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.products.kicker}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#F8F5EF] tracking-tight mb-4 text-balance">
            {t.products.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E8DDC9]/70 font-light max-w-xl mx-auto leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF70] to-[#A47C3B] text-[#080808] shadow-[0_0_20px_rgba(212,175,112,0.3)] font-semibold scale-105'
                    : 'bg-[#141416] text-[#E8DDC9]/70 border border-[#D4AF70]/20 hover:border-[#D4AF70]/60 hover:text-[#F8F5EF]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = addedProductId === product.id;
            const prodTrans = t.products.names[product.id] || {
              name: product.name,
              description: product.description,
              badge: product.badge,
            };

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative flex flex-col justify-between bg-[#0F0F10] rounded-2xl border border-[#D4AF70]/15 overflow-hidden luxury-card-hover cursor-pointer"
              >
                {/* Product Image & Badges */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#080808]">
                  <img
                    src={product.image}
                    alt={prodTrans.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.88] group-hover:brightness-100"
                  />

                  {/* Top Badge */}
                  {prodTrans.badge && (
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-10">
                      <span className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full bg-[#080808]/85 text-[#D4AF70] border border-[#D4AF70]/30 backdrop-blur-sm">
                        {prodTrans.badge}
                      </span>
                    </div>
                  )}

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-transparent opacity-60" />

                  {/* Hover Action Strip */}
                  <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#080808]/85 backdrop-blur-md border border-[#D4AF70]/40 text-[#F8F5EF] hover:text-[#D4AF70] text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.products.preview}</span>
                    </button>

                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="p-2 rounded-xl bg-[#D4AF70] text-[#080808] hover:bg-[#F3E0B5] transition-colors cursor-pointer shadow-lg shadow-[#D4AF70]/20"
                      title={t.products.addToCart}
                    >
                      {isJustAdded ? (
                        <Check className="w-4 h-4 text-[#080808]" />
                      ) : (
                        <ShoppingBag className="w-4 h-4 text-[#080808]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF70]/80 font-light mb-1">
                      {t.products.filters[product.category] || product.category}
                    </div>
                    <h3 className="text-lg font-serif-luxury font-medium text-[#F8F5EF] group-hover:text-[#F3E0B5] transition-colors line-clamp-1 mb-1">
                      {prodTrans.name}
                    </h3>
                    <p className="text-xs text-[#E8DDC9]/60 font-light line-clamp-2 mb-3">
                      {prodTrans.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D4AF70]/10 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-[#E8DDC9]/50 font-light">{t.products.priceLabel}</span>
                      <span className="text-lg font-serif-luxury font-semibold text-[#F3E0B5] tabular-nums">
                        {product.price.toLocaleString('fr-FR')} {t.products.currency}
                      </span>
                    </div>

                    {/* WhatsApp Direct Order Button with identical WhatsAppIcon */}
                    <a
                      href={createDirectWhatsAppUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#141416] hover:bg-[#D4AF70] text-[#D4AF70] hover:text-[#080808] border border-[#D4AF70]/30 hover:border-[#D4AF70] text-[11px] font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover/btn:text-[#080808] transition-colors" />
                      <span>{t.products.orderWhatsApp}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
