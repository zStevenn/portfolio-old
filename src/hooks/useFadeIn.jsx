import { useRef, useEffect } from 'react';

export default function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const fadeRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', `translate-x-0`);
            entry.target.classList.remove('opacity-0', `-translate-x-32`);
          }
        });
      },
      { threshold: [0.5] }
    );
    observer.observe(fadeRef);

    return () => observer.unobserve(fadeRef);
  }, [ref]);

  return ref;
}