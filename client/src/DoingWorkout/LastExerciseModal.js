import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

export default function LastExerciseModal({ id }) {
    const [open, setOpen] = React.useState(false);
    const userId = sessionStorage.getItem('userId');
    const [exerciseInfo, setExerciseInfo] = React.useState();

    React.useEffect(() => {
        fetch(`/exerciseCompleted/${id}/${userId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setExerciseInfo(data.data)
            })
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}
                style={{
                    'color': 'var(--primary-color)',
                    'font-size': '10px',
                    'padding': '0px'
                }}>
                Last Set Info
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    Here's what you did last time:
                </DialogTitle>
                <DialogContent>
                    {exerciseInfo ?
                        <DialogContentText>
                            <Text>
                                Weight Used: {exerciseInfo.weight}</Text>
                            <Text>
                                Notes: {exerciseInfo.notes}
                            </Text>
                        </DialogContentText> :
                        <DialogContentText>
                            Looks like this is the first time you perform this exercise!
                        </DialogContentText>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const Text = styled.div`

`;