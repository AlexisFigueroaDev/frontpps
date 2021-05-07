import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Usuarios from './Usuarios';

const Contenedor = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        {/* <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        /> */}
        <Usuarios />
      </Container>
    </React.Fragment>
  );
};

export default Contenedor;
