import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

const BasicInfoProfile = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs" >
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
                        name="citizen"
                        label="Country Of Citizenship"
                        type="text"
                        placeholder="Pakistan"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="cnic "
                        label="Cnic No."
                        type="text"
                        placeholder="00000-00000000-0"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="passport"
                        label="Passport No."
                        type="text"
                        placeholder=""
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="text"
                        placeholder="salmanhaider0006@hotmail.com"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="fax"
                        label="Fax No."
                        type="text"
                        placeholder="123456789"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone (Residence/Office)"
                        type="text"
                        placeholder="123456789"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="mobile"
                        label="Mobail no."
                        type="text"
                        placeholder="0300-0000000"
                        className="profileInfoTextField"
                    />
                    <TextField
                        id="standard-multiline-static"
                        name="address"
                        label="Address"
                        multiline
                        rows='3'
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        label="City"
                        type="text"
                        placeholder="Islamabad"
                        className="profileInfoTextFieldInRow"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="state"
                        label="State/Province"
                        type="text"
                        placeholder="Federal"
                        className="profileInfoTextFieldInRow"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="country"
                        label="Country"
                        type="text"
                        placeholder="Pakistan"
                        className="profileInfoTextFieldInRow"
                    />
                    <TextField
                        id="standard-multiline-static"
                        name="description"
                        label="Description"
                        multiline
                        rows='3'
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="available"
                        label="Are You Available"
                        type="text"
                        placeholder="Yes/No"
                        className="profileInfoTextFieldInRow"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/mm/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Available From"
                                value="29/12/2019"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            </Grid>
                            </MuiPickersUtilsProvider>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                                margin="dense"
                                name="country"
                                label="Country"
                                type="text"
                                placeholder="Pakistan"
                                className="profileInfoTextFieldInRow"
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
export default BasicInfoProfile; 