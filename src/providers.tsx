import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './redux';

import theme from './styles/theme';

const Provider: FC = ({ children }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ReduxProvider>
);

export default Provider;
