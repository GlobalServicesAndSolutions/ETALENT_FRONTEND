import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const ApplyForJobDialog = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Apply</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="available"
                        label="First Name"
                        type="text"
                        placeholder="Pakistan"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="available"
                        label="Last Name"
                        type="text"
                        placeholder="Optional"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name="awardIssuer"
                        label="Email"
                        type="text"
                        fullWidth
                        placeholder="Ex: salmanHaider0006@hotmail.com"
                    />
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name='phoneNumber'
                        label="Contact Number"
                        type="text"
                        fullWidth
                        placeholder="Ex: xxxx-xxx-xxxx"
                    />
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        className="inputImage"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload Resume
                    </Button>
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        className="inputImage"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload Cover letter
                    </Button>
                    </label>
                    <hr/>
                    <FormLabel component="legend">Answer the question</FormLabel>
                    <p>What is your name</p>
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name="applyCandidateName"
                        label="Give your Answer"
                        type="text"
                        fullWidth
                        placeholder="Ex: Answer"
                    />
                    <hr/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="position" name="jobType"  row>
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="primary" />}
                                label="Male"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="primary" />}
                                label="Female"
                                labelPlacement="end"
                            />
                            <hr/>
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                       Submit
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default ApplyForJobDialog; 