import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link, Navigate} from 'react-router-dom';
import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';
import {useAuth} from '../hooks';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function LoginPage() {
  const classes = useStyles();
  const {
    isAuthenticated, loginUser, loading, error,
  } = useAuth();

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    username: '',
    password: '',
  });

  if (isAuthenticated) {
    return <Navigate to="/jl"/>;
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {username: '', password: ''};
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
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.root}>
        <img src="/logo.png" alt="Logo"/>

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
              <Link to="/register">
                Register
              </Link>
            </Grid>
            <Grid item>
              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
