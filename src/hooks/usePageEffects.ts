import { useEffect } from 'react';

export const usePageEffects = () => {
  useEffect(() => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
    }

    const smoothScrollHandler = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', smoothScrollHandler as EventListener);
    });

    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
          nav.classList.remove('bg-white/10');
        } else {
          nav.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
          nav.classList.add('bg-white/10');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const htmlSection = section as HTMLElement;
      htmlSection.style.opacity = '0';
      htmlSection.style.transform = 'translateY(20px)';
      htmlSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(htmlSection);
    });

    const heroSection = document.querySelector('section') as HTMLElement;
    if (heroSection) {
      heroSection.style.opacity = '1';
      heroSection.style.transform = 'translateY(0)';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', smoothScrollHandler as EventListener);
      });
      observer.disconnect();
    };
  }, []);
};
