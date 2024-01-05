import {Suspense} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

import {RegisterPage} from "../pages/RegisterPage";
import {FormikBasicPage} from "../pages/FormikBasicPage";

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
                        </ul>

                        <hr/>
                    </nav>

                    <Routes>
                        <Route path="register" element={<RegisterPage/>}/>
                        <Route path="formik-basic" element={<FormikBasicPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}