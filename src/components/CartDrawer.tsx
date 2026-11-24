import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CartDrawer: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    createWhatsAppOrderUrl,
  } = useCart();
  const { t, language } = useLanguage();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    city: 'Casablanca',
    address: '',
  });
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleProceedToForm = () => {
    setCheckoutStep('form');
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `EP-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setCheckoutStep('success');
  };

  const resetAndClose = () => {
    if (checkoutStep === 'success') {
      clearCart();
    }
    setCheckoutStep('cart');
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#080808]/85 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-6 rtl:pl-0 rtl:pr-6 sm:pl-10 rtl:sm:pr-10">
        <div className="w-screen max-w-md bg-[#0F0F10] border-l rtl:border-l-0 rtl:border-r border-[#D4AF70]/25 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#D4AF70]/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D4AF70]" />
              <h2 className="text-xl font-serif-luxury font-medium text-[#F8F5EF]">
                {t.cart.title}
              </h2>
              {totalItems > 0 && (
                <span className="text-xs bg-[#D4AF70]/20 text-[#D4AF70] px-2 py-0.5 rounded-full font-medium">
                  {totalItems}
                </span>
              )}
            </div>

            <button
              onClick={resetAndClose}
              className="p-1.5 rounded-full text-[#E8DDC9]/70 hover:text-[#D4AF70] transition-colors cursor-pointer"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === 'cart' && (
              <>
                {/* Free Delivery Banner */}
                <div className="p-3.5 rounded-xl bg-[#141416] border border-[#D4AF70]/20 flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#D4AF70] shrink-0" />
                  <div className="text-xs text-[#E8DDC9]/80 font-light">
                    {t.cart.freeShippingBanner}
                  </div>
                </div>

                {items.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#141416] border border-[#D4AF70]/20 flex items-center justify-center text-[#D4AF70]/50 mx-auto">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-serif-luxury text-[#F8F5EF]">
                      {t.cart.emptyTitle}
                    </h3>
                    <p className="text-xs text-[#E8DDC9]/60 max-w-xs mx-auto">
                      {t.cart.emptyDesc}
                    </p>
                    <a
                      href="#bijoux"
                      onClick={closeCart}
                      className="inline-block mt-4 px-6 py-2.5 rounded-full bg-[#D4AF70] text-[#080808] text-xs font-semibold uppercase tracking-wider hover:brightness-110"
                    >
                      {t.cart.discoverBtn}
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => {
                      const prodTrans = t.products.names[item.product.id] || { name: item.product.name };
                      return (
                        <div
                          key={`${item.product.id}-${item.selectedSize || 'default'}`}
                          className="flex gap-4 p-3 rounded-2xl bg-[#141416] border border-[#D4AF70]/10 items-center"
                        >
                          <img
                            src={item.product.image}
                            alt={prodTrans.name}
                            className="w-16 h-16 rounded-xl object-cover object-center bg-[#080808] border border-[#D4AF70]/20 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-serif-luxury font-medium text-[#F8F5EF] truncate">
                              {prodTrans.name}
                            </h4>
                            {item.selectedSize && (
                              <span className="text-[10px] text-[#D4AF70] block">
                                {t.cart.sizeLabel} {item.selectedSize}
                              </span>
                            )}
                            <div className="text-xs font-serif-luxury text-[#F3E0B5] font-semibold tabular-nums mt-0.5">
                              {(item.product.price * item.quantity).toLocaleString('fr-FR')} {t.products.currency}
                            </div>

                            {/* Stepper */}
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center border border-[#D4AF70]/20 rounded-md bg-[#0F0F10] px-2 py-0.5">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="text-xs text-[#E8DDC9] hover:text-[#D4AF70] px-1"
                                >
                                  -
                                </button>
                                <span className="text-xs px-2 tabular-nums">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="text-xs text-[#E8DDC9] hover:text-[#D4AF70] px-1"
                                >
                                  +
                                </button>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-[11px] text-red-400/70 hover:text-red-400 p-1 cursor-pointer flex items-center gap-1"
                                title="Retirer l'article"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">{t.cart.remove}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'form' && (
              <form id="express-checkout-form" onSubmit={handleConfirmOrder} className="space-y-4">
                <div className="text-xs text-[#D4AF70] uppercase tracking-wider font-medium">
                  {t.cart.shippingFormTitle}
                </div>

                <div>
                  <label className="block text-xs text-[#E8DDC9]/75 mb-1 font-light">
                    {t.cart.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ar' ? 'الاسم والنسب...' : 'Mme / M. Fatima ...'}
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#D4AF70]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#E8DDC9]/75 mb-1 font-light">
                    {t.cart.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06... / +212 6..."
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#D4AF70]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#E8DDC9]/75 mb-1 font-light">
                    {t.cart.cityLabel}
                  </label>
                  <select
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#D4AF70]"
                  >
                    <option value="Casablanca">{language === 'ar' ? 'الدار البيضاء' : 'Casablanca'}</option>
                    <option value="Rabat">{language === 'ar' ? 'الرباط' : 'Rabat'}</option>
                    <option value="Marrakech">{language === 'ar' ? 'مراكش' : 'Marrakech'}</option>
                    <option value="Tanger">{language === 'ar' ? 'طنجة' : 'Tanger'}</option>
                    <option value="Fès">{language === 'ar' ? 'فاس' : 'Fès'}</option>
                    <option value="Agadir">{language === 'ar' ? 'أكادير' : 'Agadir'}</option>
                    <option value="Autre ville">{language === 'ar' ? 'مدينة أخرى بالمغرب' : 'Autre ville du Maroc'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#E8DDC9]/75 mb-1 font-light">
                    {t.cart.addressLabel}
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder={t.cart.addressPlaceholder}
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141416] border border-[#D4AF70]/20 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#D4AF70] resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-[#141416] border border-[#D4AF70]/15 text-[11px] text-[#E8DDC9]/70 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#D4AF70] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.cart.paymentNote}</span>
                  </div>
                  <div>{t.cart.paymentSubNote}</div>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#D4AF70]/15 border border-[#D4AF70] flex items-center justify-center text-[#D4AF70] mx-auto shadow-xl shadow-[#D4AF70]/20">
                  <CheckCircle className="w-8 h-8 text-[#D4AF70]" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF70] font-semibold">
                    {t.cart.orderSuccessTitle}
                  </span>
                  <h3 className="text-2xl font-serif-luxury text-[#F8F5EF] mt-1">
                    {language === 'ar' ? 'تم تسجيل طلبكم بنجاح' : 'Commande validée'}
                  </h3>
                  <div className="mt-2 text-sm text-[#F3E0B5] font-serif-luxury font-bold">
                    {t.cart.orderRef} #{orderNumber}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141416] border border-[#D4AF70]/20 text-left rtl:text-right text-xs text-[#E8DDC9]/80 space-y-2">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>{t.cart.recipient}</span>
                    <strong className="text-[#F8F5EF]">{customerInfo.name}</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>{t.cart.city}</span>
                    <span className="text-[#F8F5EF]">{customerInfo.city}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>{t.cart.totalAmount}</span>
                    <strong className="text-[#D4AF70]">{totalPrice.toLocaleString('fr-FR')} {t.products.currency}</strong>
                  </div>
                  <div className="text-[11px] text-[#E8DDC9]/60 pt-1">
                    {t.cart.orderSuccessDesc}
                  </div>
                </div>

                <a
                  href={createWhatsAppOrderUrl(customerInfo, language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#080808] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#080808]" />
                  <span>{t.cart.sendWhatsAppBtn}</span>
                </a>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && checkoutStep !== 'success' && (
            <div className="p-6 border-t border-[#D4AF70]/20 bg-[#141416]/90 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#E8DDC9]/70">
                  {t.cart.subtotal}
                </span>
                <span className="text-xl font-serif-luxury font-semibold text-[#F3E0B5] tabular-nums">
                  {totalPrice.toLocaleString('fr-FR')} {t.products.currency}
                </span>
              </div>

              {checkoutStep === 'cart' ? (
                <div className="space-y-2">
                  {/* WhatsApp Direct Order Button with uniform WhatsAppIcon */}
                  <a
                    href={createWhatsAppOrderUrl(undefined, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#FFF1D0] via-[#D4AF70] to-[#A47C3B] text-[#080808] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,112,0.4)] shimmer-effect"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#080808]" />
                    <span>{t.cart.orderWhatsAppBtn}</span>
                  </a>

                  {/* Standard Form checkout */}
                  <button
                    onClick={handleProceedToForm}
                    className="w-full py-2.5 px-4 rounded-full border border-[#D4AF70]/50 text-[#F8F5EF] hover:text-[#D4AF70] hover:border-[#D4AF70] text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{t.cart.proceedAddressBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="py-3 px-4 rounded-full border border-[#D4AF70]/30 text-[#E8DDC9] text-xs uppercase tracking-wider hover:bg-white/5 cursor-pointer"
                  >
                    {t.cart.backBtn}
                  </button>
                  <button
                    type="submit"
                    form="express-checkout-form"
                    className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#D4AF70] to-[#A47C3B] text-[#080808] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer"
                  >
                    <span>{t.cart.confirmBtn}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
