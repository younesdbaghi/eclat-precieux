import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion preference
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"]')
        );
        setIsPointer(isClickable);
      }
    };

    const leaveHandler = () => setIsVisible(false);
    const enterHandler = () => setIsVisible(true);

    window.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseleave', leaveHandler);
    document.addEventListener('mouseenter', enterHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseleave', leaveHandler);
      document.removeEventListener('mouseenter', enterHandler);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer aura */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer ? 'rgba(212, 175, 112, 0.8)' : 'rgba(212, 175, 112, 0.35)',
          backgroundColor: isPointer ? 'rgba(212, 175, 112, 0.08)' : 'transparent'
        }}
        transition={{ duration: 0.15 }}
        className="w-8 h-8 rounded-full border border-[#D4AF70]/40 transition-colors pointer-events-none backdrop-blur-[1px]"
      />
      {/* Inner pinpoint */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPointer ? 0.6 : 1
        }}
        className="w-1.5 h-1.5 rounded-full bg-[#D4AF70] pointer-events-none"
      />
    </div>
  );
};
