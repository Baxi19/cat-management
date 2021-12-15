import { forwardRef, useState } from 'react';
import catStyles from '../../styles/catStyles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteCat = forwardRef((props, ref) => {
    const styles = catStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleDeleteCat = () => {
        props.deleteCat(props.item.id);
        handleClose();
    };
    
    return (
        <>
            <DeleteIcon onClick={() => {
                handleOpen();
            }}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Delete Cat?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Are you sure you want to remove the ${props.item.name} cat?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" variant="contained" onClick={handleClose} className={styles.buttonCancelModal}>
                        Cancel
                    </Button>
                    <Button
                        color="success"
                        className={styles.buttonAddModal}
                        variant="contained"
                        autoFocus
                        onClick={() => {
                            handleDeleteCat();
                            handleClose();
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
})

export default DeleteCat;
