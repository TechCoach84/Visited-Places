import { MediaQueries, Breakpoints } from './types';

export const breakpointMap: { [key: string]: number } = {
  sm: 414,
  md: 768,
  lg: 1024,
  xl: 1600,
  xxl: 3000,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`,
);

const mediaQueries: MediaQueries = {
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
};

export default {
  breakpoints,
  mediaQueries,
};
