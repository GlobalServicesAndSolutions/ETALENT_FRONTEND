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
    onSectionValuesChange,
    onSaveSectionFive,
    data
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_5}>
                <DialogTitle id="form-dialog-title">Full Time Salary and Benefits Information</DialogTitle>
                <DialogContent>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Is This a Budgeted Position</InputLabel>
                        <Select
                            value={data.budgetedPositionValue}
                            name='budgetedPositionValue'
                            onChange={onSectionValuesChange}
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
                        value={data.currency}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: USD"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="baseSalary"
                        label="Base Salary"
                        type="text"
                        value={data.baseSalary}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                    />
                    
                    <hr/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"><strong>Salary Frequency</strong></FormLabel>
                        <RadioGroup aria-label="position" name="salaryFrequencyValue" value={data.salaryFrequencyValue} onChange={onSectionValuesChange} row>
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
                        value={data.employmentType}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="jobPayGrade"
                        label="Job Pay Grade"
                        type="text"
                        value={data.jobPayGrade}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="payType"
                        label="Pay Type"
                        type="text"
                        value={data.payType}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="targetBonusAmount"
                        label="Target Bonus Amount"
                        type="text"
                        value={data.targetBonusAmount}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="stokePakage"
                        label="Stock Pakage"
                        type="text"
                        value={data.stokePakage}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Commission</InputLabel>
                        <Select
                            value={data.commissionValue}
                            name='commissionValue'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Motor vehicle</InputLabel>
                        <Select
                            value={data.motorVehicleValue}
                            name='motorVehicleValue'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Accomodation</InputLabel>
                        <Select
                            value={data.accomodationValue}
                            name='accomodationValue'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Relocation Pack</InputLabel>
                        <Select
                            value={data.relocationPackValue}
                            name='relocationPackValue'
                            onChange={onSectionValuesChange}
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
                        value={data.comments}
                        onChange={onSectionValuesChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSaveSectionFive} color="primary">
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