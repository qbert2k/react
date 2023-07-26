import {useEffect, useMemo, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Grid, IconButton, TextField, Typography} from '@mui/material';
import {SaveOutlined, UploadOutlined} from '@mui/icons-material';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import {ImageGallery} from '../components';
import {useForm} from '../../hooks';
import {setActiveNote, startSaveNote, startUploadingFiles} from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const {active: note, messageSaved, isSaving} = useSelector(state => state.journal);
    const {body, title, date, onInputChange, formState} = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Note Updated', messageSaved, 'success');
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({target}) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    }

    return (
        <Grid container
              className="animate__animated animate__fadeIn animate__faster"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39}
                            fontWeight="light">
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <input type="file"
                       multiple
                       ref={fileInputRef}
                       onChange={onFileInputChange}
                       style={{display: 'none'}}/>
                <IconButton color="primary"
                            onClick={() => fileInputRef.current.click()}
                            disabled={isSaving}>
                    <UploadOutlined/>
                </IconButton>

                <Button color="primary"
                        disabled={isSaving}
                        onClick={onSaveNote}
                        sx={{padding: 2}}>
                    <SaveOutlined sx={{
                        fontSize: 30,
                        mr: 1
                    }}/>
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField type="test"
                           variant="filled"
                           fullWidth
                           placeholder="Enter a title"
                           label="Title"
                           name="title"
                           value={title}
                           onChange={onInputChange}
                           sx={{
                               border: 'none',
                               mb: 1
                           }}/>
                <TextField type="test"
                           variant="filled"
                           fullWidth
                           multiline
                           placeholder="Wasup?"
                           name="body"
                           value={body}
                           onChange={onInputChange}
                           minRows={5}/>
            </Grid>

            <ImageGallery images={note.imageURL}/>

        </Grid>
    );
}