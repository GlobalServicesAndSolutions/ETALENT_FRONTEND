import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';

const LisenceAndCertification = ({ open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add licenses {"&"} certifications</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="Ex: CCNA"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="organization"
                        label="Issuing Organization"
                        type="text"
                        fullWidth
                        placeholder="Ex: Cisco"
                        required
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Issue Month"
                        value="1"
                        fullWidth
                    >
                        <MenuItem key={1} >
                            1
                        </MenuItem>
                    </TextField>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Issue Year"
                        value="1"
                        fullWidth
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <br></br>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Expire Month"
                        value="1"
                        fullWidth
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Expire Year"
                        value="1"
                        fullWidth
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <TextField
                        margin="dense"
                        id="credentialId"
                        label="Credential ID"
                        type="text"
                        fullWidth
                        placeholder="Enter Credential ID"
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Credential URL"
                        fullWidth
                        placeholder="Enter Credential URL"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save And Add Another
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default LisenceAndCertification; 