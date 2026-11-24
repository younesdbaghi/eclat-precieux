import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionsSection } from './components/CollectionsSection';
import { ProductsSection } from './components/ProductsSection';
import { LuxuryExperience } from './components/LuxuryExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { StoryModal } from './components/StoryModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('tous');
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const targetElement = document.getElementById('bijoux');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#080808] text-[#F8F5EF] relative selection:bg-[#D4AF70]/30 selection:text-[#F8F5EF]">
          {/* Subtle Luxury Cursor for Desktop */}
          <CustomCursor />

          {/* Top Navigation */}
          <Navbar onOpenStory={() => setIsStoryModalOpen(true)} />

          {/* Main Sections */}
          <main>
            {/* 1. Hero Section WOW */}
            <Hero />

            {/* 2. Collections Magazine Section */}
            <CollectionsSection onSelectCategory={handleSelectCategory} />

            {/* 3. Products E-Commerce Gallery */}
            <ProductsSection
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* 4. Luxury Editorial Experience */}
            <LuxuryExperience onOpenStory={() => setIsStoryModalOpen(true)} />

            {/* 5. Why Choose Us 4 Pillars */}
            <WhyChooseUs />

            {/* 6. Customer Demonstration Reviews Carousel */}
            <ReviewsCarousel />

            {/* 7. Instagram Showcase Gallery */}
            <InstagramSection />

            {/* 8. Contact & Concierge Section */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer
            onOpenStory={() => setIsStoryModalOpen(true)}
            onSelectCategory={handleSelectCategory}
          />

          {/* Global Cart Slide-Over Drawer */}
          <CartDrawer />

          {/* Maison Craftsmanship Story Modal */}
          <StoryModal
            isOpen={isStoryModalOpen}
            onClose={() => setIsStoryModalOpen(false)}
          />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
