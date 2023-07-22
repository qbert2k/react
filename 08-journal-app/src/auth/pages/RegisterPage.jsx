import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import {AuthLayout} from '../layout/AuthLayout';
import {useForm} from '../../hooks';
import {startCreatingUserWithEmailPassword} from '../../store/auth';

const formData = {
    displayName: '',
    email: '',
    password: ''
};

const formValidations = {
    displayName: [(value) => value.length >= 1, 'The full name is mandatory'],
    email: [(value) => value.includes('@'), 'The email must contain @'],
    password: [(value) => value.length >= 6, 'The password must contain at least 6 letters']
};

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const {
        formState,
        displayName, email, password,
        isFormValid, displayNameValid, emailValid, passwordValid,
        onInputChange

    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Full Name"
                                   type="text"
                                   placeholder="Full Name"
                                   name="displayName"
                                   value={displayName}
                                   onChange={onInputChange}
                                   error={!!displayNameValid && formSubmitted}
                                   helperText={displayNameValid}
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Email"
                                   type="email"
                                   placeholder="email@test.com"
                                   name="email"
                                   value={email}
                                   onChange={onInputChange}
                                   error={!!emailValid && formSubmitted}
                                   helperText={emailValid}
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Password"
                                   type="password"
                                   placeholder="password"
                                   name="password"
                                   value={password}
                                   onChange={onInputChange}
                                   error={!!passwordValid && formSubmitted}
                                   helperText={passwordValid}
                                   fullWidth/>
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit"
                                    variant="contained"
                                    fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                          direction="row"
                          justifyContent="end">
                        <Typography sx={{mr: 1}}>
                            Already have an account?
                        </Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Login
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}