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
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useState } from 'react';

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

const Friends = ({ friends, deleteFriend, editFriend }) => {
  const classes = useStyles();
  const [showEditPannel, setShowEditPannel] = useState(false);
  const [inputName, setInputName] = useState('');
  const [changingUser, setChangingUser] = useState(null);

  const editContact = (user) => {
    setShowEditPannel(true);
    setChangingUser(user);
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    editFriend(changingUser.email, inputName);
    setShowEditPannel(false);
    setInputName('');
  };

  return (
    <>
      <Grid item xs={12}>
        <h1 style={{ textAlign: 'center' }}>Your contacts</h1>
        {showEditPannel && (
          <Grid container justify='center'>
            <form
              style={{
                backgroundColor: 'white',
                padding: '20px',
                marginBottom: '20px',
              }}
              onSubmit={handleChangeName}
            >
              <TextField
                id='filled-search'
                label={changingUser.name}
                placeholder={changingUser.name}
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
                autoComplete='off'
              />
              <Button
                variant='contained'
                type='submit'
                style={{ marginLeft: '10px' }}
              >
                Edit
              </Button>
              <IconButton
                edge='end'
                aria-label='close'
                onClick={() => setShowEditPannel(false)}
              >
                <CloseIcon />
              </IconButton>
            </form>
          </Grid>
        )}
        <div className={classes.demo}>
          <List>
            {friends.map((user) => {
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
                    <IconButton
                      edge='end'
                      aria-label='edit'
                      onClick={() => editContact(user)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => deleteFriend(user)}
                    >
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
