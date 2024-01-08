import {Suspense} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

import {
    FormikAbstractionPage,
    FormikBasicPage,
    FormikComponentsPage,
    FormikYupPage,
    RegisterFormikPage,
    RegisterPage
} from "../pages";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo"/>

                        <hr/>

                        <ul>
                            <li>
                                <NavLink to="/register"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-basic"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formik Basic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-yup"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formik Yup
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-components"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formik Components
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-abstraction"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formik Abstraction
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-register"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formik Register
                                </NavLink>
                            </li>
                        </ul>

                        <hr/>
                    </nav>

                    <Routes>
                        <Route path="register" element={<RegisterPage/>}/>
                        <Route path="formik-basic" element={<FormikBasicPage/>}/>
                        <Route path="formik-yup" element={<FormikYupPage/>}/>
                        <Route path="formik-components" element={<FormikComponentsPage/>}/>
                        <Route path="formik-Abstraction" element={<FormikAbstractionPage/>}/>
                        <Route path="formik-register" element={<RegisterFormikPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}