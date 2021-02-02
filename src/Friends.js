import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 752,
    position: 'relative',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Friends = ({ users }) => {
  const classes = useStyles();
  const [friends, setFriends] = useState([...users]);

  const editContact = (user) => {
    for (let u of friends) {
      if (JSON.stringify(u) === JSON.stringify(user)) {
      }
    }
  };

  useEffect(() => {}, [friends]);

  return (
    <>
      <Grid item xs={12}>
        <h1 style={{ textAlign: 'center' }}>Your contacts</h1>
        <div className={classes.demo}>
          <List>
            {users.map((user) => {
              return (
                <ListItem key={user.email}>
                  <ListItemAvatar>
                    <Avatar alt={user.name} src={user.url} />
                  </ListItemAvatar>
                  <ListItemText primary={user.name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge='end'
                      aria-label='edit'
                      onClick={() => editContact(user)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    </>
  );
};

export default Friends;
