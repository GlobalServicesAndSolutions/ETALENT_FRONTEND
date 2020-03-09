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
    onSectionValuesChange,
    onSaveSectionThree,
    data
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
                        value={data.legalEntity}
                        onChange={onSectionValuesChange}
                        type="text"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="industry"
                        label="Industry"
                        type="text"
                        value={data.industry}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Software"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="depatment"
                        label="Department"
                        type="text"
                        value={data.depatment}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: IT"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="division"
                        label="Devision"
                        type="text"
                        value={data.division}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                        required
                    />
                    <hr />
                    <FormLabel component="legend"><strong>Organization Address</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="organizationHouseNo"
                        label="House/Flat No."
                        type="text"
                        value={data.organizationHouseNo}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: A123"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            value={data.organizationCountry}
                            name='organizationCountry'
                            onChange={onSectionValuesChange}
                            required
                        >
                            <MenuItem value='pakistan'>Pakistan</MenuItem>
                            <MenuItem value='usa'>USA</MenuItem>
                            <MenuItem value='uk'>UK</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="organizationCity"
                        label="City"
                        type="text"
                        value={data.organizationCity}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Islamabad"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="organizationProvince"
                        label="Province/State"
                        value={data.organizationProvince}
                        onChange={onSectionValuesChange}
                        type="text"
                        placeholder="Ex: Federal"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="organizationZipCode"
                        label="Zip Code"
                        type="text"
                        value={data.organizationZipCode}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: 44000"
                        className="profileInfoTextField"
                        required
                    />
                    <hr />
                    <TextField
                        margin="dense"
                        name="jobJustification"
                        label="Job Justification"
                        type="text"
                        value={data.jobJustification}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="positionNumber"
                        label="Position Number"
                        type="number"
                        value={data.positionNumber}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: 123"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="costCenterId"
                        label="Cost Center Id"
                        type="text"
                        value={data.costCenterId}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="reasonForVacancy"
                        label="Reason For Vacancy"
                        type="text"
                        value={data.reasonForVacancy}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Any Reason"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="replacementForWhom"
                        label="Replacement For Whom"
                        type="text"
                        value={data.replacementForWhom}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="requirementJustification"
                        label="Requirement Justification"
                        type="text"
                        value={data.requirementJustification}
                        onChange={onSectionValuesChange}
                        className="profileInfoTextField"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSaveSectionThree} color="primary">
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