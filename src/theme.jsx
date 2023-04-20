import { createTheme } from '@mui/material/styles';
import { brown } from '@mui/material/colors';
import '@fontsource/lexend/100.css';
import '@fontsource/lexend/200.css';
import '@fontsource/lexend/300.css';
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
import '@fontsource/lexend/600.css';
import '@fontsource/lexend/700.css';
import '@fontsource/lexend/800.css';
import '@fontsource/lexend/900.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E21BC2',
    },
    secondary: {
      main: brown[100],
    },
    textColor: {
      grey_500: '#ACAFB5',
      dark_500: '#101317',
    },
  },
  typography: {
    fontFamily: 'Lexend',
    h1: {
      fontSize: '80px',
      lineHeight: '100px',
    },
    h2: {
      fontSize: '60px',
      lineHeight: '75px',
    },
    h3: {
      fontSize: '40px',
      lineHeight: '50px',
    },
    h4: {
      fontSize: '28px',
      lineHeight: '38px',
    },
    h5: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    h6: {
      fontSize: '20px',
      lineHeight: '25px',
    },
    h7: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '22px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '15px',
    },
    label: {
      fontSize: '11px',
      lineHeight: '14px',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
