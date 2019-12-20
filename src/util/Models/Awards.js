import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AwardDialog = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">New Award</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="awardTitle"
                        id="school"
                        label="Award Title"
                        type="text"
                        placeholder="Ex: Employee of the Year"
                        fullWidth
                    />
                   <TextField
                        id="standard-multiline-static"
                        name="awardDescription"
                        label="Award Description"
                        multiline
                        rows="5"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name="awardIssuer"
                        label="Award Issuer"
                        type="text"
                        fullWidth
                        placeholder="Ex: Seven Software"
                    />
                    <TextField
                        id="standard-multiline-static"
                        name="awardUrl"
                        label="Url"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Description"
                        name="awardDate"
                        type="text"
                        fullWidth
                        placeholder="Ex: DD/MM/YYYY"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default AwardDialog; 