import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: '#009688',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, isAuth] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Contacts
          </Typography>
          {auth && <Button color='inherit'>Login</Button>}
          {!auth && <Button color='inherit'>Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
