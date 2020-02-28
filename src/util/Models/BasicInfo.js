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
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const BasicInfoProfile = ({ open,
    handleClose,
    onChangeEmployeeWorkCountry,
    employeeWorkCountry
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">My Profile</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstName"
                        label="First Name"
                        type="text"
                        placeholder="Ex: Salman"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        placeholder="Ex: Haider"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="dteOfBirth"
                        label="Date Of Birth"
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="mobile"
                        label="Phone no."
                        type="text"
                        placeholder="0300-0000000"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Profile Level</FormLabel>
                        <RadioGroup aria-label="position" name="jobType" row>
                            <FormControlLabel
                                value="student"
                                control={<Radio color="primary" />}
                                label="Student"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="WhiteColor"
                                control={<Radio color="primary" />}
                                label="White Color"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="BlueColor"
                                control={<Radio color="primary" />}
                                label="Blue Color"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    <hr />
                    <Tooltip title='Country of Citizenship' placement='top'>
                        <TextField
                            margin="dense"
                            name="residenceCountry "
                            label="Residence Country"
                            type="text"
                            placeholder="Country of citizenship"
                            className="profileInfoTextField"
                        />
                    </Tooltip>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel htmlFor="age-native-simple">Work Country</InputLabel>
                        <Select
                            native
                            onChange={onChangeEmployeeWorkCountry}
                            value={employeeWorkCountry}
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Pakistan'}>Pakistan</option>
                            <option value={'USA'}>USA</option>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="employeeCnic"
                        label="CNIC"
                        type="text"
                        placeholder="xxxxx-xxxxxxx-x"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="employeePassportNumber"
                        label="Passport Number"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="employeeLastDigitsOfSsn"
                        label="Last four Digit of SSN"
                        type="text"
                        placeholder="6789"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Work Authorization</FormLabel>
                        <RadioGroup aria-label="position" name="jobType" row>
                            <FormControlLabel
                                value="H1B"
                                control={<Radio color="primary" />}
                                label="H1B"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="GC"
                                control={<Radio color="primary" />}
                                label="GC"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="TN"
                                control={<Radio color="primary" />}
                                label="TN"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    <hr />
                    <FormLabel component="legend">EOC section</FormLabel>
                    <h6>Personal Information</h6>
                    <p>Certain Employes are subject to nondiscrimination and affirmative action record keeping and reporting
                        requirements which require such employers to invite applicant to provide this information. Prividing
                        this information is strickly volunatry - you will not be penalized or subjected to adverse treatment
                        if you choose not to provide this information. if you choose not to provide this information, simply
                        select "Decline to Designated".
                    </p>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Choose One</InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Decline to Designated'}>Decline to Designated</option>
                            <option value={'White'}>White</option>
                            <option value={'Black / African American'}>Black / African American</option>
                            <option value={'Asian / Pacific Islander'}>Asian / Pacific Islander</option>
                            <option value={'American Indian / Alaska Native'}>American Indian / Alaska Native</option>
                            <option value={'Hispanic'}>Hispanic</option>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Choose One</InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Decline to Designated'}>Decline to Designated</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Choose One</InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Decline to Designated'}>Decline to Designated</option>
                            <option value={'I am not a Veteran'}>I am not a Veteran</option>
                            <option value={'Special Disabled Veteran'}>Special Disabled Veteran</option>
                            <option value={'Vietnam Era Veteran'}>Vietnam Era Veteran</option>
                            <option value={'Recently Seperated Veteran'}>Recently Seperated Veteran</option>
                            <option value={'Other Protected Veteran'}>Other Protected Veteran</option>
                        </Select>
                    </FormControl>
                    <hr />
                    <InputLabel htmlFor="age-native-simple">Upload your Resume</InputLabel>
                    <h6>Profile Upload</h6>
                    <h6>Import profile data</h6>
                    <p>Imported Data will update your profile</p>
                    <p>Connect with: </p>
                    <LinkedInIcon fontSize='large' color='primary' style={{cursor:'pointer'}}/>
                    <FacebookIcon fontSize='large' color='primary' style={{cursor:'pointer'}}/>
                    <br/>
                    <p>Or upload a Resume</p>
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
                    <p>If you want to submit information manually then you submit above information</p>
                    </label>
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
export default BasicInfoProfile; 