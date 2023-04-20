import { Typography, Box } from '@mui/material';
import React from 'react';
import bg from '../assets/bg.svg';

export default function Header() {
  return (
    <Box
      direction="row"
      sx={ {
        background: 'linear-gradient(to right bottom, #FF70C6, #FFB9E3)',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        height: '190px',
        boxShadow: 0,
        pt: 2,
      } }
    >
      <Typography
        align="center"
        sx={ { width: '100%', mt: 2 } }
        variant="h5"
        fontWeight={ 400 }
        color="white"
      >
        Poliane Andrade G. M.
      </Typography>
    </Box>
  );
}
