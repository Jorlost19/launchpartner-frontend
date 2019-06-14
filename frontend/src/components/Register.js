import React from 'react';
import { Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, TextField, Typography } from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';
import Animate from './Animate';
import useForm from '../helpers/useForm';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import logo from '../assets/react-logo.png';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
}));

const Register = props =>
{

    const classes = useStyles();

    const {form, handleChange, resetForm} = useForm({
        name                 : '',
        email                : '',
        description          : '',
        password             : '',
        passwordConfirm      : '',
        acceptTermsConditions: false,
        avatar               : ''
    });

    const isFormValid = () =>
    {
        return (
            form.email.length &&
            form.password.length > 3 &&
            form.description.split(' ').length > 2 &&
            form.password === form.passwordConfirm &&
            form.avatar &&
            form.acceptTermsConditions 
        );
    }

    const handleSubmit = (ev) =>
    {
        ev.preventDefault();
        resetForm();
    }

    const onButtonClick = () =>
    {
        props.history.push('/dashboard');
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")}>

            <div className="flex flex-col items-center justify-center w-full">

                <Animate animation="transition.expandIn">

                    <Card className="w-full max-w-384">

                        <CardContent className="flex flex-col items-center justify-center p-32">

                            <img style={{height: 70, width: 70}} src={logo} alt="logo"/>

                            <Typography variant="h6" className="mt-16 mb-32">CREATE AN ACCOUNT</Typography>

                            <form
                                name="registerForm"
                                noValidate
                                className="flex flex-col justify-center w-full"
                                onSubmit={handleSubmit}
                            >

                                <TextField
                                    style={{marginBottom: 12}}
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
                                    style={{marginBottom: 12}}
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
                                    style={{marginBottom: 12}}
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
                                    style={{marginBottom: 12}}
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
                                    style={{marginBottom: 12}}
                                    type="file"
                                    name="avatar"
                                    value={form.avatar}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    helperText="Please upload your profile image"
                                />

                                <FormControl className="items-center">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="acceptTermsConditions"
                                                checked={form.acceptTermsConditions}
                                                onChange={handleChange}/>
                                        }
                                        label="I read and accept terms and conditions"
                                    />
                                </FormControl>

                                <Button
                                    style={{margin: '0 auto'}}
                                    onClick={onButtonClick}
                                    variant="contained"
                                    color="primary"
                                    aria-label="Register"
                                    disabled={!isFormValid()}
                                    type="submit"
                                >
                                    CREATE AN ACCOUNT
                                </Button>

                            </form>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Already have an account?</span>
                                <Link className="font-medium" to="/login">Login</Link>
                            </div>

                        </CardContent>
                    </Card>
                </Animate>
            </div>
        </div>
    );
}

export default Register;