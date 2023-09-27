import './LoginPage.css';
import {useForm} from '../../hooks';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
};

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
};

export const LoginPage = () => {
    const {
        loginEmail,
        loginPassword,
        onInputChange: onLoginInputChange
    } = useForm(loginFormFields);

    const {
        registerName,
        registerEmail,
        registerPassword,
        registerPassword2,
        onInputChange: onRegisterInputChange
    } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        console.log({loginEmail, loginPassword});
    };

    const registerSubmit = (event) => {
        event.preventDefault();
        console.log({registerName, registerEmail, registerPassword, registerPassword2});
    }

    return (<div className="container login-container">
        <div className="row">
            <div className="col-md-6 login-form-1">
                <h3>Log In</h3>
                <form onSubmit={loginSubmit}>
                    <div className="form-group mb-2">
                        <input type="text"
                               className="form-control"
                               placeholder="Email"
                               name="loginEmail"
                               value={loginEmail}
                               onChange={onLoginInputChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               name="loginPassword"
                               value={loginPassword}
                               onChange={onLoginInputChange}/>
                    </div>
                    <div className="d-grid gap-2">
                        <input type="submit"
                               className="btnSubmit"
                               value="Login"/>
                    </div>
                </form>
            </div>

            <div className="col-md-6 login-form-2">
                <h3>Sign In</h3>
                <form onSubmit={registerSubmit}>
                    <div className="form-group mb-2">
                        <input type="text"
                               className="form-control"
                               placeholder="Name"
                               name="registerName"
                               value={registerName}
                               onChange={onRegisterInputChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="email"
                               className="form-control"
                               placeholder="Email"
                               name="registerEmail"
                               value={registerEmail}
                               onChange={onRegisterInputChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               name="registerPassword"
                               value={registerPassword}
                               onChange={onRegisterInputChange}/>
                    </div>

                    <div className="form-group mb-2">
                        <input type="password"
                               className="form-control"
                               placeholder="Repeat Password"
                               name="registerPassword2"
                               value={registerPassword2}
                               onChange={onRegisterInputChange}/>
                    </div>

                    <div className="d-grid gap-2">
                        <input type="submit"
                               className="btnSubmit"
                               value="Register"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}