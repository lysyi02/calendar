export interface Theme {
  colors: {
    primary: { light: string; main: string; dark: string };
    background: string;

    text: {
      muted: string;
      regular: string;
    };
  };

  sizes: {
    button: {
      height: string;
    };
    borderRadius: string;
  };
}

export const baseTheme: Theme = {
  colors: {
    primary: { light: "#ebebeb", main: "#e3e4e6", dark: "#c5cacd" },
    background: "#eeeff1",
    text: {
      muted: "#969696",
      regular: "#323232",
    },
  },

  // in px
  sizes: {
    button: {
      height: "40px",
    },
    borderRadius: "4px",
  },
};
