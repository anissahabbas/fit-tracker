import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

export default function CreateNewModal() {
    const [open, setOpen] = React.useState(false);
    const [exercise, setExercise] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [notes, setNotes] = React.useState('');
    const userId = sessionStorage.getItem('userId');
    const [sets, setSets] = React.useState(0);
    const [reps, setReps] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        fetch('/exercises')
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
                        id="exercise"
                        label="Exercise Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setExercise(e.target.value)} />
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
                    {/* <WeightWrapper>
                        <div>Add Reps: </div>
                        {
                            [...Array(Number(sets))].map((el, ind) => {
                                return <Weight
                                    key={ind}
                                    type='text'
                                    onChange={(e) => {
                                        reps ?
                                            setReps(reps.push(e.target.value)) :
                                            setReps([e.target.value])
                                    }} />
                            })
                        }
                    </WeightWrapper> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Add & Save</Button>
                    <Button onClick={handleClose}>cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const WeightWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Weight = styled.input`
    height: 15px;
    width: 25px;
`;

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