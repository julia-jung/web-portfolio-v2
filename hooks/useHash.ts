'use client';
import { useEffect, useState } from 'react';

export function useHash() {
  const [hash, setHash] = useState('');

  const getHash = () =>
    typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : '';

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('animate-fade-in');
        if (entry.isIntersecting) {
          setHash(entry.target.id);
        }
      });
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return hash;
}
