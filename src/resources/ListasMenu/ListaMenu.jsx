import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PeopleIcon from '@material-ui/icons/People';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import Menu from './../../data/Menu';

const ListaMenu = () => {
  const estilos = makeStyles((theme) => ({
    main: {
      width: '100%',
      maxWidth: 240,
      backgroundColor: theme.palette.background.paper,
    },
    mainAux: {
      paddingLeft: theme.spacing(4),
    },
  }));

  const clase = estilos();
  const [open, setOpen] = useState(false);

  const abrirClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List component="nav" className={clase.main}>
        <ListItem button>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary={Menu.menuLocker.participantes.nombre} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={Menu.menuLocker.torneos.nombre} />
        </ListItem>
        <Divider />
        <ListItem button onClick={abrirClick}>
          <ListItemIcon>
            <AllInboxIcon />
          </ListItemIcon>
          <ListItemText primary={Menu.menuLocker.Reportes.nombre} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                primary={Menu.menuLocker.Reportes.submenu.reporte1.nombre}
              />
            </ListItem>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                primary={Menu.menuLocker.Reportes.submenu.reporte2.nombre}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default ListaMenu;
