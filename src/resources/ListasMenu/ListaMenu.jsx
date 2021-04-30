import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import AllInboxIcon from '@material-ui/icons/AllInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import React, { useState } from 'react';

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
  const [open2, setOpen2] = useState(false);

  const abrirClick = () => {
    setOpen(!open);
  };

  const abrirClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div>
      <List component="nav" className={clase.main}>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>

        <ListItem button onClick={abrirClick2}>
          <ListItemIcon>
            <FolderSharedIcon />
          </ListItemIcon>
          <ListItemText primary="Registros" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Categoria" />
            </ListItem>
            <Divider />
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Especialidades" />
            </ListItem>
            <Divider />
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Division" />
            </ListItem>
            <Divider />
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Participantes" />
            </ListItem>
            <Divider />
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Profesionales" />
            </ListItem>
            <Divider />
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Torneo" />
            </ListItem>
            <Divider />
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <FiberManualRecordIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Planificacion" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={abrirClick}>
          <ListItemIcon>
            <AllInboxIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <AddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Reporte 1" />
            </ListItem>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <AddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Reporte 2" />
            </ListItem>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <AddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Reporte 3" />
            </ListItem>
            <ListItem button className={clase.mainAux}>
              <ListItemIcon>
                <AddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Reporte 4" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default ListaMenu;
