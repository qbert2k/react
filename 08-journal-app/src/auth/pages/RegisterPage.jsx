import {Link as RouterLink} from 'react-router-dom';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import {AuthLayout} from '../layout/AuthLayout';
import {useForm} from '../../hooks';

const formData = {
    displayName: 'Cisquito Mamani',
    email: 'cisquito.mamani@test.com',
    password: '123456'
};

const formValidations = {
    email: [(value) => value.includes('@'), 'The email must contain @'],
    password: [(value) => value.length >= 6, 'The password must contain at least 6 letters'],
    displayName: [(value) => value.length >= 1, 'The full name is mandatory']
};

export const RegisterPage = () => {

    const {
        formState,
        displayName, email, password,
        isFormValid, displayNameValid, emailValid, passwordValid,
        onInputChange

    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
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
                                   error={!displayNameValid}
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
                                   error={!emailValid}
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
                                   error={!passwordValid}
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