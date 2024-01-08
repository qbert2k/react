import {Suspense} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

import {FormikAbstractionPage, FormikBasicPage, FormikComponentsPage, FormikYupPage, RegisterPage} from "../pages";

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
                                    Formic Basic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-yup"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formic Yup
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-components"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formic Components
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-abstraction"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Formic Abstraction
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
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}