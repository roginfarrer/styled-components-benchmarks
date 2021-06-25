export default function getLocalVariables(theme, styles) {
  if (typeof styles.defaults !== "function") {
    throw new Error(
      "Please provide a `defaults` function within the styles object for themes not specified."
    );
  }

  let styleOutput = styles.defaults(theme);

  if (styles[theme.meta.themeId]) {
    styleOutput = { ...styleOutput, ...styles[theme.meta.themeId](theme) };
  }

  return styleOutput;
}
