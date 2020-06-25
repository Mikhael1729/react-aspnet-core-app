import React, { Component, useState } from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Link } from "@material-ui/core";
import { Menu as MenuIcon, Adjust as AdjustIcon } from "@material-ui/icons";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: "2em",
    },
    pagesButtons: {
      flexGrow: 1,
    },
    links: {
      textDecoration: "none",
    },
    buttons: {
      "&:hover": {
        backgroundColor: grey[800],
      },
    },
  })
);

export function NavMenu() {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AdjustIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Laboratorio 06
          </Typography>

          <div className={classes.pagesButtons}>
            <Link component={RouterLink} to="/fetch-data" underline="none">
              <Button color="default">Fetch Data</Button>
            </Link>

            <Link component={RouterLink} to="/counter" underline="none">
              <Button color="default">Counter</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
