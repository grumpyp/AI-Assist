import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Winnings() {
  return (
    <>
      <Title>Earnings per Employee</Title>
      <Typography component="p" variant="h4" color="error">
        - $124.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 11 December, 2022
      </Typography>
      <div />
    </>
  );
}
