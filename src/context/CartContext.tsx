import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, DEMO_WHATSAPP_NUMBER } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  createWhatsAppOrderUrl: (
    customerDetails?: { name: string; city: string; phone: string; address?: string },
    lang?: 'fr' | 'ar'
  ) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('eclat_precieux_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('eclat_precieux_cart', JSON.stringify(items));
    } catch {
      // storage quota or private mode
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id && item.selectedSize === selectedSize);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, selectedSize }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const createWhatsAppOrderUrl = (
    customerDetails?: { name: string; city: string; phone: string; address?: string },
    lang: 'fr' | 'ar' = 'fr'
  ) => {
    if (lang === 'ar') {
      if (items.length === 0) {
        const generalMsg = encodeURIComponent("مرحباً دار إكلات بريسيو، أود الاستفسار حول مجموعات مجوهراتكم الفاخرة.");
        return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${generalMsg}`;
      }
      let text = `مرحباً دار إكلات بريسيو ✨،\n\nأود تأكيد طلب القطع التالية :\n\n`;
      items.forEach((item, index) => {
        text += `${index + 1}. *${item.product.name}* (الكمية: ${item.quantity}) — ${(item.product.price * item.quantity).toLocaleString('fr-FR')} د.م\n`;
        if (item.selectedSize) {
          text += `   المقاس : ${item.selectedSize}\n`;
        }
      });
      text += `\n*المجموع الإجمالي :* ${totalPrice.toLocaleString('fr-FR')} د.م`;
      text += `\n*التوصيل :* مجاني بالمغرب (علبة فاخرة وشهادة الأصالة متضمنة)\n`;
      if (customerDetails?.name) {
        text += `\n*بيانات الزبون :*`;
        text += `\n- الاسم : ${customerDetails.name}`;
        text += `\n- المدينة : ${customerDetails.city}`;
        text += `\n- الهاتف : ${customerDetails.phone}`;
        if (customerDetails.address) {
          text += `\n- العنوان : ${customerDetails.address}`;
        }
      }
      text += `\n\nيرجى تأكيد موعد التوصيل. شكراً لكم.`;
      return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    }

    if (items.length === 0) {
      const generalMsg = encodeURIComponent("Bonjour Éclat Précieux, je souhaite obtenir des informations sur vos collections de bijoux.");
      return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${generalMsg}`;
    }

    let text = `Bonjour Éclat Précieux ✨,\n\nJe souhaite passer une commande pour les créations suivantes :\n\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}* (x${item.quantity}) — ${(item.product.price * item.quantity).toLocaleString('fr-FR')} DH\n`;
      if (item.selectedSize) {
        text += `   Taille : ${item.selectedSize}\n`;
      }
    });

    text += `\n*Total de la commande :* ${totalPrice.toLocaleString('fr-FR')} DH`;
    text += `\n*Livraison :* Offerte au Maroc (Écrin de luxe & Certificat inclus)\n`;

    if (customerDetails?.name) {
      text += `\n*Coordonnées du client :*`;
      text += `\n- Nom : ${customerDetails.name}`;
      text += `\n- Ville : ${customerDetails.city}`;
      text += `\n- Téléphone : ${customerDetails.phone}`;
      if (customerDetails.address) {
        text += `\n- Adresse : ${customerDetails.address}`;
      }
    }

    text += `\n\nMerci de me confirmer la disponibilité et le délai de livraison.`;

    return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        createWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
