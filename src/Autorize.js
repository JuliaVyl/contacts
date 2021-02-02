import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { useState } from 'react';
import Api from './api.js';
import Contacts from './Contacts.js';

const Autorize = ({ isAuth, hideAuthForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, showAlert] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const autorize = async (e) => {
    e.preventDefault();
    let isCorrect = Api.login(email, password);

    if (isCorrect) {
      isAuth(true);
      hideAuthForm(false);
      setShowContacts(true);
      console.log(email);
    } else {
      showAlert(true);
      setTimeout(() => {
        showAlert(false);
      }, 5000);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <form
          noValidate
          autoComplete='off'
          onSubmit={autorize}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <TextField
            id='standard-basic'
            label='Email'
            fullWidth
            required
            style={{ marginTop: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='standard-basic'
            label='Password'
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {alert && (
            <Alert severity='error' style={{ marginTop: '20px' }}>
              You entered wrong email or password
            </Alert>
          )}
          <Button
            variant='outlined'
            style={{ marginTop: '20px' }}
            type='sumbmit'
          >
            Login
          </Button>
        </form>
      </Container>
      {showContacts && <Contacts email={email} />}
    </>
  );
};

export default Autorize;
