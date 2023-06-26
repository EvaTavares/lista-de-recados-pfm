import React, { useEffect } from 'react';

import ContainerChina from '../components/ContainerChina';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { loginAction } from '../store/modules/userSlice';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.id) {
      navigate('/errandHome');
      return;
    }
  }, [user]);

  const submitLogin = (event: any) => {
    event.preventDefault();

    const loginUser = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    dispatch(loginAction(loginUser));
  };

  return (
    <React.Fragment>
      <ContainerChina>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={10}
            sm={6}
            md={5}
            sx={{
              height: { xs: 'auto', md: '70%' },
              backgroundColor: '#5C6103',
              borderRadius: '10px',
              padding: '20px'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#FFCA48',
                textAlign: 'center',
                fontSize: { xs: '30px', md: '60px', lg: '70px' },
                marginBottom: '10px'
              }}
            >
              Lista de Recados
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#FFCA48',
                textAlign: 'center',
                fontSize: { xs: '40px', md: '70px', lg: '80px' },
                marginBottom: '10px'
              }}
            >
              Login
            </Typography>
            <form onSubmit={submitLogin}>
              <TextField
                sx={{ marginTop: '30px', marginBottom: '10px' }}
                fullWidth
                required
                name="email"
                id="filled-required"
                label="E-mail"
                variant="filled"
                type="email"
              />
              <TextField
                fullWidth
                required
                id="filled-password-input"
                name="password"
                label="Senha"
                type="password"
                variant="filled"
                autoComplete="current-password"
              />
              <Button
                fullWidth
                sx={{
                  marginTop: '20px',
                  color: '#5C6103',
                  backgroundColor: '#FFCA48',
                  height: '3rem',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
                variant="outlined"
                type="submit"
              >
                Entrar
              </Button>
            </form>
          </Grid>
        </Grid>
      </ContainerChina>
    </React.Fragment>
  );
};

export default Login;
