import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import {Alert, Button, Grid, Link, TextField, Typography} from '@mui/material';
import Google from '@mui/icons-material/Google';
import {AuthLayout} from '../layout/AuthLayout';
import {useForm} from '../../hooks';
import {startGoogleSignIn, startLoginWithEmailPassword} from '../../store/auth';

const initialForm = {
    email: 'test@test.com',
    password: '123456'
};

export const LoginPage = () => {

    const {status, errorMessage} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const {email, password, onInputChange} = useForm(initialForm);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(startLoginWithEmailPassword({email, password}));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}
                  aria-label="submitForm"
                  className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Email"
                                   type="email"
                                   placeholder="Email"
                                   fullWidth
                                   name="email"
                                   value={email}
                                   onChange={onInputChange}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label="Password"
                                   type="password"
                                   placeholder="Password"
                                   fullWidth
                                   name="password"
                                   inputProps={{
                                       "data-testid": 'Password'
                                   }}
                                   value={password}
                                   onChange={onInputChange}/>
                    </Grid>

                    <Grid container
                          display={!!errorMessage ? '' : 'none'}
                          sx={{mt: 1}}>
                        <Grid item xs={12}>
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit"
                                    variant="contained"
                                    disabled={isAuthenticating}
                                    fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button variant="contained"
                                    aria-label="googleButton"
                                    onClick={onGoogleSignIn}
                                    disabled={isAuthenticating}
                                    fullWidth>
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                          direction="row"
                          justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Register
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}