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
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Widget from "components/Widget";

const ApplyForJobDialog = ({ open,
    handleClose,
}) => {
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Apply For Position</DialogTitle>
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
                    <br />
                    <Widget styleName="jr-card-profile" >
                        <h6 className="card-title mb-2 mb-md-3" style={{color:'gray'}}>Questionnaire</h6>
                        <hr/>
                    <FormLabel component="legend">Free Text</FormLabel>
                    <p>What is your name ?</p>
                    <TextField
                        margin="dense"
                        id="fieldofstudy"
                        name="applyCandidateName"
                        label="Give your Answer"
                        type="text"
                        fullWidth
                        placeholder="Ex: Answer"
                    />
                    <br/>
                    <hr/>
                    <FormLabel component="legend">Choose Yes or No</FormLabel>
                    <p>Are you applied for the right job ?</p>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="jobType" row>
                            <FormControlLabel
                                value="yes"
                                control={<Radio color="primary" />}
                                label="Yes"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio color="primary" />}
                                label="No"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    <hr/>
                    <FormLabel component="legend">Multiple Chioce</FormLabel>
                    <p>Relationships section of job description defines whom would you ?</p>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="jobType" row>
                            <FormControlLabel
                                value="supervise"
                                control={<Radio color="primary" />}
                                label="Supervise"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="reporter"
                                control={<Radio color="primary" />}
                                label="Reporter"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Worker"
                                control={<Radio color="primary" />}
                                label="Worker"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Developer"
                                control={<Radio color="primary" />}
                                label="Developer"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    </Widget>
                    <Widget styleName="jr-card-profile" >
                    <FormLabel component="legend">EOC</FormLabel>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Race</InputLabel>
                        <Select
                            native
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
                        <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
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
                        <InputLabel htmlFor="age-native-simple">Veteran / Non Veteran</InputLabel>
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
                    </Widget>
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
export default ApplyForJobDialog; 