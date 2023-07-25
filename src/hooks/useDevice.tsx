import { useState, useEffect } from 'react';

import { breakpointMap } from '../styles/base';

export const useWindowWidth = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return widthSize;
};

export const useIsMobile = () => {
  return useWindowWidth() < breakpointMap.md;
};

export const useIsTablet = () => {
  const width = useWindowWidth();
  return width >= breakpointMap.md && width < breakpointMap.lg;
};

export const useIsDesktop = () => {
  const width = useWindowWidth();
  return width >= breakpointMap.lg;
};
