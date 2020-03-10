import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const CourseAndTrainings = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">New Course</DialogTitle>
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
                        required
                    />
                    <FormControl style={{width:'100%'}}>
                        <InputLabel htmlFor="age-native-simple">Associated With Education </InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Seven Tech'}>Abasy University</option>
                            <option value={'Vision X'}>Vision X</option>
                        </Select>
                        </FormControl>
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