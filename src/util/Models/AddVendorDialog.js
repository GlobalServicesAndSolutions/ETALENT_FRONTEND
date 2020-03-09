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

const AddVendorDialog = ({ open,
    onCloseAddVendorDialog,
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseAddVendorDialog}>
                <DialogTitle id="form-dialog-title">Add Vendor</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="vendorName"
                        label="Name"
                        type="text"
                        placeholder='Ex: Salman Haider'
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="vendorIndustry"
                        label="Industry"
                        type="text"
                        placeholder='Ex: Software House / Labs'
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="vendorPhone"
                        label="Phone Number"
                        type="text"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="vendorEmail"
                        label="Email"
                        type="email"
                        placeholder='Ex: salmanhaider0006@hotmail.com'
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="vendorWebsiteLink"
                        label="Website Link"
                        type="text"
                        placeholder='Ex: www.example.com'
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="vendorAddress"
                        label="Address"
                        type="text"
                        placeholder='Ex: I-9 Islamabad, Pakistan'
                        className="profileInfoTextField"
                        required
                    />
                    <hr/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Status</FormLabel>
                        <RadioGroup aria-label="position" name="venderStatus"  row 
                        required>
                            <FormControlLabel
                                value="Active"
                                control={<Radio color="primary" />}
                                label="Active"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Inactive"
                                control={<Radio color="primary" />}
                                label="Inactive"
                                labelPlacement="end"
                            />
                            <hr/>
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseAddVendorDialog} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseAddVendorDialog} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default AddVendorDialog; 