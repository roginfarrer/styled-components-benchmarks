import { useMemo } from "react";
import { useTheme } from "styled-components";
import testTheme from "./theme-one";

function useSafeTheme() {
  const theme = useTheme();
  if (process.env.NODE_ENV === "test") {
    if (typeof theme?.meta?.themeId === "undefined") {
      return testTheme;
    }
  }
  return theme;
}

export default function useLocalVariables(styles) {
  if (typeof styles.defaults !== "function") {
    throw new Error(
      "Please provide a `defaults` function within the styles object for themes not specified."
    );
  }
  const theme = useSafeTheme();

  const styleOutput = useMemo(() => {
    let variables = styles.defaults(theme);

    if (styles[theme.meta.themeId]) {
      variables = { ...variables, ...styles[theme.meta.themeId](theme) };
    }

    return variables;
    // Styles is a module level defined value and shouldn't change during the render cycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return styleOutput;
}
