import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const PREFIX = 'LandingPage';

const classes = {
  root: `${PREFIX}-root`,
  logo: `${PREFIX}-logo`,
  loginButton: `${PREFIX}-loginButton`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [`& .${classes.logo}`]: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },

  [`& .${classes.loginButton}`]: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export function LandingPage() {
  return (
    <Root className={classes.root}>
      <Grid>
        <Logo showSlogan />
        <Typography variant="subtitle1" align="center">
          At AI Assist, we use advanced artificial intelligence technology to provide expert
          customer support services. Our AI-powered helpdesk verifies customer identities, collects
          and stores user data, and provides personalized support options. With AI Assist, your
          customers will enjoy a faster, more efficient support experience, and your business will
          benefit from valuable insights and improved performance. Try AI Assist today and see the
          difference for yourself.
        </Typography>
        <Link to="/login">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AccountCircle />}
            className={classes.loginButton}
          >
            Login
          </Button>
        </Link>
      </Grid>
    </Root>
  );
}
