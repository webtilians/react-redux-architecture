const theme = {
  font: {
    primaryBold: "Geogrotesque-Bold",
    primaryLight: "Geogrotesque-Light",
    primaryRegular: "Geogrotesque-Regular",
    primaryMedium: "Geogrotesque-Medium",
    primarySemibold: "Geogrotesque-SemiBold"
  },

  seamless: {
    light: "/assets/images/common/",
    dark: "/assets/images/common/"
  },

  pattern: {
    light: "/assets/images/common/pattern_light.png",
    dark: "/assets/images/common/pattern_dark.png"
  },

  color: {},

  breakpoint: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
    xxl: "1600px",
    xxxl: "1920px"
  },

  timingFn: {
    enter: "cubic-bezier(0, 0, 0.2, 1)",
    leave: "cubic-bezier(0.4, 0, 1, 1)",
    move: "cubic-bezier(0.4, 0, 0, 1)"
  },

  height: {
    header: {
      desktop: 83,
      mobile: 52
    },

    footer: {
      desktop: 123,
      mobile: 183.19
    }
  },
  wrapper: {
    margin: {
      xl: "2rem"
    }
  }
};

export default theme;
