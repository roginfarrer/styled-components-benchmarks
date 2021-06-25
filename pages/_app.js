import { ThemeProvider } from "styled-components";
import theme from "../components/utils/theme-one";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
