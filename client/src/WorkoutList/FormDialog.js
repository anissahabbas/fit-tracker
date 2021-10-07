import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/system';
import { NewWorkoutContext } from './NewWorkoutContext';
import { useHistory } from 'react-router';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const { setWorkoutName, setTags } = React.useContext(NewWorkoutContext);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false)
    history.push('/creatingWorkout');
  }

  return (
    <div>
      <StyledButton variant="outlined" onClick={handleClickOpen}>
        +
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <Title>New Workout</Title>
        <StyledDialogContent>
          <StyledTextField
            autoFocus
            margin="dense"
            id="name"
            label='Workout Name'
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setWorkoutName(e.target.value)}
          />
          <StyledTextField
            autoFocus
            margin="dense"
            id="tags"
            label='Tags (separated by comma)'
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTags(e.target.value)}
          />
        </StyledDialogContent>
        <DialogActions>
          <StyledDialogButton onClick={handleSave}>Create</StyledDialogButton>
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