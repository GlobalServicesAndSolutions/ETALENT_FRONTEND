import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const ProjectDialog = ({ open,
    handleClose,
    onChangeProjectInfo,
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
                        name="projectName"
                        label="Project Name"
                        type="text"
                        onChange={onChangeProjectInfo}
                        value={data.projectName}
                        placeholder="Ex: Web App"
                        fullWidth
                        required
                    />
                    <div className='row'>
                        <div style={{ width: '68%' }}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid >
                                    <KeyboardDatePicker
                                        className="educationDatePickerFiled"
                                        margin="normal"
                                        id='projectStartDate'
                                        label="Start Date"
                                        format="MM/dd/yyyy"
                                        value={data.projectStartDate}
                                        name='projectStartDate'
                                        onChange={(e, date, name) => onChangeProjectInfo(e, date, 'projectStartDate')}
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
                                        value={data.projectEndDate}
                                        name='projectEndDate'
                                        onChange={(e, date, name) => onChangeProjectInfo(e, date, 'projectEndDate')}
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
                                    label="Currently working"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <FormControl style={{width:'100%'}}>
                        <InputLabel htmlFor="age-native-simple">Associated With Experience </InputLabel>
                        <Select
                            native
                            className="educationDatePickerFiled"
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Seven Tech'}>Seven Tech</option>
                            <option value={'Vision X'}>Vision X</option>
                        </Select>
                    </FormControl>
                    <FormControl style={{width:'100%'}}>
                        <InputLabel htmlFor="age-native-simple">Associated With Education </InputLabel>
                        <Select
                            native
                            className="educationDatePickerFiled"
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
                    <TextField
                        autoFocus
                        margin="dense"
                        name="projectUrl"
                        label="Project Url"
                        type="text"
                        onChange={onChangeProjectInfo}
                        value={data.projectUrl}
                        placeholder="Ex: www.example.com"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="projectDescription"
                        label="Description"
                        multiline
                        rows='3'
                        onChange={onChangeProjectInfo}
                        value={data.projectDescription}
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
export default ProjectDialog; 