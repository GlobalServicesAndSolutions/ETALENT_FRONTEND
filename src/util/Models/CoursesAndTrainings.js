import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const CourseAndTrainings = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">New Course/Training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="courseName"
                        id="school"
                        label="Course Name"
                        type="text"
                        placeholder="Ex: Web Development"
                        fullWidth
                    />
                   <TextField
                        id="standard-multiline-static"
                        name="courseDescription"
                        label="Course Description"
                        multiline
                        rows="5"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="institute"
                        label="Institute"
                        type="text"
                        fullWidth
                        placeholder="Ex: Seven Software"
                    />
                    <TextField
                        name="coursedate"
                        label="Course Date"
                        type="text"
                        fullWidth
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
export default CourseAndTrainings; 