import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';
import Api from './api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Contacts = ({ email }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await Api.getUsers();
      setUsers(data);
      console.log(data);
    }
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          {users && (
            <List>
              {users.map((user) => {
                return (
                  <ListItem key={user.email}>
                    <ListItemAvatar>
                      <Avatar alt='avatar-icon' src={user.url} />
                    </ListItemAvatar>
                    <ListItemText primary={user.name} />
                    <ListItemSecondaryAction>
                      <IconButton edge='end' aria-label='add'>
                        <AddIcon />
                      </IconButton>
                      <IconButton edge='end' aria-label='edit'>
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
          )}
        </div>
      </Grid>
    </>
  );
};

export default Contacts;
