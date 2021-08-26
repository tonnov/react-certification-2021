import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../providers/Auth';
import loginApi from './Login.api';
// import { useHistory } from 'react-router-dom';

const Login = ({ show, toggleShow }) => {
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const userName = useRef();
  const passWord = useRef();
  // const history = useHistory();

  const { login } = useAuth();

  // console.log('Login auth', authenticated);

  const handleReset = () => {
    toggleShow();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setDisabled(true);
    if (error) setError(false);

    const user = userName.current.value;
    const pass = passWord.current.value;

    try {
      const solveUser = await loginApi(user, pass);
      console.log(solveUser);
      login();
    } catch (err) {
      setMsgError(err.message);
      setError(true);
    }
    setDisabled(false);
  };

  return (
    <Dialog open={show} onClose={handleReset} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        {error ? <Alert severity="error">{msgError}</Alert> : null}
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            inputRef={userName}
            fullWidth
            disabled={disabled}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            inputRef={passWord}
            fullWidth
            disabled={disabled}
          />
          <DialogActions>
            <Button type="reset" color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Login
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
