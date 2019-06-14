import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
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

const Login = props =>
{

    const classes = useStyles();

    const {form, handleChange, resetForm} = useForm({
        email                : '',
        password             : ''
    });

    const isFormValid = () =>
    {
        return (
            form.email.length &&
            form.password.length > 3
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

                            <Typography variant="h6" className="mt-16 mb-32">Sign In</Typography>

                            <form
                                name="loginForm"
                                noValidate
                                className="flex flex-col justify-center w-full"
                                onSubmit={handleSubmit}
                            >

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
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <Button
                                    style={{margin: '0 auto'}}
                                    onClick={onButtonClick}
                                    variant="contained"
                                    color="primary"
                                    aria-label="Login"
                                    disabled={!isFormValid()}
                                    type="submit"
                                >
                                    Log In
                                </Button>

                            </form>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Don't have an account?</span>
                                <Link className="font-medium" to="/">Sign Up</Link>
                            </div>

                        </CardContent>
                    </Card>
                </Animate>
            </div>
        </div>
    );
}

export default Login;