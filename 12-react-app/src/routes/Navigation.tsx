import {Suspense} from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {nestedRoutes, routes} from "./routes";
import logo from "../logo.svg";
import {ShoppingPage} from "../02-component-patterns/pages/ShoppingPage";

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
                                <NavLink to="/users"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shopping"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    Shopping
                                </NavLink>
                            </li>
                        </ul>

                        <hr/>

                        <ul>
                            {
                                routes.map(({to, path, name}) => (
                                    <li key={to}>
                                        <NavLink to={to}
                                                 className={({isActive}) => isActive ? 'nav-active' : ''}>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                        <hr/>

                        <ul>
                            {
                                nestedRoutes.map(({to, path, name}) => (
                                    <li key={to}>
                                        <NavLink to={to}
                                                 className={({isActive}) => isActive ? 'nav-active' : ''}>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                        <hr/>
                    </nav>

                    <Routes>
                        <Route path="about" element={<h1>About Page</h1>}/>
                        <Route path="users" element={<h1>Users Page</h1>}/>
                        <Route path="home" element={<h1>Home Page</h1>}/>
                        <Route path="shopping" element={<ShoppingPage/>}/>

                        {
                            routes.map(({path, Component}) => (
                                <Route key={path}
                                       path={path}
                                       element={<Component/>}/>
                            ))
                        }

                        {
                            nestedRoutes.map(({path, Component}) => (
                                <Route key={path}
                                       path={path}
                                       element={<Component/>}/>
                            ))
                        }

                        <Route path="/*" element={<Navigate to={nestedRoutes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}