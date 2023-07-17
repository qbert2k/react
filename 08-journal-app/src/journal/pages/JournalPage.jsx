import {Typography} from '@mui/material';
import {JournalLayout} from '../layout/journalLayout';
import {NothingSelectedView} from '../views';

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView/>
        </JournalLayout>
    );
}