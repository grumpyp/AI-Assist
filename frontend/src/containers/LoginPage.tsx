import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link, Navigate } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import { useAuth } from '../hooks';
import { Logo } from '../components/Logo';

const PREFIX = 'LoginPage';

const classes = {
  container: `${PREFIX}-container`,
  root: `${PREFIX}-root`,
  form: `${PREFIX}-form`,
  submit: `${PREFIX}-submit`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.container}`]: {
    height: '100%',
  },
  [`& .${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  [`& .${classes.form}`]: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  [`& .${classes.submit}`]: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function LoginPage() {
  const { isAuthenticated, loginUser, loading, error } = useAuth();

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    username: '',
    password: '',
  });

  if (isAuthenticated) {
    return <Navigate to="/ai-assist" />;
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = { username: '', password: '' };
    let isValid = true;

    if (!formState.username) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!formState.password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setValidationErrors(errors);

    return isValid;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      loginUser(formState.username, formState.password);
    }
  };

  return (
    <StyledContainer maxWidth="xs" className={classes.container}>
      <div className={classes.root}>
        <Logo width={200} height={200} />

        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        {error && (
          <Typography variant="body1" color="error">
            {error.message}
          </Typography>
        )}

        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formState.username}
              onChange={handleFormChange}
            />
            {validationErrors.username && (
              <FormHelperText error>{validationErrors.username}</FormHelperText>
            )}
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleFormChange}
            />
            {validationErrors.password && (
              <FormHelperText error>{validationErrors.password}</FormHelperText>
            )}
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/register">Register</Link>
            </Grid>
            <Grid item>
              <Link to="/forgot-password">Forgot password?</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </StyledContainer>
  );
}
