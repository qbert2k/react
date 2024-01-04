import {Suspense} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import logo from "../logo.svg";
import {RegisterPage} from "../pages/RegisterPage";

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
                                <NavLink to="/home"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/register"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Register
                                </NavLink>
                            </li>
                        </ul>

                        <hr/>
                    </nav>

                    <Routes>
                        <Route path="home" element={<h1>Home Page</h1>}/>
                        <Route path="about" element={<h1>About Page</h1>}/>
                        <Route path="register" element={<RegisterPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}