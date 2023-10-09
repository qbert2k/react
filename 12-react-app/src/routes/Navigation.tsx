import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import logo from "../logo.svg";
import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazyload/pages";

export const Navigation = () => {
    return (
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

                        <li>
                            <NavLink to="/lazy1"
                                     className={({isActive}) => isActive ? 'nav-active' : ''}>
                                Lazy Page 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2"
                                     className={({isActive}) => isActive ? 'nav-active' : ''}>
                                Lazy Page 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3"
                                     className={({isActive}) => isActive ? 'nav-active' : ''}>
                                Lazy Page 3
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About Page</h1>}/>
                    <Route path="users" element={<h1>Users Page</h1>}/>
                    <Route path="home" element={<h1>Home Page</h1>}/>

                    <Route path="lazy1" element={<LazyPage1/>}/>
                    <Route path="lazy2" element={<LazyPage2/>}/>
                    <Route path="lazy3" element={<LazyPage3/>}/>

                    <Route path="/*" element={<Navigate to="/home"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}