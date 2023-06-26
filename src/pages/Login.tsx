import React from 'react';

import ContainerChina from '../components/ContainerChina';
import { Button, Grid, TextField, Typography } from '@mui/material';

const Login: React.FC = () => {
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

            <TextField
              sx={{ marginTop: '30px', marginBottom: '10px' }}
              fullWidth
              required
              id="filled-required"
              type="email"
              label="E-mail"
              variant="filled"
            />
            <TextField
              fullWidth
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
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
              // onClick={handleLogin}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </ContainerChina>
    </React.Fragment>
  );
};

export default Login;
