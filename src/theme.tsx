import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    font_1_xxl: React.CSSProperties;
    font_1_xl: React.CSSProperties;
    font_1_l: React.CSSProperties;
    font_1_m: React.CSSProperties;
    font_1_s: React.CSSProperties;
    font_1_xs: React.CSSProperties;
    font_2_xl: React.CSSProperties;
    font_2_xl_b: React.CSSProperties;
    font_2_l: React.CSSProperties;
    font_2_l_b: React.CSSProperties;
    font_2_m: React.CSSProperties;
    font_2_m_b: React.CSSProperties;
    font_3_l: React.CSSProperties;
    font_3_m: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    font_1_xxl: React.CSSProperties;
    font_1_xl: React.CSSProperties;
    font_1_l: React.CSSProperties;
    font_1_m: React.CSSProperties;
    font_1_s: React.CSSProperties;
    font_1_xs: React.CSSProperties;
    font_2_xl: React.CSSProperties;
    font_2_xl_b: React.CSSProperties;
    font_2_l: React.CSSProperties;
    font_2_l_b: React.CSSProperties;
    font_2_m: React.CSSProperties;
    font_2_m_b: React.CSSProperties;
    font_3_l: React.CSSProperties;
    font_3_m: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    font_1_xxl: true;
    font_1_xl: true;
    font_1_l: true;
    font_1_m: true;
    font_1_s: true;
    font_2_xl: true;
    font_2_xl_b: true;
    font_2_l: true;
    font_2_l_b: true;
    font_2_m: true;
    font_2_m_b: true;
    font_3_l: true;
    font_3_m: true;
  }
}

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1180px',
          padding: '0 10px',
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
  },

  palette: {
    primary: {
      dark: '#223344',
      main: '#31425C',
      light: '#4C628E',
    },
    secondary: {
      main: '#F3E89E',
      dark: '#B39972',
      light: 'rgb(243,232,158,.7)',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    grey: {
      200: '#E6E6E6',
      300: '#D9D9D9',
      400: '#BFBFBF',
    },
    error: {
      main: '#D73E35',
    },
    success: {
      main: '#43a047',
    },
    background: {
      default: '#ffffff',
    },
  },

  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: ['Marcellus', 'Marcellus SC', 'Shippori Mincho'].join(','),
    font_1_xxl: {
      fontFamily: 'Marcellus',
      fontSize: 60,
    },
    font_1_xl: {
      fontFamily: 'Marcellus',
      fontSize: 48,
    },
    font_1_l: {
      fontFamily: 'Marcellus',
      fontSize: 40,
    },
    font_1_m: {
      fontFamily: 'Marcellus',
      fontSize: 32,
    },
    font_1_s: {
      fontFamily: 'Marcellus',
      fontSize: 24,
    },
    font_1_xs: {
      fontFamily: 'Marcellus',
      fontSize: 18,
    },
    font_2_xl: {
      fontFamily: 'Shippori Mincho',
      fontSize: 40,
    },
    font_2_xl_b: {
      fontFamily: 'Shippori Mincho',
      fontSize: 40,
      fontWeight: 700,
    },
    font_2_l: {
      fontFamily: 'Shippori Mincho',
      fontSize: 24,
    },
    font_2_l_b: {
      fontFamily: 'Shippori Mincho',
      fontSize: 24,
      fontWeight: 700,
    },
    font_2_m: {
      fontFamily: 'Shippori Mincho',
      fontSize: 18,
    },
    font_2_m_b: {
      fontFamily: 'Shippori Mincho',
      fontSize: 18,
      fontWeight: 700,
    },
    font_3_l: {
      fontFamily: 'Marcellus SC',
      fontSize: 48,
    },
    font_3_m: {
      fontFamily: 'Marcellus SC',
      fontSize: 24,
    },
  },
});

export default theme;
