import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const EmployerSectionThree = ({ open,
    onCloseSection_3,
    organizationCountry,
    onOrganizationInformationChange
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_3}>
                <DialogTitle id="form-dialog-title">Organizational Info</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="legalEntity"
                        label="Legal Entity"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="industry"
                        label="Industry"
                        type="text"
                        placeholder="Ex: Software"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="depatment"
                        label="Department"
                        type="text"
                        placeholder="Ex: IT"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="division"
                        label="Devision"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <FormLabel component="legend"><strong>Organization Address</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="houseNo"
                        label="House/Flat No."
                        type="text"
                        placeholder="Ex: A123"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            value={organizationCountry}
                            name='organizationCountry'
                            onChange={onOrganizationInformationChange}
                        >
                            <MenuItem value='pakistan'>Pakistan</MenuItem>
                            <MenuItem value='usa'>USA</MenuItem>
                            <MenuItem value='uk'>UK</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="city"
                        label="City"
                        type="text"
                        value={organizationCountry === 'pakistan' ? 'Islamabad' : ''}
                        placeholder="Ex: Islamabad"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="province"
                        label="Province/State"
                        value={organizationCountry === 'pakistan' ? "Federal" : ''}
                        type="text"
                        placeholder="Ex: Federal"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="zipCode"
                        label="Zip Code"
                        type="text"
                        placeholder="Ex: 44000"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <TextField
                        margin="dense"
                        name="jobJustification"
                        label="Job Justification"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="positionNumber"
                        label="Position Number"
                        type="number"
                        placeholder="Ex: 123"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="costCenterId"
                        label="Cost Center Id"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="reasonForVacancy"
                        label="Reason For Vacancy"
                        type="text"
                        placeholder="Ex: Any Reason"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="replacementForWhom"
                        label="Replacement For Whom"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="requirementJustification"
                        label="Requirement Justification"
                        type="text"
                        className="profileInfoTextField"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseSection_3} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_3} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionThree; 