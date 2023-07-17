import {Box} from '@mui/material';
import {NavBar} from '../components';

const drawerWidth = 240;
export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'plex'}}>
            <NavBar drawerWidth={drawerWidth}/>

            <Box component='main'
                 sx={{flexGrow: 1, p: 3}}>
                {children}
            </Box>
        </Box>
    );
}