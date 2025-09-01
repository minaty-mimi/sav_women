import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page we've scrolled
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = scrollPx / winHeightPx;

      setScrollProgress(scrollProgress);
      setScrolled(scrollPx > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return { scrolled, scrollProgress };
}
