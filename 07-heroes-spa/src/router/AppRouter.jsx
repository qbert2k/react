import {Navigate, Route, Routes} from 'react-router-dom';
import {MarvelPage} from '../heroes/pages/MarvelPage.jsx';
import {LoginPage} from '../auth/pages/LoginPage.jsx';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage/>}/>
                <Route path="login" element={<LoginPage/>}/>

                <Route path="/" element={<Navigate to="/marvel"/>}/>
            </Routes>
        </>
    );
};