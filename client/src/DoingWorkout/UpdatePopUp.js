import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

export default function UpdatePopUp({ setValue, isComplete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}
        style={{ 'color': isComplete ? 'grey' : '' }}
      >
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Sets</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="sets"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 18px;
`;