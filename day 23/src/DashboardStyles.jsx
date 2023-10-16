import {createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00000',
      },
      secondary: {
        main: '#FF5722',
      },
    },
    typography: {
        button: {
            fontFamily: 'Monstrat',
            },
        fontFamily: 'Roboto, sans-serif',
    },
  });
  
  export default theme;