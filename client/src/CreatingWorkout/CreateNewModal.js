import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { NewWorkoutContext } from '../WorkoutList/NewWorkoutContext';

export default function CreateNewModal() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [notes, setNotes] = React.useState('');
    const userId = sessionStorage.getItem('userId');
    const [sets, setSets] = React.useState();
    const [reps, setReps] = React.useState();

    const { setExerciseList, exerciseList } = React.useContext(NewWorkoutContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleResponse = (data) => {
        setExerciseList(exerciseList.concat(data))
    }

    const handleSave = () => {
        const newExercise = {
            name: name,
            tags: tags.length ? tags.replace(/\s/g, '').split(',') : '',
            notes: notes,
            sets: sets,
            reps: reps,
            user_id: userId,
        }
        fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              }
        })
        .then(res => res.json())
        .then(data => handleResponse(data.data));

        setOpen(false);
        setName('');
        setTags([]);
        setNotes('');
        setReps('');
        setSets('');
    }


    return (
        <div>
            <MainButton variant="outlined" onClick={handleClickOpen}>
                Create New Exercise
            </MainButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a new exercise!</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Exercise Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)} />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="tags"
                        label="Tags (separated by commas)"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="notes"
                        label="Notes"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="sets"
                        label="Number of Sets"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setSets(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="sets"
                        label="Number of Reps"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setReps(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Add & Save</Button>
                    <Button onClick={handleClose}>cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


const MainButton = styled.button`
    margin-top: 10px;
    width: 250px;
    height: 40px;
    background-color: var(--primary-color);
    font-family: var(--primary-font);
    font-size: 15px;
    border-radius: 12px;
    box-shadow: .5px 1px 5px #888888;
    color: white;
    border: none;
`;