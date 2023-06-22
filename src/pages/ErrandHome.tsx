import React from 'react';
import ContainerChina from '../components/ContainerChina';
import ErrandTable from '../components/ErrandTable';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const ErrandHome: React.FC = () => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <ContainerChina>
        <Grid
          item
          xs={12}
          style={{
            padding: '20px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#5C6103',
              textAlign: 'center'
              // fontSize: { xs: "40px", md: "70px", lg: "80px" },
            }}
          >
            Novo Recado
          </Typography>
        </Grid>
        <Divider />
        <Grid
          xs={12}
          container
          spacing={1}
          component="form"
          sx={{
            alignItems: 'center',
            marginTop: '1rem',
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
          <ErrandTable />
        </Grid>
      </ContainerChina>
    </React.Fragment>
  );
};

export default ErrandHome;
