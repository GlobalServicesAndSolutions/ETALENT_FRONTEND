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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const EmployerSectionFive = ({ open,
    onCloseSection_5,
    budgetedPositionValue,
    onChangefullTimeSalaryAndBenifits,
    salaryFrequencyValue,
    commissionValue,
    motorVehicleValue,
    accomodationValue,
    relocationPackValue,
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_5}>
                <DialogTitle id="form-dialog-title">Full Time Salary and Benefits Information</DialogTitle>
                <DialogContent>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Is This a Budgeted Position</InputLabel>
                        <Select
                            value={budgetedPositionValue}
                            name='budgetedPositionValue'
                            onChange={onChangefullTimeSalaryAndBenifits}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        autoFocus
                        margin="dense"
                        name="currency"
                        label="Currency"
                        type="text"
                        placeholder="Ex: USD"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="baseSalary"
                        label="Base Salary"
                        type="text"
                        className="profileInfoTextField"
                    />
                    
                    <hr/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"><strong>Salary Frequency</strong></FormLabel>
                        <RadioGroup aria-label="position" name="salaryFrequencyValue" value={salaryFrequencyValue} onChange={onChangefullTimeSalaryAndBenifits} row>
                            <FormControlLabel
                                value="Weekly"
                                control={<Radio color="primary" />}
                                label="Weekly"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="BiWeekly"
                                control={<Radio color="primary" />}
                                label="BiWeekly"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Monthly"
                                control={<Radio color="primary" />}
                                label="Monthly"
                                component="legend"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                   <hr/>
                    <TextField
                        margin="dense"
                        name="employmentType"
                        label="Employment type"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="jobPayGrade"
                        label="Job Pay Grade"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="payType"
                        label="Pay Type"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="targetBonusAmount"
                        label="Target Bonus Amount"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="stokePakage"
                        label="Stock Pakage"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="targetBonusAmount"
                        label="Target Bonus Amount"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Commission</InputLabel>
                        <Select
                            value={commissionValue}
                            name='commissionValue'
                            onChange={onChangefullTimeSalaryAndBenifits}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Motor vehicle</InputLabel>
                        <Select
                            value={motorVehicleValue}
                            name='motorVehicleValue'
                            onChange={onChangefullTimeSalaryAndBenifits}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Accomodation</InputLabel>
                        <Select
                            value={accomodationValue}
                            name='accomodationValue'
                            onChange={onChangefullTimeSalaryAndBenifits}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Relocation Pack</InputLabel>
                        <Select
                            value={relocationPackValue}
                            name='relocationPackValue'
                            onChange={onChangefullTimeSalaryAndBenifits}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="standard-multiline-static"
                        name="comments"
                        label="Comments"
                        multiline
                        rows="4"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseSection_5} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_5} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionFive; 