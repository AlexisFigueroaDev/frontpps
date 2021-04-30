import React from 'react';
import { makeStyles, Drawer, Divider, ListItemIcon } from '@material-ui/core';
import ListaMenu from '../ListasMenu/ListaMenu';
import CloseIcon from '@material-ui/icons/Close';

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
  }));
  const clase = estilos();

  // const { handleCloseDrawer } = this.props;

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
      <div className={clase.toolbar}></div>
      <div className={clase.encabezado}>
        <ListItemIcon onClick={handleCloseDrawer}>
          <CloseIcon />
        </ListItemIcon>
      </div>
      <Divider />
      <ListaMenu />
    </Drawer>
  );
};

export default Cajon;
