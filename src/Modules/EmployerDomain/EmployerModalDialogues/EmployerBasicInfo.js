import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const EmployerProfileInfo = ({ open, 
    handleClose,
    employerTypeValue,
    onEmployerInfochange,
    data
}) => {
    return (
        <div>
            <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Employer Basic Info</DialogTitle>
                <DialogContent>
                <FormControl component="fieldset">
                        <FormLabel component="legend"><strong>Employer Type</strong></FormLabel>
                        <RadioGroup aria-label="position" name="employerTypeValue" value={data.employerTypeValue} onChange={onEmployerInfochange} row>
                            <FormControlLabel
                                value="Recruiting"
                                control={<Radio color="primary" />}
                                label="Recruiting"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="BackgroundCheck"
                                control={<Radio color="primary" />}
                                label="Background Check"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Others"
                                control={<Radio color="primary" />}
                                label="Others"
                                component="legend"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                    {employerTypeValue === 'Others' &&
                    <TextField
                        autoFocus
                        margin="dense"
                        name="industry"
                        label="Industry"
                        type="text"
                        value={data.industry}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: Software"
                        required
                        className="profileInfoTextField"
                    />
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="website"
                        label="Web Site link"
                        type="text"
                        value={data.website}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: http://www.google.com"
                        required
                        className="profileInfoTextField"
                    />
                    <hr/>
                    <FormLabel component="legend"><strong>Address</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="employerHouseNo"
                        label="House No."
                        type="text"
                        value={data.employerHouseNo}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: 123A"
                        required
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="employerStreet"
                        label="Street No."
                        type="text"
                        value={data.employerStreet}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: 23"
                        required
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="employerCity"
                        label="City"
                        type="text"
                        value={data.employerCity}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: Islamabad"
                        required
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="employerDistrict"
                        label="District/County"
                        type="text"
                        value={data.employerDistrict}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: Federal"
                        required
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="employerProvince"
                        label="Province State"
                        type="text"
                        value={data.employerProvince}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: Federal"
                        required
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="employerZipCode"
                        label="Po Box/Zip Code"
                        type="text"
                        value={data.employerZipCode}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: 44000"
                        required
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="employerCountry"
                        label="Country"
                        type="text"
                        value={data.employerCountry}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: Pakistan"
                        required
                        className="profileInfoTextField"
                    />
                    <hr/>
                    <FormLabel component="legend"><strong>Contact</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="employerPhoneNo"
                        label="Phone No."
                        type="number"
                        value={data.employerPhoneNo}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: 0510000000"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="employeremail"
                        label="Email"
                        type="email"
                        value={data.employeremail}
                        onChange={onEmployerInfochange}
                        placeholder="Ex: salmanhaider0006@hotmail.com"
                        required
                        className="profileInfoTextField"
                    />
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel>Company Size</InputLabel>
                        <Select
                            value={data.companySize}
                            name='companySize'
                            onChange={onEmployerInfochange}
                        >
                            <MenuItem value='10-50'>10-50</MenuItem>
                            <MenuItem value='51-100'>51-100</MenuItem>
                            <MenuItem value='101-150'>101-150</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="foundedYear"
                        label="Founded Year"
                        type="text"
                        value={data.foundedYear}
                        onChange={onEmployerInfochange}
                        fullWidth
                        placeholder="Ex: 2020"
                        required
                    />
                    <TextField
                        name="speciality"
                        label="Speciality"
                        multiline
                        value={data.speciality}
                        onChange={onEmployerInfochange}
                        rows="5"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerProfileInfo; 