import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/system';
import { useAuth0 } from '@auth0/auth0-react';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [exercise, setExercise] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const userId = sessionStorage.getItem('userId');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    //POST TO BACKEND GOES HERE
    const newExercise = {
      name: exercise,
      tags: tags.length ? tags.replace(/\s/g, '').split(',') : '',
      notes: notes,
      user_id: userId
    }
    fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setOpen(false)
  }

  return (
    <div>
      <StyledButton variant="outlined" onClick={handleClickOpen}>
        +
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <Title>Add an exercise</Title>
        <StyledDialogContent>
          <StyledTextField
            autoFocus
            margin="dense"
            id="exercise"
            label="Exercise Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setExercise(e.target.value)} />
          <StyledTextField
            autoFocus
            margin="dense"
            id="tags"
            label="Tags (separated by commas)"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTags(e.target.value)}
          />
          <StyledTextField
            autoFocus
            margin="dense"
            id="notes"
            label="Notes"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNotes(e.target.value)}
          />
        </StyledDialogContent>
        <DialogActions>
          <StyledDialogButton onClick={handleSave}>Save</StyledDialogButton>
          <StyledDialogButton onClick={handleClose}>Cancel</StyledDialogButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const Title = styled(DialogTitle)`
  font-family: var(--primary-font);

`;

const StyledTextField = styled(TextField)`
  font-family: var(--primary-font);
  .Mui-focused {
    color: var(--primary-color);
  }
`;


const StyledDialogContent = styled(DialogContent)`

`;

const StyledDialogButton = styled(Button)`
  color: var(--primary-color);
  font-family: var(--primary-font);
`;

const StyledButton = styled(Button)`
    position: fixed;
    color: black;
    border: none;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    bottom: 80px;
    margin-right: 60px;
    font-size: 70px;
    background-color: var(--primary-color);
    box-shadow: 1px 2px 5px #888888;
`;