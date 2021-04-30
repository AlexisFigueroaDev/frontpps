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
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>

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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
};

export default withWidth()(NavBar);
