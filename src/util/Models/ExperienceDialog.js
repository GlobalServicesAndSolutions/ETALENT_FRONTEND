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
import { FormLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const ExperienceDialog = ({ open,
    handleClose,
    onChangeExperienceInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Experience</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="experienceTitle"
                        label="Title"
                        type="text"
                        value={data.experienceTitle}
                        onChange={onChangeExperienceInfo}
                        placeholder="Ex: CCNA"
                        fullWidth
                        required
                    />
                    
                    <TextField
                        margin="dense"
                        name="experienceEmploymentType"
                        label="EmploymentType"
                        type="text"
                        value={data.experienceEmploymentType}
                        onChange={onChangeExperienceInfo}
                        fullWidth
                        placeholder="Employment Type"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="experienceCompany"
                        label="Company"
                        type="text"
                        value={data.experienceCompany}
                        onChange={onChangeExperienceInfo}
                        placeholder="Ex: CCNA"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="experienceIndustry"
                        label="Industry"
                        type="text"
                        value={data.experienceIndustry}
                        onChange={onChangeExperienceInfo}
                        fullWidth
                        placeholder="Ex: Software House/ IT"
                        required
                    />
                    <hr/>
                    <FormLabel component="legend">Location</FormLabel>
                    <FormControl style={{ width: '45%', marginTop: '5px' }}>
                        <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                        <Select
                            native
                            required
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'+1'}>USA</option>
                            <option value={'+92'}>Pakistan</option>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="experienceCity"
                        label="City"
                        type="text"
                        value={data.experienceCity}
                        onChange={onChangeExperienceInfo}
                        className='profileInfoTextField'
                        placeholder="Ex: Islamabad"
                        required
                    />
                    <hr/>
                    <div className='row'>
                        <div style={{ width: '68%' }}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid >
                                    <KeyboardDatePicker
                                        className="educationDatePickerFiled"
                                        margin="normal"
                                        id='experienceStartDate'
                                        label="Start Date"
                                        format="MM/dd/yyyy"
                                        value={data.certificationIssueDate}
                                        name='experienceStartDate'
                                        onChange={(e, date, name) => onChangeExperienceInfo(e, date, 'experienceStartDate')}
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
                                        value={data.experienceEndDate}
                                        name='experienceEndDate'
                                        onChange={(e, date, name) => onChangeExperienceInfo(e, date, 'experienceEndDate')}
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
                                    label="Currently Working"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <TextField
                        margin="dense"
                        name="experienceDescription"
                        label="Description"
                        multiline
                        rows='3'
                        onChange={onChangeExperienceInfo}
                        value={data.experienceDescription}
                        fullWidth
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
export default ExperienceDialog; 