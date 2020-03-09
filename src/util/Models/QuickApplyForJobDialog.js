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

const QuickApplyForJobDialog = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Easy Apply for Position</DialogTitle>
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
                        required
                    />
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name="awardIssuer"
                        label="Email"
                        type="text"
                        fullWidth
                        placeholder="Ex: salmanHaider0006@hotmail.com"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name='phoneNumber'
                        label="Contact Number"
                        type="text"
                        fullWidth
                        placeholder="Ex: xxxx-xxx-xxxx"
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
                        required
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload Cover letter
                    </Button>
                    </label>
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
                       Apply
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default QuickApplyForJobDialog; 