const theme = {
  themeNames: {
    admin: "admin",
    extranet: "extranet",
    wayfair: "wayfair",
    perigold: "perigold",
    birchlane: "birchlane",
    jossandmain: "jossandmain",
    allmodern: "allmodern",
    partnerhome: "partnerhome",
    waypro: "waypro",
  },
  meta: {
    name: "Joss and Main",
    themeId: "jossandmain",
  },
  colors: {
    core10: "#f5f5f5",
    core20: "#dfdfe1",
    core30: "#bbbbbf",
    core40: "#9d9a9f",
    core50: "#434245",
    core60: "#353336",
    core70: "#272629",
    core80: "#211e22",
    sale10: "#faeaef",
    sale20: "#e1c9d1",
    sale30: "#c8a4af",
    sale40: "#b58292",
    sale50: "#720e2e",
    sale60: "#610321",
    sale70: "#470017",
    sale80: "#330010",
    black10: "#f5f5f5",
    black20: "#dfdfe1",
    black30: "#bbbbbf",
    black40: "#9d9a9f",
    black50: "#646266",
    black60: "#4d4a4f",
    black70: "#363438",
    black80: "#211e22",
    yellow10: "#fff3dd",
    yellow20: "#ffe2a1",
    yellow30: "#fbce74",
    yellow40: "#f6b71d",
    yellow50: "#855b06",
    yellow60: "#664707",
    yellow70: "#523707",
    yellow80: "#352e17",
    red10: "#fcf2f1",
    red20: "#facece",
    red30: "#f89fa3",
    red40: "#f2535d",
    red50: "#c90000",
    red60: "#9b1000",
    red70: "#6f2119",
    red80: "#5b1414",
    green10: "#edf7ec",
    green20: "#bee2bc",
    green30: "#85C690",
    green40: "#4B9C4E",
    green50: "#247139",
    green60: "#245728",
    green70: "#234414",
    green80: "#1c3419",
    neutral10: "#f5f5f5",
    neutral20: "#dfdfe1",
    neutral30: "#bbbbbf",
    neutral40: "#9d9a9f",
    neutral50: "#434245",
    neutral60: "#353336",
    neutral70: "#272629",
    neutral80: "#211e22",
    b2bCore10: "#e8f7f6",
    b2bCore20: "#ceebea",
    b2bCore30: "#9bcfcd",
    b2bCore40: "#69b0b0",
    b2bCore50: "#358f91",
    b2bCore60: "#006e72",
    b2bCore70: "#005456",
    b2bCore80: "#053e48",
    b2bSale10: "#fcf3f6",
    b2bSale20: "#f2d0d9",
    b2bSale30: "#eba4b1",
    b2bSale40: "#dc647e",
    b2bSale50: "#c4113f",
    b2bSale60: "#990e35",
    b2bSale70: "#790b33",
    b2bSale80: "#5f0927",
    b2bBlack10: "#f5f5f5",
    b2bBlack20: "#dfdfe1",
    b2bBlack30: "#bbbbbf",
    b2bBlack40: "#9d9a9f",
    b2bBlack50: "#646266",
    b2bBlack60: "#4d4a4f",
    b2bBlack70: "#363438",
    b2bBlack80: "#211e22",
    facebook: "#3b5998",
    instagram: "#3e6487",
    pinterest: "#bd081c",
    twitter: "#55acee",
    linkedin: "#0073b0",
    googlePlus: "#dd4b39",
    white: "#fff",
    focus: "#1364f1",
    tertiary: "#f6b71d",
    shipping: "#211e22",
    veil: "rgba(33,30,34, 0.5)",
  },
  borders: {
    focus: "1px solid #1364f1",
  },
  zIndices: {
    0: "0",
    1000: "1",
    1100: "10",
    2000: "100",
    3000: "1000",
    3100: "1050",
    4000: "2000",
  },
  breakpoints: {
    320: "320px",
    480: "480px",
    640: "640px",
    800: "800px",
    960: "960px",
    1120: "1120px",
    1280: "1280px",
    1440: "1440px",
    1600: "1600px",
    1780: "1780px",
  },
  mediaQueries: {
    320: "@media screen and (min-width: 320px)",
    480: "@media screen and (min-width: 480px)",
    640: "@media screen and (min-width: 640px)",
    800: "@media screen and (min-width: 800px)",
    960: "@media screen and (min-width: 960px)",
    1120: "@media screen and (min-width: 1120px)",
    1280: "@media screen and (min-width: 1280px)",
    1440: "@media screen and (min-width: 1440px)",
    1600: "@media screen and (min-width: 1600px)",
    1780: "@media screen and (min-width: 1780px)",
  },
  lineHeights: {
    base: "1.5",
  },
  fonts: {
    base: "'nunito', 'nunitoFallback', arial, sans-serif",
    primary: "'zahrah', 'zahrahFallback', Georgia, serif",
  },
  fontSizes: {
    500: "13px",
    1000: "16px",
    2000: "1.25rem",
    3000: "1.5625rem",
    4000: "1.9375rem",
    5000: "2.4375rem",
    6000: "3.0625rem",
    7000: "3.815rem",
    base: "16px",
    baseMobile: "14px",
  },
  space: {
    250: "2px",
    500: "4px",
    1000: "8px",
    1500: "12px",
    2000: "16px",
    2500: "20px",
    3000: "24px",
    3500: "28px",
    4000: "32px",
    4500: "36px",
    5000: "40px",
  },
  sizes: {
    1000: "960px",
    2000: "1024px",
    3000: "1280px",
    4000: "1440px",
    5000: "1600px",
    inputHeight: "56px",
    buttonHeight: "48px",
  },
  radii: {
    base: null,
    button: null,
    small: null,
    medium: null,
    large: null,
  },
  transitionTimingFunctions: {
    standard: "cubic-bezier(0.65, 0.05, 0.36, 1)",
    acceleration: "cubic-bezier(0.55, 0.06, 0.68, 0.19)",
    deceleration: "cubic-bezier(0.22, 0.61, 0.36, 1)",
  },
  transitionDurations: {
    1: "1ms",
    50: "50ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    250: "250ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
  },
  focusStyles: {
    border: "1px solid #1364f1",
    boxShadow: "0 0 4px #1364f1",
    layeredBoxShadow: "0 0 0 1px #1364f1, 0 0 4px #1364f1",
  },
  shadows: {
    bottom10: "0 1px 2px rgba(34, 25, 36, .2)",
    bottom20: "0 3px 6px rgba(34, 25, 36, .2)",
    bottom30: "0 5px 10px rgba(34, 25, 36, .2)",
    bottom40: "0 7px 14px rgba(34, 25, 36, .2)",
    top10: "0 -1px 2px rgba(34, 25, 36, .2)",
    top20: "0 -3px 6px rgba(34, 25, 36, .2)",
    top30: "0 -5px 10px rgba(34, 25, 36, .2)",
    top40: "0 -7px 14px rgba(34, 25, 36, .2)",
    left10: "-1px 0 2px rgba(34, 25, 36, .2)",
    left20: "-3px 0 6px rgba(34, 25, 36, .2)",
    left30: "-5px 0 10px rgba(34, 25, 36, .2)",
    left40: "-7px 0 14px rgba(34, 25, 36, .2)",
    right10: "1px 0 2px rgba(34, 25, 36, .2)",
    right20: "3px 0 6px rgba(34, 25, 36, .2)",
    right30: "5px 0 10px rgba(34, 25, 36, .2)",
    right40: "7px 0 14px rgba(34, 25, 36, .2)",
    focus: "0 0 4px #1364f1",
    layeredFocus: "0 0 0 1px #1364f1, 0 0 4px #1364f1",
  },
};

export default theme;