import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { ThemeProvider as EmThemeProvider } from '@emotion/react';
import theme from '../components/utils/theme-one';

function MyApp({ Component, pageProps }) {
  return (
    <ScThemeProvider theme={theme}>
      <EmThemeProvider theme={theme}>
        <Component {...pageProps} />
      </EmThemeProvider>
    </ScThemeProvider>
  );
}

export default MyApp;
