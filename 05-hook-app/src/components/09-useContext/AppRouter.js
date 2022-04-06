import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>

            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="*" element={<HomeScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
