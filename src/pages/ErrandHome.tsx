import React, { useEffect, useState } from 'react';
import china from '../image/china.jpg';
import { Button, Container, Grid, TextField } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { ErrandsList } from '../components/ErrandList';
import { useDispatch, useSelector } from 'react-redux';
import { listErrandsAction } from '../store/modules/errandsSlice';

import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const ErrandHome: React.FC = () => {
  const dispatch = useDispatch<any>();
  const user = useSelector((state: RootState) => state.user);
  //pensar onde colocar esse erro
  const [erro, setErro] = useState(undefined);
  const navigate = useNavigate();

  const listApi = async () => {
    const result = await dispatch(listErrandsAction({ id: user.id }));
    //tratamento a nível de página no componente
    if (!result.payload.ok) {
      //abrir um modal aqui
      if (result.payload.message === 'User not found.') {
        navigate('/');
        return;
      }
      setErro(result.payload.message);
    }
  };

  useEffect(() => {
    const isUserLogged = !!user.id;
    if (!isUserLogged) {
      navigate('/');
      return;
    }

    listApi();
  }, []);

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      {/* <Container
        maxWidth="xl"
        style={{
          backgroundImage: `url(${china})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100wh',
          height: '100vh'
        }}
      > */}
      <Grid
        xs={12}
        container
        spacing={1}
        component="form"
        sx={{
          marginTop: '20px',
          marginBottom: '0'
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item xs={12} sm={5}>
          <TextField fullWidth type="text" id="outlined-basic" label="Título" variant="filled" />
        </Grid>

        <Grid item xs={12} sm={5}>
          <TextField fullWidth id="outlined-basic" label="Descrição" variant="filled" />
        </Grid>

        <Grid item xs={12} sm={2}>
          <Button
            fullWidth
            style={{
              marginLeft: '10px',
              color: '#FFCA48',
              height: '3rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              backgroundColor: '#5C6103'
            }}
            type="button"
            variant="outlined"
          >
            Cadastrar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ErrandsList />
          {erro && <p style={{ color: ' red' }}>Erro: {erro}</p>}
        </Grid>
      </Grid>
      {/* </Container> */}
    </React.Fragment>
  );
};

export default ErrandHome;
