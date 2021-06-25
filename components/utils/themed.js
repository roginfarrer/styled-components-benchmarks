import testTheme from "./theme-one";

// The themed function is used to wrap styled components in.
// We are using this to ensure we provide a theme for components as we migrate to styled-components.
// This function checks to see if a theme is provided to to our tests.
// If a theme is not provided we provide a default one to ensure we don't break tests that already exist.
export default function themed(interpolation) {
  return function (props) {
    const { theme, ...rest } = props;

    // Check we are in a testing environment
    if (process.env.NODE_ENV === "test") {
      // Check for an id that indicates whether or not we have a theme
      if (typeof theme?.meta?.themeId === "undefined") {
        // Provide a default that has all the theme keys.
        return interpolation({ theme: testTheme, ...rest });
      }
    }

    // Otherwise just provide the theme that we have from the component
    return interpolation({ theme, ...rest });
  };
}
