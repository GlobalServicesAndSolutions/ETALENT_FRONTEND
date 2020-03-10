import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const EducationDialog = ({ open,
    handleClose,
    onChangeEducationInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Education</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="school"
                        label="School"
                        type="text"
                        value={data.school}
                        onChange={onChangeEducationInfo}
                        placeholder="Ex: Abasyn University"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="schoolUrl"
                        label="School Url"
                        type="text"
                        value={data.schoolUrl}
                        onChange={onChangeEducationInfo}
                        placeholder="Ex: Abasyn University"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="degree"
                        label="Degree / Level of Education"
                        type="text"
                        value={data.degree}
                        onChange={onChangeEducationInfo}
                        fullWidth
                        placeholder="Ex: BSSE"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="fieldofstudy"
                        label="Field Of Study"
                        type="text"
                        value={data.fieldofstudy}
                        onChange={onChangeEducationInfo}
                        fullWidth
                        placeholder="Ex: Computer Science or IT"
                        required
                    />
                    <div className='row'>
                        <div style={{width:'68%'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid >
                            <KeyboardDatePicker
                                className="educationDatePickerFiled"
                                margin="normal"
                                id='educationStartDate'
                                label="Start Date"
                                format="MM/dd/yyyy"
                                value={data.educationStartDate}
                                name='educationStartDate'
                                onChange={(e, date, name) => onChangeEducationInfo(e, date, 'educationStartDate')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                InputProps={{
                                    readOnly: true,
                                  }}
                                required
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <KeyboardDatePicker
                                className="educationDatePickerFiled"
                                margin="normal"
                                label="End Date"
                                format="MM/dd/yyyy"
                                value={data.educationEndDate}
                                name='educationEndDate'
                                onChange={(e, date, name) => onChangeEducationInfo(e, date, 'educationEndDate')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                InputProps={{
                                    readOnly: true,
                                  }}
                                required
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </div>
                    <div className='currentlyEnrolledMargin'>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Currently Enrolled"
                        />
                    </FormGroup>
                    </div>
                    </div>
                    <TextField
                        margin="dense"
                        name="educationCity"
                        label="City"
                        type="text"
                        value={data.educationCity}
                        onChange={onChangeEducationInfo}
                        placeholder="Enter your Grade"
                        className='profileInfoTextField'
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="educationState"
                        label="State"
                        type="text"
                        value={data.educationState}
                        onChange={onChangeEducationInfo}
                        placeholder="Enter your Grade"
                        className='profileInfoTextField'
                        required
                    />
                    <TextField
                        margin="dense"
                        name="grade"
                        label="Grade"
                        type="text"
                        value={data.grade}
                        onChange={onChangeEducationInfo}
                        placeholder="Enter your Grade"
                        className='profileInfoTextField'
                        required
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
export default EducationDialog; 