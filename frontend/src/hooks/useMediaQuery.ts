import { useState, useEffect } from 'react';

type Condition = 'max' | 'min';
type Measurement = 'height' | 'width';

const useMediaQuery = (condition: Condition, measurement: Measurement, pixels: number) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      const mediaMatch = window.matchMedia(`(${condition}-${measurement}: ${pixels}px)`);
      return mediaMatch.matches;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const mediaMatch = window.matchMedia(`(${condition}-${measurement}: ${pixels}px)`);
        setMatches(mediaMatch.matches);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [condition, measurement, pixels]);

  return matches;
};

export default useMediaQuery;
