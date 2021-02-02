import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Autorize from './Autorize';
import Contacts from './Contacts';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, isAuth] = useState(false);
  const [authForm, showAuthForm] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Contacts
            </Typography>
            {!auth && (
              <Button color='inherit' onClick={() => showAuthForm(true)}>
                Login
              </Button>
            )}
            {auth && (
              <>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder='Search by all people…'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <Button color='inherit' onClick={() => isAuth(false)}>
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {authForm && <Autorize isAuth={isAuth} hideAuthForm={showAuthForm} />}
      {auth && <Contacts inputSearch={searchText} />}
    </>
  );
}
