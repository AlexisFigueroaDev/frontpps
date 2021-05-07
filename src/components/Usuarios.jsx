import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const Usuarios = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    center: {
      alignContent: 'center',
    },
  }));

  const clase = useStyles();

  const [checked, setChecked] = useState(true);

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box color="#03a9f4" border={2} textAlign="center" p={2}>
          <form action="" autoComplete="off" accessKey="off">
            <Grid item>
              <TextField
                id="standard-basic"
                label="Nombre"
                className={clase.paper}
                autoComplete="off"
              />
              <TextField
                id="standard-basic"
                label="Apellido"
                className={clase.paper}
              />
              <InputLabel htmlFor="standard-adornment-password">
                Contraseña
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={false ? 'text' : 'password'}
                value={'123456'}
                onChange={() => {}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {}}
                      onMouseDown={() => {}}
                    >
                      {true ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <br />
              <br />

              <InputLabel htmlFor="standard-adornment-password">
                Repite Contraseña
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={false ? 'text' : 'password'}
                value={'123456'}
                onChange={() => {}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {}}
                      onMouseDown={() => {}}
                    >
                      {true ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <br />
              <br />
            </Grid>

            <Button
              variant="outlined"
              color="primary"
              className={(clase.paper, clase.center)}
            >
              Guardar
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Usuarios;
