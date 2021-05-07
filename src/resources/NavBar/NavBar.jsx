import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Avatar,
  Hidden,
  withWidth,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import Datos from './../../data/Usuario';
import Cajon from '../Drawer/Cajon';
import clsx from 'clsx';
import Contenedor from '../../components/Contenedor';

const NavBar = (props) => {
  // const drawerWidth = 240;

  const estilos = makeStyles((theme) => ({
    tipografia: {
      fontFamily: 'New Tegomin',
      marginLeft: theme.spacing(1),
      flexGrow: 1,
    },
    Avatar: {
      color: theme.palette.getContrastText('#ef6c00'),
      backgroundColor: '#ef6c00',
      fontFamily: 'New Tegomin',
    },
    offset: theme.mixins.toolbar,
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 240,
    },
  }));

  const clase = estilos();
  // const { width } = props;
  //variables
  let nombre = Datos.usuarios.nombre[0];
  let apellido = Datos.usuarios.apellido[0];

  const [abrir, setAbrir] = useState(false);
  const handleDrawer = () => {
    setAbrir(true);
  };

  const handleCloseDrawer = () => {
    setAbrir(false);
  };
  return (
    <div>
      <AppBar className={abrir ? clase.appBar : null}>
        <Toolbar>
          {!abrir ? (
            <IconButton onClick={handleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : null}

          <Typography variant="h6" color="inherit" className={clase.tipografia}>
            CORDOBA PATIN
          </Typography>
          <Hidden xsDown>
            <IconButton>
              <Avatar className={clase.Avatar}>
                {nombre}
                {apellido}
              </Avatar>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={clase.offset}></div>
      {/* Current width: {width} */}
      <Cajon
        variant="persistent"
        open={abrir}
        handleCloseDrawer={handleCloseDrawer}
      />
      <main
        className={clsx(clase.content, {
          [clase.contentShift]: abrir,
        })}
      >
        <Contenedor />
      </main>
    </div>
  );
};

export default withWidth()(NavBar);
