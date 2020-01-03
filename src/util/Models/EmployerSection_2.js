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
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const EmployerSectionTwo = ({ open,
    onCloseSection_2,
    selectedStartDate,
    onStartDateChange,
    selectedEndDate,
    onEndDateChange,
    selectedDeadlineDate,
    onDeadlineDateChange,
    jobStatusvalue,
    onChangeEmployerJobStatus,
    jobFunctionvalue,
    onChangeEmployerJobFunction,
    travelRequiredValue,
    ontravelRequiredValueChange
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_2}>
                <DialogTitle id="form-dialog-title">Job Info</DialogTitle>
                <DialogContent>
                    <div>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="jobCode"
                        label="Job Code"
                        type="text"
                        placeholder="Ex: D4DF"
                        className="profileInfoTextField"
                    />
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container >
                            <KeyboardDatePicker
                                margin="normal"
                                label="Job Start Date"
                                format="MM/dd/yyyy"
                                value={selectedStartDate}
                                onChange={onStartDateChange}
                                className="profileInfoTextField"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </div>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container >
                            <KeyboardDatePicker
                                margin="normal"
                                label="Job End Date"
                                format="MM/dd/yyyy"
                                value={selectedEndDate}
                                onChange={onEndDateChange}
                                className="profileInfoTextField"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <KeyboardDatePicker
                                margin="normal"
                                label="Application Deadline Date"
                                format="MM/dd/yyyy"
                                value={selectedDeadlineDate}
                                onChange={onDeadlineDateChange}
                                className="profileInfoTextField"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField
                        margin="dense"
                        name="jobRole"
                        label="Job Role"
                        type="text"
                        placeholder="Ex: Developer"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="jobLevel"
                        label="Job Level"
                        type="text"
                        placeholder="Ex: Engineer II"
                        className="profileInfoTextField"
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend"><strong>Job Status</strong></FormLabel>
                        <RadioGroup aria-label="position" name="position" value={jobStatusvalue} onChange={onChangeEmployerJobStatus} row>
                            <FormControlLabel
                                value="Regular"
                                control={<Radio color="primary" />}
                                label="Regular"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Contract"
                                control={<Radio color="primary" />}
                                label="Contract"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Internee"
                                control={<Radio color="primary" />}
                                label="Internee"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Part Time"
                                control={<Radio color="primary" />}
                                label="Part Time"
                                component="legend"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"><strong>Job Function</strong></FormLabel>
                        <RadioGroup aria-label="position" name="position" value={jobFunctionvalue} onChange={onChangeEmployerJobFunction} row>
                            <FormControlLabel
                                value="Professional"
                                control={<Radio color="primary" />}
                                label="Professional"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Labour"
                                control={<Radio color="primary" />}
                                label="Labour"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Student"
                                control={<Radio color="primary" />}
                                label="Student"
                                component="legend"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Required Travel</InputLabel>
                        <Select
                            value={travelRequiredValue}
                            onChange={ontravelRequiredValueChange}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="requiredExperience"
                        label="Required Experience"
                        type="text"
                        placeholder="Ex: 5 Year"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="requiredEducation"
                        label="Required Education"
                        type="text"
                        placeholder="Ex: BS"
                        fullWidth
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseSection_2} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_2} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionTwo; 