import {Suspense} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

import {RegisterPage} from "../pages/RegisterPage";
import {FormikBasicPage} from "../pages/FormikBasicPage";

import logo from "../logo.svg";
import {FormikYupPage} from "../pages/FormikYupPage";
import {FormikComponentsPage} from "../pages/FormikComponents";

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
                        </ul>

                        <hr/>
                    </nav>

                    <Routes>
                        <Route path="register" element={<RegisterPage/>}/>
                        <Route path="formik-basic" element={<FormikBasicPage/>}/>
                        <Route path="formik-yup" element={<FormikYupPage/>}/>
                        <Route path="formik-components" element={<FormikComponentsPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}