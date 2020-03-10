import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const PresentationDialog = ({ open,
    handleClose,
    onChangePresentationInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="presentationName"
                        label="Presentation Name"
                        type="text"
                        onChange={onChangePresentationInfo}
                        value={data.presentationName}
                        placeholder="Ex: Cyber Security"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="presentationDescription"
                        label="Description"
                        multiline
                        rows='3'
                        onChange={onChangePresentationInfo}
                        value={data.presentationDescription}
                        fullWidth
                        required
                    />
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        className="inputImage"
                        required
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Attach File
                    </Button>
                    </label>
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
export default PresentationDialog; 