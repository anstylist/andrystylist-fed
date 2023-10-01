'use client'
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: "'Raleway', 'Open Sans', Arial",
  },
  palette: {
    primary: {
      main: '#48142C',
    },
    secondary: {
      main: '#F27566',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          borderRadius: '0',
        },
      },
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme;