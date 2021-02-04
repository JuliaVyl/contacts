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
import { useEffect, useState } from 'react';
import Api from './api';
import Friends from './Friends';

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

const Contacts = ({ inputSearch }) => {
  const [users, setUsers] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await Api.getUsers();
      if (inputSearch !== '') {
        data = data.filter(
          (user) =>
            user.email.includes(inputSearch.toLowerCase().trim()) ||
            user.name
              .toLowerCase()
              .trim()
              .includes(inputSearch.toLowerCase().trim())
        );
      }

      setUsers(data);
    }
    fetchData();
  }, [inputSearch]);

  const addFriend = (user) => {
    if (friends.includes(user)) return;
    setFriends([...friends, user]);
  };
  const deleteFriend = (u) => {
    const filteredItems = friends.filter((user) => u.email !== user.email);
    setFriends(filteredItems);
  };

  const editFriend = (email, inputName) => {
    // const index = users.indexOf(user);
    // console.log('index: ' + index);

    let changedUsers = friends.map((u) => {
      if (u.email === email) {
        u.name = inputName;
      }
      return u;
    });
    setFriends(changedUsers);
  };

  const classes = useStyles();

  return (
    <>
      {friends.length > 0 && (
        <Friends
          friends={friends}
          deleteFriend={deleteFriend}
          editFriend={editFriend}
        />
      )}
      <Grid item xs={12}>
        <h1 style={{ textAlign: 'center' }}>All people</h1>
        <div className={classes.demo}>
          {users && (
            <List>
              {users.map((user) => {
                return (
                  <ListItem key={user.email}>
                    <ListItemAvatar>
                      <Avatar alt={user.name} src={user.url} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={`(${user.email.toLowerCase()})`}
                    />
                    <ListItemSecondaryAction>
                      {!friends.includes(user) && (
                        <IconButton
                          edge='end'
                          aria-label='add'
                          onClick={() => addFriend(user)}
                        >
                          <AddIcon />
                        </IconButton>
                      )}
                      {friends.includes(user) && (
                        <IconButton
                          edge='end'
                          aria-label='delete'
                          onClick={() => deleteFriend(user)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
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
