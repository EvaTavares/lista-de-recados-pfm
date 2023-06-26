import React, { useEffect, useState } from 'react';
import ContainerChina from '../components/ContainerChina';

import { Button, Grid, TextField } from '@mui/material';
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
      <ContainerChina>
        <Grid
          xs={12}
          container
          spacing={1}
          component="form"
          sx={{
            alignItems: 'center',
            // marginTop: '1rem',
            '& .MuiTextField-root': {
              m: 1,
              background: ' #fff',
              borderRadius: '10px'
            }
          }}
          noValidate
          autoComplete="off"
        >
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              type="text"
              id="outlined-basic"
              label="Título"
              variant="outlined"
              // value={title}
              // onChange={e => setTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Descrição"
              variant="outlined"
              // value={description}
              // onChange={e => setDescription(e.target.value)}
            />
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
              // onClick={handleAdd}
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ErrandsList />
          {erro && <p style={{ color: ' red' }}>Erro: {erro}</p>}
        </Grid>
      </ContainerChina>
    </React.Fragment>
  );
};

export default ErrandHome;
