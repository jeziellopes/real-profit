/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */

import { AppBar, Badge, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home as HomeIcon, MultilineChart } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogoMenu from '../../components/LogoMenu';
import Home from '../../containers/Home';
import Simulator from '../../containers/Simulator';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';
import useStyles from '../../styles/global';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../../assets/logo.svg');

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { simulator } = useSelector((state: ApplicationState) => state.simulatorData);

  function setSimulator(simulator: boolean) {
    dispatch({
      type: SimulatorDataTypes.SET_SIMULATOR,
      payload: simulator,
    });
  }

  useEffect(() => {
    dispatch({
      type: SimulatorDataTypes.ASSETS_REQUEST,
      payload: {
      },
    });
  }, []);

  const handleClickHome = () => {
    setSimulator(false);
  };

  const handleClickSimulator = () => {
    setSimulator(true);
  };

  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <img src={logo} alt="Real Profit" className={classes.ImgLogo} />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Simulador de Rentabilidade
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <LogoMenu />
          <IconButton onClick={handleMenuClose}>
            <ChevronLeftIcon className={classes.chevronLeft} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleClickHome}>
            <ListItemIcon style={{
              color: '#fff',
            }}
            >
              <HomeIcon
                style={{
                  width: '40px',
                }}
                className={classes.menuButton}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: '#fff',
              }}
              primary="Início"
            />
          </ListItem>
          <ListItem button onClick={handleClickSimulator}>
            <ListItemIcon style={{
              color: '#fff',
            }}
            >
              <MultilineChart
                style={{
                  width: '40px',
                }}
                className={classes.menuButton}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: '#fff',
              }}
              primary="Rentabilidade"
            />
          </ListItem>
        </List>
      </Drawer>
      {simulator ? <Simulator /> : <Home />}
    </div>
  );
}
