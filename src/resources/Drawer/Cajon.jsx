import React from 'react';
import {
  makeStyles,
  Drawer,
  Divider,
  IconButton,
  useTheme,
} from '@material-ui/core';
import ListaMenu from '../ListasMenu/ListaMenu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Cajon = (props) => {
  const drawerWidth = 240;

  const estilos = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    encabezado: {
      marginLeft: 'auto',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }));
  const clase = estilos();
  const theme = useTheme();

  const handleCloseDrawer = () => {
    console.log('hicimos click ');
    props.handleCloseDrawer();
  };

  return (
    <Drawer
      className={clase.drawer}
      classes={{
        paper: clase.drawerPaper,
      }}
      variant={props.variant}
      anchor="left"
      open={props.open}
    >
      <div className={clase.toolbar}>
        <div className={clase.drawerHeader}>
          <IconButton onClick={handleCloseDrawer}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
      </div>

      <Divider />
      <ListaMenu />
    </Drawer>
  );
};

export default Cajon;
