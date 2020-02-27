import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const JobAlertCreateModel = ({ open,
    handleClose,
    alertJobTypeValue,
    onchangeAlertJobType
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">New Alert</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="jobAlertkeyWord"
                        label="Key Word"
                        type="text"
                        placeholder="Ex: Software Engineer"
                        fullWidth
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Job type</FormLabel>
                        <RadioGroup aria-label="position" name="jobType" value={alertJobTypeValue} onChange={onchangeAlertJobType} row>
                            <FormControlLabel
                                value="PartTime"
                                control={<Radio color="primary" />}
                                label="Part time"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="FullTime"
                                control={<Radio color="primary" />}
                                label="Full time"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    <hr/>
                    <FormLabel component="legend">Location</FormLabel>
                    <TextField
                        margin="dense"
                        name="available"
                        label="Location 1"
                        type="text"
                        placeholder="Pakistan"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="available"
                        label="Location 2"
                        type="text"
                        placeholder="Optional"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="available"
                        label="Location 3"
                        type="text"
                        placeholder="Optional"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="available"
                        label="Location 4"
                        type="text"
                        placeholder="Optional"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="available"
                        label="Location 5"
                        type="text"
                        placeholder="Optional"
                        className="profileInfoTextField"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Done
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default JobAlertCreateModel; 