import {Navigate, Route, Routes} from 'react-router-dom';
import {MarvelPage} from '../heroes/pages/MarvelPage.jsx';
import {LoginPage} from '../auth/pages/LoginPage.jsx';
import {DcPage} from '../heroes/pages/DcPage.jsx';
import {Navbar} from '../ui';

export const AppRouter = () => {
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage/>}/>
                <Route path="login" element={<LoginPage/>}/>

                <Route path="/" element={<Navigate to="/marvel"/>}/>
            </Routes>
        </>
    );
};