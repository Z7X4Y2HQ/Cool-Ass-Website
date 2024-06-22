import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  useEffect(() => {
    const callback = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
