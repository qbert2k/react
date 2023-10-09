import {Suspense} from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo"/>
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
                                <NavLink to="/users"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Users
                                </NavLink>
                            </li>
                            {
                                routes.map(({to, path, name}) => (
                                    <li key={path}>
                                        <NavLink to={to}
                                                 className={({isActive}) => isActive ? 'nav-active' : ''}>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="about" element={<h1>About Page</h1>}/>
                        <Route path="users" element={<h1>Users Page</h1>}/>
                        <Route path="home" element={<h1>Home Page</h1>}/>

                        {
                            routes.map(({path, Component}) => (
                                <Route key={path}
                                       path={path}
                                       element={<Component/>}/>
                            ))
                        }

                        <Route path="/*" element={<Navigate to="/home" replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}