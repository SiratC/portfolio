import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    // On the very first mount…
    if (isFirst.current) {
      isFirst.current = false;
      if (hash) {
        // If URL has a hash, scroll to it
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          // slight delay to ensure the element exists
          setTimeout(() => el.scrollIntoView(), 0);
        }
      }
      // else do nothing (let browser restore position)
      return;
    }

    // After first mount…
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
