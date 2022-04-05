import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/about" element={<AboutScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
