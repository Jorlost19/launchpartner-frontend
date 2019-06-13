import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from '../helpers/useForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: 16,
  },
}));

const EditProfileDialog = props => {
    const { open } = props;
    const classes = useStyles()

    const {form, handleChange, resetForm} = useForm({
        name                 : '',
        email                : '',
        description          : '',
        password             : '',
        passwordConfirm      : '',
        avatar               : ''
    });

    const isFormValid = () =>
    {
        return (
            form.email.length &&
            form.password.length > 3 &&
            form.description.split(' ').length > 2 &&
            form.password === form.passwordConfirm &&
            form.avatar.length
        );
    }

    const handleSubmit = (ev) =>
    {
        ev.preventDefault();
        resetForm();
    }

  return (
    <div>
      <Dialog open={open} onClose={props.handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Account</DialogTitle>
        <DialogContent>

          <form
              name="registerForm"
              noValidate
              className="flex flex-col justify-center w-full"
              onSubmit={handleSubmit}
          >

              <TextField
                  className={classes.textField}
                  label="Name"
                  autoFocus
                  type="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
              />

              <TextField
                  className={classes.textField}
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
              />

              <TextField
                  style={{marginBottom: 12}}
                  label="Tell us a bit about yourself"
                  autoFocus
                  type="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  helperText="Must contain at least 3 words"
                />

              <TextField
                  className={classes.textField}
                  label="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
              />

              <TextField
                  className={classes.textField}
                  label="Password (Confirm)"
                  type="password"
                  name="passwordConfirm"
                  value={form.passwordConfirm}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
              />

              <TextField
                  className={classes.textField}
                  type="file"
                  name="avatar"
                  value={form.avatar}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  helperText="Please upload your profile image"
              />

              <Button
                  onClick={props.handleDialogClose}
                  variant="contained"
                  color="primary"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  disabled={!isFormValid()}
                  type="submit"
              >
                  SUBMIT CHANGES
              </Button>

          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditProfileDialog;
