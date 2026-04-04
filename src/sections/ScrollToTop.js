import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {

    if (isFirst.current) {
      isFirst.current = false;
      if (hash) {
    
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
        
          setTimeout(() => el.scrollIntoView(), 0);
        }
      }
    
      return;
    }

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
