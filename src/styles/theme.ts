import { DefaultTheme } from 'styled-components';
import base from './base';

const antTheme: DefaultTheme = {
  ...base,
  colors: {
    primary: '#000000',
    secondary: 'magenta',
    textPrimary: '#FFFFFF',
    borderPrimary: '#0f370a',
  },
};

export default antTheme;
