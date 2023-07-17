import {Typography} from '@mui/material';
import {JournalLayout} from '../layout/journalLayout';
import {NoteView, NothingSelectedView} from '../views';

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NoteView/>
            {/*<NothingSelectedView/>*/}
        </JournalLayout>
    );
}