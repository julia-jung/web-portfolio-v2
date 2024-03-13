'use client';
import { useEffect, useState } from 'react';

const getHash = () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : '');

export function useHash() {
  const [hash, setHash] = useState('');
  
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.location.hash = entry.target.id;
          }
        });
      }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return hash;
};
